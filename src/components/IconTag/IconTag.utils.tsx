import { FiChevronsUp, FiChevronUp, FiChevronDown } from 'react-icons/fi';
import { Prio } from './IconTag.types';

type IconMapper = Record<Prio, JSX.Element>;
type ColorMapper = Record<Prio, string>;
type NameMapper = Record<Prio, string>;

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
