document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('clickMeButton');

    button.addEventListener('click', function () {
        alert('Did you know? The tallest LEGO tower ever built was 35 meters tall, made from over 500,000 bricks!');
    });

    // Check for Promise support, and provide a polyfill if not supported
    if (!window.Promise) {
        console.log('Promise is not supported, loading polyfill');
        var script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/promise-polyfill@8/dist/polyfill.min.js';
        document.head.appendChild(script);
    }

    // Check for Fetch API support, and provide a polyfill if not supported
    if (!window.fetch) {
        console.log('Fetch API is not supported, loading polyfill');
        var script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/whatwg-fetch@3.6.2/dist/fetch.umd.js';
        document.head.appendChild(script);
    }
});