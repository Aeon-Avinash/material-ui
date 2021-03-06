import * as React from 'react';
import { OverridableComponent, SimplifiedPropsOf } from '../OverridableComponent';
import { Omit } from '..';
import { TypographyProps } from '../Typography';

declare const Link: OverridableComponent<{
  props: LinkBaseProps & {
    TypographyClasses?: TypographyProps['classes'];
    underline?: 'none' | 'hover' | 'always';
  };
  defaultComponent: 'a';
  classKey: LinkClassKey;
}>;

export type LinkClassKey =
  | 'root'
  | 'underlineNone'
  | 'underlineHover'
  | 'underlineAlways'
  | 'button';

export type LinkBaseProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  Omit<TypographyProps, 'component'>;

export type LinkProps = SimplifiedPropsOf<typeof Link>;

export default Link;
