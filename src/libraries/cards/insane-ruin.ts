import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const insaneRuinCard: ICard = {
  id: `insane-ruin`,
  text: {
    en: `The {artifact}artifact{/artifact} loses {life}4{/life}.`,
    fr: `L'{artifact}artéfact{/artifact} perd {life}4{/life}.`,
  },
  lore: {
    en: ``,
    fr: ``,
  },
  imageUrl: `https://static.thefirstspine.fr/insane-ruin.png`,
  name: {
    en: `Insane's Ruin`,
    fr: `Ruine de Démence`,
  },
  type: 'spell',
  art: 'Maylhine, Teddy Gandon',
};

export default insaneRuinCard;
