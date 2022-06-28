import { DiscordLogo, Lightning } from 'phosphor-react';
import { Button } from './Button';

export function Player() {
  return (
    <div className="flex-1">
      <div className="flex justify-center bg-black">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video"></div>
      </div>
      <div className="p-8 max-w-[1100px] mx-auto">
        <section className="flex items-start gap-16">
          <main className="flex-1">
            <h1 className="text-2xl font-bold">Aula 01</h1>
            <p className="mt-4 text-gray-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus hic vero quae quaerat enim impedit nihil asperiores quasi possimus, assumenda ex adipisci? Quam, ducimus id porro hic minus molestiae amet.</p>
          </main>
          <aside className="flex flex-col gap-4">
            <Button title="Discord Server" variant="primary" icon={<DiscordLogo size={24} />} />
            <Button title="challenges" variant="secondary" icon={<Lightning size={24} />} />
          </aside>
        </section>
        <section></section>
      </div>
    </div>
  );
}
