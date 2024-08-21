import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const mutateFoxCard: ICard = {
  id: `mutate-fox`,
  text: {
    fr: `Retirez {capacity}run{/capacity} et ajoutez {capacity}grow{/capacity} à un {creature}Renard{/creature}.`,
    en: `Remove {capacity}run{/capacity} and add {capacity}grow{/capacity} to a {creature}Fox{/creature}.`,
  },
  lore: {
    en: ``,
    fr: ``,
  },
  imageUrl: `https://static.thefirstspine.fr/mutate-fox.png`,
  name: {
    en: `Mutate Fox`,
    fr: `Mutation de Renard`,
  },
  type: 'spell',
};

export default mutateFoxCard;
