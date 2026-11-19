# makes figures 4-6 from data/slugs.csv (cleaned class data)
# cleaning done by hand: removed units, blanked N/A counts and impossible sizes,
# dropped rows with no slug. same slug entered twice / shared plates get averaged below.
# run: python make_figure.py
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
from matplotlib.ticker import FixedLocator, NullLocator
from scipy import stats

BANANA, OTHER = "#2a78d6", "#eb6834"
INK, MUTED, GRID = "#14303a", "#4d6670", "#dde6e6"
plt.rcParams.update({"font.family": "DejaVu Sans", "font.size": 12, "text.color": INK,
                     "axes.labelcolor": INK, "xtick.color": MUTED, "ytick.color": MUTED,
                     "axes.edgecolor": MUTED})

raw = pd.read_csv("data/slugs.csv", dtype={"sec": str, "id": str})
raw["kw"], raw["kl"] = raw.wt.round(1), raw.len.round(1)
slugs = (raw.groupby(["genus", "kw", "kl"], dropna=False)
            .agg(wt=("wt", "first"), len=("len", "first"), ab=("ab", "mean"))
            .reset_index())
slugs = slugs[slugs.ab.notna() & slugs.wt.notna()].copy()
slugs["banana"] = slugs.genus == "Ariolimax"
slugs["has"] = slugs.ab > 0

# numbers used on the site
def rho(df):
    r, p = stats.spearmanr(df.wt, df.ab)
    return f"rho={r:.2f}, p={p:.3f}, n={len(df)}"
ban = slugs[slugs.banana]
print("all slugs:", rho(slugs), "| banana only:", rho(ban), "| other:", rho(slugs[~slugs.banana]))
print(f"slugs with nematodes: {slugs.has.sum()}/{len(slugs)}; banana {ban.has.sum()}/{len(ban)}")
print("count range:", slugs.ab.min(), "-", slugs.ab.max(), "| median:", slugs.ab.median())
print("median weight:", slugs.wt.median(), "| banana median weight:", ban.wt.median())

# figure 4
fig, ax = plt.subplots(figsize=(8, 5), dpi=200)
for is_ban, color, label in [(False, OTHER, "Other slugs"), (True, BANANA, "Pacific banana slugs")]:
    d = slugs[slugs.banana == is_ban]
    ax.scatter(d.wt, d.ab, s=46, color=color, alpha=0.85, edgecolor="white", linewidth=1,
               label=f"{label} (n = {len(d)})", zorder=3)
ax.set_xscale("log")
ax.set_yscale("symlog", linthresh=1)
ax.xaxis.set_major_locator(FixedLocator([0.1, 1, 10, 50]))
ax.xaxis.set_minor_locator(NullLocator())
ax.set_xticklabels(["0.1", "1", "10", "50"])
ax.yaxis.set_major_locator(FixedLocator([0, 1, 10, 100, 1000]))
ax.yaxis.set_minor_locator(NullLocator())
ax.set_yticklabels(["0", "1", "10", "100", "1,000"])
ax.set_ylim(-0.3, 5000)
ax.set_xlabel("Slug weight (grams)")
ax.set_ylabel("Nematodes on the plate")
ax.grid(True, color=GRID, linewidth=0.8, zorder=0)
for s in ("top", "right"):
    ax.spines[s].set_visible(False)
ax.legend(frameon=False, loc="upper left", fontsize=11)
fig.tight_layout()
fig.savefig("public/images/results-scatterplot.png", facecolor="white")
plt.close(fig)

# figure 5
def share_by_third(df):
    bins = pd.qcut(df.wt, 3, labels=["Small", "Medium", "Large"])
    g = df.groupby(bins, observed=True).agg(pct=("has", "mean"), n=("has", "size"),
                                            lo=("wt", "min"), hi=("wt", "max"))
    g["pct"] *= 100
    return g

fig, axes = plt.subplots(1, 2, figsize=(9, 4.4), dpi=200, sharey=True)
for ax, df, color, title in [(axes[0], slugs, OTHER, "All slugs"),
                             (axes[1], ban, BANANA, "Pacific banana slugs only")]:
    g = share_by_third(df)
    x = np.arange(len(g))
    ax.bar(x, g.pct, width=0.62, color=color, zorder=3)
    for i, (pct, lo, hi) in enumerate(zip(g.pct, g.lo, g.hi)):
        ax.text(i, pct + 2, f"{pct:.0f}%", ha="center", va="bottom", fontsize=12, color=INK)
    ax.set_xticks(x, [f"{name}\n{lo:.1f}-{hi:.0f} g" for name, lo, hi in zip(g.index, g.lo, g.hi)],
                  fontsize=10.5)
    ax.set_title(f"{title} (n = {len(df)})", fontsize=12.5, color=INK, loc="left")
    ax.set_ylim(0, 100)
    ax.grid(True, axis="y", color=GRID, linewidth=0.8, zorder=0)
    for s in ("top", "right"):
        ax.spines[s].set_visible(False)
axes[0].set_ylabel("Slugs carrying nematodes (%)")
fig.tight_layout()
fig.savefig("public/images/results-size-groups.png", facecolor="white")
plt.close(fig)

# figure 6 (only genera with 9+ slugs)
names = {"Ariolimax": "Pacific banana slug\n(Ariolimax)", "Arion": "Roundback slugs\n(Arion)",
         "Limax": "Keeled slugs\n(Limax)", "Deroceras": "Field slugs\n(Deroceras)"}
g = (slugs.groupby("genus").agg(n=("has", "size"), pct=("has", "mean"), wt=("wt", "median"))
          .query("n >= 9").sort_values("pct"))
g["pct"] *= 100
print(g.round(2))
fig, ax = plt.subplots(figsize=(8, 3.8), dpi=200)
y = np.arange(len(g))
ax.barh(y, g.pct, height=0.6, color=[BANANA if k == "Ariolimax" else OTHER for k in g.index], zorder=3)
for i, (pct, n, wt) in enumerate(zip(g.pct, g.n, g.wt)):
    ax.text(pct + 1.5, i, f"{pct:.0f}%  ({n} slugs, typical weight {wt:.1f} g)",
            va="center", fontsize=10.5, color=INK)
ax.set_yticks(y, [names[k] for k in g.index], fontsize=10.5)
ax.set_xlim(0, 120)
ax.set_xticks([0, 25, 50, 75, 100], ["0%", "25%", "50%", "75%", "100%"])
ax.set_xlabel("Slugs carrying nematodes (%)")
ax.grid(True, axis="x", color=GRID, linewidth=0.8, zorder=0)
for s in ("top", "right"):
    ax.spines[s].set_visible(False)
fig.tight_layout()
fig.savefig("public/images/conclusion-genus.png", facecolor="white")
plt.close(fig)
print("Saved 3 figures to public/images/")
