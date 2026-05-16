# Project Instructions (GEMINI.md)

This file provides architectural guidance, conventions, and workflows for AI agents and developers working on this repository.

## Language Standards
- **Primary Language:** All code, comments, documentation, and commit messages MUST be in **English**.
- **Polish Content:** Avoid Polish comments or documentation within the codebase.

## Technical Architecture
- **Build System:** The project uses **Gulp 4** for task automation (minification, SCSS compilation, bundling).
- **Frontend:** Vanilla JavaScript/jQuery with SCSS. Avoid introducing heavy frameworks unless requested.
- **CI/CD:** GitHub Actions (defined in `.github/workflows/deploy.yml`) handles building and deployment to GitHub Pages.
- **Testing:** **Cypress** is used for end-to-end testing. Always run `npm run test` before proposing changes.
    - Note: Retries are enabled in `cypress.json` to handle potential flakiness in CI environments (e.g., scroll-based animations).

## Development Workflow
1.  **Source vs Dist:** Edit files in `src/`. Do NOT edit files in `dist/` directly, as they are overwritten by Gulp.
2.  **Gulp Build:** Run `npx gulp build` to generate the production-ready assets.
3.  **Local Preview:** Use `npx gulp serve` for a local development server with live-reloading.
4.  **Dependencies:** Use `npm` for package management.

## Best Practices
- **Performance:** Ensure images are optimized via Gulp's `img` task.
- **Accessibility:** Maintain high ARIA standards and semantic HTML.
- **Responsive Design:** Ensure changes are tested for mobile responsiveness (using Cypress `mobile_spec.js`).
- **Clean Code:** Follow established naming conventions (kebab-case for CSS classes, camelCase for JS variables).
