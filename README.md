# ASH-AI

**AI-Powered Opportunities for Papua New Guineans**

Turn What You Have Into Opportunity.
Discover. Create. Connect. Grow.

ARIA SME HUB helps unemployed people, young people, aspiring entrepreneurs, farmers, fishermen, craftspeople, and anyone with skills or resources discover income-generating business opportunities.

Created by **JojoAction**.

## Project structure

```
ARIA-SME-HUB/
├── index.html   Page structure and all screens
├── style.css    Styling (light blue background, gold boxes, black text)
├── script.js    Navigation and interface behaviour
└── README.md    This file
```

## How to run

1. Keep all four files in the same folder.
2. Double-click `index.html` to open it in a browser (Chrome or Firefox on Android, Safari on iPhone).
3. Or upload the folder to any free static host (for example GitHub Pages or Netlify) to share a link.

No installation, build step, or internet connection is needed to run Phase 1.

## Phase 1 status

Phase 1 covers the homepage, navigation and interface only.

### Working

- Homepage with ARIA SME HUB branding and the six main buttons
- 📷 SCAN WITH ARIA submenu with TAKE PHOTO and CHOOSE IMAGE
- TAKE PHOTO shows: "Camera feature not yet connected. Use Choose Image instead."
- CHOOSE IMAGE opens the phone's file picker (images only)
- Selected image is displayed as a preview, with the message "Image preview loaded. AI image analysis is not yet connected."
- Non-image files, cancelled selections and unreadable images show a clear message
- 💬 CHAT WITH ARIA: message area, text input, SEND and CLEAR buttons
- Chat shows "ARIA AI backend is not yet connected..." (no fake AI replies)
- 🎤 TALK WITH ARIA, 💡 FIND A BUSINESS IDEA, 🛒 FIND MARKETS and 🤝 FIND SUPPORT show their placeholder messages
- Back buttons return to the homepage from every screen

### Not yet connected (planned for later phases)

- Camera capture (TAKE PHOTO)
- AI image identification and business ideas from images
- Voice input
- AI chat responses
- Business idea tool, market discovery and support directory

## Design rules

- Mobile-first, with large touch targets and readable fonts
- Light blue background, gold feature boxes, black text
- Green for success, red for warnings, white cards
- No black backgrounds, no heavy animations
- Text labels on every button, not icons alone

## Next steps

Phase 2 will connect the Scan feature to AI image identification. It has not been started.
