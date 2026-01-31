import React, { Suspense } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

// Lazy load placeholder pages
const Documentation = React.lazy(() => import('./pages/Documentation'));
const Auth = React.lazy(() => import('./pages/Auth'));
const Legal = React.lazy(() => import('./pages/Legal'));

const App: React.FC = () => {
  return (
    <HashRouter>
      <Suspense fallback={<div className="h-screen w-full flex items-center justify-center bg-bio-teal text-bio-cyan font-mono text-xs tracking-widest">INITIALIZING SEQUENCE...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="docs" element={<Documentation />} />
            <Route path="auth" element={<Auth />} />
            <Route path="legal" element={<Legal />} />
            {/* Catch all redirect to home */}
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  );
};

export default App;