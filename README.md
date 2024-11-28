# ImageBlocker.js

**ImageBlocker.js** is a lightweight, open-source JavaScript library designed to block external images in HTML5 emails, enhancing security by preventing unauthorized content from loading. It ensures only trusted domains are allowed for image and background image sources.

## Features

- Blocks images (`<img>` tags) from untrusted domains.
- Neutralizes background images defined in inline styles.
- Simple configuration with a customizable `allowedDomains` array.
- Lightweight and optimized for HTML5 email environments.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/email5/imageblocker.git

### Setup
To include `ImageBlocker.js` in your HTML email or project, add the following script tag:

   ```html
   <script src="src/ImageBlocker.js"></script>

Customize the list of trusted domains by editing the allowedDomains array in the script:

   ```javascript
   const allowedDomains = ["trustedcdn.com", "secure-site.org"];
