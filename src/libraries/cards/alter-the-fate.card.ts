import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const alterTheFateCard: ICard = {
  id: `alter-the-fate`,
  text: {
    en: `Add {capacity}treason{/capacity} to a {creature}creature{/creature} or an {artifact}artifact{/artifact}.`,
    fr: `Ajoutez {capacity}treason{/capacity} à une {creature}créature{/creature} ou à un {artifact}artéfact{/artifact}.`,
  },
  lore: {
    en: ``,
    fr: ``,
  },
  imageUrl: `https://static.thefirstspine.fr/placeholder.png`,
  name: {
    en: `Alter the Fate`,
    fr: `Altérer le Destin`,
  },
  type: 'spell',
};

export default alterTheFateCard;
