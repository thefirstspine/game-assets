import { ICard } from '@thefirstspine/types-rest';

// tslint:disable: max-line-length
const snowMansPresentCard: ICard = {
  id: `snow-man-s-present`,
  text: {
    en: `This card is a collection card can only be played during the Cycle of the Snow Man. Gives mana shards when played.`,
    fr: `Cette carte est une carte de collection ne peut être jouée que pendant le Cycle de l'Homme en Blanc. Donne des éclats de mana lorsqu'elle est jouée.`,
  },
  lore: {
    en: `« No one has ever seen the Man in White, and yet he seems to be everywhere. It is said that this power comes from a fragment of Crown. »\n- Merlin, Exodia's latest scholar`,
    fr: `« Personne n'a jamais vu l'Homme en Blanc, et pourtant il semble être partout. On raconte que cette puissance vient d'un fragment de Couronne. »\n- Merlin, dernier érudit d'Exodia`,
  },
  imageUrl: `https://static.thefirstspine.fr/snow-man-s-present.png`,
  name: {
    en: `Snow Man's Present`,
    fr: `Cadeau de l'Homme en Blanc`,
  },
  type: 'spell',
  art: 'Maylhine, Teddy Gandon',
};

export default snowMansPresentCard;
