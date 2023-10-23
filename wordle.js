var hight = 6; // attempts 
var width = 5; // wordlength 

var row = 0; //current guess
var col = 0; //current letter

var gameover = false;

var wordPool = [
    "Coral", "Fable", "Cloud", "Amber", "Chime",
    "Flash", "Plant", "Creek", "Brave", "Mouse",
    "Peach", "Scale", "Snail", "Tweet", "Earth",
    "Grasp", "Ivory", "Spike", "Lodge", "Whisk",
    "Dream", "Yacht", "Giant", "Plaid", "Brush",
    "Olive", "Kiosk", "Quilt", "Jelly", "Vowel",
    "Cliff", "Twist", "Ridge", "Juicy", "Teeth",
    "Lunch", "Frost", "Witch", "Angel", "Spine",
    "Blush", "Curvy", "Mango", "Cabin", "Tulip",
    "Wagon", "Bacon", "Daisy", "Piano", "Bench",
    "Bumpy", "Proud", "Clown", "Fairy", "Elbow",
    "Tiger", "Froth", "Ample", "Petty", "Oasis",
    "Spark", "Blaze", "Globe", "Candy", "Mucus",
    "Sauce", "Ditch", "Nymph", "Pixel", "Crumb",
    "Plume", "Shack", "Knead", "Flame", "Torch",
    "Flask", "Muddy", "Bison", "Motel", "Craft",
    "Fence", "Gavel", "Roast", "Barge", "Rebel",
    "Windy", "Quirk", "Swamp", "Drape", "Wrist",
    "Chomp", "Blitz", "Drool", "Nudge", "Grime",
    "Ranch", "Vista", "Wheat", "Chirp", "Basil",
    "Dwarf", "Flour", "Hasty", "Knack", "Mirth",
    "Nifty", "Pivot", "Scent", "Usher", "Vixen",
    "Wreck", "Adept", "Judge", "Inked", "Jumpy",
    "Knees", "Ledge", "Oven", "Quail", "Rigid",
    "Zippy", "Usual", "Vault", "Wedge", "Xerox",
    "Yodel", "Zebra", "Eager", "Fancy", "Hazel",
    "Jumbo", "Kitty", "Lemon", "Nymph", "Olive",
    "Petty", "Quilt", "Scoop", "Tasty", "Unity",
    "Vocal", "Waltz", "Xenon", "Yogic", "Zesty",
    "Dozen", "Ghost", "Hatch", "Icily", "Karma",
    "Lucky", "Mocha", "Nexus", "Ozone", "Pluck",
    "Quiet", "Rumba", "Salsa", "Ulnar", "Venom",
    "Water", "Fruit"
];

var randdomNumber = Math.random();
randdomNumber = (Number(randdomNumber) * wordPool.length);
var randdomNumberRounded = Math.round(randdomNumber);

var word = wordPool[randdomNumberRounded]
word = word.toUpperCase()

window.onload = function () {
    setGame();
}

function setGame() {
    //board 
    for (var r = 0; r < hight; r++) {
        for (var c = 0; c < width; c++) {
            //<span id="0-0">S</span>
            var tile = document.createElement("span");
            tile.id = r.toString() + '-' + c.toString();
            tile.classList.add("tile")
            tile.textContent = ""
            document.getElementById("board").appendChild(tile)
        }
    }
    // Listen to Key
    document.addEventListener("keyup", (key) => {
        if (gameover) {
            return
        }
        if ("KeyA" <= key.code && key.code <= "KeyZ") {
            if (col < width) {
                var currentTile = document.getElementById(row.toString() + "-" + col.toString()); // [0-2]
                if (currentTile.innerText == "") {
                    currentTile.innerText = key.code[3];
                    col++;
                }
            }
        }
        else if (key.code == "Backspace") { //delete 
            if (col > 0) {
                col -= 1;
            }
            var currentTile = document.getElementById(row.toString() + "-" + col.toString());
            currentTile.innerText = "";

        }
        else if (key.code == "Enter") {
            if (width == col) {
                update();
                row += 1;
                col = 0;
            }
            if (row == hight) {
                gameover = true;
                document.getElementById("answer").innerText = word;
            }
        }
    })
}

function update() {
    var correct = 0;
    for (var c = 0; c < width; c++) {
        var currentTile = document.getElementById(row.toString() + "-" + c.toString());
        var currentLetter = currentTile.innerText;
        let keys = document.querySelectorAll('.keys');

        if (word[c] == currentLetter) {
            currentTile.classList.add("correct");
            correct += 1;

            updateKeyGreen(c)
        }

        else if (word.includes(currentLetter)) {
            currentTile.classList.add("present");

            updateKeyYellow(c)

        }

        else {
            currentTile.classList.add("absent");

            updateKeyGray(c)
        }

        if (correct == width) {
            gameover = true;
            document.getElementById("answer").innerText = "correct!"
        }
    }
}

window.updateWithClick = function updateWithClick(input) {
    if (gameover) {
        return
    }
    if (col < width) {
        var charCode = input.charCodeAt(0);
        // alert(charCode)
        if (charCode >= 65 && charCode <= 90) { // Check if the input is a capital letter (A-Z)
            var currentTile = document.getElementById(row.toString() + "-" + col.toString()); //[2-2]

            if (currentTile.innerText == "") {
                currentTile.innerText = input;
                col++;
            }
        }
    }
}

function deleteOnClick() { //from html
    if (col > 0) {
        col--;
        var currentTile = document.getElementById(row.toString() + "-" + col.toString());
        currentTile.innerText = "";
    }
}

function enterOnClick() { //from html
    if (col == width) {
        update();
        row++;
        col = 0;
        if (row == hight) {
            gameover = true;
            document.getElementById("answer").innerText = word;
        }
    }
    else {
        return
    }
}

function updateKeyGreen(c) {
    var keys = document.querySelectorAll('.keys');

    var currentLetter = document.getElementById(row.toString() + "-" + c.toString()).textContent;
    // check for letters on artificial keyboard
    // go through all letters 
    for (var k = 0; k < keys.length; k++) {
        var currentKey = keys[k];
        if (currentLetter === currentKey.textContent) {
            // add colour
            if(currentKey.classList.contains("present")){currentKey.classList.remove("present");}
            
            currentKey.classList.add("correct");
        }
    }
}

function updateKeyYellow(c) {
    var keys = document.querySelectorAll('.keys');

    var currentLetter = document.getElementById(row.toString() + "-" + c.toString()).textContent;
    // check for letters on artificial keyboard
    // go through all letters 
    for (var k = 0; k < keys.length; k++) {
        var currentKey = keys[k];
        if (currentKey.classList.contains("correct")){return} // doesnt turen yellow once green
        if (currentLetter === currentKey.textContent) {
            // add colour
            currentKey.classList.add("present");
        }
    }
}

function updateKeyGray(c) {
    var keys = document.querySelectorAll('.keys');

    var currentLetter = document.getElementById(row.toString() + "-" + c.toString()).textContent;
    // check for letters on artificial keyboard
    // go through all letters 
    for (var k = 0; k < keys.length; k++) {
        var currentKey = keys[k];
        if (currentLetter === currentKey.textContent) {
            // add colour
            currentKey.classList.add("absent");
        }
    }
}