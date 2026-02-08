# Specification

## Summary
**Goal:** Fix India macro-region selection so each region shows its own destinations, and expand the destinations dataset with Pulga-style offbeat destinations across all regions.

**Planned changes:**
- Correct the region click/selection flow so North/South/East/West/Northeast filters the destinations list to the selected macro-region (no North-only defaulting).
- Add a consistent macro-region identifier to the shared destinations data and use it for deterministic region-aware filtering.
- Add new offbeat destinations for South, East, West, and Northeast (and ensure North also has multiple entries), each with full Pulga-style detail fields used by the destination detail page.
- Update region UI elements (e.g., tooltip counts) to compute destination counts from the dataset so they stay in sync automatically.

**User-visible outcome:** Clicking any India region shows only destinations for that region, destination counts match what’s available per region, and every destination opens a complete Pulga-style detail page with its own unique content.
