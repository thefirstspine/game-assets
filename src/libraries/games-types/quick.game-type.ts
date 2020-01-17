import { IGameType } from '../../@shared/rest-shared/entities';
import classicGameType from './classic.game-type';

const quickGameType: IGameType = {
  ...classicGameType,
  id: 'quick',
  name: {
    fr: `Partie rapide`,
    en: ``,
  },
  description: {
    fr: `Jouez une partie rapide non classée. Parfait pour découvrir le jeu !`,
    en: ``,
  },
  origins: [],
  destinies: ['conjurer', 'hunter', 'sorcerer', 'summoner'],
  players: [
    { x: 3, y: 1 },
    { x: 3, y: 5 },
  ],
  space: {
    minX: 1,
    minY: 1,
    maxX: 5,
    maxY: 5,
  },
  loots: {
    victory: [
      {name: 'shard', num: 10},
      {name: 'victory-mark', num: 1},
    ],
    defeat: [
      {name: 'defeat-mark', num: 1},
    ],
  },
  matchmakingMode: 'asap',
};

export default quickGameType;
