import { useEffect, useState } from 'react';

const STORAGE_KEY = 'mca-notes-reading-prefs';

export const FONT_SCALE = { sm: 0.875, md: 1, lg: 1.15, xl: 1.3 };

function loadPrefs() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return { theme: parsed.theme || 'light', fontSize: parsed.fontSize || 'md' };
    }
  } catch {
    // localStorage unavailable — fall back to defaults
  }
  return { theme: 'light', fontSize: 'md' };
}

// Kindle-style reading preferences (text size + page theme), persisted
// per-browser and applied only while a topic is actually being read.
export function useReadingPrefs() {
  const [prefs, setPrefs] = useState(loadPrefs);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    } catch {
      // ignore write failures (private browsing, storage full, etc.)
    }
  }, [prefs]);

  useEffect(() => {
    const root = document.documentElement;
    if (prefs.theme !== 'light') {
      root.setAttribute('data-reading-theme', prefs.theme);
    } else {
      root.removeAttribute('data-reading-theme');
    }
    return () => root.removeAttribute('data-reading-theme');
  }, [prefs.theme]);

  return {
    theme: prefs.theme,
    fontSize: prefs.fontSize,
    setTheme: (theme) => setPrefs((p) => ({ ...p, theme })),
    setFontSize: (fontSize) => setPrefs((p) => ({ ...p, fontSize })),
  };
}
