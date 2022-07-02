import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import mockup from '../assets/background-signup.png';

export function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center py-[120px] bg-[url('../assets/blur.svg')] bg-cover bg-blur bg-no-repeat">
      <Hero />
      <img src={mockup} alt="Code mockup in visual studio code" className="mt-10" />
      <Footer />
    </div>
  );
}
