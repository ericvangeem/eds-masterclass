// add delayed functionality here

// Load DOMPurify library
const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/dompurify@3.0.6/dist/purify.js';
script.setAttribute('nonce', 'aem');
document.head.appendChild(script);
