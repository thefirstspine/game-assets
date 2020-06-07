import { ICard } from '@thefirstspine/types-rest';

// tslint:disable: max-line-length
const growingOakCard: ICard = {
  id: `growing-oak`,
  text: {
    en: ``,
    fr: ``,
  },
  lore: {
    en: ``,
    fr: `« Il croît et grandit. Et un jour, il sera assez fort pour leurs desseins. »\n- Merlin, dernier érudit d'Exodia.`,
  },
  imageUrl: `https://static.thefirstspine.fr/placeholder.png`,
  name: {
    en: ``,
    fr: `Chêne Gandissant`,
  },
  stats: {
    capacities: ['grow'],
    life: 3,
    bottom: {
      defense: 3,
      strength: 0,
    },
    left: {
      defense: 2,
      strength: 1,
    },
    right: {
      defense: 2,
      strength: 1,
    },
    top: {
      defense: 1,
      strength: 2,
      capacity: 'threat',
    },
  },
  type: 'artifact',
};

export default growingOakCard;
