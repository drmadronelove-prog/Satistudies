# Sati Certificate Program Dashboard

Static site (HTML/CSS/JS, no build step). Deployed via Netlify from the
repository root `netlify.toml`, which publishes this folder.

- Password gate: see `auth.js` (instructions for changing the password are
  at the top of that file).
- Announcements: edit `announcements.js` and add a new object to the top of
  the array.

## Embedding the dashboard in an iframe

The site can be embedded in any page (Squarespace, Google Sites, Canvas,
WordPress, etc.). Use the `?embed=1` URL parameter to hide the dashboard's
own header and footer so it blends into the host page:

```html
<iframe
  src="https://YOUR-SITE.netlify.app/?embed=1"
  title="Sati Certificate Program Dashboard"
  style="width: 100%; height: 1400px; border: 0;"
  loading="lazy">
</iframe>
```

Notes:

- Replace `YOUR-SITE.netlify.app` with the real Netlify (or custom) domain.
- Omit `?embed=1` if you want the teal header and footer to show inside the
  frame.
- The `height` is fixed because iframes cannot size to their content.
  1400px fits the full page on desktop; alternatively use
  `height: 100vh` for a full-window frame, or accept an inner scrollbar
  with a smaller height.
- The password gate works inside the iframe. In some browsers (notably
  Safari) storage is restricted inside cross-site iframes, so visitors may
  be asked for the password on each visit rather than once per session.
- Visitors can always open the dashboard directly at its own URL as well.
