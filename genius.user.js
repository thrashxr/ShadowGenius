// ==UserScript==
// @name         ShadowGenius
// @namespace    https://thrasher.fun
// @version      alpha
// @description  Dark mode for Genius
// @author       thrasher
// @match        https://*.genius.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';


    const darkModeStyles = `
        body { background-color: #292929; color: #BAB7BA; }
        .header { background-color: #1f1f1f; }
        .jAzSMw { background-color: #333333!important; color: #BAB7BA; }
        .cNCMgo { background-color: #333333!important; color: #BAB7BA; }
        .cNXXxk { color: #BAB7BA; }
        .dddWnX { color: #BAB7BA; }
        .hwdUNy { fill: #BAB7BA!important; }
        /* Diğer elementler için stilleri buraya ekleyin */
    `;


    const styleElement = document.createElement('style');
    styleElement.textContent = darkModeStyles;
    document.head.appendChild(styleElement);


    const observer = new MutationObserver(mutations => {
        for (const mutation of mutations) {
            if (mutation.type === 'childList') {
                for (const node of mutation.addedNodes) {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        applyDarkMode(node);
                    }
                }
            }
        }
    });

    function applyDarkMode(element) {
        element.querySelectorAll('*').forEach(el => {
            if (el.classList.contains('lyrics')) {
                el.style.backgroundColor = '#333333';
                el.style.color = '#BAB7BA';
            }
        });
    }

    observer.observe(document.body, { childList: true, subtree: true });
})();
