# BUILDIFY AI

Browser-based prototype for prompt-assisted and reference-image-assisted building blockouts, with Roblox Luau export.

## Features
- Natural-language prompt input with keyword-based primitive generation.
- Six reference image slots (front, back, left, right, top, bottom).
- Interactive Three.js 3D preview (rotate and zoom).
- Adjustable draft dimensions.
- Roblox Luau `Part` exporter.
- Local feedback scoring: Critical = 4×, Satisfied = 10×.
- No backend and no API key.

## Run
Open `index.html` in a modern browser. Three.js is loaded from a CDN, so internet is required for the 3D viewport. The rest of the interface is local.

## Important limitations
This is an MVP blockout, not a trained AI model. Prompt generation uses transparent keyword rules. Uploaded images are accepted as references but are **not yet processed into accurate 3D geometry**. Feedback scores are stored in browser `localStorage`; they do not update neural-network weights. Real learning requires a dataset, model/training pipeline, and backend.

## Project structure
- `src/js/reconstruction.js`: prompt heuristics and reference placeholder.
- `src/js/feedback-system.js`: 4× / 10× local scoring.
- `src/js/luau-exporter.js`: Roblox Luau output.
- `src/js/app.js`: UI and Three.js preview.
