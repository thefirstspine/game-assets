import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const torturerCard: ICard = {
  id: `torturer`,
  text: {
    en: `When this card arrives on the game board, you lose {life}1{/life} and win {strength}1{/strength}.`,
    fr: `Lorsque cette carte arrive sur le plateau de jeu, vous perdez {life}1{/life} et gagnez {strength}1{/strength}.`,
  },
  lore: {
    en: ``,
    fr: ``,
  },
  art: '',
  imageUrl: `https://static.thefirstspine.fr/placeholder.png`,
  name: {
    en: `Torturer`,
    fr: `Tortureur`,
  },
  stats: {
    effects: ['torturer'],
    life: 3,
    capacities: ['grow'],
    bottom: {
      defense: 2,
      strength: 0,
    },
    left: {
      defense: 0,
      strength: 2,
      capacity: 'threat',
    },
    right: {
      defense: 0,
      strength: 2,
      capacity: 'threat',
    },
    top: {
      defense: 1,
      strength: 3,
      capacity: 'threat',
    },
  },
  type: 'artifact',
};

export default torturerCard;
