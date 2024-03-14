import { Component, OnInit } from '@angular/core';
import { RedireccionamientoService } from '../services/redireccionamiento.service';

@Component({
  selector: 'app-princess-quiz',
  templateUrl: './princess-quiz.page.html',
  styleUrls: ['./princess-quiz.page.scss'],
})
export class PrincessQuizPage implements OnInit {
  constructor(private redireccionamiento: RedireccionamientoService) {}
  
  nav(ruta:string){
    this.redireccionamiento.navegar(ruta);
  }


  ngOnInit() {}

  currentQuestionIndex: number = 0;

  questions: string[] = [
    '¿Cuál es tu color favorito?',
    '¿Qué actividad prefieres hacer en tu tiempo libre?',
    '¿Qué tipo de música te gusta más?',
    '¿Cuál es tu comida favorita?',
    '¿Prefieres el mar o la montaña?',
    '¿Cómo te gusta pasar tu cumpleaños?',
    '¿Cuál es tu sueño más grande?',
    '¿Qué cualidad valoras más en una persona?',
  ];
  answers: string[][] = [
    ['Azul', 'Rosa', 'Verde', 'Morado'],
    ['Leer', 'Cocinar', 'Salir con amigos', 'Hacer deporte'],
    ['Pop', 'Rock', 'Clásica', 'Reggeton'],
    ['Pizza', 'Sushi', 'Ensalada', 'Hamburguesa'],
    ['Mar', 'Montaña', 'Ambos', 'Ninguno'],
    ['Con amigos', 'En familia', 'Con una fiesta', 'De viaje'],
    ['Ser famoso', 'Viajar por el mundo', 'Encontrar el amor', 'Ser exitoso'],
    ['Bondad', 'Inteligencia', 'Valentía', 'Honestidad'],
  ];
  princesses: { name: string; description: string; img: string }[] = [
    {
      name: 'Aurora',
      description:
        'Eres dulce y soñadora, te encanta dormir y pasar tiempo en la naturaleza.',
      img: 'p1.jpg',
    },
    {
      name: 'Blanca Nieves',
      description:
        'Eres amable y tienes un gran corazón, te encanta cuidar a los demás.',
      img: 'p2.jpg',
    },
    {
      name: 'Ariel',
      description:
        'Eres aventurera y curiosa, siempre estás buscando explorar y descubrir cosas nuevas.',
      img: 'p3.jpg',
    },
    {
      name: 'Cenicienta',
      description:
        'Eres fuerte y perseverante, sabes que los sueños se hacen realidad con esfuerzo.',
      img: 'p4.jpg',
    },
    {
      name: 'Bella',
      description:
        'Eres inteligente y apasionada, amas los libros y buscas la belleza en todas partes.',
      img: 'p5.jpg',
    },
    {
      name: 'Jasmín',
      description:
        'Eres valiente y decidida, nunca te conformas con lo establecido y buscas la libertad.',
      img: 'p6.jpg',
    },
    {
      name: 'Mulan',
      description:
        'Eres valiente y leal, siempre estás dispuesta a defender lo que es correcto.',
      img: 'p7.jpg',
    },
    {
      name: 'Tiana',
      description:
        'Eres trabajadora y ambiciosa, siempre persigues tus sueños con determinación.',
      img: 'p8.jpg',
    },
  ];
  selectedAnswers: string[] = [];
  showResult: boolean = false;
  result: string = '';
  description: string = '';
  img: string = "";

  selectAnswer(answer: string) {
    console.log(this.currentQuestionIndex);
    this.selectedAnswers.push(answer);
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.calculateResult();
    }
  }

  calculateResult() {
    let princessCount = this.princesses.length;
    let princessScores: number[] = Array(princessCount).fill(0);

    for (let i = 0; i < this.selectedAnswers.length; i++) {
      for (let j = 0; j < princessCount; j++) {
        if (this.answers[i][j] === this.selectedAnswers[i]) {
          princessScores[j]++;
        }
      }
    }

    let maxScoreIndex = 0;
    for (let i = 1; i < princessCount; i++) {
      if (princessScores[i] > princessScores[maxScoreIndex]) {
        maxScoreIndex = i;
      }
    }

    this.result = this.princesses[maxScoreIndex].name;
    this.description = this.princesses[maxScoreIndex].description;
    this.img = "../../assets/images/" + this.princesses[maxScoreIndex].img;
    this.showResult = true;
  }
}
