import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const bansheeCard: ICard = {
  id: `banshee`,
  text: {
    en: ``,
    fr: ``,
  },
  lore: {
    en: `« I'm just the messenger. »\n- A banshee.`,
    fr: `« Je ne suis que la messagère. »\n- Une banshee.`,
  },
  art: 'Maylhine',
  imageUrl: `https://static.thefirstspine.fr/banshee.png`,
  name: {
    en: `Banshee`,
    fr: `Banshee`,
  },
  stats: {
    life: 5,
    bottom: {
      defense: 2,
      strength: 1,
    },
    left: {
      defense: 0,
      strength: 4,
    },
    right: {
      defense: 0,
      strength: 4,
    },
    top: {
      defense: 1,
      strength: 2,
    },
  },
  type: 'creature',
};

export default bansheeCard;
