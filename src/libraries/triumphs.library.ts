import { ITriumph } from '@thefirstspine/types-rest';

// tslint:disable: max-line-length
export class TriumphsLibrary {

  static readonly triumphs: ITriumph[] = [
    {
      id: 'wizzard',
      name: {
        fr: `Sorcier`,
        en: `Wizard`,
      },
      description: {
        fr: `Vous avez obtenu vos pouvoirs de sorcier.`,
        en: `You had your wizard powers`,
      },
    },
    {
      id: 'loyal',
      name: {
        fr: `Loyal`,
        en: `Loyal`,
      },
      description: {
        fr: `Vous avez connu Arena avant le 30 octobre 2019.`,
        en: `You knew Arena before October 30, 2019`,
      },
    },
    /*
    {
      id: 'spirit',
      name: {
        fr: `Revenant`,
        en: `Spirit`,
      },
      description: {
        fr: `Vous avez bravé la mort.`,
        en: `You faced the death.`,
      },
    },
    {
      id: 'determined',
      name: {
        fr: `Acharné`,
        en: `Determined`,
      },
      description: {
        fr: `Vous avez combattu pendant 7 jours d'affilé.`,
        en: `You fought for 7 days straight.`,
      },
    },
    */
    {
      id: 'conjurer',
      name: {
        fr: `Illusionniste`,
        en: `Conjurer`,
      },
      description: {
        fr: `Vous avez gagné un match en tant qu'Illusionniste.`,
        en: `You won a match as a Conjurer.`,
      },
    },
    {
      id: 'summoner',
      name: {
        fr: `Invocateur`,
        en: `Summoner`,
      },
      description: {
        fr: `Vous avez gagné un match en tant qu'Invocateur.`,
        en: `You won a match as a Summoner.`,
      },
    },
    {
      id: 'sorcerer',
      name: {
        fr: `Prestidigitateur`,
        en: `Sorcerer`,
      },
      description: {
        fr: `Vous avez gagné un match en tant que Prestidigitateur.`,
        en: `You won a match as a Sorcerer.`,
      },
    },
    {
      id: 'hunter',
      name: {
        fr: `Chasseur`,
        en: `Hunter`,
      },
      description: {
        fr: `Vous avez gagné un match en tant que Chasseur.`,
        en: `You won a match as a Hunter.`,
      },
    },
    {
      id: 'silentist',
      name: {
        fr: `Taiseur`,
        en: `Silentist`,
      },
      description: {
        fr: `Vous avez battu Rhosior en combat singulier.`,
        en: `You beat Rhosior in combat.`,
      },
    },
    {
      id: 'predator',
      name: {
        fr: `Prédateur`,
        en: `Predator`,
      },
      description: {
        fr: `Vous avez battu Adovius en combat singulier.`,
        en: `You beat Adovius in combat.`,
      },
    },
  ];

  static find(id: string): ITriumph|undefined {
    return this.triumphs.find(e => e.id === id);
  }

}
