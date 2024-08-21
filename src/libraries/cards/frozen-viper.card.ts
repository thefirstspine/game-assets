import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const frozenViperCard: ICard = {
  id: `frozen-viper`,
  text: {
    en: ``,
    fr: ``,
  },
  lore: {
    en: `« There is no God. »\n- Merlin, Exodia's latest scholar.`,
    fr: `« Il n'y a pas de Dieu. »\n- Merlin, dernier érudit d'Exodia.`,
  },
  art: 'Maylhine',
  imageUrl: `https://static.thefirstspine.fr/frozen-viper.png`,
  name: {
    en: `Frozen Viper`,
    fr: `Vipère gelée`,
  },
  stats: {
    bottom: {
      defense: 1,
      strength: 3,
    },
    capacities: ['run'],
    left: {
      defense: 2,
      strength: 1,
    },
    life: 7,
    right: {
      defense: 2,
      strength: 1,
    },
    top: {
      defense: 2,
      strength: 2,
    },
  },
  type: 'creature',
};

export default frozenViperCard;
