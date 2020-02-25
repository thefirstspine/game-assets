import { ICard } from '../../@shared/rest-shared/card';

// tslint:disable: max-line-length
const greatOldEggCard: ICard = {
  id: `great-old-egg`,
  text: {
    en: ``,
    fr: `Au début de votre prochain tour, remplacez cette carte par "Grand Ancien juvénile".
Cette carte est une carte de collection ne peut être jouée que pendant le Cycle du Grand Ancien.`,
  },
  lore: {
    en: ``,
    fr: `« Il ne devrait pas être ici. »\n- Merlin, dernier érudit d'Exodia`,
  },
  imageUrl: `https://static.thefirstspine.fr/placeholder.png`,
  name: {
    en: ``,
    fr: `Œuf de Grand Ancien`,
  },
  stats: {
    life: 3,
    bottom: {
      defense: 1,
      strength: 0,
      capacity: 'aura',
    },
    left: {
      defense: 1,
      strength: 0,
      capacity: 'aura',
    },
    right: {
      defense: 1,
      strength: 0,
      capacity: 'aura',
    },
    top: {
      defense: 1,
      strength: 0,
      capacity: 'aura',
    },
  },
  type: 'artifact',
};

export default greatOldEggCard;
