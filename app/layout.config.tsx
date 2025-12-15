import { HeaderPro } from '@/components/LandingPage/header-pro';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { PaletteIcon } from 'lucide-react';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className='flex items-center'>
          <PaletteIcon className='mr-2 w-5 h-5 text-green-500 dark:text-green-400' />
          <span className="hidden md:inline-flex items-center text-lg font-bold tracking-tight text-black dark:text-white">
            Apex UI
          </span>
        </div>
      ),
    },
  };
}