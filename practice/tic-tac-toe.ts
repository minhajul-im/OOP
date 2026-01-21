import * as readline from "node:readline/promises";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

enum Piece {
  Empty = " ",
  X = "X",
  O = "O",
}

type Row = [Piece, Piece, Piece];
type BoardGrid = [Row, Row, Row];

class Position {
  constructor(
    public row: number,
    public col: number,
  ) {}

  isValid(): boolean {
    return this.row >= 0 && this.row < 3 && this.col >= 0 && this.col < 3;
  }
}

class Board {
  private grid: BoardGrid = [
    [Piece.Empty, Piece.Empty, Piece.Empty],
    [Piece.Empty, Piece.Empty, Piece.Empty],
    [Piece.Empty, Piece.Empty, Piece.Empty],
  ];

  makeMove(pos: Position, piece: Piece): boolean {
    if (!pos.isValid() || this.grid[pos.row][pos.col] !== Piece.Empty) {
      return false;
    }
    this.grid[pos.row][pos.col] = piece;
    return true;
  }

  isFull(): boolean {
    return this.grid.every((row) => row.every((cell) => cell !== Piece.Empty));
  }

  checkWinner(): Piece | null {
    // rows
    for (let r = 0; r < 3; r++) {
      if (
        this.grid[r][0] !== Piece.Empty &&
        this.grid[r][0] === this.grid[r][1] &&
        this.grid[r][1] === this.grid[r][2]
      ) {
        return this.grid[r][0];
      }
    }

    // columns
    for (let c = 0; c < 3; c++) {
      if (
        this.grid[0][c] !== Piece.Empty &&
        this.grid[0][c] === this.grid[1][c] &&
        this.grid[1][c] === this.grid[2][c]
      ) {
        return this.grid[0][c];
      }
    }
    // diagonals
    if (
      this.grid[0][0] !== Piece.Empty &&
      this.grid[0][0] === this.grid[1][1] &&
      this.grid[1][1] === this.grid[2][2]
    ) {
      return this.grid[0][0];
    }

    if (
      this.grid[0][2] !== Piece.Empty &&
      this.grid[0][2] === this.grid[1][1] &&
      this.grid[1][1] === this.grid[2][0]
    ) {
      return this.grid[0][2];
    }

    return null;
  }

  print() {
    console.log("-------------");
    for (const row of this.grid) {
      console.log("| " + row.join(" | ") + " |");
      console.log("-------------");
    }
    console.log("");
  }
}

interface IPlayerStrategy {
  getMove(board: Board, mySymbol: Piece): Promise<Position>;
}

class HumanStrategy implements IPlayerStrategy {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  async getMove(_board: Board, mySymbol: Piece): Promise<Position> {
    while (true) {
      const answer = await rl.question(
        `${this.name} (${mySymbol}), enter row col (examples: 0 1   or   2 2): `,
      );

      const trimmed = answer.trim();
      if (trimmed === "") {
        console.log("→ You pressed enter without typing anything");
        continue;
      }

      const parts = trimmed.split(/\s+/);

      if (parts.length !== 2) {
        console.log(`→ You entered: "${trimmed}"`);
        console.log(
          `→ Found ${parts.length} part(s) — need exactly TWO numbers separated by space`,
        );
        continue;
      }

      const row = Number(parts[0]);
      const col = Number(parts[1]);

      if (isNaN(row) || isNaN(col)) {
        console.log(`→ "${parts[0]}" or "${parts[1]}" is not a number`);
        continue;
      }

      if (row < 0 || row > 2 || col < 0 || col > 2) {
        console.log(
          `→ Numbers must be 0, 1 or 2 (you entered row=${row}, col=${col})`,
        );
        continue;
      }

      return new Position(row, col);
    }
  }
}

type GameStatus = "X_TURN" | "O_TURN" | "X_WON" | "O_WON" | "DRAW";

class TicTacToe {
  private board = new Board();
  private currentSymbol: Piece = Piece.X;
  private status: GameStatus = "X_TURN";

  constructor(
    private xStrategy: IPlayerStrategy,
    private oStrategy: IPlayerStrategy,
  ) {}

  private getCurrentStrategy(): IPlayerStrategy {
    return this.currentSymbol === Piece.X ? this.xStrategy : this.oStrategy;
  }

  private switchPlayer() {
    this.currentSymbol = this.currentSymbol === Piece.X ? Piece.O : Piece.X;
    this.status = this.currentSymbol === Piece.X ? "X_TURN" : "O_TURN";
  }

  async play() {
    while (true) {
      this.board.print();

      if (this.status === "X_WON") {
        console.log("X wins! 🎉");
        break;
      }
      if (this.status === "O_WON") {
        console.log("O wins! 🎉");
        break;
      }
      if (this.status === "DRAW") {
        console.log("Draw!");
        break;
      }

      console.log(`Turn: ${this.currentSymbol}`);

      let pos: Position;
      while (true) {
        pos = await this.getCurrentStrategy().getMove(
          this.board,
          this.currentSymbol,
        );
        if (this.board.makeMove(pos, this.currentSymbol)) {
          break;
        }
        console.log("→ Cell already taken or invalid position");
      }

      const winner = this.board.checkWinner();
      if (winner) {
        this.status = winner === Piece.X ? "X_WON" : "O_WON";
      } else if (this.board.isFull()) {
        this.status = "DRAW";
      } else {
        this.switchPlayer();
      }
    }

    this.board.print();
  }
}

async function play() {
  const game = new TicTacToe(
    new HumanStrategy("Player X"),
    new HumanStrategy("Player O"),
  );

  await game.play();
}

play();
