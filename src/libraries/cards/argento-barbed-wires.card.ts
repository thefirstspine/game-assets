import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const argentoBarbedWiresCard: ICard = {
  id: `argento-barbed-wires`,
  text: {
    en: ``,
    fr: ``,
  },
  lore: {
    en: ``,
    fr: ``,
  },
  art: 'Maylhine, Teddy Gandon',
  imageUrl: `https://static.thefirstspine.fr/argento-barbed-wires.png`,
  name: {
    en: `Argento's Barbed wire`,
    fr: `Barbelés d'Argento`,
  },
  stats: {
    life: 1,
    bottom: {
      defense: 2,
      strength: 1,
    },
    left: {
      defense: 1,
      strength: 3,
    },
    right: {
      defense: 1,
      strength: 3,
    },
    top: {
      defense: 1,
      strength: 4,
    },
  },
  type: 'artifact',
};

export default argentoBarbedWiresCard;
