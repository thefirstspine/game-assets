import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const hunterCard: ICard = {
  id: `hunter`,
  text: {
    en: ``,
    fr: ``,
  },
  lore: {
    en: `« I eliminated three today. I feel dirty having used these abject powers. I think the Sacrifice is not far away. »\n- A Hunter`,
    fr: `« J'en ai éliminé trois aujourd'hui. Je me sens sale d'avoir utiliser ces pouvoirs abjectes. Je pense que le Sacrifice n'est pas loin. »\n- Un Chasseur`,
  },
  art: 'Maylhine',
  imageUrl: `https://static.thefirstspine.fr/hunter.png`,
  name: {
    en: `Hunter`,
    fr: `Chasseur`,
  },
  stats: {
    life: 10,
    bottom: {
      defense: 0,
      strength: 0,
    },
    left: {
      defense: 1,
      strength: 1,
    },
    right: {
      defense: 1,
      strength: 1,
    },
    top: {
      defense: 1,
      strength: 1,
    },
  },
  type: 'player',
};

export default hunterCard;
