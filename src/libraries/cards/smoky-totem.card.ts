import { ICard } from '../../@shared/rest-shared/card';

// tslint:disable: max-line-length
const smokyTotemCard: ICard = {
  id: `smoky-totem`,
  text: {
    en: ``,
    fr: ``,
  },
  lore: {
    en: ``,
    fr: `« Brûlez. BRÛLEZ ! »\n- Volk'ha, fils de Mara lors de la bataille contre le Royaume aux Neuf Déserts.`,
  },
  art: 'Maylhine',
  imageUrl: `https://static.thefirstspine.fr/smoky-totem.png`,
  name: {
    en: ``,
    fr: `Totem fûmant`,
  },
  stats: {
    life: 4,
    capacities: ['burdenEarth'],
    bottom: {
      strength: 8,
      defense: 2,
      capacity: 'threat',
    },
    left: {
      strength: 1,
      defense: 2,
    },
    right: {
      strength: 1,
      defense: 2,
    },
    top: {
      strength: 1,
      defense: 2,
    },
  },
  type: 'artifact',
};

export default smokyTotemCard;
