import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import 'katex/dist/katex.min.css';

function getCalloutType(text) {
  if (!text) return null;
  const t = text.trimStart();
  if (t.startsWith('Yaad Rakho') || t.startsWith('याद रखो')) return 'remember';
  if (t.startsWith('Socho Aise') || t.startsWith('सोचो ऐसे')) return 'analogy';
  if (t.startsWith('Tip') || t.startsWith('टिप')) return 'tip';
  if (t.startsWith('Example') || t.startsWith('उदाहरण')) return 'example';
  if (t.startsWith('Warning') || t.startsWith('ध्यान')) return 'warning';
  if (t.startsWith('Question') || t.startsWith('सवाल')) return 'question';
  return null;
}

const calloutConfig = {
  remember: { icon: '🎯', label: 'Yaad Rakho!', color: '#6366f1', bg: '#eef2ff' },
  analogy: { icon: '💡', label: 'Socho Aise...', color: '#059669', bg: '#ecfdf5' },
  tip: { icon: '✨', label: 'Tip', color: '#8b5cf6', bg: '#f5f3ff' },
  example: { icon: '📝', label: 'Example', color: '#d97706', bg: '#fffbeb' },
  warning: { icon: '⚠️', label: 'Dhyan Do!', color: '#dc2626', bg: '#fef2f2' },
  question: { icon: '❓', label: 'Sawaal', color: '#0284c7', bg: '#f0f9ff' },
};

const markdownComponents = {
  // react-markdown v9 dropped the `inline` prop from the code renderer, so
  // block vs inline is inferred here: fenced code (has a language, or spans
  // multiple lines) is block-level; everything else is an inline `code` span.
  pre({ children }) {
    return <>{children}</>;
  },
  code({ className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '');
    const codeString = String(children).replace(/\n$/, '');
    const isBlock = match || codeString.includes('\n');
    if (isBlock && match) {
      return (
        <SyntaxHighlighter
          style={oneDark}
          language={match[1]}
          PreTag="div"
          customStyle={{ borderRadius: '10px', fontSize: '14px', padding: '20px', margin: '16px 0' }}
          {...props}
        >
          {codeString}
        </SyntaxHighlighter>
      );
    }
    if (isBlock) {
      return <pre className="code-block"><code {...props}>{children}</code></pre>;
    }
    return <code className="inline-code" {...props}>{children}</code>;
  },
  blockquote({ children }) {
    const textContent = children
      ?.map((c) => {
        if (typeof c === 'string') return c;
        if (c?.props?.children) {
          const inner = c.props.children;
          if (typeof inner === 'string') return inner;
          if (Array.isArray(inner)) return inner.map((i) => (typeof i === 'string' ? i : i?.props?.children || '')).join('');
        }
        return '';
      })
      .join('') || '';

    const type = getCalloutType(textContent);
    if (type) {
      const cfg = calloutConfig[type];
      return (
        <div className={`callout callout-${type}`} style={{ background: cfg.bg, borderLeftColor: cfg.color }}>
          <div className="callout-header" style={{ color: cfg.color }}>
            <span className="callout-icon">{cfg.icon}</span>
            <span className="callout-label">{cfg.label}</span>
          </div>
          <div className="callout-body">{children}</div>
        </div>
      );
    }
    return <blockquote className="custom-blockquote">{children}</blockquote>;
  },
  table({ children }) {
    return <div className="table-wrapper"><table>{children}</table></div>;
  },
  h2({ children }) { return <h2 className="section-heading">{children}</h2>; },
  h3({ children }) { return <h3 className="subsection-heading">{children}</h3>; },
  hr() { return <div className="content-divider"></div>; },
  strong({ children }) { return <strong className="highlight-text">{children}</strong>; },
};

function MarkdownBody({ content }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[rehypeKatex]}
      components={markdownComponents}
    >
      {content}
    </ReactMarkdown>
  );
}

export default MarkdownBody;
