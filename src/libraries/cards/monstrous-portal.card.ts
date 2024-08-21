import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const monstrousPortalCard: ICard = {
  id: `monstrous-portal`,
  text: {
    en: `Whenever this card is damaged you can place a card around any Monster Portal you control.`,
    fr: `A chaque fois que cette carte est blessée vous pouvez placer une carte autour de n'importe quel Portail Monstrueux que vous contrôlez.`,
  },
  lore: {
    en: ``,
    fr: ``,
  },
  art: 'Maylhine',
  imageUrl: `https://static.thefirstspine.fr/monstrous-portal.png`,
  name: {
    en: `Monstrous Portal`,
    fr: `Portail Monstrueux`,
  },
  stats: {
    effects: ['monstrous-portal'],
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
