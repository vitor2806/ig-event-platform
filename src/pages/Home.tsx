import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';

export function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center py-[120px] bg-[url('../assets/blur.svg')] bg-cover bg-blur bg-no-repeat">
      <Hero />
      <img src="src/assets/background-signup.png" alt="Technologies floating in vscode" className="mt-10" />
      <Footer />
    </div>
  );
}
