# Copilot instructions

## Project shape

- This is a static site served from the repository root. `index.html` is the page shell; keep its relative asset URLs (`css/`, `js/`, `img/`, and `favicons/`) valid from that root.
- The main view is a full-viewport iframe loading the deployed `dedsec-screen-mockup` GitHub Pages project. The sidebar overlays it. Project/game links use `target="k_iframe"` to replace that iframe's contents; the GitHub profile link opens a separate tab. The framed projects are external and are not implemented in this repository.
- Sidebar interactions are split across files: `index.html` sets the `has_js` and touch-detection classes with Modernizr and handles touch-logo clicks; `css/kellycode.css` styles the sidebar, visibility, and touch/desktop variants; `js/kellycode_utils.js` updates body orientation classes on load, resize, and orientation change. Keep these class names and selectors in sync when changing the behavior.
- jQuery and Modernizr are checked-in local vendor scripts under `js/vendor/`. Site-specific JavaScript belongs in `js/kellycode_utils.js` or the page's existing inline handlers, rather than in vendor files.

## Build, test, and lint

- There is no package manifest or project-defined build, test, or lint command in the current checkout, and no automated test suite or single-test command.
- For a manual browser smoke check, serve the repository root as a static site and verify the iframe loads, desktop hover and touch-logo sidebar behavior work, and resizing/orientation changes update the page as expected. The iframe's content requires network access.
