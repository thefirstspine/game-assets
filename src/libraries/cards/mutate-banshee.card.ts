import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const mutateBansheeCard: ICard = {
  id: `mutate-banshee`,
  text: {
    fr: `Retirez {strength}1{/strength} et ajoutez {capacity}grow{/capacity} à une {creature}Banshee{/creature}.`,
    en: `Remove {strength}1{/strength} and add {capacity}grow{/capacity} to a {creature}Banshee{/creature}.`,
  },
  lore: {
    en: ``,
    fr: ``,
  },
  imageUrl: `https://static.thefirstspine.fr/mutate-banshee.png`,
  name: {
    en: `Mutate Banshee`,
    fr: `Mutation de Banshee`,
  },
  type: 'spell',
};

export default mutateBansheeCard;
