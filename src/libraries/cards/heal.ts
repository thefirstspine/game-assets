import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const healCard: ICard = {
  id: `heal`,
  text: {
    en: `The {creature}creature{/creature} wins {life}2{/life} without exceeding the initial value.`,
    fr: `La {creature}créature{/creature} gagne {life}2{/life} sans excéder la valeur initiale.`,
  },
  lore: {
    en: `« Take your ointment. »\n- Argento, the healer`,
    fr: `« Prenez bien votre onguent. »\n- Le guérisseur Argento`,
  },
  imageUrl: `https://static.thefirstspine.fr/heal.png`,
  name: {
    en: `Heal`,
    fr: `Soin`,
  },
  type: 'spell',
  art: 'Maylhine, Teddy Gandon',
};

export default healCard;
