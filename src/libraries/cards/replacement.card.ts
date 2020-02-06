import { ICard } from '../../@shared/rest-shared/card';

// tslint:disable: max-line-length
const replacementCard: ICard = {
  id: `replacement`,
  text: {
    en: ``,
    fr: `Détruisez une carte {creature}créature{/creature} ou {artifact}artefact{/artifact} sur le plateau de jeu. Son propriétaire doit poser une carte à la place.`,
  },
  lore: {
    en: ``,
    fr: ``,
  },
  imageUrl: `https://static.thefirstspine.fr/replacement.png`,
  name: {
    en: ``,
    fr: `Remplacement`,
  },
  type: 'spell',
  art: 'Maylhine & Teddy Gandon',
};

export default replacementCard;
