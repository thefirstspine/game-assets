import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const goldenGalleonCard: ICard = {
  id: `golden-galleon`,
  text: {
    en: `You win 1 Golden Galleon if you have this card in your hand at the end of the game. This card is a collection card and can only be used during the Corsairs Arrival.`,
    fr: `Vous remportez 1 Gallion d'Or si vous avez cette carte dans votre main à la fin de la partie. Cette carte est une carte de collection et ne peut être utilisée que pendant l'Arrivée des Corsaires.`,
  },
  lore: {
    en: ``,
    fr: ``,
  },
  art: 'Maylhine',
  imageUrl: `https://static.thefirstspine.fr/golden-galleon.png`,
  name: {
    en: `Golden Galleon`,
    fr: `Gallion d'Or`,
  },
  stats: {
    life: 1,
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

export default goldenGalleonCard;
