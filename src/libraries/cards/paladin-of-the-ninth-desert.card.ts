import { ICard } from '@thefirstspine/types-rest';

// tslint:disable: max-line-length
const paladinOfTheNinthDesertCard: ICard = {
  id: `paladin-of-the-ninth-desert`,
  text: {
    en: ``,
    fr: ``,
  },
  lore: {
    en: ``,
    fr: `« Le Paladin, aussi fidèle qu'une fille de joie. »\n- Le guérisseur Argento.`,
  },
  imageUrl: `https://static.thefirstspine.fr/placeholder.png`,
  name: {
    en: ``,
    fr: `Paladin du Neuvième Désert`,
  },
  stats: {
    life: 4,
    capacities: ['treason'],
    bottom: {
      defense: 1,
      strength: 3,
    },
    left: {
      defense: 0,
      strength: 4,
      capacity: 'aura',
    },
    right: {
      defense: 2,
      strength: 2,
      capacity: 'aura',
    },
    top: {
      defense: 2,
      strength: 3,
    },
  },
  type: 'creature',
};

export default paladinOfTheNinthDesertCard;
