---
id: TASK-001
title: "Implement CSS Theme Variables"
status: complete
parent: REQ-001
created: 2026-05-04
updated: 2026-05-04
dependencies: []
---

## Description

Define the CSS variables for both light mode and dark mode. Light mode will now be the default, and dark mode will be scoped under the `.dark` CSS class. 

## Files to Create/Modify

- `src/index.css` — Extract existing hardcoded dark theme colors into `.dark` class variables. Define light theme equivalents in the `:root` block. Apply smooth transitions to background and text colors.

## Acceptance Criteria

- [ ] `:root` defines default light mode color variables (e.g., `--bg-color: #f8fafc; --text-color: #0f172a;`).
- [ ] `.dark` class defines dark mode color overrides (e.g., `--bg-color: #0f172a; --text-color: #e2e8f0;`).
- [ ] `body` has a CSS `transition: background-color 0.3s, color 0.3s;` applied.
- [ ] Existing element backgrounds and borders are updated to use CSS variables if they were hardcoded to dark colors.

## Technical Notes

- Keep the specific group colors (reactive, retrieval, etc.) the same across themes if possible, or adjust opacity for contrast.
- Ensure the hero gradient and cards remain readable in the light theme.
