import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const mutateTowerCard: ICard = {
  id: `mutate-tower`,
  text: {
    fr: `Retirez {capacity}threat{/capacity} et ajoutez {capacity}grow{/capacity} à une {artifact}Tour{/artifact}.`,
    en: `Remove {capacity}threat{/capacity} and add {capacity}grow{/capacity} to a {artifact}Tower{/artifact}.`,
  },
  lore: {
    en: ``,
    fr: ``,
  },
  imageUrl: `https://static.thefirstspine.fr/mutate-tower.png`,
  name: {
    en: `Mutate Tower`,
    fr: `Mutation de Tour`,
  },
  type: 'spell',
};

export default mutateTowerCard;
