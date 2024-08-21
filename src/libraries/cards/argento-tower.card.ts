import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const argentoTowerCard: ICard = {
  id: `argento-tower`,
  text: {
    en: ``,
    fr: ``,
  },
  art: 'Maylhine, Teddy Gandon',
  lore: {
    en: ``,
    fr: ``,
  },
  imageUrl: `https://static.thefirstspine.fr/argento-tower.png`,
  name: {
    en: `Argento's Tower`,
    fr: `Tour d'Argento`,
  },
  stats: {
    bottom: {
      defense: 4,
      strength: 3,
    },
    left: {
      defense: 2,
      strength: 3,
    },
    life: 5,
    right: {
      defense: 2,
      strength: 3,
    },
    top: {
      capacity: 'threat',
      defense: 3,
      strength: 3,
    },
  },
  type: 'artifact',
};

export default argentoTowerCard;
