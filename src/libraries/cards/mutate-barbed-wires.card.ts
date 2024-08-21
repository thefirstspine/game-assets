import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const mutateBarbedWiresCard: ICard = {
  id: `mutate-barbed-wires`,
  text: {
    fr: `Ajoutez {capacity}death{/capacity} à un {artifact}Barbelés{/artifact}.`,
    en: `Add {capacity}death{/capacity} to a {artifact}Barbed Wires{/artifact}.`,
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
