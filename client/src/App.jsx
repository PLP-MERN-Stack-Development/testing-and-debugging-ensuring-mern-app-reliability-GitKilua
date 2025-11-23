  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  import { Provider } from 'react-redux';
  import store from './store/store';
  import ErrorBoundary from './components/ErrorBoundary';
  import Home from './pages/Home';
  import BugReport from './pages/BugReport';

  function App() {
    return (
      <Provider store={store}>
        <ErrorBoundary>
          <Router>
            <div className="min-h-screen bg-gray-100 p-4">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/report" element={<BugReport />} />
              </Routes>
            </div>
          </Router>
        </ErrorBoundary>
      </Provider>
    );
  }

  export default App;
  