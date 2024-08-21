import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const theVoidCard: ICard = {
  id: `the-void`,
  text: {
    en: `Destroye a {creature}creature{/creature} or an {artifact}artifact{/artifact} and put a Pit square instead.`,
    fr: `Détruisez une {creature}créature{/creature} ou un {artifact}artefact{/artifact} et placez une case Fosse à la place.`,
  },
  lore: {
    en: ``,
    fr: ``,
  },
  imageUrl: `https://static.thefirstspine.fr/placeholder.png`,
  name: {
    en: `The Void`,
    fr: `Le Vide`,
  },
  type: 'spell',
};

export default theVoidCard;
