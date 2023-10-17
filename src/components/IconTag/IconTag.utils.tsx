import { ReactNode } from 'react';
import { FiChevronsUp, FiChevronUp, FiChevronDown } from 'react-icons/fi';

type Prios = 'high' | 'medium' | 'low';

type IconMapper = Record<Prios, ReactNode>;
type ColorMapper = Record<Prios, string>;
type NameMapper = Record<Prios, string>;

export const iconMapper: IconMapper = {
  high: <FiChevronsUp />,
  medium: <FiChevronUp />,
  low: <FiChevronDown />
};

export const colorMapper: ColorMapper = {
  high: 'red',
  medium: 'green',
  low: 'blue'
};

export const nameMapper: NameMapper = {
  high: 'High',
  medium: 'Medium',
  low: 'Low'
};
