import { IGameType } from '@thefirstspine/types-rest';
import classicGameType from './classic.game-type';

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
