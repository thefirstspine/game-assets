import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const putrefactionCard: ICard = {
  id: `putrefaction`,
  text: {
    en: `The {creature}creature{/creature} loses {life}2{/life}.`,
    fr: `La {creature}créature{/creature} perd {life}2{/life}.`,
  },
  lore: {
    en: ``,
    fr: `« La pourriture, c'est la vie. »\n- Démence, le premier prophète`,
  },
  imageUrl: `https://static.thefirstspine.fr/putrefaction.png`,
  name: {
    en: `Putrefaction`,
    fr: `Putréfaction`,
  },
  type: 'spell',
  art: 'Maylhine, Teddy Gandon',
};

export default putrefactionCard;
