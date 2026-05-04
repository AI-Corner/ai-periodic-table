---
id: TASK-002
title: "Create Theme Toggle Component and Logic"
status: complete
parent: REQ-001
created: 2026-05-04
updated: 2026-05-04
dependencies: ["TASK-001"]
---

## Description

Implement the React logic to toggle themes, persist the choice to `localStorage`, and update the UI with a toggle button in the header.

## Files to Create/Modify

- `src/App.jsx` — Add `useState` for the theme, `useEffect` to sync the theme with `localStorage` and `document.body.classList`, and render a toggle button in the header.

## Acceptance Criteria

- [ ] A theme state is initialized from `localStorage.getItem('theme')` or defaults to `'light'`.
- [ ] A `useEffect` hook adds/removes the `.dark` class from `document.body` whenever the theme state changes.
- [ ] A button (e.g., ☀️/🌙) is rendered in the `<header>` element.
- [ ] Clicking the button toggles the theme state and saves the new value to `localStorage`.

## Technical Notes

- Make sure to place the toggle button cleanly in the header, potentially using `display: flex` and `justifyContent: space-between` on the header.
- Use simple emojis or text for the toggle button to avoid adding external icon dependencies for now.
