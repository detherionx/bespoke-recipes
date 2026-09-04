# Lebensmittelkunde schema

The Markdown files in [`_lebensmittel`](../_lebensmittel/) are the source of truth for household food-storage guidance. Human-facing prose may be nuanced; the structured values should stay predictable so an agent can compare a shopping basket without scraping prose.

## Required identity and display fields

- `layout`: always `food`.
- `title`: human-facing German name.
- `food_id`: stable lowercase identifier used in relationships. Do not silently rename it.
- `where_text`, `where_short`, `packaging_guidance`, `packaging_short`: concise German display text. These are not machine enums.
- `problem_signs`: visible quality or spoilage cues.
- `why`: short human explanation where a separation rule needs context.
- `notes`: optional practical qualifications.

## Structured fields

### `storage_zone`

Primary household zone. Current enum:

- `fridge_vegetable_drawer`
- `room_temperature`
- `cool_dark_ventilated`
- `cool_dry_ventilated`

The primary zone does not imply that every item in that zone may touch or share a container. Always evaluate `keep_away_from` too.

### `storage_temperature`

Broad temperature intent, not a thermometer guarantee:

- `refrigerated`
- `room_temperature`
- `cool`

### `packaging`

Primary packaging behavior:

- `original_wrap_or_protected`
- `protected_ventilated`
- `breathable_dark`
- `loose_ventilated`
- `ventilated_fly_proof`

Never interpret `protected` as automatically airtight. The human-facing packaging guidance supplies the necessary nuance.

### `ethylene.produces`

Boolean. `true` marks a meaningful household ethylene producer. It does not mean the food is hazardous or must be isolated from everything.

### `ethylene.sensitivity`

Enum: `low`, `medium`, `high`, or `unknown`. Use conservatively. A high value normally warrants explicit producer IDs in `keep_away_from`.

### `keep_away_from`

List of stable `food_id` values representing important storage conflicts. Examples include the symmetric `kartoffel`/`zwiebel` conflict and ethylene-sensitive produce versus `apfel`, `banane`, `birne`, and `tomate_reif`.

### `compatible_with`

Optional list of stable `food_id` values for practical co-storage where guidance is sufficiently established. Omission means “not documented,” not “incompatible.” Same `storage_zone` alone is never proof of compatibility.

### `fruit_fly_risk`

Optional conservative enum: `low`, `medium`, or `high`. Ripeness and damage can raise the real-world risk; the value describes typical household relevance, not spontaneous origin of flies.

### `typical_storage`

Structured quality window:

```yaml
typical_storage:
  min_days: 5
  max_days: 7
  display: "ca. 5–7 Tage"
```

`min_days` and `max_days` are optional when a responsible numeric range is not useful. `display` is required and should state important conditions. These are approximate quality periods, not safety guarantees.

### `wash_before_storage`

Boolean where meaningful. `false` means wash shortly before use rather than adding moisture before storage.

## Future-compatible fields

The schema may later add `use_first_priority`, `freezable`, `freezing_method`, `season_de`, `ripeness_signs`, `shopping_selection`, and `leftover_uses`. Do not populate them inconsistently or infer them from unrelated fields.

## Data rules

- Relationship fields contain IDs, never prose names.
- Use only documented enum values.
- Do not add a relationship merely because two foods share a storage zone.
- Keep exceptions in `notes` or human prose rather than multiplying enum values.
- Cite authoritative guidance in the page body or the shared quick-reference source list when a rule is not obvious.
