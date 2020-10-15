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
      id: 'sacrificer',
      name: {
        fr: `Sacrifieur`,
        en: `Sacrificer`,
      },
      description: {
        fr: `Vous avez invoqué une Âme d'un Chasseur Sacrifié avec au moins 10 artefacts dans votre défausse.`,
        en: `You have summoned a Soul of a Sacrificed Hunter with at least 10 artifacts in your discard pile.`,
      },
    },
    {
      id: 'transporter',
      name: {
        fr: `Transporteur`,
        en: `Transporter`,
      },
      description: {
        fr: `Vous avez blessé un Portail Monstrueux vous appartenant pour invoquer une créature ou un artefact.`,
        en: `You have wounded a Monstrous Portal belonging to you to summon a creature or artifact.`,
      },
    },
    {
      id: 'comic',
      name: {
        fr: `Comique`,
        en: `Comic`,
      },
      description: {
        fr: `Vous avez totalisé 5 bouffons sur le plateau de jeu.`,
        en: `You have totaled 5 jesters on the game board.`,
      },
    },
    {
      id: 'repeater',
      name: {
        fr: `Répéteur`,
        en: `Repeater`,
      },
      description: {
        fr: `Vous avez joué 4 sorts dans le même tour.`,
        en: `You played 4 spells in the same turn.`,
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
    {
      id: 'constructor',
      name: {
        fr: `Constructeur`,
        en: `Constructor`,
      },
      description: {
        fr: `Vous avez battu Drebus en combat singulier.`,
        en: `You beat Drebus in combat.`,
      },
    },
    {
      id: 'poacher',
      name: {
        fr: `Braconnier`,
        en: `Poacher`,
      },
      description: {
        fr: `Vous avez battu Crevior en combat singulier.`,
        en: `You beat Crevior in combat.`,
      },
    },
    {
      id: 'adventurer',
      name: {
        en: `Adventurer`,
        fr: `Aventurier`,
      },
      description: {
        en: `Complete a quest.`,
        fr: `Terminez une quête.`,
      },
    },
    {
      id: 'crafter',
      name: {
        en: `Crafter`,
        fr: `Fabricant`,
      },
      description: {
        en: `Craft a cosmetic.`,
        fr: `Fabriquez un cosmétique.`,
      },
    },
    {
      id: 'healer',
      name: {
        fr: `Guérisseur`,
        en: `Healer`,
      },
      description: {
        fr: `Vous avez gagné un match en tant que Guérisseur.`,
        en: `You won a match as a Healer.`,
      },
    },
    {
      id: 'architect',
      name: {
        fr: `Architecte`,
        en: `Architect`,
      },
      description: {
        fr: `Vous avez gagné un match en tant qu'Architecte.`,
        en: `You won a match as an Architect.`,
      },
    },
    {
      id: 'priest',
      name: {
        fr: `Prêtre`,
        en: `Priest`,
      },
      description: {
        fr: `Vous avez gagné un match en tant que Prêtre.`,
        en: `You won a match as a Priest.`,
      },
    },
    {
      id: 'blacksmith',
      name: {
        fr: `Forgeron`,
        en: `Blacksmith`,
      },
      description: {
        fr: `Vous avez gagné un match en tant que Forgeron.`,
        en: `You won a match as a Blacksmith.`,
      },
    },
  ];

  static find(id: string): ITriumph|undefined {
    return this.triumphs.find(e => e.id === id);
  }

}
