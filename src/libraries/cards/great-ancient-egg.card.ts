import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const greatAncientEggCard: ICard = {
  id: `great-ancient-egg`,
  text: {
    en: `At the start of your next turn, replace this card with "Juvenile Great Ancient".`,
    fr: `Au début de votre prochain tour, remplacez cette carte par "Grand Ancien juvénile".`,
  },
  lore: {
    en: ``,
    fr: `« Il ne devrait pas être ici. »\n- Merlin, dernier érudit d'Exodia`,
  },
  imageUrl: `https://static.thefirstspine.fr/great-ancient-egg.png`,
  art: 'Teddy Gandon',
  name: {
    en: `Great Ancient egg`,
    fr: `Œuf de Grand Ancien`,
  },
  stats: {
    effects: ['great-ancient-egg'],
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

export default greatAncientEggCard;
