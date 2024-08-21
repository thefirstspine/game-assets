import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const bloodStrengthCard: ICard = {
  id: `blood-strength`,
  text: {
    en: `Destroye a {creature}creature{/creature} on the game board. You win {life}2{/life} without exceeding the inital value..`,
    fr: `Détruisez une {creature}créature{/creature} sur le plateau de jeu. Vous gagnez {life}2{/life} sans excéder la valeur initiale.`,
  },
  lore: {
    en: ``,
    fr: ``,
  },
  imageUrl: `https://static.thefirstspine.fr/blood-strength.png`,
  name: {
    en: `Blood Strength`,
    fr: `Force de Sang`,
  },
  type: 'spell',
  art: 'Maylhine',
};

export default bloodStrengthCard;
