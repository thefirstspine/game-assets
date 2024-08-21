import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const theWallCard: ICard = {
  id: `the-wall`,
  text: {
    en: ``,
    fr: ``,
  },
  lore: {
    en: `« A little something to protect you. »\n- Merlin, Exodia's latest scholar.`,
    fr: `« Un petit quelque chose pour vous protéger. »\n- Merlin, dernier érudit d'Exodia.`,
  },
  imageUrl: `https://static.thefirstspine.fr/the-wall.png`,
  art: 'Teddy Gandon',
  name: {
    en: `The Wall`,
    fr: `La Muraille`,
  },
  stats: {
    life: 5,
    bottom: {
      defense: 0,
      strength: 1,
    },
    left: {
      defense: 1,
      strength: 0,
    },
    right: {
      defense: 1,
      strength: 0,
    },
    top: {
      defense: 1,
      strength: 2,
    },
  },
  type: 'artifact',
};

export default theWallCard;
