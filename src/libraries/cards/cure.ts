import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const cureCard: ICard = {
  id: `cure`,
  text: {
    en: `The {wizard}wizard{/wizard} wins {life}2{/life} without exceeding the initial value.`,
    fr: `Le {wizard}sorcier{/wizard} gagne {life}2{/life} sans excéder la valeur initiale.`,
  },
  lore: {
    en: ``,
    fr: ``,
  },
  imageUrl: `https://static.thefirstspine.fr/placeholder.png`,
  name: {
    en: `Cure`,
    fr: `Remède`,
  },
  type: 'spell',
};

export default cureCard;
