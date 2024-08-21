import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const guardianCard: ICard = {
  id: `guardian`,
  text: {
    en: `When this card is destroyed, you win {life}2{/life} without exceeding your starting total.`,
    fr: `Lorsque cette carte est détruite, vous gagnez {life}2{/life} sans dépasser votre total de départ.`,
  },
  lore: {
    en: ``,
    fr: ``,
  },
  imageUrl: `https://static.thefirstspine.fr/placeholder.png`,
  name: {
    en: `Guardian`,
    fr: `Gardien`,
  },
  stats: {
    effects: ['guardian'],
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
