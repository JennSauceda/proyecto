import { Component, OnInit } from '@angular/core';
import { RedireccionamientoService } from '../services/redireccionamiento.service';

interface Card {
  id: number;
  image: string;
  flipped: boolean;
  matched: boolean;
}

@Component({
  selector: 'app-memory-game',
  templateUrl: './memory-game.page.html',
  styleUrls: ['./memory-game.page.scss'],
})
export class MemoryGamePage implements OnInit {
  cards: Card[] = [];
  flippedCards: Card[] = [];
  readonly NUM_PAIRS = 6; // Número de pares de cartas

  constructor(private redireccionamiento: RedireccionamientoService) {}
  
  nav(ruta:string){
    this.redireccionamiento.navegar(ruta);
  }


  ngOnInit(): void {
    this.initializeCards();
  }

  initializeCards() {
    // Agrega las imágenes al array de cartas
    for (let i = 0; i < this.NUM_PAIRS; i++) {
      const card: Card = {
        id: i,
        image: `../../assets/images/${i + 1}.jpg`, // Ajusta la ruta de las imágenes según tu estructura de archivos
        flipped: false,
        matched: false,
      };
      this.cards.push(card);
      this.cards.push({ ...card });
    }
    this.shuffleCards();
  }

  shuffleCards() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  flipCard(card: Card) {
    if (!card.matched && this.flippedCards.length < 2 && !card.flipped) {
      card.flipped = true;
      this.flippedCards.push(card);
      if (this.flippedCards.length === 2) {
        this.checkMatch();
      }
    }
  }

  checkMatch() {
    // console.log('CheckMatch');
    if (this.flippedCards[0].id == this.flippedCards[1].id) {
      // console.log('Match');
      this.flippedCards.forEach((card) => {
        card.matched = true;
      });
      this.flippedCards = [];
    } else {
      // console.log('No Match');
      setTimeout(() => {
        // console.log('FLIP BACK ' + this.flippedCards.length);
        this.flippedCards.forEach((card) => (card.flipped = false));
        this.flippedCards = [];
      }, 1000);
    }
  }

  isGameWon() {
    return this.cards.every((card) => card.matched);
  }

  resetGame() {
    this.cards.forEach((card) => {
      card.flipped = false;
      card.matched = false;
    });
    this.shuffleCards();
  }
}
