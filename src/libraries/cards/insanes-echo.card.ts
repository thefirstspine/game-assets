import { ICard } from '../../@shared/rest-shared/card';

// tslint:disable: max-line-length
const insanesEchoCard: ICard = {
  id: `insanes-echo`,
  text: {
    en: ``,
    fr: `Cette carte gagne {strength}2{/strength} pour tous ses côtés à chaque fois que vous jouez un {spell}sortilège{/spell}`,
  },
  lore: {
    en: ``,
    fr: `« De Démence je n’en porte que le nom. »\n- Démence, le premier Prophète.`,
  },
  art: 'Maylhine',
  imageUrl: `https://static.thefirstspine.fr/placeholder.png`,
  name: {
    en: ``,
    fr: `Echo de Démence`,
  },
  stats: {
    life: 5,
    bottom: {
      defense: 0,
      strength: 0,
    },
    left: {
      defense: 0,
      strength: 1,
    },
    right: {
      defense: 0,
      strength: 1,
    },
    top: {
      defense: 0,
      strength: 2,
    },
  },
  type: 'creature',
};

export default insanesEchoCard;
