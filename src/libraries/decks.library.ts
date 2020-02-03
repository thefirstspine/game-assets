import { CardsLibrary } from './cards.library';
import { IDeck } from '../@shared/rest-shared/entities';

export class DecksLibrary {

  static readonly decks: IDeck[] = [
    {
      id: `hunter`,
      type: 'destiny',
      name: {
        en: ``,
        fr: `Chasseur simple`,
      },
      description: {
        en: ``,
        fr: `Cette destinée n'a de but que de tester Arena.`,
      },
      cards: [
        CardsLibrary.find('putrefaction'),
        CardsLibrary.find('putrefaction'),
        CardsLibrary.find('ruin'),
        CardsLibrary.find('ruin'),
        CardsLibrary.find('heal'),
        CardsLibrary.find('heal'),
        CardsLibrary.find('reconstruct'),
        CardsLibrary.find('reconstruct'),
        CardsLibrary.find('replacement'),
        CardsLibrary.find('replacement'),
        CardsLibrary.find('thunder'),
        CardsLibrary.find('thunder'),
        CardsLibrary.find('smoky-totem'),
        CardsLibrary.find('smoky-totem'),
        CardsLibrary.find('smoky-totem'),
        CardsLibrary.find('smoky-totem'),
        CardsLibrary.find('the-tower'),
        CardsLibrary.find('the-tower'),
        CardsLibrary.find('the-tower'),
        CardsLibrary.find('the-tower'),
        CardsLibrary.find('barbers'),
        CardsLibrary.find('barbers'),
        CardsLibrary.find('gargoyle'),
        CardsLibrary.find('gargoyle'),
        CardsLibrary.find('banshee'),
        CardsLibrary.find('banshee'),
        CardsLibrary.find('banshee'),
        CardsLibrary.find('banshee'),
        CardsLibrary.find('the-fox'),
        CardsLibrary.find('the-fox'),
        CardsLibrary.find('the-fox'),
        CardsLibrary.find('the-fox'),
        CardsLibrary.find('veneniagora'),
        CardsLibrary.find('veneniagora'),
        CardsLibrary.find('soul-of-a-sacrified-hunter'),
        CardsLibrary.find('soul-of-a-sacrified-hunter'),
        CardsLibrary.find('hunter'),
      ],
    },
  ];

  static find(id: string): IDeck|undefined {
    return this.decks.find(e => e.id === id);
  }

}
