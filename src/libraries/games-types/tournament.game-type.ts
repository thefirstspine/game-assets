import { IGameType } from '../../@shared/rest-shared/entities';
import classicGameType from './classic.game-type';
import { CyclesLibrary } from '../cycles.library';

// tslint:disable: max-line-length
export default function(): IGameType {
  const tournamentBaseData: IGameType = {
    id: 'tournament',
    name: {
      fr: `Tournoi de Mara`,
      en: ``,
    },
    description: {
      fr: `Cédez à l'appel de Mara.`,
      en: ``,
    },
    matchmakingMode: 'ranked',
    origins: ['architect', 'healer', 'ignorant', 'surgeon'],
    destinies: ['conjurer', 'hunter', 'sorcerer', 'summoner'],
    availableShieldsPerCycle: 1,
    maxGamesPerCycle: 3,
    players: [
      { x: 3, y: 0 },
      { x: 3, y: 6 },
    ],
    loots: {
      victory: [
        {name: 'shard', num: 30},
        {name: 'victory-mark', num: 1},
      ],
      defeat: [
        {name: 'shard', num: 10},
        {name: 'defeat-mark', num: 1},
      ],
    },
    space: {
      minX: 0,
      minY: 0,
      maxX: 6,
      maxY: 6,
    },
  };

  const currentCycle = CyclesLibrary.current();
  if (currentCycle) {
    if (currentCycle.id === 'renewal-2020') {
      tournamentBaseData.availableShieldsPerCycle = 1;
      tournamentBaseData.origins = [];
      tournamentBaseData.destinies = ['hunter'];
      tournamentBaseData.name = {
        fr: `Tournoi du Renouveau`,
        en: ``,
      };
      tournamentBaseData.description = {
        fr: `Un tournoi où tout le monde est à la même enseigne. Mais attention : à la première défaite, vous serez éliminé. Quel sorcier sera le plus valeureux du Cycle du Renouveau 2020 ?`,
        en: ``,
      };
    }

    if (currentCycle.id === 'great-old-2020') {
      tournamentBaseData.availableShieldsPerCycle = 3;
      tournamentBaseData.origins = [];
      tournamentBaseData.destinies = ['conjurer', 'hunter', 'sorcerer', 'summoner'];
      tournamentBaseData.name = {
        fr: `Tournoi du Grand Ancien`,
        en: ``,
      };
      tournamentBaseData.description = {
        fr: `Des oeufs de Grands Anciens on traversé le temps pour venir jusqu'à nous. Faites-les éclore et emparez-vous de leurs pouvoirs.`,
        en: ``,
      };
    }
  }

  const tournamentGameType: IGameType = {
    ...classicGameType,
    ...tournamentBaseData,
  };

  return tournamentGameType;
}
