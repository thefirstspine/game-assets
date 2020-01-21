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
        fr: `La nouvelle année rime souvent avec un renouvellement. Prouvez votre valeur dans le premier cycle de l'année 2020 !`,
        en: ``,
      },
      timestampFrom: 0,
      timestampTo: (new Date('2020-03-03 17:00:00')).getTime() / 1000,
      rewardsForPlayers: [
        {name: 'holo-soul-of-a-sacrified-hunter', num: 1},
      ],
      rewardsForWinner: [
        {name: 'holo-hunter', num: 1},
        {name: 'premium-hunter', num: 1},
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
