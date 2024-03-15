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
        // Fill this in
    }
}

module.exports = Bejeweled;
