import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const fireCard: ICard = {
  id: `fire`,
  text: {
    en: `Add {capacity}burdenEarth{/capacity} and {strength}2{/strength} to a {creature}creature{/creature} or an {artifact}artifact{/artifact}.`,
    fr: `Ajoutez {capacity}burdenEarth{/capacity} et {strength}2{/strength} à une {creature}créature{/creature} ou à un {artifact}artéfact{/artifact}.`,
  },
  lore: {
    en: ``,
    fr: ``,
  },
  imageUrl: `https://static.thefirstspine.fr/fire.png`,
  name: {
    en: `Fire`,
    fr: `Embrasement`,
  },
  type: 'spell',
};

export default fireCard;
