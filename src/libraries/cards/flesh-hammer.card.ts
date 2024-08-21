import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const fleshHammerCard: ICard = {
  id: `flesh-hammer`,
  text: {
    en: `As long as the Flesh Hammer is on the game board, all your {creature}creatures{/creature} win {strength}2{/strength}.`,
    fr: `Tant que le Marteau de Chair est sur le plateau de jeu, toutes vos {creature}créatures{/creature} gagnent {strength}2{/strength}.`,
  },
  lore: {
    en: ``,
    fr: ``,
  },
  art: '',
  imageUrl: `https://static.thefirstspine.fr/placeholder.png`,
  name: {
    en: `Flesh Hammer`,
    fr: `Marteau de Chair`,
  },
  stats: {
    effects: ['flesh-hammer'],
    life: 3,
    bottom: {
      defense: 1,
      strength: 0,
    },
    left: {
      defense: 1,
      strength: 0,
    },
    right: {
      defense: 1,
      strength: 0,
    },
    top: {
      defense: 1,
      strength: 0,
    },
  },
  type: 'creature',
};

export default fleshHammerCard;
