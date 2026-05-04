# AI Periodic Table — Conventions

*Navigation: [Project Overview](project-overview.md) | [Architecture](architecture.md) | [Taxonomy](taxonomy.md)*

## File Organization
- `src/` — React components, static data, and styling
- `public/` — Static assets (images, fonts)
- `dist/` — Production build output

## Naming
- Components: PascalCase (e.g., `PeriodicTable.jsx`)
- Variables/Functions: camelCase
- CSS Classes: kebab-case or BEM-like conventions if used

## Testing
- Currently no explicit test framework is configured, but manual testing is expected across interactive states.

## Error Handling
- React Error Boundaries (if implemented) to prevent whole-page crashes on data rendering errors.

## Git Conventions
- Branches: `feature/<feature-name>`, `bugfix/<bug-name>`
- PRs: Clear descriptions required, linked to issues.
