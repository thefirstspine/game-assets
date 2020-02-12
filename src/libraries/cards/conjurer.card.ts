import { ICard } from '../../@shared/rest-shared/card';

// tslint:disable: max-line-length
const conjurerCard: ICard = {
  id: `conjurer`,
  text: {
    en: ``,
    fr: ``,
  },
  lore: {
    en: ``,
    fr: `« Il ne manque plus que des machicoulis et cette Tour sera parfaite. »\n- Un Illusionniste`,
  },
  art: 'Maylhine',
  imageUrl: `https://static.thefirstspine.fr/conjurer.png`,
  name: {
    en: `Conjurer`,
    fr: `Illusionniste`,
  },
  stats: {
    life: 10,
    bottom: {
      defense: 0,
      strenght: 0,
    },
    left: {
      defense: 1,
      strenght: 1,
    },
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

export default conjurerCard;
