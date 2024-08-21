import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const insanePutrefactionCard: ICard = {
  id: `insane-putrefaction`,
  text: {
    en: `The {creature}creature{/creature} loses {life}4{/life}.`,
    fr: `La {creature}créature{/creature} perd {life}4{/life}.`,
  },
  lore: {
    en: ``,
    fr: ``,
  },
  imageUrl: `https://static.thefirstspine.fr/insane-putrefaction.png`,
  name: {
    en: `Insane's Putrefaction`,
    fr: `Putréfaction de Démence`,
  },
  type: 'spell',
  art: 'Maylhine, Teddy Gandon',
};

export default insanePutrefactionCard;
