import { GithubLogo } from 'phosphor-react';

export function Footer() {
  return (
    <div className="bg-gray-700 border-t-2 border-gray-600 w-full fixed bottom-0 p-5 flex items-center gap-6">
      <a href="https://github.com/vitor2806" target={'_blank'} className="flex items-center gap-2">
        <GithubLogo size={26} />
        <span className="text-lg font-medium">Vitor Rafael</span>
      </a>
      <div className="flex justify-between flex-1 text-gray-300 text-xs">
        <span>All rights reserved</span>
        <span>Privacy Policy</span>
      </div>
    </div>
  );
}
