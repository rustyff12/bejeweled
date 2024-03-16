const Screen = require("./screen");
const Cursor = require("./cursor");

class Bejeweled {
    constructor() {
        this.playerTurn = "O";

        // Initialize this
        this.grid = [
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
        ];

        this.cursor = new Cursor(8, 8);

        Screen.initialize(8, 8);
        Screen.setGridlines(true);

        this.cursor.setBackgroundColor();
        Screen.addCommand("left", "move cursor left", this.cursor.left);
        Screen.addCommand("right", "move cursor right", this.cursor.right);
        Screen.addCommand("up", "move cursor up", this.cursor.up);
        Screen.addCommand("down", "move cursor down", this.cursor.down);
        Screen.render();
    }

    static checkForMatches(grid) {
        // check horizontally
        for (let i = 0; i < array.length; i++) {}
    }

    static fillGrid(grid) {
        const newGridSymbols = [1, 2, 3, 4, 5];

        for (let i = 0; i < grid.length; i++) {
            const row = i;
            for (let j = 0; j < grid[i].length; j++) {
                const col = j;
                if (grid[i][j] === " ") {
                    const getRandomSymbol = Math.floor(
                        Math.random() * newGridSymbols.length
                    );
                    grid[i].splice(j, 1, getRandomSymbol);
                }
            }
        }
    }
}

module.exports = Bejeweled;
