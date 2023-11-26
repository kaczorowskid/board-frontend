import { ColorsType } from './colors';
import { ColorsSchema } from './colors/colorsSchema.types';

export type Theme = ColorsSchema & { colors: ColorsType } & {
  spacing: {
    micro: string;
    mini: string;
    smallest: string;
    smaller: string;
    small: string;
    semiNormal: string;
    normal: string;
    semiLarge: string;
    large: string;
    huge: string;
  };
  fontSize: {
    small: string;
    normal: string;
    semiLarge: string;
    large: string;
    huge: string;
    mega: string;
  };
  borderRadius: {
    smaller: string;
    small: string;
    normal: string;
    semiLarge: string;
    large: string;
  };
};
