import './Home.css';

function Home({ subjects, onSubjectSelect, onTopicSelect, onPlanClick, onDownloadsClick, singleSubjectView }) {
  const theorySubjects = subjects.filter((s) => s.type === 'theory');
  const labSubjects = subjects.filter((s) => s.type === 'lab');

  return (
    <div className="home">
      <div className="home-icon">🎓</div>
      <h1>{singleSubjectView ? subjects[0].title : 'MCA Notes'}</h1>
      <h2>
        {singleSubjectView
          ? `${subjects[0].subtitle} — ${subjects[0].subtitleHi}`
          : 'एमसीए नोट्स — RGPV Bhopal'}
      </h2>
      <p className="home-sub">
        {singleSubjectView
          ? 'Neeche diye gaye unit par click karke padhna shuru karo'
          : 'MCA First Semester — RGPV Bhopal Syllabus ke hisaab se complete notes'}
      </p>

      {!singleSubjectView && theorySubjects.length > 0 && (
        <>
          <h3 className="home-section-title">Theory Subjects</h3>
          <div className="home-cards">
            {theorySubjects.map((subject) => (
              <div
                key={subject.code}
                className="home-card"
                style={{ borderTopColor: subject.color }}
                onClick={() => onSubjectSelect(subject.code)}
              >
                <span className="home-card-icon">{subject.icon}</span>
                <h3>{subject.title}</h3>
                <p>{subject.subtitle}</p>
                <p className="hindi-text">{subject.subtitleHi}</p>
                <span className="home-card-units">{subject.units.length} Units</span>
              </div>
            ))}
          </div>
        </>
      )}

      {!singleSubjectView && labSubjects.length > 0 && (
        <>
          <h3 className="home-section-title">Practical / Labs</h3>
          <div className="home-cards">
            {labSubjects.map((subject) => (
              <div
                key={subject.code}
                className="home-card"
                style={{ borderTopColor: subject.color }}
                onClick={() => onSubjectSelect(subject.code)}
              >
                <span className="home-card-icon">{subject.icon}</span>
                <h3>{subject.title}</h3>
                <p>{subject.subtitle}</p>
                <p className="hindi-text">{subject.subtitleHi}</p>
                <span className="home-card-units">
                  {subject.units.reduce((n, u) => n + u.topics.length, 0)} Program Sets
                </span>
              </div>
            ))}
          </div>
        </>
      )}

      {singleSubjectView && (
        <div className="home-cards">
          {subjects[0].units.map((unit) => (
            <div
              key={unit.id}
              className="home-card"
              style={{ borderTopColor: subjects[0].color }}
              onClick={() => onTopicSelect(subjects[0].code, unit, unit.topics[0])}
            >
              <h3>{unit.title}</h3>
              <p>{unit.subtitle}</p>
              <span className="home-card-units">{unit.topics.length} Topics</span>
            </div>
          ))}
        </div>
      )}

      <div className="home-actions">
        <button className="plan-btn" onClick={onPlanClick}>
          Study Plan / अध्ययन योजना
        </button>
        <button className="plan-btn download-page-btn" onClick={onDownloadsClick}>
          Download PDFs / PDF डाउनलोड
        </button>
      </div>
    </div>
  );
}

export default Home;
