import { ICard } from '@thefirstspine/types-rest';

// tslint:disable: max-line-length
const mutateFoxCard: ICard = {
  id: `mutate-fox`,
  text: {
    en: `Retirez {capacity}run{/capacity} et ajoutez {capacity}grow{/capacity} à un {creature}Renard{/creature}.`,
    fr: `Remove {capacity}run{/capacity} and add {capacity}grow{/capacity} to a {creature}Fox{/creature}.`,
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
