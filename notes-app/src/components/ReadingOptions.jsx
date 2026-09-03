import { useState } from 'react';
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

  return (
    <>
      <button className="reading-opts-btn" onClick={() => setOpen(true)} title="Reading options — font size, theme">
        <span className="aa-icon">Aa</span>
      </button>

      {open && (
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
        </>
      )}
    </>
  );
}

export default ReadingOptions;
