import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BugReport from './pages/BugReport'; // <-- add this
import NotFound from './pages/NotFound'; // Create this for 404 pages

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert" className="error-fallback">
      <h2>Something went wrong</h2>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          // no state to reset here; just re-renders the App
        }}
      >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/report" element={<BugReport />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;