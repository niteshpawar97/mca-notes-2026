import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import './ReadingOptions.css';

const FONT_SIZES = [
  { id: 'sm', px: 14 },
  { id: 'md', px: 16 },
  { id: 'lg', px: 18 },
  { id: 'xl', px: 20 },
];

const THEMES = [
  { id: 'light', label: 'Light', bg: '#ffffff', fg: '#0f172a', border: '#e2e8f0' },
  { id: 'sepia', label: 'Sepia', bg: '#f3ead6', fg: '#43362a', border: '#e0d2b0' },
  { id: 'dark', label: 'Dark', bg: '#181c25', fg: '#e2e8f0', border: '#181c25' },
];

function ReadingOptions({ fontSize, setFontSize, theme, setTheme }) {
  const [open, setOpen] = useState(false);

  // Lock background scroll while the sheet is open — the page has no
  // scroll container of its own, so without this the page underneath
  // can scroll while the panel (position: fixed) stays pinned to the
  // viewport, leaving it looking detached/stuck over the content that
  // scrolled past behind it.
  useEffect(() => {
    if (!open) return undefined;
    const { style } = document.body;
    const previousOverflow = style.overflow;
    style.overflow = 'hidden';
    return () => {
      style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
      <button className="reading-opts-btn" onClick={() => setOpen(true)} title="Reading options — font size, theme">
        <span className="aa-icon">Aa</span>
      </button>

      {/* Portal to <body>: this button lives inside .content-topbar, which
          has backdrop-filter — a CSS property that creates a new containing
          block for position: fixed descendants. Without the portal, the
          "fixed" backdrop/panel would actually be positioned relative to
          that (scrolling, sticky) topbar instead of the real viewport, so
          scrolling the page after opening the sheet would drag it out of
          place instead of leaving it pinned to the bottom of the screen. */}
      {open && createPortal(
        <>
          <div className="reading-opts-backdrop" onClick={() => setOpen(false)} />
          <div className="reading-opts-panel" role="dialog" aria-label="Reading options">
            <div className="reading-opts-handle" />

            <div className="reading-opts-section">
              <span className="reading-opts-label">Text Size</span>
              <div className="reading-opts-row">
                {FONT_SIZES.map((f) => (
                  <button
                    key={f.id}
                    className={`font-size-btn ${fontSize === f.id ? 'active' : ''}`}
                    style={{ fontSize: `${f.px}px` }}
                    onClick={() => setFontSize(f.id)}
                  >
                    A
                  </button>
                ))}
              </div>
            </div>

            <div className="reading-opts-section">
              <span className="reading-opts-label">Reading Theme</span>
              <div className="reading-opts-row">
                {THEMES.map((t) => (
                  <button
                    key={t.id}
                    className={`theme-swatch-btn ${theme === t.id ? 'active' : ''}`}
                    onClick={() => setTheme(t.id)}
                  >
                    <span
                      className="theme-swatch"
                      style={{ background: t.bg, color: t.fg, borderColor: t.border }}
                    >
                      Aa
                    </span>
                    <span className="theme-swatch-label">{t.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <button className="reading-opts-close" onClick={() => setOpen(false)}>Done</button>
          </div>
        </>,
        document.body,
      )}
    </>
  );
}

export default ReadingOptions;
