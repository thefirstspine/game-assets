import { ICard } from '@thefirstspine/types-rest';

// tslint:disable: max-line-length
const fleshHammerCard: ICard = {
  id: `flesh-hammer`,
  text: {
    en: `At the beggining of your turn you can detroye this card along with an Anvil of Xiarm'ha at the beginning of your turn to add {defense}1{/defense} for each hit point the Anvil had to a {creature}creature{/creature} or an {artifact}artifact{artifact}.`,
    fr: `Au début de votre tour vous pouvez détruire cette carte et une Enclume de Xiarm'ha au début de votre tour pour ajouter {defense}1{/defense} pour chaque point de vie qu'avait l'Enclume à une {creature}créature{/creature} ou à un {artifact}artéfact{artifact}.`,
  },
  lore: {
    en: ``,
    fr: ``,
  },
  art: '',
  imageUrl: `https://static.thefirstspine.fr/placeholder.png`,
  name: {
    en: `Flesh Hammer`,
    fr: `Marteau de Chair`,
  },
  stats: {
    life: 5,
    bottom: {
      defense: 1,
      strength: 2,
    },
    left: {
      defense: 0,
      strength: 3,
    },
    right: {
      defense: 0,
      strength: 3,
    },
    top: {
      defense: 0,
      strength: 4,
    },
  },
  type: 'creature',
};

export default fleshHammerCard;
