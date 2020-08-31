import { IQuest } from '@thefirstspine/types-rest';

// tslint:disable: max-line-length
export class QuestsLibrary {

  static readonly daily: Array<Omit<IQuest, 'id'>> = [
    {
      name: {
        fr: `Qui est là ?`,
        en: `Who’s here?`,
      },
      description: {
        fr: `Placez 20 créatures`,
        en: `Place 20 creatures`,
      },
      objectiveType: `play:creatures`,
      objectiveTarget: 20,
      loots: [
        {name: 'shard', num: 50},
      ],
    },
    {
      name: {
        fr: `Des arguments en béton`,
        en: `Concrete arguments`,
      },
      description: {
        fr: `Placez 20 artéfacts`,
        en: `Place 20 artifacts`,
      },
      objectiveType: `play:artifacts`,
      objectiveTarget: 20,
      loots: [
        {name: 'shard', num: 50},
      ],
    },
    {
      name: {
        fr: `Brûlure aux doigts`,
        en: `Finger burns`,
      },
      description: {
        fr: `Jouez 20 sorts`,
        en: `Jouez 20 sorts`,
      },
      objectiveType: `play:spell`,
      objectiveTarget: 20,
      loots: [
        {name: 'shard', num: 50},
      ],
    },
    {
      name: {
        fr: `Victorieux`,
        en: `Victorious`,
      },
      description: {
        fr: `Gagnez 2 parties`,
        en: `Win 2 games`,
      },
      objectiveType: `win`,
      objectiveTarget: 2,
      loots: [
        {name: 'shard', num: 50},
      ],
    },
  ];

  static readonly weekly: Array<Omit<IQuest, 'id'>> = [
    {
      name: {
        fr: `Arts appliqués`,
        en: `Applied Arts`,
      },
      description: {
        fr: `Complétez 4 quêtes journalières`,
        en: `Complete 4 daily quests`,
      },
      objectiveType: `quest`,
      objectiveTarget: 4,
      loots: [
        {name: 'rune-ghostly', num: 1},
      ],
    },
    {
      name: {
        fr: `Ça en fait du monde`,
        en: `It makes a lot of people`,
      },
      description: {
        fr: `Placez 100 creatures or artéfacts`,
        en: `Summon 100 creatures or artifacts`,
      },
      objectiveType: `place:creatureOrArtifact`,
      objectiveTarget: 100,
      loots: [
        {name: 'rune-holo', num: 1},
      ],
    },
    {
      name: {
        fr: `Ca fait mal ?`,
        en: `Does it hurt?`,
      },
      description: {
        fr: `Jouez 80 sorts`,
        en: `Cast 80 spells`,
      },
      objectiveType: `place:creatureOrArtifact`,
      objectiveTarget: 100,
      loots: [
        {name: 'rune-sold', num: 1},
      ],
    },
  ];

  static get questForToday(): IQuest {
    const day: number = Math.floor(((Date.now() / 1000) - 1596207599) / (606024));
    return {
      id: `daily-${day}`,
      ...QuestsLibrary.daily[
        QuestsLibrary.daily.length % day
      ],
    };
  }

  static get questForThisWeek(): IQuest {
    const week: number = Math.floor(((Date.now() / 1000) - 1596207599) / (606024 * 7)) + 1;
    return {
      id: `weekly-${week}`,
      ...QuestsLibrary.weekly[
        QuestsLibrary.weekly.length % week
      ],
    };
  }

}
