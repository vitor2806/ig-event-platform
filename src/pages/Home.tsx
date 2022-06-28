import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import HeroImg from '../components/HeroImg';

export function Home() {
  return (
    <div className="flex flex-col items-center py-[120px] bg-[url('../assets/blur.svg')] bg-cover">
      <Hero />
      <HeroImg />
      <Footer />
    </div>
  );
}
