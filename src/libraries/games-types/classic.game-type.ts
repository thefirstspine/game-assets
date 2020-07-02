import { IGameType, ILoot } from '@thefirstspine/types-rest';
import { CyclesLibrary } from '../cycles.library';

// tslint:disable: max-line-length
export default function(): IGameType {
  const classicGameType: IGameType = {
    id: 'classic',
    name: {
      fr: `Partie classique`,
      en: `Classic game`,
    },
    description: {
      fr: `Entraînez-vous dans une partie classique. Les parties ne sont pas classées et votre adversaire sera choisi dans l'ordre des demandes. Les premiers arrivés seront les premiers à massacrer !`,
      en: `Practice in a classic game. The games are not ranked and your opponent will be chosen in the order of requests. The first to arrive will be the first to massacre!`,
    },
    matchmakingMode: 'asap',
    destinies: ['conjurer', 'summoner', 'sorcerer', 'hunter'],
    origins: ['healer', 'architect', 'priest', 'blacksmith'],
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

    if (currentCycle.id === 'great-ancient-2020') {
      classicGameType.origins = ['healer'];
    }

    if (currentCycle.id === 'treasure-2020') {
      classicGameType.description = {
        fr: `Entraînez-vous dans une partie classique. Durant le cycle du Trésor, vous trouverez des galions d'or. Chaque carte "Galion d'or" dans votre main à la fin de la partie vous apportera de la monnaie à échanger dans la boutique !`,
        en: `Practice in a classic game. During the Cycle of the Treasure, you will find golden galleons. Each "Golden Galleon" card in your hand at the end of the game will bring you money to exchange in the shop!`,
      };
      classicGameType.origins = ['healer', 'architect'];
    }

    if (currentCycle.id === 'souvenirs-2020') {
      classicGameType.description = {
        fr: `Entraînez-vous dans une partie classique. Durant le Cycle des Souvenirs, des cartes seront ajoutées dans votre deck en fonction de la destinée choisie par votre adversaire.`,
        en: `Practice in a classic game. During the Cycle of Memories, cards will be added to your deck depending on the destiny chosen by your opponent.`,
      };
      classicGameType.origins = ['healer', 'architect', 'priest'];
    }
  }

  const dayOfWeek = (new Date()).getUTCDay();
  const hour = (new Date()).getUTCHours();
  const dayOfMonth = (new Date()).getUTCDate();
  const month = (new Date()).getUTCMonth();
  if (currentCycle.id === 'renewal-2020') {
    if (dayOfWeek === 3 && (hour >= 12 && hour <= 20)) {
      classicGameType.loots.defeat.find((loot: ILoot) => loot.name === 'shard').num *= 3;
      classicGameType.loots.victory.find((loot: ILoot) => loot.name === 'shard').num *= 3;
    }
  }
  if (currentCycle.id === 'great-ancient-2020') {
    if (dayOfMonth === 13 && month === 4 && (hour >= 8 && hour <= 20)) {
      classicGameType.origins.push('architect');
    }
    if (dayOfMonth === 27 && month === 4 && (hour >= 8 && hour <= 20)) {
      classicGameType.origins.push('architect');
    }
  }
  if (currentCycle.id === 'treasure-2020') {
    if (dayOfMonth === 24 && month === 5 && (hour >= 8 && hour <= 20)) {
      classicGameType.origins.push('priest');
    }
    if (dayOfMonth === 8 && month === 6 && (hour >= 8 && hour <= 20)) {
      classicGameType.origins.push('priest');
    }
  }
  if (currentCycle.id === 'souvenirs-2020') {
    if (dayOfMonth === 5 && month === 7 && (hour >= 8 && hour <= 20)) {
      classicGameType.origins.push('blacksmith');
    }
    if (dayOfMonth === 19 && month === 7 && (hour >= 8 && hour <= 20)) {
      classicGameType.origins.push('blacksmith');
    }
  }

  return classicGameType;
}
