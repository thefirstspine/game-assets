import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const sorcererSouvenirCard: ICard = {
  id: `sorcerer-souvenir`,
  text: {
    en: `This card is a collection card can only be played during the Cycle of Souvenirs.`,
    fr: `Cette carte est une carte de collection ne peut être jouée que pendant le Cycle des Souvenirs.`,
  },
  lore: {
    en: ``,
    fr: ``,
  },
  imageUrl: `https://static.thefirstspine.fr/sorcerer-souvenir.png`,
  name: {
    en: `Souvenir of a Sorcerer`,
    fr: `Souvenir d'un Prestidigitateur`,
  },
  stats: {
    life: 20,
    capacities: ['death'],
    bottom: {
      defense: 0,
      strength: 0,
      capacity: 'aura',
    },
    left: {
      defense: 0,
      strength: 0,
      capacity: 'aura',
    },
    right: {
      defense: 0,
      strength: 0,
      capacity: 'aura',
    },
    top: {
      defense: 0,
      strength: 0,
      capacity: 'aura',
    },
  },
  type: 'artifact',
  art: 'Maylhine',
};

export default sorcererSouvenirCard;
