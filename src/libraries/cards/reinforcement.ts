import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const reinforcementCard: ICard = {
  id: `reinforcement`,
  text: {
    en: `Add {defense}2{/defense} to a {creature}creature{/creature} or an {artifact}artifact{/artifact}.`,
    fr: `Ajoutez {defense}2{/defense} à une {creature}creature{/creature} ou à un {artifact}artéfact{/artifact}.`,
  },
  lore: {
    en: ``,
    fr: ``,
  },
  imageUrl: `https://static.thefirstspine.fr/placeholder.png`,
  name: {
    en: `Reinforcement`,
    fr: `Renforcement`,
  },
  type: 'spell',
  art: '',
};

export default reinforcementCard;
