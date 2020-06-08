import { IAvatar } from '@thefirstspine/types-rest';

// tslint:disable: max-line-length
export class AvatarsLibrary {

  static readonly avatars: IAvatar[] = [
    {
      id: `mara`,
      name: {
        fr: `Mara, prophétesse d'Exodia`,
        en: `Mara, prophetess of Exodia`,
      },
      description: {
        fr: `Mara est l'une des plus puissantes prophétesses d'Exodia. Elle a développé ses dons de prophétesse très jeune et a recemment eu ses pouvoirs d'invocateur. Mère de Volk'ha, elle recherche la Couronne pour de sombres raisons.`,
        en: `Mara is one of the most powerful prophets of Exodia. She developed her gifts as a prophetess very young and recently had her powers of summoner. Mother of Volk'ha, she searches for the Crown for dark reasons.`,
      },
    },
    {
      id: `merlin`,
      name: {
        fr: `Merlin, dernier érudit d'Exodia`,
        en: `Merlin, Exodia's latest scholar`,
      },
      description: {
        fr: `Merlin n'a plus sa place en Exodia et il le sait : son combat contre l'obscurantisme de la Foi est perdu. Seule sa quête d'héritage occupe son esprit, déjà bien embrumé par des connaissances interdites.`,
        en: `Merlin does not belong in Exodia anymore and he knows it: his fight against the obscurantism of the Faith is lost. Only his quest for heritage occupies his mind, already well clouded by prohibited knowledge.`,
      },
    },
    {
      id: `insane`,
      name: {
        fr: `Démence, qui n'a pas sa place`,
        en: `Insane, who does not belong here`,
      },
      description: {
        fr: `Démence est mort il y a bien longtemps et est enterré dans le Cimetierre Oublié. Sa présence même est un blasphème, et il est recherché activement pour savoir ce qu'il est advenu de la Couronne. Si seulement Démence était revenu avec ses souvenirs...`,
        en: `Insane died a long time ago and is buried in the Forgotten Cemetery. His presence is blasphemy, and he is actively sought to find out what happened to the Crown. If only Insane had returned with his memories ...`,
      },
    },
    {
      id: `argento`,
      name: {
        fr: `Argento, le guérisseur-empoisonneur`,
        en: `Argento, the healer-poisoner`,
      },
      description: {
        fr: `Argento est un guérisseur qui a fait ses preuves sur le champ de bataille lors de la guerre contre le Royaume aux Neuf Déserts. D'aucun n'a remarqué que ses remèdes pouvaient aussi se révéler être de véritables poisons.`,
        en: `Argento is a healer who proved himself on the battlefield during the war against the Kingdom of the Nine Deserts. No one has noticed that his remedies can also be turned out to be real poisons.`,
      },
    },
    {
      id: `applicant`,
      name: {
        fr: `Postulant`,
        en: `Applicant`,
      },
      description: {
        fr: `Un postulant, anonyme parmi les anonymes, à la destinée et à l'origine floues. Revenu d'entre les morts par la main même d'Ovil, le Postulant n'a de cesse de chercher la Couronne pour racheter son humanité.`,
        en: `A postulant, anonymous among the anonymous, with a vague destiny and origin. Returned from the dead by the very hand of Ovil, the Postulant never stops looking for the Crown to redeem his humanity.`,
      },
    },
  ];

  static find(id: string): IAvatar|undefined {
    return this.avatars.find(e => e.id === id);
  }

}
