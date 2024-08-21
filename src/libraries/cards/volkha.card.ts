import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const volkhaCard: ICard = {
  id: `volkha`,
  text: {
    en: `If this card is destroyed, put it back on the game board around you.`,
    fr: `Si cette carte est détruite, remettez-la sur le plateau de jeu autour de vous.`,
  },
  lore: {
    en: `« Son, from the fire you will live. And from the fire, you will be reborn. »\n- Mara, prophetess of Exodia.`,
    fr: `« Fils, du feu tu vivras. Et du feu, tu renaîtras. »\n- Mara, prophétesse d'Exodia.`,
  },
  imageUrl: `https://static.thefirstspine.fr/volkha.png`,
  name: {
    en: `Volk'ha`,
    fr: `Volk'ha`,
  },
  stats: {
    effects: ['volkha'],
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
