import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from 'phosphor-react';
import { ButtonLink } from './ButtonLink';
import { DefaultUi, Player, Youtube } from '@vime/react';
import '@vime/core/themes/default.css';
import { useGetLessonBySlugQuery } from '../graphql/generated';

interface PlayerProps {
  lessonSlug: string;
}

export function PlayerStream(props: PlayerProps) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: props.lessonSlug,
    },
  });

  if (!data || !data.lesson) {
    return (
      <div className="flex-1">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    // Video
    <div className="flex-1">
      <div className="flex justify-center bg-black">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>
      {/* End of video */}

      <div className="p-8 max-w-[1100px] mx-auto">
        {/* Video description */}
        <section className="flex items-start gap-16">
          <main className="flex-1">
            <h1 className="text-2xl font-bold">{data.lesson.title}</h1>
            <p className="mt-4 text-gray-300 leading-relaxed">{data.lesson.description}</p>
            {data.lesson.teacher && (
              <div className="flex items-center gap-4 mt-6">
                <img src={data.lesson.teacher.avatarURL} alt={`${data.lesson.teacher.name} profile picture`} className="h-16 w-16 rounded-full border-2 border-blue-500" />
                <div className="leading-relaxed">
                  <strong className="text-2xl block">{data.lesson.teacher.name}</strong>
                  <span className="text-gray-300 text-sm block">{data.lesson.teacher.bio}</span>
                </div>
              </div>
            )}
          </main>
          <aside className="flex flex-col gap-4">
            <ButtonLink title="Discord Server" variant="primary" icon={<DiscordLogo size={24} />} />
            <ButtonLink title="challenges" variant="secondary" icon={<Lightning size={24} />} />
          </aside>
        </section>
        {/* end of Video description */}
        {/* Video content */}
        <section className="gap-8 mt-20 grid grid-cols-2">
          <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Additional content</strong>
              <p className="text-sm text-gray-300 mt-2">Look for links, assets, and everything used in this class here.</p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight />
            </div>
          </a>
          <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Wallpapers</strong>
              <p className="text-sm text-gray-300 mt-2">Event wallpapers that will make your device more elegant</p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight />
            </div>
          </a>
        </section>
        {/* end of Video content */}
      </div>
    </div>
  );
}
