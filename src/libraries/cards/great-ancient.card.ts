import { ICard } from '@thefirstspine/types-rest';

// tslint:disable: max-line-length
const greatAncientCard: ICard = {
  id: `great-ancient`,
  text: {
    en: `This card is a collection card can only be played during the Cycle of the Grand Ancient.`,
    fr: `Cette carte est une carte de collection ne peut être jouée que pendant le Cycle du Grand Ancien.`,
  },
  lore: {
    en: `« He shouldn't be here. »\n- Merlin, Exodia's latest scholar`,
    fr: `« Il ne devrait pas être ici. »\n- Merlin, dernier érudit d'Exodia`,
  },
  imageUrl: `https://static.thefirstspine.fr/great-ancient.png`,
  name: {
    en: `Great Ancient`,
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

export default greatAncientCard;
