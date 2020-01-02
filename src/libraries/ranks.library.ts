import { IRank } from '../@shared/rest-shared/entities';

export class RanksLibrary {

  static readonly ranks: IRank[] = [
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
      min: Number.MIN_SAFE_INTEGER,
      max: 2,
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
      min: 2,
      max: 5,
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
      min: 5,
      max: 10,
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
      min: 10,
      max: 20,
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
      min: 20,
      max: 50,
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
      min: 50,
      max: Number.MAX_SAFE_INTEGER,
    },
  ];

  static find(id: string): IRank|undefined {
    return this.ranks.find(e => e.id === id);
  }

}
