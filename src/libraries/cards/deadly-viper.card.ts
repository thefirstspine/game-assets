import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const deadlyViperCard: ICard = {
  id: `deadly-viper`,
  text: {
    en: ``,
    fr: ``,
  },
  lore: {
    en: `« There is no God. »\n- Merlin, Exodia's latest scholar.`,
    fr: `« Il n'y a pas de Dieu. »\n- Merlin, dernier érudit d'Exodia.`,
  },
  art: 'Maylhine',
  imageUrl: `https://static.thefirstspine.fr/deadly-viper.png`,
  name: {
    en: `Deadly Viper`,
    fr: `Vipère mortelle`,
  },
  stats: {
    bottom: {
      defense: 0,
      strength: 3,
    },
    capacities: ['run'],
    left: {
      defense: 1,
      strength: 1,
    },
    life: 5,
    right: {
      defense: 1,
      strength: 1,
    },
    top: {
      defense: 1,
      strength: 2,
    },
  },
  type: 'creature',
};

export default deadlyViperCard;
