import { ICard } from '../../@shared/rest-shared/card';

// tslint:disable: max-line-length
const caduceusCard: ICard = {
  id: `caduceus`,
  text: {
    en: ``,
    fr: `Tant que le Caducée est sur le plateau de jeu vous gagnez {defense}1{/defense}`,
  },
  lore: {
    en: ``,
    fr: ``,
  },
  imageUrl: `https://static.thefirstspine.fr/placeholder.png`,
  name: {
    en: ``,
    fr: `Caducée`,
  },
  stats: {
    life: 5,
    bottom: {
      capacity: 'aura',
      defense: 0,
      strength: 1,
    },
    left: {
      capacity: 'aura',
      defense: 0,
      strength: 0,
    },
    right: {
      capacity: 'aura',
      defense: 2,
      strength: 0,
    },
    top: {
      capacity: 'aura',
      defense: 1,
      strength: 0,
    },
  },
  type: 'artifact',
};

export default caduceusCard;
