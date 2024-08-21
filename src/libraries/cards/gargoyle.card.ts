import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const gargoyleCard: ICard = {
  id: `gargoyle`,
  text: {
    en: ``,
    fr: ``,
  },
  lore: {
    en: `« This thing from Elsewhere. »\n- Merlin, Exodia's latest scholar.`,
    fr: `« Cette chose, venue d'Ailleurs. »\n- Merlin, dernier érudit d'Exodia.`,
  },
  imageUrl: `https://static.thefirstspine.fr/placeholder.png`,
  name: {
    en: `Gargoyle`,
    fr: `Gargouille`,
  },
  stats: {
    life: 5,
    capacities: ['run'],
    bottom: {
      defense: 2,
      strength: 1,
    },
    left: {
      defense: 2,
      strength: 3,
    },
    right: {
      defense: 2,
      strength: 3,
    },
    top: {
      defense: 2,
      strength: 3,
      capacity: 'threat',
    },
  },
  type: 'artifact',
};

export default gargoyleCard;
