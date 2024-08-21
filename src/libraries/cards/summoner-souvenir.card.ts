import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const summonerSouvenirCard: ICard = {
  id: `summoner-souvenir`,
  text: {
    en: `This card is a collection card can only be played during the Cycle of Souvenirs.`,
    fr: `Cette carte est une carte de collection ne peut être jouée que pendant le Cycle des Souvenirs.`,
  },
  lore: {
    en: ``,
    fr: ``,
  },
  imageUrl: `https://static.thefirstspine.fr/summoner-souvenir.png`,
  name: {
    en: `Souvenir of a Summoner`,
    fr: `Souvenir d'un Invocateur`,
  },
  stats: {
    life: 4,
    capacities: ['run'],
    bottom: {
      defense: 1,
      strength: 4,
      capacity: 'aura',
    },
    left: {
      defense: 1,
      strength: 4,
      capacity: 'aura',
    },
    right: {
      defense: 1,
      strength: 4,
      capacity: 'aura',
    },
    top: {
      defense: 1,
      strength: 4,
      capacity: 'aura',
    },
  },
  type: 'artifact',
  art: 'Maylhine',
};

export default summonerSouvenirCard;
