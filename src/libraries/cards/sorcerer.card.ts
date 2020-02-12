import { ICard } from '../../@shared/rest-shared/card';

// tslint:disable: max-line-length
const sorcererCard: ICard = {
  id: `sorcerer`,
  text: {
    en: ``,
    fr: ``,
  },
  lore: {
    en: ``,
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
      strenght: 0,
    },
    left: {
      defense: 1,
      strenght: 1,
    },
    life: 10,
    right: {
      defense: 1,
      strenght: 1,
    },
    top: {
      defense: 1,
      strenght: 1,
    },
  },
  type: 'player',
};

export default sorcererCard;