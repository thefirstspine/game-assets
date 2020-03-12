import { ICard } from '../../@shared/rest-shared/card';

// tslint:disable: max-line-length
const theWallCard: ICard = {
  id: `the-wall`,
  text: {
    en: ``,
    fr: ``,
  },
  lore: {
    en: ``,
    fr: `« Un petit quelque chose pour vous protéger. »\n- Merlin, dernier érudit d'Exodia.`,
  },
  imageUrl: `https://static.thefirstspine.fr/placeholder.png`,
  name: {
    en: ``,
    fr: `La Muraille`,
  },
  stats: {
    life: 5,
    bottom: {
      defense: 0,
      strenght: 1,
    },
    left: {
      defense: 1,
      strenght: 0,
    },
    right: {
      defense: 1,
      strenght: 0,
    },
    top: {
      defense: 1,
      strenght: 2,
    },
  },
  type: 'artifact',
};

export default theWallCard;
