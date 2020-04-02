import { IRank } from '../@shared/rest-shared/entities';

export class RanksLibrary {

  static readonly ranks: IRank[] = [
    {
      id: `unknown`,
      name: {
        en: ``,
        fr: `Inconnu`,
      },
      description: {
        en: ``,
        fr: `Rang Inconnu`,
      },
      min: Number.MIN_SAFE_INTEGER,
      max: 2,
    },
    {
      id: `apprentice`,
      name: {
        en: ``,
        fr: `Apprenti`,
      },
      description: {
        en: ``,
        fr: `Rang Apprenti`,
      },
      min: 2,
      max: 4,
    },
    {
      id: `wizard`,
      name: {
        en: ``,
        fr: `Sorcier`,
      },
      description: {
        en: ``,
        fr: `Rang Sorcier`,
      },
      min: 4,
      max: 8,
    },
    {
      id: `virtuoso`,
      name: {
        en: ``,
        fr: `Virtuose`,
      },
      description: {
        en: ``,
        fr: `Rang Virtuose`,
      },
      min: 8,
      max: 16,
    },
    {
      id: `hero`,
      name: {
        en: ``,
        fr: `Héroique`,
      },
      description: {
        en: ``,
        fr: `Rang Héroique`,
      },
      min: 16,
      max: 32,
    },
    {
      id: `epic`,
      name: {
        en: ``,
        fr: `Epique`,
      },
      description: {
        en: ``,
        fr: `Rang Epique`,
      },
      min: 32,
      max: 64,
    },
    {
      id: `mythic`,
      name: {
        en: ``,
        fr: `Mythique`,
      },
      description: {
        en: ``,
        fr: `Rang Mythique`,
      },
      min: 64,
      max: 128,
    },
    {
      id: `prestige`,
      name: {
        en: ``,
        fr: `Prestige`,
      },
      description: {
        en: ``,
        fr: `Rang Prestige`,
      },
      min: 128,
      max: 256,
    },
    {
      id: `legend`,
      name: {
        en: ``,
        fr: `Légende`,
      },
      description: {
        en: ``,
        fr: `Rang Légende`,
      },
      min: 256,
      max: Number.MAX_SAFE_INTEGER,
    },
  ];

  static find(id: string): IRank|undefined {
    return this.ranks.find(e => e.id === id);
  }

}
