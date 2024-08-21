import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const lavaCard: ICard = {
  id: `lava`,
  text: {
    en: `The card on this space loses {life}1{/life} at the start of its owner's turn.`,
    fr: `La carte sur cette case perd {life}1{/life} au début du tour de son propriétaire.`,
  },
  lore: {
    en: ``,
    fr: ``,
  },
  art: 'Teddy Gandon',
  imageUrl: `https://static.thefirstspine.fr/lava.png`,
  name: {
    en: `Lava`,
    fr: `Lave`,
  },
  type: 'square',
};

export default lavaCard;
