import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const veneniagoraCard: ICard = {
  id: `veneniagora`,
  text: {
    en: ``,
    fr: ``,
  },
  art: 'Maylhine',
  lore: {
    en: `« It is also called "Basil of Death". »\n- Enihlyam, illustrator of the Faith.`,
    fr: `« On l'appelle aussi "Basilic de la Mort". »\n- Enihlyam, illustratrice de la Foi.`,
  },
  imageUrl: `https://static.thefirstspine.fr/veneniagora.png`,
  name: {
    en: `Veneniagora`,
    fr: `Vénéniagora`,
  },
  stats: {
    life: 3,
    bottom: {
      defense: 1,
      strength: 2,
    },
    left: {
      defense: 1,
      strength: 2,
    },
    right: {
      defense: 1,
      strength: 2,
    },
    top: {
      defense: 0,
      strength: 3,
    },
  },
  type: 'creature',
};

export default veneniagoraCard;
