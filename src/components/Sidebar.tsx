import { useGetLessonsQuery } from '../graphql/generated';
import { Lesson } from './Lesson';

export function Sidebar() {
  const { data } = useGetLessonsQuery();

  return (
    <>
      <aside className="MOBILE fixed bottom-0 top-0 left-0 right-0 w-full z-50 bg-gray-700 p-6 border-l border-gray-600 xl:hidden">
        <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">Class schedule</span>
        <div className="flex flex-col gap-8">
          {data?.lessons.map(lesson => {
            return <Lesson key={lesson.id} title={lesson.title} slug={lesson.slug} availableAt={new Date(lesson.availableAt)} type={lesson.lessonType} />;
          })}
        </div>
      </aside>
      <aside className="DESKTOP w-[348px] bg-gray-700 p-6 border-l hidden xl:flex xl:flex-col border-gray-600">
        <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">Class schedule</span>
        <div className="flex flex-col gap-8">
          {data?.lessons.map(lesson => {
            return <Lesson key={lesson.id} title={lesson.title} slug={lesson.slug} availableAt={new Date(lesson.availableAt)} type={lesson.lessonType} />;
          })}
        </div>
      </aside>
    </>
  );
}
