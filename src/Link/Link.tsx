import { VariantProps, cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import InternalLink from 'next/link';

import { cn } from '@/utils';

import { textSize, textWeight } from '@/Text/Text';
import { PolymorphicComponentPropsWithRef } from '@/utils/types';

const linkStyles = cva('', {
  variants: {
    variant: {
      solid: 'underline',
      hoverable: ' hover:underline',
    },
    size: textSize,
    weight: textWeight,
  },
});

type LinkVariantProps = VariantProps<typeof linkStyles>;

interface LinkProps
  extends PolymorphicComponentPropsWithRef<'a', LinkVariantProps> {
  isExternal?: boolean;
  href: string;
  prefetch?: boolean;
}

type LinkComponent = (props: LinkProps) => React.ReactElement | null;

// @ts-expect-error - unexpected typing errors
export const Link: LinkComponent = forwardRef((props: LinkProps, ref) => {
  const {
    className,
    isExternal = false,
    size,
    variant,
    weight,
    prefetch = false,
    ...rest
  } = props;

  const linkClassName = cn(linkStyles({ variant, weight, className, size }));

  const linkProps = {
    className: linkClassName,
    ref,
    ...rest,
  };

  if (isExternal) {
    return <a rel="noopener noreferrer" target="_blank" {...linkProps} />;
  }

  return <InternalLink prefetch={prefetch} {...linkProps} />;
});
