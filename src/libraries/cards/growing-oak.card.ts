import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const growingOakCard: ICard = {
  id: `growing-oak`,
  text: {
    en: ``,
    fr: ``,
  },
  lore: {
    en: `« It grows and grows. And one day he will be strong enough for their purposes. »\n- Merlin, the last scholar from Exodia.`,
    fr: `« Il croît et grandit. Et un jour, il sera assez fort pour leurs desseins. »\n- Merlin, dernier érudit d'Exodia.`,
  },
  imageUrl: `https://static.thefirstspine.fr/growing-oak.png`,
  art: 'Maylhine, Teddy Gandon',
  name: {
    en: `Growing Oak`,
    fr: `Chêne Grandissant`,
  },
  stats: {
    capacities: ['grow'],
    life: 3,
    bottom: {
      defense: 3,
      strength: 0,
    },
    left: {
      defense: 2,
      strength: 1,
    },
    right: {
      defense: 2,
      strength: 1,
    },
    top: {
      defense: 1,
      strength: 2,
      capacity: 'threat',
    },
  },
  type: 'artifact',
};

export default growingOakCard;
