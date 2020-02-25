import { ICard } from '../../@shared/rest-shared/card';

// tslint:disable: max-line-length
const greatOldCard: ICard = {
  id: `great-old`,
  text: {
    en: ``,
    fr: `Cette carte est une carte de collection ne peut être jouée que pendant le Cycle du Grand Ancien.`,
  },
  lore: {
    en: ``,
    fr: `« Il ne devrait pas être ici. »\n- Merlin, dernier érudit d'Exodia`,
  },
  imageUrl: `https://static.thefirstspine.fr/placeholder.png`,
  name: {
    en: ``,
    fr: `Grand Ancien`,
  },
  stats: {
    capacities: ['burdenEarth'],
    life: 6,
    bottom: {
      defense: 2,
      strength: 8,
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
      strength: 6,
    },
  },
  type: 'creature',
};

export default greatOldCard;
