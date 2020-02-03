import { ICard } from '../../@shared/rest-shared/card';

// tslint:disable: max-line-length
const theFoxCard: ICard = {
  id: `the-fox`,
  text: {
    en: ``,
    fr: ``,
  },
  art: 'Maylhine',
  lore: {
    en: ``,
    fr: ``,
  },
  imageUrl: `https://static.thefirstspine.fr/the-fox.png`,
  name: {
    en: ``,
    fr: `Le Renard`,
  },
  stats: {
    life: 3,
    capacities: ['run'],
    bottom: {
      defense: 0,
      strenght: 3,
    },
    left: {
      defense: 0,
      strenght: 4,
    },
    right: {
      defense: 0,
      strenght: 4,
    },
    top: {
      defense: 0,
      strenght: 2,
    },
  },
  type: 'creature',
};

export default theFoxCard;
