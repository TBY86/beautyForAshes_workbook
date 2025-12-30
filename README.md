# beautyForAshes_workbook
# Beauty for Ashes - Interactive Prayer Journal

## Overview

This repository contains an interactive web-based version of the "Beauty for Ashes" prayer journal, inspired by Isaiah 61:3. It transforms the original PDF workbook into a dynamic HTML application where users can reflect, pray, and journal directly in their browser on any device (phone, tablet, or computer). The design follows separation of concerns with HTML for structure, CSS for styling, and JavaScript for interactivity.

The journal guides users through a spiritual process of exchanging "ashes" (pain, bitterness, etc.) for God's beauty, joy, and praise. Entries are saved locally in the browser for privacy and persistence.

## Features

- **Responsive Design**: Adapts to any screen size using dynamic sizing and media queries.
- **Interactive Journaling**: Fillable text areas for "I Prayed," "God Said," and "My Experience" sections, with checkbox completion markers.
- **Navigation Menu**: Buttons to toggle visibility of each section (e.g., "Identify Your Ashes," "Acknowledgment," etc.), ensuring only one content section is visible at a time while keeping the "How to Use" intro always accessible.
- **Local Storage**: User entries and checkboxes are automatically saved and loaded using browser localStorage.
- **Animations and Effects**: Hover shadows on journal sections and subtle animations on completion checkboxes.
- **Themed Styling**: Green accents mirroring the PDF's aesthetic, with justified text for readability.

## Files

- `index.html`: Main HTML structure and content.
- `styles.css`: CSS for layout, colors, and responsive design.
- `script.js`: JavaScript for interactivity, storage, and event handling.

## Setup and Usage

1. Clone or download the repository.
2. Open `index.html` in any modern web browser (e.g., Chrome, Firefox, Safari).
3. Read the "How to Use This Journal" section at the top.
4. Click navigation buttons to access each section.
5. Fill in the text areas and checkboxes—your progress saves automatically.
6. To reset, clear your browser's localStorage for the site.

No installation or dependencies required; it's pure vanilla HTML/CSS/JS.

## Compatibility

Tested on desktop and mobile browsers. Works offline after initial load.

## Contributing

This is a personal spiritual tool, but feel free to fork for non-commercial adaptations. Pull requests welcome for bug fixes or accessibility improvements.

## License

This work is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-nc-sa/4.0/).

You are free to:
- Share — copy and redistribute the material in any medium or format
- Adapt — remix, transform, and build upon the material

Under the following terms:
- Attribution — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
- NonCommercial — You may not use the material for commercial purposes.
- ShareAlike — If you remix, transform, or build upon the material, you must distribute your contributions under the same license as the original.

Copyright © 2025 T. Griffin of Gleaning The Scriptures.
