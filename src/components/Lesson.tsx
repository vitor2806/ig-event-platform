import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

interface LessonProps {
  title: string;
  slug: string | undefined | null;
  availableAt: Date;
  type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
  const isLessonAvailable = isPast(props.availableAt);

  const { slug } = useParams<{ slug: string }>();

  // prettier-ignore
  const availableDateFormatted = format(props.availableAt, "EEEE' • ' MMMM d'th • 'kk'h'mm");

  const isActiveLesson = slug === props.slug;

  return (
    <Link to={isLessonAvailable ? `/event/lesson/${props.slug}` : '#'} className={classNames('group', { 'pointer-events-none': !isLessonAvailable, 'pointer-events-auto': isLessonAvailable })}>
      <span className="text-gray-300">{availableDateFormatted}</span>
      <div className={classNames('rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500', { 'bg-green-500': isActiveLesson })}>
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className="flex items-center gap-2 text-sm text-blue-500 font-medium">
              <CheckCircle size={20} />
              Content released
            </span>
          ) : (
            <span className="flex items-center gap-2 text-sm text-orange-500 font-medium">
              <Lock size={20} />
              Soon
            </span>
          )}

          <span
            className={classNames('text-xs rounded py-[0.125rem] px-2 text-white border font-bold', {
              'border-white': isActiveLesson,
              'border-green-300': !isActiveLesson,
            })}
          >
            {props.type === 'live' ? 'LIVE' : 'CLASS'}
          </span>
        </header>
        <strong className="block text-gray-200 mt-5">{props.title}</strong>
      </div>
    </Link>
  );
}
