import { subjects } from '../data/subjects';
import './Downloads.css';

function Downloads({ onPrintUnit }) {
  return (
    <div className="downloads">
      <div className="downloads-header">
        <h1>Download PDFs</h1>
        <p className="downloads-sub">Unit-wise PDF download karo aur offline padho ya students ke saath share karo</p>
      </div>

      <div className="downloads-weeks">
        {subjects.map((subject) => (
          <div key={subject.code} className="dl-week">
            <div className="dl-week-header" style={{ background: subject.color }}>
              <h2>{subject.icon} {subject.title}</h2>
              <p>{subject.subtitle}</p>
            </div>
            <div className="dl-days">
              {subject.units.map((unit) => {
                const key = `${subject.code}-${unit.id}`;
                return (
                  <div key={key} className="dl-day">
                    <div className="dl-day-info">
                      <span className="dl-day-badge" style={{ background: subject.color + '15', color: subject.color }}>
                        {unit.title}
                      </span>
                      <div className="dl-day-topics">
                        {unit.topics.map((t) => (
                          <span key={t.id} className="dl-topic-chip">{t.title}</span>
                        ))}
                      </div>
                    </div>
                    <button
                      className="dl-btn"
                      style={{ background: subject.color }}
                      onClick={() => onPrintUnit({ subject, unit })}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                      PDF
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Downloads;
