import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const theTowerCard: ICard = {
  id: `the-tower`,
  text: {
    en: ``,
    fr: ``,
  },
  art: 'Maylhine',
  lore: {
    en: `« A stone lady who protects and punishes. »\n- Mara, prophetess of Exodia`,
    fr: `« Une dame de pierre qui protège et punit. »\n- Mara, prophétesse d'Exodia`,
  },
  imageUrl: `https://static.thefirstspine.fr/the-tower.png`,
  name: {
    en: `The Tower`,
    fr: `La Tour`,
  },
  stats: {
    bottom: {
      defense: 3,
      strength: 3,
    },
    left: {
      defense: 1,
      strength: 3,
    },
    life: 5,
    right: {
      defense: 1,
      strength: 3,
    },
    top: {
      capacity: 'threat',
      defense: 2,
      strength: 3,
    },
  },
  type: 'artifact',
};

export default theTowerCard;
