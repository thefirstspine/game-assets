import { ICard } from '@thefirstspine/types-rest';

// tslint:disable: max-line-length
const guardianCard: ICard = {
  id: `guardian`,
  text: {
    en: ``,
    fr: `Lorsque cette carte est détruite, vous gagnez {life}2{/life} sans dépasser votre total de départ.`,
  },
  lore: {
    en: ``,
    fr: ``,
  },
  imageUrl: `https://static.thefirstspine.fr/placeholder.png`,
  name: {
    en: ``,
    fr: `Gardien`,
  },
  stats: {
    life: 1,
    capacities: ['grow'],
    bottom: {
      defense: 1,
      strength: 3,
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

export default guardianCard;
