import { ICard } from '../../@shared/rest-shared/card';

// tslint:disable: max-line-length
const monstrousPortalCard: ICard = {
  id: `monstrous-portal`,
  text: {
    en: ``,
    fr: `A chaque fois que cette carte perd {life}1{/life} vous pouvez placer une carte autour de n'importe quel Portail Monstrueux que vous contrôlez`,
  },
  lore: {
    en: ``,
    fr: ``,
  },
  art: 'Maylhine',
  imageUrl: `https://static.thefirstspine.fr/monstrous-portal.png`,
  name: {
    en: ``,
    fr: `Portail Monstrueux`,
  },
  stats: {
    life: 5,
    bottom: {
      defense: 1,
      strength: 2,
      capacity: 'threat',
    },
    left: {
      defense: 1,
      strength: 1,
      capacity: 'threat',
    },
    right: {
      defense: 1,
      strength: 1,
      capacity: 'threat',
    },
    top: {
      defense: 1,
      strength: 1,
      capacity: 'threat',
    },
  },
  type: 'artifact',
};

export default monstrousPortalCard;
