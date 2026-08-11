/**
 * Applies the stored theme before first paint so there is no flash.
 * Without JavaScript the CSS falls back to `prefers-color-scheme`.
 */
const script = `(function(){try{var t=localStorage.getItem("luma-theme");if(t==="light"||t==="dark"){document.documentElement.dataset.theme=t}}catch(e){}})();`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
