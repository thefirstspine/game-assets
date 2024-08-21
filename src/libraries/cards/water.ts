import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const waterCard: ICard = {
  id: `water`,
  text: {
    en: `A {creature}creature{/creature} on this card cannot move`,
    fr: `Une {creature}créature{/creature} sur cette carte ne peut pas se déplacer`,
  },
  lore: {
    en: ``,
    fr: ``,
  },
  art: 'Teddy Gandon',
  imageUrl: `https://static.thefirstspine.fr/water.png`,
  name: {
    en: `Water`,
    fr: `Eau`,
  },
  type: 'square',
};

export default waterCard;
