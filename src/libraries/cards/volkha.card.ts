import { ICard } from '@thefirstspine/types-rest';

// tslint:disable: max-line-length
const volkhaCard: ICard = {
  id: `volkha`,
  text: {
    en: ``,
    fr: `Si cette carte est détruite, remettez-la sur le plateau de jeu autour de vous.`,
  },
  lore: {
    en: ``,
    fr: `« Fils, du feu tu vivras. Et du feu, tu renaîtras. »\n- Mara, prophétesse d'Exodia.`,
  },
  imageUrl: `https://static.thefirstspine.fr/volkha.png`,
  name: {
    en: ``,
    fr: `Volk'ha`,
  },
  stats: {
    life: 3,
    capacities: ['burdenEarth'],
    bottom: {
      defense: 1,
      strength: 6,
    },
    left: {
      defense: 0,
      strength: 2,
    },
    right: {
      defense: 0,
      strength: 2,
    },
    top: {
      defense: 1,
      strength: 3,
    },
  },
  type: 'creature',
};

export default volkhaCard;
