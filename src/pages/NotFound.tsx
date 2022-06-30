export function NotFound() {
  return (
    <div className="min-h-screen flex justify-center items-center gap-8">
      <img src="/src/assets/blackhole.svg" alt="Green cartoon blackhole" className="w-[8%] opacity-75" />
      <div className="flex flex-col gap-4 justify-center items-center leading-relaxed">
        <strong className="text-4xl">404</strong>
        <strong className="text-lg ">This planet has not been found</strong>
        <a className="bg-green-500 rounded w-fit px-2 py-1" href="/">
          Return to safe area
        </a>
      </div>
    </div>
  );
}
