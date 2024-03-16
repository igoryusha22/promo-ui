import { VariantProps, cva } from 'class-variance-authority';
import { forwardRef } from 'react';

import { cn } from '@/utils';
import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from '@/utils/types';

export const textSize = {
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
};

export const textWeight = {
  thin: 'font-thin',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
  black: 'font-black',
};

const textStyles = cva('w-full', {
  variants: {
    size: textSize,
    weight: textWeight,
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
    italic: {
      true: 'italic',
    },
    underline: {
      true: 'underline underline-offset-2',
    },
  },
});

type TextVariantProps = VariantProps<typeof textStyles>;

type TextProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<
  C,
  TextVariantProps
>;

type TextComponent = <C extends React.ElementType = 'span'>(
  props: TextProps<C>
) => React.ReactElement | null;

// @ts-expect-error - unexpected typing errors
export const Text: TextComponent = forwardRef(
  <C extends React.ElementType = 'span'>(
    props: TextProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const { as, align, size, italic, underline, weight, className, ...rest } =
      props;
    const Component = as || 'span';

    return (
      <Component
        ref={ref}
        className={cn(
          textStyles({
            size,
            weight,
            italic,
            underline,
            align,
            className,
          })
        )}
        {...rest}
      />
    );
  }
);
