import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const ditchCard: ICard = {
  id: `ditch`,
  text: {
    en: `No card can be placed here.`,
    fr: `Aucune carte ne peut être posée sur cette case.`,
  },
  lore: {
    en: ``,
    fr: ``,
  },
  art: 'Teddy Gandon',
  imageUrl: `https://static.thefirstspine.fr/ditch.png`,
  name: {
    en: `Pit`,
    fr: `Fosse`,
  },
  type: 'square',
};

export default ditchCard;
