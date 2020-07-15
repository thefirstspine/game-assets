import { IGameType, ILoot } from '@thefirstspine/types-rest';
import classicGameType from './classic.game-type';
import { CyclesLibrary } from '../cycles.library';

// tslint:disable: max-line-length
export default function(): IGameType {
  const tournamentBaseData: IGameType = {
    id: 'tournament',
    name: {
      fr: `Tournoi de Mara`,
      en: `Mara's Tournament`,
    },
    description: {
      fr: `Mara vous appelle dans ce tournoi sans pitié. Cédez à l'appel de Mara.`,
      en: `Mara is calling you into this ruthless tournament. Give in to Mara's call.`,
    },
    destinies: ['conjurer', 'hunter', 'sorcerer', 'summoner'],
    origins: ['healer', 'architect', 'priest', 'blacksmith'],
    players: [
      { x: 3, y: 0 },
      { x: 3, y: 6 },
    ],
    setup: {},
    // Fields below are deprecated
    availableShieldsPerCycle: 1,
    maxGamesPerCycle: 3,
    matchmakingMode: 'ranked',
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
        en: `Renewal Tournament`,
      };
      tournamentBaseData.description = {
        fr: `Un tournoi où tout le monde est à la même enseigne. Mais attention : à la première défaite, vous serez éliminé. Quel sorcier sera le plus valeureux du Cycle du Renouveau 2020 ?`,
        en: `A tournament where everyone has the same asset. But beware: at the first defeat, you will be eliminated. Which wizard will be the most valiant of the Cycle of Renewal 2020?`,
      };
    }

    if (currentCycle.id === 'great-ancient-2020') {
      tournamentBaseData.availableShieldsPerCycle = 3;
      tournamentBaseData.origins = ['healer'];
      tournamentBaseData.name = {
        fr: `Tournoi du Grand Ancien`,
        en: `Great Ancient Tournament`,
      };
      tournamentBaseData.description = {
        fr: `Des oeufs de Grands Anciens ont traversé le temps pour venir jusqu'à nous. Faites-les éclore et emparez-vous de leurs pouvoirs.`,
        en: `Eggs of the Great Elders have crossed time to come to us. Hatch them and seize their powers.`,
      };
      tournamentBaseData.loots.defeat.push(...[
        {name: 'holo-great-ancient-egg', num: 1},
        {name: 'great-ancient-mark', num: 1},
      ]);
      tournamentBaseData.loots.victory.push(...[
        {name: 'holo-great-ancient-egg', num: 1},
        {name: 'premium-great-ancient-egg', num: 1},
        {name: 'great-ancient-mark', num: 1},
      ]);
    }

    if (currentCycle.id === 'treasure-2020') {
      tournamentBaseData.availableShieldsPerCycle = 3;
      tournamentBaseData.origins = ['healer', 'architect'];
      tournamentBaseData.name = {
        fr: `Tournoi du Trésor`,
        en: `Tournament of the Treasure`,
      };
      tournamentBaseData.description = {
        fr: `Le tournoi du Trésor est ouvert ! Chaque victoire vous rapportera des galions à échanger dans la boutique. Les corsaires vous laisseront 3 chances avant de vous interdir l'accès au tournoi.`,
        en: `The Tournament of the Treasure is open! Each victory will bring you galleons to trade in the shop. Corsairs will give you 3 chances before denying you access to the tournament.`,
      };
      tournamentBaseData.loots.defeat.push(...[
        {name: 'holo-golden-galleon', num: 1},
        {name: 'treasure-mark', num: 1},
      ]);
      tournamentBaseData.loots.victory.push(...[
        {name: 'holo-golden-galleon', num: 1},
        {name: 'premium-golden-galleon', num: 1},
        {name: 'treasure-mark', num: 1},
        {name: 'golden-galleon', num: 3},
      ]);
    }

    if (currentCycle.id === 'souvenirs-2020') {
      tournamentBaseData.availableShieldsPerCycle = 1;
      tournamentBaseData.origins = ['healer', 'architect', 'priest'];
      tournamentBaseData.name = {
        fr: `Tournoi des Souvenirs`,
        en: `Tournament of the Souvenirs`,
      };
      tournamentBaseData.description = {
        fr: `Prouvez votre valeur dans le Tournoi des Souvenirs ! Des cartes seront ajoutées dans votre deck en fonction de la destinée choisie par votre adversaire. Ce paramètre imprévisible récompensera les stratèges qui sauront improviser !`,
        en: `Prove your worth in the Souvenir Tournament! Cards will be added to your deck depending on the destiny chosen by your opponent. This unpredictable setting will reward strategists who can improvise!`,
      };
      tournamentBaseData.loots.defeat.push(...[
        {name: 'holo-conjurer-souvenir', num: 1},
        {name: 'holo-summoner-souvenir', num: 1},
        {name: 'holo-sorcerer-souvenir', num: 1},
        {name: 'holo-hunter-souvenir', num: 1},
        {name: 'souvenirs-mark', num: 1},
      ]);
      tournamentBaseData.loots.victory.push(...[
        {name: 'holo-conjurer-souvenir', num: 1},
        {name: 'premium-conjurer-souvenir', num: 1},
        {name: 'holo-summoner-souvenir', num: 1},
        {name: 'premium-summoner-souvenir', num: 1},
        {name: 'holo-sorcerer-souvenir', num: 1},
        {name: 'premium-sorcerer-souvenir', num: 1},
        {name: 'holo-hunter-souvenir', num: 1},
        {name: 'premium-hunter-souvenir', num: 1},
        {name: 'souvenirs-mark', num: 1},
      ]);
    }
  }

  const day = (new Date()).getUTCDay();
  const hour = (new Date()).getUTCHours();
  if (currentCycle.id === 'renewal-2020') {
    if (day === 3 && (hour >= 12 && hour <= 20)) {
      tournamentBaseData.loots.defeat.find((loot: ILoot) => loot.name === 'shard').num *= 3;
      tournamentBaseData.loots.victory.find((loot: ILoot) => loot.name === 'shard').num *= 3;
    }
  }

  const tournamentGameType: IGameType = {
    ...classicGameType,
    ...tournamentBaseData,
  };

  return tournamentGameType;
}
