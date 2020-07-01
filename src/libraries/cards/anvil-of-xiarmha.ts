import { ICard } from '@thefirstspine/types-rest';

// tslint:disable: max-line-length
const anvilOfXiarmhaCard: ICard = {
  id: `anvil-of-xiarmha`,
  text: {
    en: `This card wins {life}1{/life} at the start of your turn while being able to exceed its starting total.`,
    fr: `Cette carte gagne {life}1{/life} au début de votre tour tout en pouvant dépasser son total de départ.`,
  },
  lore: {
    en: ``,
    fr: ``,
  },
  art: '',
  imageUrl: `https://static.thefirstspine.fr/placeholder.png`,
  name: {
    en: `Anvil of Xiarm'ha`,
    fr: `Enclume de Xiarm'ha`,
  },
  stats: {
    life: 2,
    bottom: {
      defense: 2,
      strength: 0,
    },
    left: {
      defense: 2,
      strength: 0,
    },
    right: {
      defense: 2,
      strength: 0,
    },
    top: {
      defense: 2,
      strength: 0,
    },
  },
  type: 'artifact',
};

export default anvilOfXiarmhaCard;
