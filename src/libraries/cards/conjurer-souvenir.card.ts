import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const conjurerSouvenirCard: ICard = {
  id: `conjurer-souvenir`,
  text: {
    en: `This card is a collection card can only be played during the Cycle of Souvenirs.`,
    fr: `Cette carte est une carte de collection ne peut être jouée que pendant le Cycle des Souvenirs.`,
  },
  lore: {
    en: ``,
    fr: ``,
  },
  imageUrl: `https://static.thefirstspine.fr/conjurer-souvenir.png`,
  name: {
    en: `Souvenir of a Conjurer`,
    fr: `Souvenir d'un Illusionniste`,
  },
  stats: {
    life: 7,
    capacities: ['grow'],
    bottom: {
      defense: 2,
      strength: 1,
      capacity: 'aura',
    },
    left: {
      defense: 2,
      strength: 1,
      capacity: 'aura',
    },
    right: {
      defense: 2,
      strength: 1,
      capacity: 'aura',
    },
    top: {
      defense: 2,
      strength: 1,
      capacity: 'aura',
    },
  },
  type: 'artifact',
  art: 'Maylhine',
};

export default conjurerSouvenirCard;
