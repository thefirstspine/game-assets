import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const insanesEchoCard: ICard = {
  id: `insanes-echo`,
  text: {
    en: `This card wins {strength}2{/strength} on all its sides each time you play a {spell}spell{/spell}`,
    fr: `Cette carte gagne {strength}2{/strength} pour tous ses côtés à chaque fois que vous jouez un {spell}sortilège{/spell}`,
  },
  lore: {
    en: `« I only bear the name of Insane. »\n- Insane, the first Prophet`,
    fr: `« De Démence je n'en porte que le nom. »\n- Démence, le premier Prophète.`,
  },
  art: 'Maylhine & Teddy Gandon',
  imageUrl: `https://static.thefirstspine.fr/insanes-echo.png`,
  name: {
    en: `Insane's Echo`,
    fr: `Echo de Démence`,
  },
  stats: {
    effects: ['insanes-echo'],
    life: 5,
    bottom: {
      defense: 0,
      strength: 0,
    },
    left: {
      defense: 1,
      strength: 0,
    },
    right: {
      defense: 1,
      strength: 0,
    },
    top: {
      defense: 2,
      strength: 0,
    },
  },
  type: 'creature',
};

export default insanesEchoCard;
