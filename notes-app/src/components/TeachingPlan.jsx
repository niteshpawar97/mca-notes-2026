import './TeachingPlan.css';

const unitWeeks = [
  { unit: 1, weeks: 'Week 1-2', color: '#6366f1' },
  { unit: 2, weeks: 'Week 3-4', color: '#8b5cf6' },
  { unit: 3, weeks: 'Week 5-6', color: '#059669' },
  { unit: 4, weeks: 'Week 7-8', color: '#d97706' },
  { unit: 5, weeks: 'Week 9-10', color: '#dc2626' },
];

function TeachingPlan({ subjects }) {
  const theorySubjects = subjects.filter((s) => s.type === 'theory');
  const labSubjects = subjects.filter((s) => s.type === 'lab');

  return (
    <div className="plan">
      <div className="plan-header">
        <h1>MCA Sem 1 — Study Plan</h1>
        <p className="plan-header-hi">एमसीए प्रथम सेमेस्टर — अध्ययन योजना</p>
        <div className="plan-meta">
          <span>5 Theory Subjects</span>
          <span>2 Labs</span>
          <span>5 Units Each</span>
          <span>~10 Weeks Teaching + Revision</span>
        </div>
      </div>

      <div className="plan-weeks">
        {unitWeeks.map(({ unit, weeks, color }) => (
          <div key={unit} className="plan-week">
            <div className="plan-week-header" style={{ background: color }}>
              <h2>{weeks} — Unit {['I', 'II', 'III', 'IV', 'V'][unit - 1]} of every subject</h2>
              <p>Sabhi subjects ka Unit {unit} is period me parallel padho</p>
            </div>
            <div className="plan-days">
              {theorySubjects.map((subject) => {
                const u = subject.units[unit - 1];
                if (!u) return null;
                return (
                  <div key={subject.code} className="plan-day">
                    <span className="plan-day-badge" style={{ background: color + '15', color }}>
                      {subject.icon} {subject.title}
                    </span>
                    <div className="plan-day-content">
                      <p className="plan-day-en">{u.subtitle}</p>
                      <p className="plan-day-hi">{u.topics.map((t) => t.title).join(' · ')}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        <div className="plan-week">
          <div className="plan-week-header" style={{ background: '#0891b2' }}>
            <h2>Week 9-12 — Labs / Practicals</h2>
            <p>Programs likho, practical file taiyar karo, viva ki practice karo</p>
          </div>
          <div className="plan-days">
            {labSubjects.map((subject) => (
              <div key={subject.code} className="plan-day">
                <span className="plan-day-badge" style={{ background: '#0891b215', color: '#0891b2' }}>
                  {subject.icon} {subject.title}
                </span>
                <div className="plan-day-content">
                  <p className="plan-day-en">{subject.subtitle}</p>
                  <p className="plan-day-hi">{subject.units[0]?.topics.length} program groups — sabko khud type karke run karo</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="plan-week">
          <div className="plan-week-header" style={{ background: '#1e1b4b' }}>
            <h2>Last 2 Weeks — Final Revision</h2>
            <p>अंतिम रिवीजन — परीक्षा से पहले</p>
          </div>
          <div className="plan-days">
            <div className="plan-day">
              <span className="plan-day-badge" style={{ background: '#1e1b4b15', color: '#1e1b4b' }}>Tip 1</span>
              <div className="plan-day-content">
                <p className="plan-day-en">Har subject ke previous year question papers solve karo</p>
                <p className="plan-day-hi">पिछले वर्षों के प्रश्नपत्र हल करो</p>
              </div>
            </div>
            <div className="plan-day">
              <span className="plan-day-badge" style={{ background: '#1e1b4b15', color: '#1e1b4b' }}>Tip 2</span>
              <div className="plan-day-content">
                <p className="plan-day-en">Diagrams (tree, stack, OS scheduling) khud bana ke practice karo</p>
                <p className="plan-day-hi">डायग्राम खुद बनाकर अभ्यास करो</p>
              </div>
            </div>
            <div className="plan-day">
              <span className="plan-day-badge" style={{ background: '#1e1b4b15', color: '#1e1b4b' }}>Tip 3</span>
              <div className="plan-day-content">
                <p className="plan-day-en">Yaad Rakho callouts aur formulas ki ek chhoti cheat-sheet banao</p>
                <p className="plan-day-hi">फॉर्मूला की एक छोटी चीट-शीट बनाओ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeachingPlan;
