import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const burdenEarthCard: ICard = {
  id: `burden-earth`,
  text: {
    en: `No card can be placed here during this turn.`,
    fr: `Aucune carte ne peut être posée sur cette case pendant ce tour.`,
  },
  lore: {
    en: ``,
    fr: ``,
  },
  art: 'Teddy Gandon',
  imageUrl: `https://static.thefirstspine.fr/burden-earth.png`,
  name: {
    en: `Burder Earth`,
    fr: `Terre brûlée`,
  },
  type: 'square',
};

export default burdenEarthCard;
