import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const reconstructCard: ICard = {
  id: `reconstruct`,
  text: {
    en: `The {artifact}artifact{/artifact} lose {life}2{/life} without exceeding the initial value.`,
    fr: `L'{artifact}artéfact{/artifact} gagne {life}2{/life} sans excéder la valeur initiale.`,
  },
  lore: {
    en: `« From their stones, I will build their own ruin. »\n- Ovil, the forgotten`,
    fr: `« De leurs pierres, je construirai leur propre ruine. »\n- Ovil, l'oublié`,
  },
  imageUrl: `https://static.thefirstspine.fr/reconstruct.png`,
  name: {
    en: `Reconstruct`,
    fr: `Reconstruction`,
  },
  type: 'spell',
  art: 'Maylhine, Teddy Gandon',
};

export default reconstructCard;
