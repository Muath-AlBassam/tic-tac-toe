import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  squares: any[];
  xIsCurrent: boolean;
  winner: string;
  filledBoxes: number;

  constructor() {
  }

  ngOnInit(): void {
    this.newGame();
  }

  newGame(): void {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsCurrent = true;
    this.filledBoxes = 0;
  }

  makeMove(squareId: number): void {
    if (this.winner !== null || this.filledBoxes === 9) {
      this.newGame();
    } else {
      if (!this.squares[squareId]) {
        this.squares.splice(squareId, 1, this.player);
        this.xIsCurrent = !this.xIsCurrent;
      }
      this.filledBoxes++;
      this.winner = this.calculateWinner();
    }
  }

  calculateWinner(): any {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    lines.forEach((line: number[]) => {
      {
        const [a, b, c] = line;
        if (this.squares[a] && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c]) {
          return this.squares[a];
        }
      }
    });
    return null;
  }

  get player(): string {
    return this.xIsCurrent ? 'X' : 'O';
  }

}
