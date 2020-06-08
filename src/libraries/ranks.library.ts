import { IRank } from '@thefirstspine/types-rest';

export class RanksLibrary {

  static readonly ranks: IRank[] = [
    {
      id: `unknown`,
      name: {
        en: `Unknown`,
        fr: `Inconnu`,
      },
      description: {
        en: `Unknown`,
        fr: `Inconnu`,
      },
      min: Number.MIN_SAFE_INTEGER,
      max: 2,
    },
    {
      id: `apprentice`,
      name: {
        en: `Apprentice`,
        fr: `Apprenti`,
      },
      description: {
        en: `Apprentice`,
        fr: `Apprenti`,
      },
      min: 2,
      max: 4,
    },
    {
      id: `wizard`,
      name: {
        en: `Wizard`,
        fr: `Sorcier`,
      },
      description: {
        en: `Wizard`,
        fr: `Sorcier`,
      },
      min: 4,
      max: 8,
    },
    {
      id: `virtuoso`,
      name: {
        en: `Virtuoso`,
        fr: `Virtuose`,
      },
      description: {
        en: `Virtuoso`,
        fr: `Virtuose`,
      },
      min: 8,
      max: 16,
    },
    {
      id: `hero`,
      name: {
        en: `Heroic`,
        fr: `Héroique`,
      },
      description: {
        en: `Heroic`,
        fr: `Héroique`,
      },
      min: 16,
      max: 32,
    },
    {
      id: `epic`,
      name: {
        en: `Epic`,
        fr: `Epique`,
      },
      description: {
        en: `Epic`,
        fr: `Epique`,
      },
      min: 32,
      max: 64,
    },
    {
      id: `mythic`,
      name: {
        en: `Mythic`,
        fr: `Mythique`,
      },
      description: {
        en: `Mythic`,
        fr: `Mythique`,
      },
      min: 64,
      max: 128,
    },
    {
      id: `prestige`,
      name: {
        en: `Prestige`,
        fr: `Prestige`,
      },
      description: {
        en: `Prestige`,
        fr: `Prestige`,
      },
      min: 128,
      max: 256,
    },
    {
      id: `legend`,
      name: {
        en: `Legend`,
        fr: `Légende`,
      },
      description: {
        en: `Legend`,
        fr: `Légende`,
      },
      min: 256,
      max: Number.MAX_SAFE_INTEGER,
    },
  ];

  static find(id: string): IRank|undefined {
    return this.ranks.find(e => e.id === id);
  }

}
