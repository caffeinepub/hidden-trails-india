# Specification

## Summary
**Goal:** Add a single canonical dataset for 50 hidden-gem India destinations and render complete per-destination details consistently across Home, Destinations listing, and Destination detail pages.

**Planned changes:**
- Create/replace a single frontend destinations dataset containing exactly 50 destinations, each with: slug, name, state/region, Location, Why it’s special (significance), How to reach, Activities, Best time, and a Travel plan idea (all in English).
- Update the /destinations listing page to source from the canonical dataset, show all 50 by default, and keep search/filter working across name, state/region, and significance/short description; ensure budget tabs don’t break (use a sensible default label when not explicitly provided).
- Update the /destinations/$slug detail page to load by route slug and render all required detail sections; add a user-friendly not-found state for unknown slugs with a link back to /destinations.
- Store and display provided external image URLs for destinations that have them; use existing local fallback images for the rest, and ensure all destination images continue using the existing SafeImage fallback behavior.
- Update the Home page featured destinations section to select featured items from the same canonical dataset (no separate hardcoded arrays) and ensure featured links resolve to valid /destinations/$slug routes.

**User-visible outcome:** Users can browse a complete list of 50 offbeat destinations, search/filter them, open any destination detail page to view full structured travel information, and see destination images (external where provided, otherwise local fallbacks) without broken-image issues.
