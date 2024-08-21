import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const caduceusCard: ICard = {
  id: `caduceus`,
  text: {
    en: `As long as the Caduceus is on the game board you win {defense}1{/defense}`,
    fr: `Tant que le Caducée est sur le plateau de jeu vous gagnez {defense}1{/defense}`,
  },
  lore: {
    en: ``,
    fr: ``,
  },
  imageUrl: `https://static.thefirstspine.fr/placeholder.png`,
  name: {
    en: `Caduceus`,
    fr: `Caducée`,
  },
  stats: {
    effects: ['caduceus'],
    life: 5,
    bottom: {
      capacity: 'aura',
      defense: 0,
      strength: 1,
    },
    left: {
      capacity: 'aura',
      defense: 2,
      strength: 0,
    },
    right: {
      capacity: 'aura',
      defense: 2,
      strength: 0,
    },
    top: {
      capacity: 'aura',
      defense: 1,
      strength: 0,
    },
  },
  type: 'artifact',
};

export default caduceusCard;
