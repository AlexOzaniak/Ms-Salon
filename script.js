tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "on-secondary-fixed": "#231917",
                "surface-bright": "#fcf9f4",
                "surface-container-high": "#ebe8e3",
                "on-primary-fixed": "#3d0506",
                "on-tertiary-fixed-variant": "#524436",
                "surface-dim": "#dcdad5",
                "surface": "#fcf9f4",
                "primary-fixed": "#ffdad7",
                "on-error-container": "#93000a",
                "error": "#ba1a1a",
                "tertiary": "#160d04",
                "secondary": "#685b59",
                "primary": "#2a0002",
                "surface-container-low": "#f6f3ee",
                "on-surface": "#1c1c19",
                "surface-container": "#f0ede9",
                "on-tertiary-container": "#9a8877",
                "primary-fixed-dim": "#ffb3ad",
                "surface-tint": "#954742",
                "secondary-container": "#eedcd8",
                "on-surface-variant": "#544341",
                "on-secondary-container": "#6d605d",
                "on-primary": "#ffffff",
                "tertiary-container": "#2e2216",
                "surface-container-lowest": "#ffffff",
                "on-tertiary-fixed": "#241a0e",
                "on-background": "#1c1c19",
                "secondary-fixed": "#f1dfdb",
                "tertiary-fixed": "#f4dfcb",
                "error-container": "#ffdad6",
                "on-primary-fixed-variant": "#77302d",
                "outline-variant": "#dac1bf",
                "surface-container-highest": "#e5e2dd",
                "on-secondary-fixed-variant": "#504441",
                "outline": "#877270",
                "on-secondary": "#ffffff",
                "on-error": "#ffffff",
                "tertiary-fixed-dim": "#d7c3b0",
                "on-tertiary": "#ffffff",
                "inverse-on-surface": "#f3f0eb",
                "secondary-fixed-dim": "#d4c3bf",
                "background": "#fcf9f4",
                "inverse-primary": "#ffb3ad",
                "inverse-surface": "#31302d",
                "primary-container": "#4a0e0e",
                "on-primary-container": "#cc726d",
                "surface-variant": "#e5e2dd"
            },
            borderRadius: {
                "DEFAULT": "0.375rem",
                "lg": "0.75rem",
                "xl": "1rem",
                "2xl": "1.5rem",
                "full": "9999px"
            },
            spacing: {
                "margin-mobile": "20px",
                "container-max": "1200px",
                "unit": "8px",
                "section-padding": "90px",
                "gutter": "32px"
            },
           fontFamily: {
                "body-lg": ["Inter", "sans-serif"],
                "body-md": ["Inter", "sans-serif"],
                "headline-lg": ["Space Grotesk", "sans-serif"],
                "headline-md": ["Space Grotesk", "sans-serif"],
                "display-lg": ["Space Grotesk", "sans-serif"],
                "label-sm": ["Inter", "sans-serif"]
            }
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    mobileMenuBtn?.addEventListener('click', () => {
        mobileMenuOverlay.classList.remove('hidden');
        mobileMenuOverlay.classList.add('flex');
        document.body.style.overflow = 'hidden';
    });

    const closeMenu = () => {
        mobileMenuOverlay.classList.add('hidden');
        mobileMenuOverlay.classList.remove('flex');
        document.body.style.overflow = '';
    };

    mobileMenuClose?.addEventListener('click', closeMenu);
    mobileLinks.forEach(link => link.addEventListener('click', closeMenu));
});