import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const hunterSouvenirCard: ICard = {
  id: `hunter-souvenir`,
  text: {
    en: `This card is a collection card can only be played during the Cycle of Souvenirs.`,
    fr: `Cette carte est une carte de collection ne peut être jouée que pendant le Cycle des Souvenirs.`,
  },
  lore: {
    en: ``,
    fr: ``,
  },
  imageUrl: `https://static.thefirstspine.fr/hunter-souvenir.png`,
  name: {
    en: `Souvenir of a Hunter`,
    fr: `Souvenir d'un Chasseur`,
  },
  stats: {
    life: 5,
    capacities: ['run'],
    bottom: {
      defense: 1,
      strength: 2,
      capacity: 'aura',
    },
    left: {
      defense: 1,
      strength: 2,
      capacity: 'aura',
    },
    right: {
      defense: 1,
      strength: 2,
      capacity: 'aura',
    },
    top: {
      defense: 1,
      strength: 2,
      capacity: 'aura',
    },
  },
  type: 'artifact',
  art: 'Maylhine',
};

export default hunterSouvenirCard;
