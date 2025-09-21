import { cva } from 'class-variance-authority';
import { type JSX } from 'react';

const typographyVariants = cva('', {
  variants: {
    variant: {
      h1: 'scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance',
      h2: 'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
      h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
      h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
      p: 'leading-7 [&:not(:first-child)]:mt-6',
      blockquote: 'mt-6 border-l-2 pl-6 italic',
      code: 'bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
      lead: 'text-muted-foreground text-xl',
      large: 'text-lg font-semibold',
      small: 'text-sm leading-none font-medium',
      muted: 'text-muted-foreground text-sm',
    },
  },
  defaultVariants: {
    variant: 'p',
  },
});

type POSSIBLE_VARIANTS =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'p'
  | 'blockquote'
  | 'code'
  | 'lead'
  | 'large'
  | 'small'
  | 'muted';

interface TypographyProps {
  variant?: POSSIBLE_VARIANTS;
  className?: string;
  children: React.ReactNode;
}

const tagMap: Record<POSSIBLE_VARIANTS, keyof JSX.IntrinsicElements> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  p: 'p',
  blockquote: 'blockquote',
  code: 'code',
  lead: 'p',
  large: 'p',
  small: 'small',
  muted: 'p',
};

export const Typography = ({
  variant = 'p',
  className,
  children,
  ...props
}: TypographyProps) => {
  const Tag = tagMap[variant] || 'p';

  return (
    <Tag
      data-slot="typography"
      className={typographyVariants({ variant, className })}
      {...props}
    >
      {children}
    </Tag>
  );
};
