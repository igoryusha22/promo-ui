import React, { ReactNode } from 'react';
import { forwardRef } from 'react';

import { cn } from '@/utils';

interface TextGroupProps {
  className?: string;
  children: ReactNode;
}

export const TextGroup = forwardRef<HTMLDivElement, TextGroupProps>(
  (props, ref) => {
    const { className, children } = props;

    return (
      <div className={cn('flex flex-col space-y-6', className)} ref={ref}>
        {children}
      </div>
    );
  }
);
