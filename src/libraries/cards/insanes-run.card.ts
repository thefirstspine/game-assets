import { ICard } from '../../@shared/rest-shared/card';

// tslint:disable: max-line-length
const insanesRunCard: ICard = {
  id: `insanes-run`,
  text: {
    en: ``,
    fr: `Lorsque cette carte est détruite, choisissez une carte {creature}créature{/creature} ou {artifact}artefact{/artifact} et détruisez-la.`,
  },
  lore: {
    en: ``,
    fr: `« Leur première tentative fût la Couronne. La seconde s'appelle Volk'ha. »\n- Merlin, dernier érudit d'Exodia.`,
  },
  art: 'Maylhine',
  imageUrl: `https://static.thefirstspine.fr/placeholder.png`,
  name: {
    en: ``,
    fr: `Rune de Démence`,
  },
  stats: {
    life: 1,
    capacities: ['death'],
    bottom: {
      defense: 0,
      strenght: 0,
      capacity: 'threat',
    },
    left: {
      defense: 0,
      strenght: 0,
      capacity: 'threat',
    },
    right: {
      defense: 0,
      strenght: 0,
      capacity: 'threat',
    },
    top: {
      defense: 0,
      strenght: 0,
      capacity: 'threat',
    },
  },
  type: 'artifact',
};

export default insanesRunCard;
