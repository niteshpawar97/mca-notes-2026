import MarkdownBody from './MarkdownBody';
import './Content.css';

function Content({ subject, unit, topic, onNext, onPrev, nextTitle, prevTitle }) {
  return (
    <div className="content">
      <div className="content-topbar" style={{ borderBottomColor: subject.color + '40' }}>
        <div className="content-breadcrumb">
          <span className="breadcrumb-unit" style={{ background: subject.color + '15', color: subject.color }}>
            {subject.icon} {subject.title}
          </span>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-day">{unit.title}</span>
          <button className="download-btn" onClick={() => window.print()} title="Print / Save as PDF">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>PDF</span>
          </button>
        </div>
      </div>

      <div className="content-header" style={{ borderLeftColor: subject.color }}>
        <h1>{topic.title}</h1>
        <p className="content-header-hi">{topic.titleHi}</p>
      </div>

      <div className="content-body">
        <MarkdownBody content={topic.content} />
      </div>

      <div className="content-nav">
        {onPrev ? (
          <button className="nav-btn prev" onClick={onPrev}>
            <span className="nav-label">Previous</span>
            <span className="nav-title">{prevTitle}</span>
          </button>
        ) : <div />}
        {onNext ? (
          <button className="nav-btn next" onClick={onNext}>
            <span className="nav-label">Next</span>
            <span className="nav-title">{nextTitle}</span>
          </button>
        ) : <div />}
      </div>
    </div>
  );
}

export default Content;
