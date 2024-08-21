import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const ruinCard: ICard = {
  id: `ruin`,
  text: {
    en: `The {artifact}artifact{/artifact} loses {life}2{/life}.`,
    fr: `L'{artifact}artéfact{/artifact} perd {life}2{/life}.`,
  },
  lore: {
    en: `« They led us to our ruin. »\n- Démence, the first prophet`,
    fr: `« Ils nous ont conduit à notre ruine. »\n- Démence, le premier prophète`,
  },
  imageUrl: `https://static.thefirstspine.fr/ruin.png`,
  name: {
    en: `Ruin`,
    fr: `Ruine`,
  },
  type: 'spell',
  art: 'Maylhine, Teddy Gandon',
};

export default ruinCard;
