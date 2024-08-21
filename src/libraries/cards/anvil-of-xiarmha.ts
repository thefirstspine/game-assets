import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const anvilOfXiarmhaCard: ICard = {
  id: `anvil-of-xiarmha`,
  text: {
    en: `As long as the Anvil of Xiarm'ha is on the game board, all your {artifact}artifacts{/artifact} win {defense}1{/defense}.`,
    fr: `Tant que l'Enclume de Xiarm'ha est sur le plateau de jeu, toutes vos {artifact}artéfacts{/artifact} gagnent {defense}1{/defense}.`,
  },
  lore: {
    en: ``,
    fr: ``,
  },
  art: '',
  imageUrl: `https://static.thefirstspine.fr/placeholder.png`,
  name: {
    en: `Anvil of Xiarm'ha`,
    fr: `Enclume de Xiarm'ha`,
  },
  stats: {
    effects: ['anvil-of-xiarmha'],
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
  type: 'artifact',
};

export default anvilOfXiarmhaCard;
