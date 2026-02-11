import './styles/App.css';
import { Route, Routes } from 'react-router';

import { HomePage } from './features/home/pages/home.tsx';
import { DashboardLayout } from './shared/layouts/dashboard_layout.tsx';
import { PublicLayout } from './shared/layouts/public_layout.tsx';
import { RequireAuth } from './shared/routes/RequireAuth.tsx';

function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>

      <Route
        element={
          <RequireAuth>
            <DashboardLayout />
          </RequireAuth>
        }
      />
    </Routes>
  );
}

export default App;
