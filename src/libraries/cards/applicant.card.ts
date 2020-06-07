import { ICard } from '@thefirstspine/types-rest';

// tslint:disable: max-line-length
const applicantCard: ICard = {
  id: `applicant`,
  text: {
    en: ``,
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
