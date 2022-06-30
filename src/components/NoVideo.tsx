import { Warning } from 'phosphor-react';

export function NoVideo() {
  return (
    <div className="flex-1 flex flex-col justify-center items-center gap-3 leading-tight">
      <Warning size={64} />
      <p className="text-3xl">No video found</p>
      <small className="text-blue-500">try selecting another one</small>
    </div>
  );
}
