import { IGameType } from '@thefirstspine/types-rest';
import classicGameType from './classic.game-type';

// tslint:disable: max-line-length
export default function(): IGameType {
  const classicBaseData = classicGameType();

  const fpeGameType: IGameType = {
    id: 'fpe',
    name: {
      fr: `Première Expérience de Jeu`,
      en: `First Game Experience`,
    },
    description: {
      fr: `La Première Expérience de jeu est une partie scriptée idéale pour découvrir les règles du jeu. Vous pouvez choisir une destinée et une origine, mais celles-ci seront remplacées par un deck précalculé.`,
      en: `The First Game Experience is a scripted game ideal for discovering the rules of the game. You can choose a destiny and an origin, but these will be replaced by a precalculated deck.`,
    },
    destinies: classicBaseData.destinies,
    origins: classicBaseData.origins,
    players: [
      { x: 3, y: 0 },
    ],
    setup: {},
    // Fields below are deprecated
    matchmakingMode: 'asap',
    loots: {
      victory: [
        {name: 'holo-applicant', num: 1},
        {name: 'ovil-mark', num: 1},
      ],
      defeat: [
      ],
    },
    space: {
      minX: 0,
      minY: 0,
      maxX: 6,
      maxY: 6,
    },
  };

  return fpeGameType;
}
