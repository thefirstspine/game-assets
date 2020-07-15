import { IGameType } from '@thefirstspine/types-rest';
import classicGameType from './classic.game-type';
import ditchCard from '../cards/ditch';

const quickGameType: IGameType = {
  ...classicGameType,
  id: 'quick',
  name: {
    fr: `Partie rapide`,
    en: `Quick game`,
  },
  description: {
    fr: `Jouez une partie rapide non classée. Parfait pour découvrir le jeu !`,
    en: `Play an unclassified fast game. Perfect for discovering the game!`,
  },
  origins: [],
  destinies: ['conjurer', 'hunter', 'sorcerer', 'summoner'],
  players: [
    { x: 3, y: 1 },
    { x: 3, y: 5 },
  ],
  setup: {
    '0-0': ditchCard,
    '0-1': ditchCard,
    '0-2': ditchCard,
    '0-3': ditchCard,
    '0-4': ditchCard,
    '0-5': ditchCard,
    '0-6': ditchCard,
    '6-0': ditchCard,
    '6-1': ditchCard,
    '6-2': ditchCard,
    '6-3': ditchCard,
    '6-4': ditchCard,
    '6-5': ditchCard,
    '6-6': ditchCard,
    '1-0': ditchCard,
    '2-0': ditchCard,
    '3-0': ditchCard,
    '4-0': ditchCard,
    '5-0': ditchCard,
    '1-6': ditchCard,
    '2-6': ditchCard,
    '3-6': ditchCard,
    '4-6': ditchCard,
    '5-6': ditchCard,
  },
  // Fields below are deprecated
  space: {
    minX: 1,
    minY: 1,
    maxX: 5,
    maxY: 5,
  },
  loots: {
    victory: [
    ],
    defeat: [
    ],
  },
  matchmakingMode: 'asap',
};

export default quickGameType;
