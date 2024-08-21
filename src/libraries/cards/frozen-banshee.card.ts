import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const frozenBansheeCard: ICard = {
  id: `frozen-banshee`,
  text: {
    en: ``,
    fr: ``,
  },
  lore: {
    en: `« I'm just the messenger. »\n- A banshee.`,
    fr: `« Je ne suis que la messagère. »\n- Une banshee.`,
  },
  art: 'Maylhine',
  imageUrl: `https://static.thefirstspine.fr/frozen-banshee.png`,
  name: {
    en: `Frozen Banshee`,
    fr: `Banshee Gelée`,
  },
  stats: {
    life: 7,
    bottom: {
      defense: 3,
      strength: 1,
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
      defense: 2,
      strength: 2,
    },
  },
  type: 'creature',
};

export default frozenBansheeCard;
