import { IGameType, ILoot } from '../../@shared/rest-shared/entities';
import { CyclesLibrary } from '../cycles.library';

// tslint:disable: max-line-length
export default function(): IGameType {
  const classicGameType: IGameType = {
    id: 'classic',
    name: {
      fr: `Partie classique`,
      en: ``,
    },
    description: {
      fr: `Entraînez-vous dans une partie classique. Les parties ne sont pas classées et votre adversaire sera choisi dans l'ordre des demandes. Les premiers arrivés seront les premiers à massacrer !`,
      en: ``,
    },
    matchmakingMode: 'asap',
    destinies: ['conjurer', 'summoner', 'sorcerer', 'hunter'],
    origins: ['healer'/*, 'architect', 'priest', 'smith'*/],
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
      classicGameType.origins = [];
    }

    if (currentCycle.id === 'great-old-2020') {
      classicGameType.origins = ['healer'];
    }
  }

  const day = (new Date()).getUTCDay();
  const hour = (new Date()).getUTCHours();
  if (day === 3 && (hour > 12 && hour < 20)) {
    classicGameType.loots.defeat.find((loot: ILoot) => loot.name === 'shard').num *= 3;
    classicGameType.loots.victory.find((loot: ILoot) => loot.name === 'shard').num *= 3;
  }

  return classicGameType;
}
