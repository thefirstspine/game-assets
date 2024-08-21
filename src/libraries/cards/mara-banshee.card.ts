import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const maraBansheeCard: ICard = {
  id: `mara-banshee`,
  text: {
    en: ``,
    fr: ``,
  },
  lore: {
    en: ``,
    fr: ``,
  },
  art: 'Maylhine, Teddy Gandon',
  imageUrl: `https://static.thefirstspine.fr/mara-banshee.png`,
  name: {
    en: `Mara's Banshee`,
    fr: `Banshee de Mara`,
  },
  stats: {
    life: 5,
    bottom: {
      defense: 2,
      strength: 2,
    },
    left: {
      defense: 0,
      strength: 5,
    },
    right: {
      defense: 0,
      strength: 5,
    },
    top: {
      defense: 1,
      strength: 3,
    },
  },
  type: 'creature',
};

export default maraBansheeCard;
