import { TOKEN } from "./token";

export class Grid {
  private static createEmptyState = () => [
    "......".split(""),
    "......".split(""),
    "......".split(""),
    "......".split(""),
    "......".split(""),
    "......".split(""),
  ];
  private state: string[][] = Grid.createEmptyState();
  private counterPerColumn: number[] = [0, 0, 0, 0, 0, 0, 0];

  toString() {
    return (
      this.state
        .map((row) => row.join(""))
        .flat()
        .join("\n") + ["\n"]
    );
  }

  addToken(columnPositon: number, color: TOKEN) {
    if (this.counterPerColumn[columnPositon] >= this.state.length) {
      throw new Error("COLUMN FULL");
    }

    if (columnPositon < 0 || columnPositon > 6) {
      throw new Error("INCORRECT COLUMN INDEX");
    }

    this.state[this.state.length - this.counterPerColumn[columnPositon] - 1][
      columnPositon
    ] = color;
    this.counterPerColumn[columnPositon] += 1;
  }

  clear() {
    this.state = Grid.createEmptyState();
  }
}
