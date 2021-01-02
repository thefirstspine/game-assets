import { ICard } from '@thefirstspine/types-rest';

// tslint:disable: max-line-length
const mutateBarbedWiresCard: ICard = {
  id: `mutate-barbed-wires`,
  text: {
    en: `Ajoutez {capacity}death{/capacity} à un {artifact}Barbelés{/artifact}.`,
    fr: `Add {capacity}death{/capacity} to a {artifact}Barbed Wires{/artifact}.`,
  },
  lore: {
    en: ``,
    fr: ``,
  },
  imageUrl: `https://static.thefirstspine.fr/mutate-barbed-wires.png`,
  name: {
    en: `Mutate Barbed Wires`,
    fr: `Mutation de Barbelés`,
  },
  type: 'spell',
};

export default mutateBarbedWiresCard;
