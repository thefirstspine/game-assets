import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const trickOrTreatCard: ICard = {
  id: `trick-or-treat`,
  text: {
    en: `The {wizard}wizard{/wizard} lose {life}1{/life} and wins one Candy Shard at the end of the game. This card is a collection card can only be played during the Tricks Celebration`,
    fr: `Le {wizard}sorcier{/wizard} perd {life}1{/life} et gagne un Eclat de Sucre à la fin de la partie. Cette carte est une carte de collection ne peut être jouée que pendant le Festival des Facéties.`,
  },
  lore: {
    en: ``,
    fr: ``,
  },
  imageUrl: `https://static.thefirstspine.fr/trick-or-treat.png`,
  name: {
    en: `Trick or Treat`,
    fr: `Un bonbon ou un Tour`,
  },
  type: 'spell',
  art: 'Maylhine, Teddy Gandon',
};

export default trickOrTreatCard;
