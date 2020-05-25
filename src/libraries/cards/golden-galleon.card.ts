import { ICard } from '../../@shared/rest-shared/card';

// tslint:disable: max-line-length
const goldenGalleonCard: ICard = {
  id: `golden-galleon`,
  text: {
    en: `Vous remportez 1 Gallion d’Or si vous avez cette carte dans votre main à la fin de la partie. Cette carte est une carte de collection et ne peut être utilisée que pendant le Cycle du Trésor 2020.`,
    fr: ``,
  },
  lore: {
    en: ``,
    fr: ``,
  },
  art: 'Maylhine',
  imageUrl: `https://static.thefirstspine.fr/golden-galleon.png`,
  name: {
    en: ``,
    fr: `Gallion d'Or`,
  },
  stats: {
    life: 1,
    bottom: {
      defense: 0,
      strength: 0,
    },
    left: {
      defense: 0,
      strength: 0,
    },
    right: {
      defense: 0,
      strength: 0,
    },
    top: {
      defense: 0,
      strength: 0,
    },
  },
  type: 'artifact',
};

export default goldenGalleonCard;
