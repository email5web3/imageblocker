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

2. Navigate to the project directory:
   ```bash
   cd imageblocker

## Setup

To include `ImageBlocker.js` in your HTML email or project:

1. Add the following `<script>` tag to your email setup:

   ```html
   <script src="src/ImageBlocker.js"></script>

2. Customize the list of trusted domains by editing the `allowedDomains` array in the script:

   ```javascript
   const allowedDomains = ["trustedcdn.com", "secure-site.org"];

## How It Works

- Image Blocking: All `<img>` tags with `src` attributes pointing to untrusted domains are blocked and hidden from the email content.
- Background Image Neutralization: Inline styles containing untrusted `background-image` URLs are neutralized.
- Customizable: Easily define your list of trusted domains to fit your security requirements.

## Contributing

Contributions are welcome! Please fork the repository, create a new branch, and submit a pull request with your changes.

## License

This project is licensed under the MIT License.
