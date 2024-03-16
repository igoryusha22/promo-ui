import React, { ReactNode } from 'react';
import { forwardRef } from 'react';

import { Link } from '@/Link';
import { Text } from '@/Text';
import { cn } from '@/utils';

interface CardProps {
  className?: string;
  isExternal?: boolean;
  href: string;
  title: ReactNode;
  description: ReactNode;
  cta: ReactNode;
}

export const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { className, isExternal, cta, description, href, title } = props;

  return (
    <div className={cn('flex flex-col', className)} ref={ref}>
      <Link
        className="mb-1"
        href={href}
        variant="hoverable"
        size="lg"
        weight="bold"
        isExternal={isExternal}
      >
        {title}
      </Link>

      <Text as="p" className="mb-2">
        {description}
      </Text>

      <Link
        className="text-secondary hover:text-primary"
        href={href}
        variant="hoverable"
        size="sm"
        isExternal={isExternal}
      >
        {cta} →
      </Link>
    </div>
  );
});
