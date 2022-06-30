import { Route, Routes } from 'react-router-dom';
import { Event } from './pages/Event';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
export function Router() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/event" element={<Event />} />
      <Route path="/event/lesson/:slug" element={<Event />} />
    </Routes>
  );
}
