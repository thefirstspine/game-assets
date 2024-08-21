import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const replacementCard: ICard = {
  id: `replacement`,
  text: {
    en: `Destroye a {creature}creature{/creature} or an {artifact}artifact{/artifact} on the game board. Its owner must put a card instead.`,
    fr: `Détruisez une carte {creature}créature{/creature} ou {artifact}artéfact{/artifact} sur le plateau de jeu. Son propriétaire doit poser une carte à la place.`,
  },
  lore: {
    en: ``,
    fr: ``,
  },
  imageUrl: `https://static.thefirstspine.fr/replacement.png`,
  name: {
    en: `Replacement`,
    fr: `Remplacement`,
  },
  type: 'spell',
  art: 'Maylhine & Teddy Gandon',
};

export default replacementCard;
