import React, { ReactNode } from 'react';
import { forwardRef } from 'react';

import { cn } from '@/utils';

interface CardGroupProps {
  className?: string;
  children: ReactNode;
}

export const CardGroup = forwardRef<HTMLDivElement, CardGroupProps>(
  (props, ref) => {
    const { className, children } = props;

    return (
      <div className={cn('space-y-10', className)} ref={ref}>
        {children}
      </div>
    );
  }
);
