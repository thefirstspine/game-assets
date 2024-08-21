import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const pocketVolcanoCard: ICard = {
  id: `pocket-volcano`,
  text: {
    en: `When this card is destroyed, add a Lava square here.`,
    fr: `Lorsque cette carte est détruite, placez une case Lave à la place.`,
  },
  lore: {
    en: ``,
    fr: ``,
  },
  imageUrl: `https://static.thefirstspine.fr/placeholder.png`,
  name: {
    en: `Tiny Volcano`,
    fr: `Volcan de Poche`,
  },
  stats: {
    effects: ['pocket-volcano'],
    life: 4,
    capacities: ['grow'],
    bottom: {
      defense: 2,
      strength: 0,
    },
    left: {
      defense: 1,
      strength: 1,
    },
    right: {
      defense: 1,
      strength: 1,
    },
    top: {
      defense: 0,
      strength: 2,
    },
  },
  type: 'artifact',
};

export default pocketVolcanoCard;
