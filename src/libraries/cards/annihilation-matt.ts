import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const annihilationMattCard: ICard = {
  id: `annihilation-matt`,
  text: {
    en: `The {wizard}wizard{/wizard} who destroys this card loses the game.`,
    fr: `Le {wizard}sorcier{/wizard} qui détruit cette carte perd la partie.`,
  },
  lore: {
    en: ``,
    fr: ``,
  },
  art: '',
  imageUrl: `https://static.thefirstspine.fr/annihilation-matt.png`,
  name: {
    en: `Annihilation Matt`,
    fr: `Mât de l'Annihilation`,
  },
  stats: {
    effects: ['annihilation-matt'],
    life: 2,
    bottom: {
      defense: 0,
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
      defense: 0,
      strength: 0,
    },
  },
  type: 'artifact',
};

export default annihilationMattCard;
