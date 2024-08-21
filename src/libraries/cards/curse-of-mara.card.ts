import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const curseOfMaraCard: ICard = {
  id: `curse-of-mara`,
  text: {
    en: `This is your punishment for bad behavior. You cannot discard or play this {spell}spell{/spell}. You can get rid of it by playing an entire game without bad behavior.`,
    fr: `Ceci est votre punition pour mauvais comportement. Vous ne pouvez ni défausser, ni jouer ce {spell}sortilège{/spell}. Vous pouvez vous en débarasser en jouant une partie entière sans mauvais comportement.`,
  },
  lore: {
    en: `« Your fault becomes your burden. »\n- Mara, prophetess of Exodia.`,
    fr: `« Votre faute devient votre fardeau. »\n- Mara, prophétesse d'Exodia.`,
  },
  imageUrl: `https://static.thefirstspine.fr/curse-of-mara.png`,
  name: {
    en: `Curse of Mara`,
    fr: `Malédiction de Mara`,
  },
  type: 'spell',
  art: 'Maylhine, Teddy Gandon',
};

export default curseOfMaraCard;
