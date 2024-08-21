import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const sorcererCard: ICard = {
  id: `sorcerer`,
  text: {
    en: ``,
    fr: ``,
  },
  lore: {
    en: `« Your fate is mine. »\n- Un Prestidigitateur`,
    fr: `« Ton destin m'appartient. »\n- Un Prestidigitateur`,
  },
  art: 'Maylhine',
  imageUrl: `https://static.thefirstspine.fr/sorcerer.png`,
  name: {
    en: `Sorcerer`,
    fr: `Prestidigitateur`,
  },
  stats: {
    bottom: {
      defense: 0,
      strength: 0,
    },
    left: {
      defense: 1,
      strength: 1,
    },
    life: 10,
    right: {
      defense: 1,
      strength: 1,
    },
    top: {
      defense: 1,
      strength: 1,
    },
  },
  type: 'player',
};

export default sorcererCard;
