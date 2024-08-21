import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const frozenFoxCard: ICard = {
  id: `frozen-fox`,
  text: {
    en: ``,
    fr: ``,
  },
  art: 'Maylhine',
  lore: {
    en: ``,
    fr: ``,
  },
  imageUrl: `https://static.thefirstspine.fr/frozen-fox.png`,
  name: {
    en: `Frozen Fox`,
    fr: `Renard Gelé`,
  },
  stats: {
    life: 5,
    capacities: ['run'],
    bottom: {
      defense: 1,
      strength: 3,
    },
    left: {
      defense: 1,
      strength: 4,
    },
    right: {
      defense: 1,
      strength: 4,
    },
    top: {
      defense: 1,
      strength: 2,
    },
  },
  type: 'creature',
};

export default frozenFoxCard;
