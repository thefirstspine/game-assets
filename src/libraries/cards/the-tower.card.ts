import { ICard } from '../../@shared/rest-shared/card';

// tslint:disable: max-line-length
const theTowerCard: ICard = {
  id: `the-tower`,
  text: {
    en: ``,
    fr: ``,
  },
  art: 'Maylhine',
  lore: {
    en: ``,
    fr: `« Une dame de pierre qui protège et punit. »\n- Mara, prophétesse d'Exodia`,
  },
  imageUrl: `https://static.thefirstspine.fr/the-tower.png`,
  name: {
    en: ``,
    fr: `La Tour`,
  },
  stats: {
    bottom: {
      defense: 3,
      strength: 3,
    },
    left: {
      defense: 1,
      strength: 3,
    },
    life: 5,
    right: {
      defense: 1,
      strength: 3,
    },
    top: {
      capacity: 'threat',
      defense: 2,
      strength: 3,
    },
  },
  type: 'artifact',
};

export default theTowerCard;
