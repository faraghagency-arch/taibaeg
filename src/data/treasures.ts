import { Treasure } from '../types';
import { EAST_TREASURES } from './treasuresEast';
import { WEST_TEMPLES } from './treasuresWestTemples';
import { WEST_TOMBS } from './treasuresWestTombs';

export const INITIAL_TREASURES: Treasure[] = [
  ...EAST_TREASURES,
  ...WEST_TEMPLES,
  ...WEST_TOMBS,
];

export { EAST_TREASURES, WEST_TEMPLES, WEST_TOMBS };
