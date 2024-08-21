import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const achieveCard: ICard = {
  id: `achieve`,
  text: {
    en: `Destroy a {creature}creature{/creature} or an {artifact}artifact{/artifact} that has not its all hit points.`,
    fr: `Détruisez une {creature}créature{/creature} ou un {artifact}artéfact{/artifact} qui n'a pas son total de points de vie.`,
  },
  lore: {
    en: ``,
    fr: ``,
  },
  imageUrl: `https://static.thefirstspine.fr/placeholder.png`,
  art: 'Maylhine, Teddy Gandon',
  name: {
    en: `Achieve`,
    fr: `Achèvement`,
  },
  type: 'spell',
};

export default achieveCard;
