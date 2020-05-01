import { ICycle } from '../@shared/rest-shared/entities';

// tslint:disable: max-line-length
export class CyclesLibrary {

  static readonly cycles: ICycle[] = [
    {
      id: `renewal-2020`,
      name: {
        fr: `Cycle du renouveau 2020`,
        en: ``,
      },
      description: {
        fr: `Arena fait peau neuve et lance son premier cycle, le Cycle du Renouveau 2020 !`,
        en: ``,
      },
      timestampFrom: 0,
      timestampTo: (new Date('2020-05-01 14:59:59')).getTime() / 1000,
      rewardsForPlayers: [
        {name: 'holo-soul-of-a-sacrified-hunter', num: 1},
      ],
      rewardsForWinner: [
        {name: 'holo-hunter', num: 1},
        {name: 'premium-hunter', num: 1},
      ],
    },
    {
      id: `great-ancient-2020`,
      name: {
        fr: `Cycle du Grand Ancien 2020`,
        en: ``,
      },
      description: {
        fr: `Les Grands Anciens sont à la fête ! Célébrez ces créatures disparues dans un tournoi sans pitié et remportez la carte prémium de l'invocateur.`,
        en: ``,
      },
      timestampFrom: (new Date('2020-05-01 15:00:00')).getTime() / 1000,
      timestampTo: (new Date('2020-06-12 14:59:59')).getTime() / 1000,
      rewardsForPlayers: [
        {name: 'holo-deadly-viper', num: 1},
      ],
      rewardsForWinner: [
        {name: 'holo-summoner', num: 1},
        {name: 'premium-summoner', num: 1},
      ],
    },
    {
      id: `treasure-2020`,
      name: {
        fr: `Cycle du Trésor 2020`,
        en: ``,
      },
      description: {
        fr: `Des mers du sud nous sont parvenus les corsaires sanguinaires et sans scrupule. Ils recherchent de mystérieux galions d'or disséminés dans tout le Royaume. Vous pouvez en récolter en tournoi ou en partie classique, et les échanger dans la boutique !`,
        en: ``,
      },
      timestampFrom: (new Date('2020-06-12 15:00:00')).getTime() / 1000,
      timestampTo: (new Date('2020-07-24 14:59:59')).getTime() / 1000,
      rewardsForPlayers: [
        {name: 'holo-shadows-banner', num: 1},
      ],
      rewardsForWinner: [
        {name: 'holo-shadows-banner', num: 1},
        {name: 'premium-conjurer', num: 1},
      ],
    },
  ];

  static current(): ICycle|undefined {
    const now: number = Date.now() / 1000;
    return this.cycles.find((cycle: ICycle) => {
      return cycle.timestampFrom <= now && cycle.timestampTo > now;
    });
  }

  static currentNum(): number {
    const now: number = Date.now() / 1000;
    return this.cycles.findIndex((cycle: ICycle) => {
      return cycle.timestampFrom <= now && cycle.timestampTo > now;
    });
  }

  static find(id: string): ICycle|undefined {
    return this.cycles.find(e => e.id === id);
  }

}
