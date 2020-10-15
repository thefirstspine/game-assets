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
        fr: `Placez 10 créatures`,
        en: `Place 10 creatures`,
      },
      objectiveType: `play:creatures`,
      objectiveTarget: 10,
      loots: [
        {name: 'shard', num: 25},
      ],
    },
    {
      name: {
        fr: `Des arguments en béton`,
        en: `Concrete arguments`,
      },
      description: {
        fr: `Placez 10 artéfacts`,
        en: `Place 10 artifacts`,
      },
      objectiveType: `play:artifacts`,
      objectiveTarget: 10,
      loots: [
        {name: 'shard', num: 25},
      ],
    },
    {
      name: {
        fr: `Brûlure aux doigts`,
        en: `Finger burns`,
      },
      description: {
        fr: `Jouez 10 sorts`,
        en: `Jouez 10 sorts`,
      },
      objectiveType: `play:spells`,
      objectiveTarget: 10,
      loots: [
        {name: 'shard', num: 25},
      ],
    },
    {
      name: {
        fr: `Victorieux`,
        en: `Victorious`,
      },
      description: {
        fr: `Gagnez 1 partie`,
        en: `Win 1 game`,
      },
      objectiveType: `win`,
      objectiveTarget: 1,
      loots: [
        {name: 'shard', num: 25},
      ],
    },
    {
      name: {
        fr: `Soif de sang`,
        en: `Bloodthirsty`,
      },
      description: {
        fr: `Détruisez 10 créatures`,
        en: `Destroye 10 creatures`,
      },
      objectiveType: `destroye:creatures`,
      objectiveTarget: 10,
      loots: [
        {name: 'shard', num: 25},
      ],
    },
    {
      name: {
        fr: `Démontage`,
        en: `Disassembing`,
      },
      description: {
        fr: `Détruisez 10 artéfacts`,
        en: `Destroye 10 artifacts`,
      },
      objectiveType: `destroye:artifacts`,
      objectiveTarget: 10,
      loots: [
        {name: 'shard', num: 25},
      ],
    },
    {
      name: {
        fr: `Plan B`,
        en: `Plan B`,
      },
      description: {
        fr: `Défaussez 10 cartes`,
        en: `Discard 10 cards`,
      },
      objectiveType: `discard`,
      objectiveTarget: 10,
      loots: [
        {name: 'shard', num: 25},
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
        fr: `Complétez 2 quêtes journalières`,
        en: `Complete 2 daily quests`,
      },
      objectiveType: `quest`,
      objectiveTarget: 2,
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
        fr: `Placez 50 creatures or artéfacts`,
        en: `Summon 50 creatures or artifacts`,
      },
      objectiveType: `play:creaturesOrArtifacts`,
      objectiveTarget: 50,
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
        fr: `Jouez 50 sorts`,
        en: `Cast 50 spells`,
      },
      objectiveType: `play:spells`,
      objectiveTarget: 50,
      loots: [
        {name: 'rune-solid', num: 1},
      ],
    },
  ];

  static get questForToday(): IQuest {
    const day: number = Math.floor(((Date.now() / 1000) - 1596207599) / (60 * 60 * 24));
    return {
      id: `daily-${day}`,
      ...QuestsLibrary.daily[
        day % QuestsLibrary.daily.length
      ],
    };
  }

  static get questForThisWeek(): IQuest {
    const week: number = Math.floor(((Date.now() / 1000) - 1596207599) / (60 * 60 * 24 * 7)) + 1;
    return {
      id: `weekly-${week}`,
      ...QuestsLibrary.weekly[
        week % QuestsLibrary.weekly.length
      ],
    };
  }

}
