import { HashRouter, Routes, Route } from 'react-router-dom';
import { QueueStoreProvider } from './store/QueueStore';
import Layout from './components/Layout';
import WorklistPage from './pages/WorklistPage';
import MonitorPage from './pages/MonitorPage';

function App() {
  return (
    <QueueStoreProvider>
      <HashRouter>
        <Routes>
          <Route path="/monitor" element={<MonitorPage />} />
          <Route element={<Layout />}>
            <Route path="/" element={<WorklistPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </QueueStoreProvider>
  );
}

export default App;
