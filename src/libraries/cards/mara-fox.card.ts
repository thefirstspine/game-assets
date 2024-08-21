import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const maraFoxCard: ICard = {
  id: `mara-fox`,
  text: {
    en: ``,
    fr: ``,
  },
  art: 'Maylhine, Teddy Gandon',
  lore: {
    en: ``,
    fr: ``,
  },
  imageUrl: `https://static.thefirstspine.fr/mara-fox.png`,
  name: {
    en: `Mara's Fox`,
    fr: `Renard de Mara`,
  },
  stats: {
    life: 3,
    capacities: ['run'],
    bottom: {
      defense: 0,
      strength: 4,
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
      defense: 0,
      strength: 3,
    },
  },
  type: 'creature',
};

export default maraFoxCard;
