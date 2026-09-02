import { useState, useEffect } from 'react';
import './Sidebar.css';

function Sidebar({
  subjects,
  selectedSubject,
  selectedTopic,
  onSubjectSelect,
  onGoHome,
  onTopicSelect,
  onPlanClick,
  onDownloadsClick,
  showPlan,
  showDownloads,
  isOpen,
  onToggle,
  lang,
  setLang,
}) {
  const [expandedSubject, setExpandedSubject] = useState(selectedSubject?.code ?? null);
  const [expandedUnit, setExpandedUnit] = useState(null);

  useEffect(() => {
    if (selectedSubject) setExpandedSubject(selectedSubject.code);
  }, [selectedSubject]);

  const toggleSubject = (code) => {
    setExpandedSubject(expandedSubject === code ? null : code);
    onSubjectSelect(code);
  };

  const toggleUnit = (unitId) => {
    setExpandedUnit(expandedUnit === unitId ? null : unitId);
  };

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header" onClick={onGoHome} role="button" tabIndex={0}>
        <div className="sidebar-header-text">
          <h2>🎓 MCA Notes</h2>
          <p>RGPV First Semester</p>
        </div>
        <button
          className="sidebar-close-btn"
          onClick={(e) => {
            e.stopPropagation();
            onToggle();
          }}
          title="Close sidebar"
        >
          ✕
        </button>
      </div>

      <div className="lang-toggle">
        <button className={lang === 'both' ? 'active' : ''} onClick={() => setLang('both')}>
          Both
        </button>
        <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>
          EN
        </button>
        <button className={lang === 'hi' ? 'active' : ''} onClick={() => setLang('hi')}>
          HI
        </button>
      </div>

      <div className="sidebar-actions">
        <div className={`sidebar-action ${showPlan ? 'active' : ''}`} onClick={onPlanClick}>
          <span className="action-icon">📅</span>
          <span>Study Plan</span>
        </div>
        <div className={`sidebar-action ${showDownloads ? 'active' : ''}`} onClick={onDownloadsClick}>
          <span className="action-icon">📥</span>
          <span>Download PDFs</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        {subjects.map((subject) => (
          <div key={subject.code} className="sidebar-subject">
            <div
              className={`sidebar-subject-header ${expandedSubject === subject.code ? 'expanded' : ''}`}
              onClick={() => toggleSubject(subject.code)}
              style={{ borderLeftColor: subject.color }}
            >
              <span className="subject-icon">{subject.icon}</span>
              <div className="subject-info">
                <span className="subject-title">{subject.title}</span>
                <span className="subject-subtitle">{subject.subtitle}</span>
              </div>
              <span className={`arrow ${expandedSubject === subject.code ? 'open' : ''}`}>▸</span>
            </div>

            {expandedSubject === subject.code && (
              <div className="sidebar-units">
                {subject.units.map((unit) => (
                  <div key={unit.id} className="sidebar-unit">
                    <div className="sidebar-unit-header" onClick={() => toggleUnit(`${subject.code}-${unit.id}`)}>
                      <div className="unit-info">
                        <span className="unit-title">{unit.title}: {unit.subtitle}</span>
                      </div>
                      <span className={`arrow ${expandedUnit === `${subject.code}-${unit.id}` ? 'open' : ''}`}>▸</span>
                    </div>

                    {expandedUnit === `${subject.code}-${unit.id}` && (
                      <div className="sidebar-topics">
                        {unit.topics.map((topic) => (
                          <div
                            key={topic.id}
                            className={`sidebar-topic ${selectedTopic?.id === topic.id ? 'active' : ''}`}
                            onClick={() => onTopicSelect(subject.code, unit, topic)}
                          >
                            <span className="topic-title">{topic.title}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      <div className="sidebar-footer">
        <p>MCA First Semester — RGPV Bhopal</p>
      </div>
    </aside>
  );
}

export default Sidebar;
