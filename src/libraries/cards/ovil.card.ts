import { ICard } from '@thefirstspine/types-rest';

// tslint:disable: max-line-length
const ovilCard: ICard = {
  id: `ovil`,
  text: {
    en: ``,
    fr: `Cette carte est une carte de collection ne peut être jouée que pendant la Première Expérience de Jeu.`,
  },
  lore: {
    en: ``,
    fr: `« Renard, je te donne la vie. Banshee, je te donne la vie. Dragon, je te donne la vie. Car je suis votre père à tous. »\n- Ovil`,
  },
  art: 'Maylhine',
  imageUrl: `https://static.thefirstspine.fr/ovil.png`,
  name: {
    en: `Ovil the Forgottent`,
    fr: `Ovil l'Oublié`,
  },
  stats: {
    bottom: {
      defense: 0,
      strength: 0,
    },
    left: {
      defense: 2,
      strength: 3,
    },
    life: 15,
    right: {
      defense: 2,
      strength: 3,
    },
    top: {
      defense: 2,
      strength: 3,
    },
  },
  type: 'player',
};

export default ovilCard;
