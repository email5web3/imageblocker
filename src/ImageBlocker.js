/**
 * ImageBlocker.js
 * A lightweight script to block external images in HTML5 emails.
 * Developed by Email 5 for Open Email Standards compliance.
 */

document.addEventListener("DOMContentLoaded", function () {
    const allowedDomains = ["trustedcdn.com", "anothertrustedsource.com"]; // Add trusted domains here

    /**
     * Check if a URL belongs to an allowed domain.
     * @param {string} url - The URL to verify.
     * @returns {boolean} - True if the URL is from an allowed domain, false otherwise.
     */
    function isAllowedDomain(url) {
        try {
            const parsedUrl = new URL(url);
            return allowedDomains.some(domain => parsedUrl.hostname.endsWith(domain));
        } catch (e) {
            console.error(`Invalid URL detected: ${url}`);
            return false;
        }
    }

    /**
     * Block external images in <img> tags.
     */
    document.querySelectorAll("img").forEach(img => {
        const src = img.getAttribute("src");
        if (src && !isAllowedDomain(src)) {
            img.setAttribute("src", ""); // Prevent image loading
            img.style.display = "none"; // Hide the image
            console.log(`Blocked external image: ${src}`);
        }
    });

    /**
     * Block external images in inline styles.
     */
    document.querySelectorAll("[style]").forEach(element => {
        const style = element.getAttribute("style");
        if (style && style.includes("background-image")) {
            const urlMatch = style.match(/url\(["']?([^"')]+)["']?\)/);
            if (urlMatch && urlMatch[1] && !isAllowedDomain(urlMatch[1])) {
                element.style.backgroundImage = "none"; // Remove background image
                console.log(`Blocked external background image: ${urlMatch[1]}`);
            }
        }
    });
});