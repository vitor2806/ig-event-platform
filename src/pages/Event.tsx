import { Header } from '../components/Header';
import { PlayerStream } from '../components/Player';
import { Sidebar } from '../components/Sidebar';

export function Event() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        <PlayerStream />
        <Sidebar />
      </main>
    </div>
  );
}
