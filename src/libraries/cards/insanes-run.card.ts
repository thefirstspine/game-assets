import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const insanesRunCard: ICard = {
  id: `insanes-run`,
  text: {
    en: `When this card is destroyed, choose a {creature}creature{/creature} or an {artifact}artifact{/artifact} and destroy it`,
    fr: `Lorsque cette carte est détruite, choisissez une carte {creature}créature{/creature} ou {artifact}artéfact{/artifact} et détruisez-la.`,
  },
  lore: {
    en: `« Their first attempt was the Crown. The second is called Volk'ha. »\n- Merlin, Exodia's latest scholar.`,
    fr: `« Leur première tentative fût la Couronne. La seconde s'appelle Volk'ha. »\n- Merlin, dernier érudit d'Exodia.`,
  },
  imageUrl: `https://static.thefirstspine.fr/placeholder.png`,
  name: {
    en: `Rune of Insane`,
    fr: `Rune de Démence`,
  },
  stats: {
    effects: ['insanes-run'],
    life: 1,
    capacities: ['death'],
    bottom: {
      defense: 0,
      strength: 0,
      capacity: 'threat',
    },
    left: {
      defense: 0,
      strength: 0,
      capacity: 'threat',
    },
    right: {
      defense: 0,
      strength: 0,
      capacity: 'threat',
    },
    top: {
      defense: 0,
      strength: 0,
      capacity: 'threat',
    },
  },
  type: 'artifact',
};

export default insanesRunCard;
