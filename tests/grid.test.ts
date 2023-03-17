import { expect } from "./test-helper";
import { Grid } from "../src/grid";
import { TOKEN } from "../src/token";

describe("Grid", () => {
  describe("constructor", () => {
    it("When creating a new grid, it is empty", () => {
      // Arrange
      const grid = new Grid();

      // Act
      const result = grid.toString();

      // Assert

      const expectedGrid = "......\n......\n......\n......\n......\n......\n";
      expect(result).to.be.equal(expectedGrid);
    });
  });

  describe("addToken", () => {
    it("Given an empty grid, when we add a token in a row, the first column contains this token at the bottom", () => {
      // Arrange
      const grid = new Grid();

      // Act
      grid.addToken(0, TOKEN.RED);
      const result = grid.toString();

      // Assert
      const expectedGrid = "......\n......\n......\n......\n......\nR.....\n";
      expect(result).to.be.equal(expectedGrid);
    });

    it("Given an empty grid, when we add a token in a row, the third column contains this token at the bottom", () => {
      // Arrange
      const grid = new Grid();

      // Act
      grid.addToken(2, TOKEN.RED);
      const result = grid.toString();

      // Assert
      const expectedGrid = "......\n......\n......\n......\n......\n..R...\n";
      expect(result).to.be.equal(expectedGrid);
    });

    it("Given a grid with a token in column, when we add a token in that column, this column should contain two token on top of another", () => {
      // Arrange
      const grid = new Grid();
      grid.addToken(0, TOKEN.RED);

      // Act
      grid.addToken(0, TOKEN.RED);
      const result = grid.toString();

      // Assert
      const expectedGrid = "......\n......\n......\n......\nR.....\nR.....\n";
      expect(result).to.be.equal(expectedGrid);
    });

    it("Given a grid with 5 tokens in column, when we add a token in that column, this column should contain 6 tokens on top of another", () => {
      // Arrange
      const grid = new Grid();
      grid.addToken(0, TOKEN.RED);
      grid.addToken(0, TOKEN.RED);
      grid.addToken(0, TOKEN.RED);
      grid.addToken(0, TOKEN.RED);
      grid.addToken(0, TOKEN.RED);

      // Act
      grid.addToken(0, TOKEN.RED);
      const result = grid.toString();

      // Assert
      const expectedGrid = "R.....\nR.....\nR.....\nR.....\nR.....\nR.....\n";
      expect(result).to.be.equal(expectedGrid);
    });

    it("Given a grid with 6 tokens in column, when we add a token in that column, an error `COLUMN FULL` should be raised", () => {
      // Arrange
      const grid = new Grid();
      grid.addToken(0, TOKEN.RED);
      grid.addToken(0, TOKEN.RED);
      grid.addToken(0, TOKEN.RED);
      grid.addToken(0, TOKEN.RED);
      grid.addToken(0, TOKEN.RED);
      grid.addToken(0, TOKEN.RED);

      // Act

      // Assert
      expect(() => {
        grid.addToken(0, TOKEN.RED);
      }).to.throw("COLUMN FULL");
    });

    it("Given a grid with one token in the first column, when we add a token in the third column, there should be a token in the first and third row", () => {
      // Arrange
      const grid = new Grid();
      grid.addToken(0, TOKEN.RED);

      // Act
      grid.addToken(2, TOKEN.RED);
      const result = grid.toString();

      // Assert
      const expectedGrid = "......\n......\n......\n......\n......\nR.R...\n";
      expect(result).to.be.equal(expectedGrid);
    });

    it("Given a empty grid, when we want to add a token in incorrect column -1, an error `INCORRECT COLUMN INDEX` should be raised", () => {
      // Arrange
      const grid = new Grid();

      // Act

      // Assert
      expect(() => {
        grid.addToken(-1, TOKEN.RED);
      }).to.throw("INCORRECT COLUMN INDEX");
    });

    it("Given a empty grid, when we want to add a token in incorrect column 7, an error `INCORRECT COLUMN INDEX` should be raised", () => {
      // Arrange
      const grid = new Grid();

      // Act

      // Assert
      expect(() => {
        grid.addToken(7, TOKEN.RED);
      }).to.throw("INCORRECT COLUMN INDEX");
    });

    it("Given an empty grid, when we add a yellow token in a row, the first column contains this token at the bottom", () => {
      // Arrange
      const grid = new Grid();

      // Act
      grid.addToken(0, TOKEN.YELLOW);
      const result = grid.toString();

      // Assert
      const expectedGrid = "......\n......\n......\n......\n......\nY.....\n";
      expect(result).to.be.equal(expectedGrid);
    });

    it("Given a grid with a red token in column, when we add an yellow token in that column, this column should contain the yellow token on top of the red token", () => {
      // Arrange
      const grid = new Grid();
      grid.addToken(0, TOKEN.RED);

      // Act
      grid.addToken(0, TOKEN.YELLOW);
      const result = grid.toString();

      // Assert
      const expectedGrid = "......\n......\n......\n......\nY.....\nR.....\n";
      expect(result).to.be.equal(expectedGrid);
    });
  });

  describe("clear", () => {
    it("Given an empty grid, when clearing it, it should stay empty", () => {
      // Arrange
      const grid = new Grid();

      // Act
      grid.clear();
      const result = grid.toString();

      // Assert
      const expectedGrid = "......\n......\n......\n......\n......\n......\n";
      expect(result).to.be.equal(expectedGrid);
    });

    it("Given an grid with one red token on the first column, when clearing it, the grid should be empty", () => {
      // Arrange
      const grid = new Grid();
      grid.addToken(0, TOKEN.RED);

      // Act
      grid.clear();
      const result = grid.toString();

      // Assert
      const expectedGrid = "......\n......\n......\n......\n......\n......\n";
      expect(result).to.be.equal(expectedGrid);
    });

    it("Given an grid with two red token on the first column, when clearing it, the grid should be empty", () => {
      // Arrange
      const grid = new Grid();
      grid.addToken(0, TOKEN.RED);
      grid.addToken(0, TOKEN.RED);

      // Act
      grid.clear();
      const result = grid.toString();

      // Assert
      const expectedGrid = "......\n......\n......\n......\n......\n......\n";
      expect(result).to.be.equal(expectedGrid);
    });
  });
});
