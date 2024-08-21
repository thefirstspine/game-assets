import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const iceStatueCard: ICard = {
  id: `ice-statue`,
  text: {
    en: `Once destroyed, flip this card. It comes under the control of the {wizard}wizard{/wizard} who destroyed it.`,
    fr: `Une fois détruite, retournez cette carte. Elle entre sous le contrôle du {wizard}sorcier{/wizard} qui l'a détruite.`,
  },
  lore: {
    en: `« No one has ever seen the Man in White, and yet he seems to be everywhere. It is said that this power comes from a fragment of Crown. »\n- Merlin, Exodia's latest scholar`,
    fr: `« Personne n'a jamais vu l'Homme en Blanc, et pourtant il semble être partout. On raconte que cette puissance vient d'un fragment de Couronne. »\n- Merlin, dernier érudit d'Exodia`,
  },
  imageUrl: `https://static.thefirstspine.fr/ice-statue.png`,
  name: {
    en: `Ice Statue`,
    fr: `Statue de Glace`,
  },
  stats: {
    effects: ['ice-statue'],
    life: 10,
    capacities: [],
    bottom: {
      defense: 1,
      strength: 1,
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
  type: 'artifact',
  art: '',
};

export default iceStatueCard;
