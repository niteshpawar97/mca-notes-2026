import html2pdf from 'html2pdf.js';

const PDF_STYLES = `
  <style>
    * { box-sizing: border-box; }
    body {
      font-family: 'Segoe UI', Arial, sans-serif;
      font-size: 13px;
      line-height: 1.7;
      color: #1e293b;
      padding: 0;
      margin: 0;
    }
    .pdf-header {
      background: linear-gradient(135deg, #6366f1, #8b5cf6);
      color: white;
      padding: 20px 28px;
      border-radius: 0 0 12px 12px;
      margin-bottom: 20px;
    }
    .pdf-header h1 {
      font-size: 22px;
      margin: 0 0 4px 0;
      font-weight: 700;
    }
    .pdf-header p {
      margin: 0;
      font-size: 13px;
      opacity: 0.9;
    }
    .pdf-header .meta {
      display: flex;
      gap: 16px;
      margin-top: 8px;
      font-size: 11px;
      opacity: 0.85;
    }
    .pdf-content {
      padding: 0 28px 20px;
    }
    h2 {
      font-size: 18px;
      color: #6366f1;
      border-bottom: 2px solid #e2e8f0;
      padding-bottom: 6px;
      margin: 24px 0 12px;
    }
    h3 {
      font-size: 15px;
      color: #1e293b;
      margin: 18px 0 8px;
    }
    p { margin: 6px 0; }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 12px 0;
      font-size: 12px;
    }
    th {
      background: #f1f5f9;
      padding: 8px 10px;
      text-align: left;
      font-weight: 600;
      border: 1px solid #e2e8f0;
    }
    td {
      padding: 6px 10px;
      border: 1px solid #e2e8f0;
    }
    pre {
      background: #1e293b;
      color: #e2e8f0;
      padding: 14px;
      border-radius: 8px;
      font-size: 11.5px;
      line-height: 1.5;
      overflow-x: auto;
      white-space: pre-wrap;
      word-wrap: break-word;
      font-family: 'Cascadia Code', 'Consolas', monospace;
    }
    code {
      font-family: 'Cascadia Code', 'Consolas', monospace;
      font-size: 12px;
    }
    p code, li code {
      background: #eff6ff;
      color: #3b82f6;
      padding: 1px 5px;
      border-radius: 3px;
      font-size: 12px;
    }
    .callout {
      border-left: 4px solid;
      border-radius: 0 8px 8px 0;
      padding: 10px 14px;
      margin: 12px 0;
      font-size: 12.5px;
    }
    .callout-remember { background: #eef2ff; border-color: #6366f1; }
    .callout-analogy { background: #ecfdf5; border-color: #059669; }
    .callout-tip { background: #f5f3ff; border-color: #8b5cf6; }
    .callout-example { background: #fffbeb; border-color: #d97706; }
    .callout-warning { background: #fef2f2; border-color: #dc2626; }
    .callout-label {
      font-weight: 700;
      font-size: 12px;
      margin-bottom: 3px;
    }
    blockquote {
      border-left: 3px solid #e2e8f0;
      background: #f8fafc;
      padding: 8px 14px;
      margin: 10px 0;
      border-radius: 0 6px 6px 0;
    }
    strong { color: #0f172a; }
    hr {
      border: none;
      height: 2px;
      background: linear-gradient(90deg, #6366f1, #a855f7, transparent);
      margin: 18px 0;
    }
    ul, ol { padding-left: 20px; margin: 6px 0; }
    li { margin-bottom: 3px; }
    .pdf-footer {
      text-align: center;
      padding: 14px;
      font-size: 10px;
      color: #94a3b8;
      border-top: 1px solid #e2e8f0;
      margin-top: 20px;
    }
    .topic-separator {
      page-break-before: always;
      border-top: 3px solid #6366f1;
      margin: 30px 0 20px;
      padding-top: 20px;
    }
    .topic-separator:first-child {
      page-break-before: avoid;
      border-top: none;
      margin-top: 0;
      padding-top: 0;
    }
  </style>
`;

function getRenderedHTML(containerEl) {
  if (!containerEl) return '';
  const clone = containerEl.cloneNode(true);

  clone.querySelectorAll('.callout').forEach((el) => {
    const type = [...el.classList].find(
      (c) => c.startsWith('callout-') && c !== 'callout-header' && c !== 'callout-body' && c !== 'callout-icon' && c !== 'callout-label'
    );
    if (type) el.className = `callout ${type}`;
  });

  clone.querySelectorAll('[class*="language-"]').forEach((el) => {
    const text = el.textContent;
    const pre = document.createElement('pre');
    const code = document.createElement('code');
    code.textContent = text;
    pre.appendChild(code);
    el.replaceWith(pre);
  });

  return clone.innerHTML;
}

export function downloadTopicPDF(contentBodyEl, { subjectTitle, unitTitle, subjectIcon, topicTitle, topicTitleHi }) {
  const bodyHTML = getRenderedHTML(contentBodyEl);

  const html = `
    ${PDF_STYLES}
    <div class="pdf-header">
      <h1>${subjectIcon} ${topicTitle}</h1>
      <p>${topicTitleHi}</p>
      <div class="meta">
        <span>${subjectTitle}</span>
        <span>${unitTitle}</span>
        <span>MCA First Semester — RGPV</span>
      </div>
    </div>
    <div class="pdf-content">
      ${bodyHTML}
    </div>
    <div class="pdf-footer">
      MCA Notes — ${subjectTitle} — ${unitTitle} | RGPV Bhopal
    </div>
  `;

  const container = document.createElement('div');
  container.innerHTML = html;

  const filename = `${topicTitle.replace(/[^a-zA-Z0-9]/g, '-').replace(/-+/g, '-').substring(0, 50)}.pdf`;

  return html2pdf()
    .set({
      margin: [8, 8, 12, 8],
      filename,
      image: { type: 'jpeg', quality: 0.95 },
      html2canvas: { scale: 2, useCORS: true, letterRendering: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
    })
    .from(container)
    .save();
}

export async function downloadUnitPDF(topics, subject, unit) {
  const { createElement } = await import('react');
  const { createRoot } = await import('react-dom/client');
  const { default: ReactMarkdown } = await import('react-markdown');
  const { default: remarkGfm } = await import('remark-gfm');

  let topicsHTML = '';

  for (let i = 0; i < topics.length; i++) {
    const topic = topics[i];
    const tempDiv = document.createElement('div');
    tempDiv.style.cssText = 'position:absolute;left:-9999px;width:800px;';
    document.body.appendChild(tempDiv);

    await new Promise((resolve) => {
      const root = createRoot(tempDiv);
      root.render(
        createElement(ReactMarkdown, {
          remarkPlugins: [remarkGfm],
          components: {
            pre({ children }) {
              return children;
            },
            code({ className, children, ...props }) {
              const codeString = String(children).replace(/\n$/, '');
              const isBlock = /language-(\w+)/.test(className || '') || codeString.includes('\n');
              return isBlock
                ? createElement('pre', null, createElement('code', props, children))
                : createElement('code', props, children);
            },
            blockquote({ children }) {
              return createElement('blockquote', null, children);
            },
          },
        }, topic.content)
      );
      setTimeout(() => {
        topicsHTML += `
          <div class="topic-separator ${i === 0 ? 'first-child' : ''}">
            <h2 style="color: ${subject.color}; font-size: 20px; border-bottom: 2px solid ${subject.color}40; padding-bottom: 6px;">
              ${topic.title}
            </h2>
            <p style="color: #8b5cf6; font-size: 13px; margin-bottom: 14px;">${topic.titleHi}</p>
            ${tempDiv.innerHTML}
          </div>
        `;
        root.unmount();
        document.body.removeChild(tempDiv);
        resolve();
      }, 150);
    });
  }

  const html = `
    ${PDF_STYLES}
    <div class="pdf-header">
      <h1>${subject.icon} ${unit.title}: ${unit.subtitle}</h1>
      <p>${subject.title} — ${subject.subtitle}</p>
      <div class="meta">
        <span>${topics.length} Topic${topics.length > 1 ? 's' : ''}</span>
        <span>MCA First Semester — RGPV</span>
      </div>
    </div>
    <div class="pdf-content">
      ${topicsHTML}
    </div>
    <div class="pdf-footer">
      MCA Notes — ${subject.title} — ${unit.title} | RGPV Bhopal
    </div>
  `;

  const container = document.createElement('div');
  container.innerHTML = html;

  const filename = `${subject.code}-${unit.title.replace(/\s+/g, '-')}_MCA-Notes.pdf`;

  return html2pdf()
    .set({
      margin: [8, 8, 12, 8],
      filename,
      image: { type: 'jpeg', quality: 0.95 },
      html2canvas: { scale: 2, useCORS: true, letterRendering: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      pagebreak: { mode: ['css', 'legacy'] },
    })
    .from(container)
    .save();
}
