import { Header } from '../components/Header';
import { Lesson } from '../components/Lesson';
import { Player } from '../components/Player';
import { Sidebar } from '../components/Sidebar';

export function Event() {
  return (
    <>
      <Header />
      <Sidebar />
      <Lesson />
      <Player />
    </>
  );
}
