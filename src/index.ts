// import './core.js';

/**
 * Global object for theme management.
 * @namespace th
 * @summary Manages global UI themes (light, dark, system) for the application.
 *
 * @description
 * This object provides utilities to set, retrieve, and persist the user's preferred theme.
 * It handles system theme detection, updates the `<html>` element's `theme` attribute,
 * manages the `<meta name="color-scheme">` tag, and dispatches custom events
 * when the theme changes.
 */
declare global {
    interface Window {
        th: {
            /**
             * If true, enables console debugging messages for theme-related operations. Defaults to `false`.
             */
            verbose: boolean;
            /**
             * An object containing available theme names.
             * `light` and `dark` refer to the explicit themes. `system` indicates that the theme
             * should follow the user's operating system preference and corresponds to 'dark light'
             * for the `color-scheme` meta tag.
             */
            themes: Readonly<{
                light: string;
                dark: string;
                system: string;
            }>;
            /**
             * Sets the content for the `<meta name="color-scheme">` tag. If the tag does not exist, it will be created and appended to the document head.
             * @param content - The content string for the 'color-scheme' meta tag (e.g., 'light', 'dark', 'dark light').
             */
            setMetaTag(content: string): void;
            /**
             * Detects the user's current system-wide preferred color scheme based on `window.matchMedia`.
             * @returns The system's preferred color scheme ('light' or 'dark').
             */
            getSystemTheme(): 'light' | 'dark';
            /**
             * Sets the application's UI theme. This method updates the `<html>` element's `theme` attribute,
             * the `<meta name="color-scheme">` tag, and persists the chosen theme in `localStorage`.
             * It also dispatches a `th-changed` custom event.
             * @param theme - The desired theme.
             *               - `'light'` sets the theme to light mode.
             *               - `'dark'` sets the theme to dark mode.
             *               - `'system'` automatically detects and applies the user's system preference.
             *               Invalid themes will fall back to 'system'.
             * @returns The final theme applied after resolution (e.g., if 'system' was passed, it returns 'light' or 'dark').
             */
            setTheme(theme: 'light' | 'dark' | 'system'): 'light' | 'dark';
            /**
             * Dispatches a custom `th-changed` event to the `document`.
             * @param theme - The actual theme that was applied (e.g., 'light' or 'dark').
             * @param isSystem - True if the theme was determined by the system's preference; otherwise, false.
             */
            dispatchThemeChangeEvent(theme: 'light' | 'dark', isSystem: boolean): void;
            /**
             * Initializes the theme management system.
             * It attempts to load a previously saved theme from `localStorage`. If no theme is saved or an error occurs,
             * it defaults to the 'system' theme. It also sets up a listener for changes in the user's
             * system color scheme preference to automatically update if the theme is set to 'system'.
             * @returns A cleanup function that, when called, removes the system theme change listener.
             */
            init(): () => void;
            /**
             * A function to call to clean up event listeners created by `init()`.
             * This property holds the return value of the initial `init()` call, allowing for manual cleanup.
             */
            remove: (() => void) | undefined;
        };
    }
}

export const th = window.th;

export function init_dropdown() {
// ./components/dropdown.js
}
