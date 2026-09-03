import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import TeachingPlan from './components/TeachingPlan';
import Downloads from './components/Downloads';
import Home from './components/Home';
import PrintUnit from './components/PrintUnit';
import { subjects, allTopicsFlat } from './data/subjects';
import './App.css';

function App() {
  const [selectedSubjectCode, setSelectedSubjectCode] = useState(null);
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [showPlan, setShowPlan] = useState(false);
  const [showDownloads, setShowDownloads] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 1024);
  const [lang, setLang] = useState('both');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [printUnit, setPrintUnit] = useState(null);

  // Print the real rendered DOM (not a canvas rasterization) so KaTeX
  // equations come out correctly — see the note in App.css.
  useEffect(() => {
    if (!printUnit) return;
    const raf = requestAnimationFrame(() => window.print());
    return () => cancelAnimationFrame(raf);
  }, [printUnit]);

  useEffect(() => {
    const onAfterPrint = () => setPrintUnit(null);
    window.addEventListener('afterprint', onAfterPrint);
    return () => window.removeEventListener('afterprint', onAfterPrint);
  }, []);

  // URL routing so pages can be shared/bookmarked/refreshed directly.
  // Scheme: / , /:subjectCode , /:subjectCode/:topicId , /plan , /downloads
  const navigate = (path) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
  };

  const applyRoute = (pathname) => {
    const parts = pathname.split('/').filter(Boolean);

    if (parts[0] === 'plan') {
      setShowPlan(true);
      setShowDownloads(false);
      setSelectedUnit(null);
      setSelectedTopic(null);
      return;
    }
    if (parts[0] === 'downloads') {
      setShowDownloads(true);
      setShowPlan(false);
      setSelectedUnit(null);
      setSelectedTopic(null);
      return;
    }

    const subject = subjects.find((s) => s.code === parts[0]);
    if (!subject) {
      setSelectedSubjectCode(null);
      setSelectedUnit(null);
      setSelectedTopic(null);
      setShowPlan(false);
      setShowDownloads(false);
      return;
    }

    setSelectedSubjectCode(subject.code);
    setShowPlan(false);
    setShowDownloads(false);

    let found = null;
    if (parts.length >= 2) {
      for (const unit of subject.units) {
        const topic = unit.topics.find((t) => t.id === parts[1]);
        if (topic) { found = { unit, topic }; break; }
      }
    }
    setSelectedUnit(found ? found.unit : null);
    setSelectedTopic(found ? found.topic : null);
  };

  useEffect(() => {
    applyRoute(window.location.pathname);
    const onPopState = () => applyRoute(window.location.pathname);
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    const onResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (!mobile && !sidebarOpen) setSidebarOpen(true);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [sidebarOpen]);

  const closeSidebarOnMobile = () => {
    if (isMobile) setSidebarOpen(false);
  };

  const selectedSubject = subjects.find((s) => s.code === selectedSubjectCode) || null;

  const handleSubjectSelect = (code) => {
    setSelectedSubjectCode(code);
    setSelectedUnit(null);
    setSelectedTopic(null);
    setShowPlan(false);
    setShowDownloads(false);
    closeSidebarOnMobile();
    navigate(`/${code}`);
  };

  const handleGoHome = () => {
    setSelectedSubjectCode(null);
    setSelectedUnit(null);
    setSelectedTopic(null);
    setShowPlan(false);
    setShowDownloads(false);
    closeSidebarOnMobile();
    navigate('/');
  };

  const handleTopicSelect = (subjectCode, unit, topic) => {
    setSelectedSubjectCode(subjectCode);
    setSelectedUnit(unit);
    setSelectedTopic(topic);
    setShowPlan(false);
    setShowDownloads(false);
    closeSidebarOnMobile();
    navigate(`/${subjectCode}/${topic.id}`);
  };

  const handlePlanClick = () => {
    setShowPlan(true);
    setShowDownloads(false);
    setSelectedUnit(null);
    setSelectedTopic(null);
    closeSidebarOnMobile();
    navigate('/plan');
  };

  const handleDownloadsClick = () => {
    setShowDownloads(true);
    setShowPlan(false);
    setSelectedUnit(null);
    setSelectedTopic(null);
    closeSidebarOnMobile();
    navigate('/downloads');
  };

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  // Navigate to next/prev topic within the current subject
  const subjectTopics = selectedSubject
    ? selectedSubject.units.flatMap((u) => u.topics.map((t) => ({ unit: u, topic: t })))
    : [];
  const currentIdx = selectedTopic
    ? subjectTopics.findIndex((t) => t.topic.id === selectedTopic.id)
    : -1;

  const goNext = () => {
    if (currentIdx < subjectTopics.length - 1) {
      const next = subjectTopics[currentIdx + 1];
      handleTopicSelect(selectedSubjectCode, next.unit, next.topic);
    }
  };
  const goPrev = () => {
    if (currentIdx > 0) {
      const prev = subjectTopics[currentIdx - 1];
      handleTopicSelect(selectedSubjectCode, prev.unit, prev.topic);
    }
  };

  return (
    <div className="app">
      {isMobile && sidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />
      )}

      <Sidebar
        subjects={subjects}
        selectedSubject={selectedSubject}
        selectedTopic={selectedTopic}
        onSubjectSelect={handleSubjectSelect}
        onGoHome={handleGoHome}
        onTopicSelect={handleTopicSelect}
        onPlanClick={handlePlanClick}
        onDownloadsClick={handleDownloadsClick}
        showPlan={showPlan}
        showDownloads={showDownloads}
        isOpen={sidebarOpen}
        onToggle={toggleSidebar}
        lang={lang}
        setLang={setLang}
      />

      <main className={`main-content ${sidebarOpen && !isMobile ? '' : 'full'}`}>
        <button
          className={`menu-toggle-btn ${sidebarOpen && !isMobile ? 'shifted' : ''}`}
          onClick={toggleSidebar}
          title={sidebarOpen ? 'Hide sidebar' : 'Show sidebar'}
        >
          {sidebarOpen && !isMobile ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <line x1="9" y1="3" x2="9" y2="21" />
              <polyline points="15 8 12 12 15 16" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>

        {showPlan ? (
          <TeachingPlan subjects={subjects} />
        ) : showDownloads ? (
          <Downloads topics={allTopicsFlat} onPrintUnit={setPrintUnit} />
        ) : selectedTopic && selectedSubject ? (
          <Content
            subject={selectedSubject}
            unit={selectedUnit}
            topic={selectedTopic}
            lang={lang}
            onNext={currentIdx < subjectTopics.length - 1 ? goNext : null}
            onPrev={currentIdx > 0 ? goPrev : null}
            nextTitle={currentIdx < subjectTopics.length - 1 ? subjectTopics[currentIdx + 1].topic.title : null}
            prevTitle={currentIdx > 0 ? subjectTopics[currentIdx - 1].topic.title : null}
          />
        ) : selectedSubject ? (
          <Home
            subjects={[selectedSubject]}
            onSubjectSelect={handleSubjectSelect}
            onTopicSelect={handleTopicSelect}
            onPlanClick={handlePlanClick}
            onDownloadsClick={handleDownloadsClick}
            singleSubjectView
          />
        ) : (
          <Home
            subjects={subjects}
            onSubjectSelect={handleSubjectSelect}
            onTopicSelect={handleTopicSelect}
            onPlanClick={handlePlanClick}
            onDownloadsClick={handleDownloadsClick}
          />
        )}
      </main>

      <PrintUnit subject={printUnit?.subject} unit={printUnit?.unit} />
    </div>
  );
}

export default App;
