import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import { Link } from 'react-router-dom';

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export function Lesson({ title, slug, availableAt, type }: LessonProps) {
  const isLessonAvailable = isPast(availableAt);
  // prettier-ignore
  const availableDateFormatted = format(availableAt, "EEEE' • ' MMMM d'th • 'kk'h'mm");
  return (
    <Link to={`/event/lesson/${slug}`} className="group">
      <span className="text-gray-300">{availableDateFormatted}</span>
      <div className="rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500">
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
          <span className="text-xs rounded px-2 py-[0.125rem] border border-green-300 text-green-200 font-bold">{type === 'live' ? 'LIVE' : 'CLASS'}</span>
        </header>
        <strong className="block text-gray-200 mt-5">{title}</strong>
      </div>
    </Link>
  );
}
