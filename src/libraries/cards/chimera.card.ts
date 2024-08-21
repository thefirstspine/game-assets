import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const chimeraCard: ICard = {
  id: `chimera`,
  text: {
    en: `When it arrives on the game board, this card gains {strength}1{/strength} for each hit point you miss.`,
    fr: `Lorsqu'elle arrive sur le plateau de jeu cette carte gagne {strength}1{/strength} pour chaque point de vie dont vous manquez.`,
  },
  lore: {
    en: ``,
    fr: ``,
  },
  art: '',
  imageUrl: `https://static.thefirstspine.fr/placeholder.png`,
  name: {
    en: `Chimera`,
    fr: `Chimère`,
  },
  stats: {
    effects: ['chimera'],
    life: 4,
    bottom: {
      defense: 2,
      strength: 0,
    },
    left: {
      defense: 0,
      strength: 0,
    },
    right: {
      defense: 0,
      strength: 0,
    },
    top: {
      defense: 1,
      strength: 0,
    },
  },
  type: 'creature',
};

export default chimeraCard;
