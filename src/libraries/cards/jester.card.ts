import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const jesterCard: ICard = {
  id: `jester`,
  text: {
    en: `Each Jester wins {strength}2{/strength} on all sides for each Jester on the game board.`,
    fr: `Chaque Bouffon gagne {strength}2{/strength} sur tous leurs côtés pour chaque Bouffon sur le plateau de jeu`,
  },
  lore: {
    en: `« More the jester, the jester. »\n- Unknown author`,
    fr: `« Plus on est de bouffons... »\n- Auteur inconnu`,
  },
  imageUrl: `https://static.thefirstspine.fr/placeholder.png`,
  name: {
    en: `Jester`,
    fr: `Bouffon`,
  },
  stats: {
    effects: ['jester'],
    life: 4,
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

export default jesterCard;
