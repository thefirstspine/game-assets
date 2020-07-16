import { IGameType } from '@thefirstspine/types-rest';

export default function(): IGameType {
  return {
    id: 'standard',
    name: {
      fr: `Partie standard`,
      en: `Standard game`,
    },
    description: {
      fr: `Jouez une partie standard non classée.`,
      en: `Play an unranked standard game.`,
    },
    destinies: ['conjurer', 'summoner', 'sorcerer', 'hunter'],
    origins: ['healer', 'architect', 'priest', 'blacksmith'],
    players: [
      { x: 3, y: 1 },
      { x: 3, y: 5 },
    ],
    setup: {
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
}
