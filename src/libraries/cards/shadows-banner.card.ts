import { ICard } from '../../@shared/rest-shared/card';

// tslint:disable: max-line-length
const shadowsBannerCard: ICard = {
  id: `shadows-banner`,
  text: {
    en: ``,
    fr: ``,
  },
  lore: {
    en: ``,
    fr: `« Je suis Mara. Je suis la messagère des Dieux. »\n- Mara, prophétesse d'Exodia.`,
  },
  art: 'Maylhine',
  imageUrl: `https://static.thefirstspine.fr/shadows-banner.png`,
  name: {
    en: ``,
    fr: `Bannière des Ombres`,
  },
  stats: {
    life: 1,
    capacities: ['death'],
    bottom: {
      defense: 0,
      strength: 5,
      capacity: 'aura',
    },
    left: {
      defense: 0,
      strength: 3,
      capacity: 'aura',
    },
    right: {
      defense: 0,
      strength: 3,
      capacity: 'aura',
    },
    top: {
      defense: 1,
      strength: 3,
      capacity: 'aura',
    },
  },
  type: 'artifact',
};

export default shadowsBannerCard;
