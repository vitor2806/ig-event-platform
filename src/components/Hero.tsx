import { Form } from './Form';
import { Logo } from './Logo';

export function Hero() {
  return (
    <div className="flex items-center justify-center w-full gap-52">
      <div className="flex flex-col max-w-[624px]">
        <Logo />
        <h1 className="text-5xl mt-10">
          Build a <span className="text-blue-500 font-medium">real application</span> from scratch using <span className="text-blue-500 font-medium">React JS</span>
        </h1>
        <span className="text-md text-gray-200 mt-6">In only a week you will domain one of the most used technologies in the web world. You will learn great concepts of react coding, as well good view of GraphQL.</span>
      </div>
      <Form />
    </div>
  );
}
