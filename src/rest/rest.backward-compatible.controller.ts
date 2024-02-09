import { Controller, Get, Param } from '@nestjs/common';
import { DecksLibrary } from '../libraries/decks.library';
import { CardsLibrary } from '../libraries/cards.library';
import { GamesTypesLibrary } from '../libraries/games-types.library';

@Controller('rest')
/**
 * Main service controller.
 */
export class RestBackwardCompatibleController {

  @Get('decks')
  /**
   * Endpoint /rest/decks
   * Returns a deck list
   */
  getDecks() {
    return DecksLibrary.decks;
  }

  @Get('decks/:id')
  /**
   * Endpoint /rest/decks/:id
   * Returns a deck
   */
  getDeck(@Param('id') id) {
    return DecksLibrary.find(id);
  }

  @Get('cards')
  /**
   * Endpoint /rest/cards
   * Returns a cards list
   */
  getCards() {
    return CardsLibrary.cards;
  }

  @Get('cards/:id')
  /**
   * Endpoint /rest/cards/:id
   * Returns a card
   */
  getCard(@Param('id') id) {
    return CardsLibrary.find(id);
  }

  @Get('game-types')
  /**
   * Endpoint /rest/game-types
   * Returns a game types list
   */
  getGameTypes() {
    return GamesTypesLibrary.all();
  }

  @Get('game-types/:id')
  /**
   * Endpoint /rest/game-types/;id
   * Returns a game type
   */
  getGameType(@Param('id') id) {
    return GamesTypesLibrary.find(id);
  }

}
