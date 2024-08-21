import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const applicantCard: ICard = {
  id: `applicant`,
  text: {
    en: `This card is a collection card can only be played during the First Game Experience`,
    fr: `Cette carte est une carte de collection ne peut être jouée que pendant la Première Expérience de Jeu.`,
  },
  lore: {
    en: ``,
    fr: ``,
  },
  art: 'Maylhine & Teddy Gandon',
  imageUrl: `https://static.thefirstspine.fr/applicant.png`,
  name: {
    en: `Applicant`,
    fr: `Postulant`,
  },
  stats: {
    bottom: {
      defense: 0,
      strength: 0,
    },
    left: {
      defense: 0,
      strength: 0,
    },
    life: 1,
    right: {
      defense: 0,
      strength: 0,
    },
    top: {
      defense: 0,
      strength: 0,
    },
  },
  type: 'player',
};

export default applicantCard;
