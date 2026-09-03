import MarkdownBody from './MarkdownBody';
import './PrintUnit.css';

function PrintUnit({ subject, unit }) {
  if (!subject || !unit) return null;

  return (
    <div className="print-unit-root">
      <div className="print-unit-header" style={{ borderBottomColor: subject.color }}>
        <h1>{subject.icon} {unit.title}: {unit.subtitle}</h1>
        <p style={{ color: subject.color }}>{subject.title} — {subject.subtitle}</p>
        <p className="print-unit-meta">MCA First Semester — RGPV Bhopal</p>
      </div>

      {unit.topics.map((topic, i) => (
        <div key={topic.id} className={`print-topic ${i > 0 ? 'print-topic-break' : ''}`}>
          <h2 style={{ color: subject.color, borderBottomColor: subject.color + '40' }}>{topic.title}</h2>
          <p className="print-topic-hi">{topic.titleHi}</p>
          <MarkdownBody content={topic.content} />
        </div>
      ))}
    </div>
  );
}

export default PrintUnit;
