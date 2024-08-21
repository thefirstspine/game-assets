import { ICard } from '@thefirstspine/types-game';

// tslint:disable: max-line-length
const summonerCard: ICard = {
  id: `summoner`,
  text: {
    en: ``,
    fr: ``,
  },
  lore: {
    en: `« It's obvious that a summoner knows the mysteries of life. What about death? »\n- A Hunter`,
    fr: `« Il va de soi qu'un invocateur connaît les arcanes de la vie. Qu'en est-il de la mort ? »\n- Un Chasseur`,
  },
  art: 'Maylhine',
  imageUrl: `https://static.thefirstspine.fr/summoner.png`,
  name: {
    en: `Summoner`,
    fr: `Invocateur`,
  },
  stats: {
    bottom: {
      defense: 0,
      strength: 0,
    },
    left: {
      defense: 1,
      strength: 1,
    },
    life: 10,
    right: {
      defense: 1,
      strength: 1,
    },
    top: {
      defense: 1,
      strength: 1,
    },
  },
  type: 'player',
};

export default summonerCard;
