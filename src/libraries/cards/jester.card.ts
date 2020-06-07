import { ICard } from '@thefirstspine/types-rest';

// tslint:disable: max-line-length
const jesterCard: ICard = {
  id: `jester`,
  text: {
    en: ``,
    fr: `Chaque Bouffon gagne {strength}2{/strength} sur tous leurs côtés pour chaque Bouffon sur le plateau de jeu`,
  },
  lore: {
    en: ``,
    fr: `« Plus on est de bouffons... »\n- Auteur inconnu`,
  },
  imageUrl: `https://static.thefirstspine.fr/placeholder.png`,
  name: {
    en: ``,
    fr: `Bouffon`,
  },
  stats: {
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
