import { IGameType } from '@thefirstspine/types-game';

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
      { x: 3, y: 0 },
      { x: 3, y: 6 },
    ],
    setup: {
    },
  };
}
