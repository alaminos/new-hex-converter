var converter = {
    dec_hex: function(decimal) {
        var hex = decimal.toString(16); //this is the way to convert to hexadecimal
        this.oldHex_newHex(hex); //it is sent to be mapped with new hexadecimal symbols
    },

    hex_dec: function(hex) {
        var result = parseInt(hex, 16); //converts hexadecimal to decimal
        view.displayDec(result);
    },

    oldHex_newHex: function(hex) {
        hex = hex.toUpperCase();
        var result = '';
        for (char of hex) {
            var index = this.map[0].indexOf(char);
            result += this.map[1][index];
        }
        //console.log(result);
        view.displayHex(result);
    },

    newHex_oldHex: function(hex) {
        hex = hex.toUpperCase();
        var result = '';
        for (char of hex) {
            var index = this.map[1].indexOf(char);
            result += this.map[0][index];
        }
        //return result;
        this.hex_dec(result);
    },

    map: [
        hex_norm = "0123456789ABCDEF",
        hex_alt = "ʘIȤӠЯVИŁΛΨXБÇÐЄҒ"
    ]
};


var handlers = {
    enterNumber: function(elemClicked) {
        var value = elemClicked.textContent;
        var display = document.getElementById('userInputDisplay');
        var dec_display = document.getElementById('dec_display');
        display.value += value;
        dec_display.innerHTML = "";

    },

    dec_hex: function() {
        var userInput = document.getElementById('decimalinput').valueAsNumber;
        if (userInput === undefined ) {
            view.error();
        }
        converter.dec_hex(userInput);
        return false;
    },

    hex_dec: function() {
        var userInput = document.getElementById('userInputDisplay').value;
        //console.log(userInput);
        converter.newHex_oldHex(userInput);
        return false;
    }
};


var view = {
    setUpEventListeners: function() {
        var numpad = document.getElementById("numpad");
        numpad.addEventListener('click', function(event) {
            var elemClicked = event.target;
            if (elemClicked.className = "numeral") {
                handlers.enterNumber(elemClicked);
            }
        }
        )
    },

    displayHex: function(val) {
        var display = document.getElementById("hex_display");
        display.textContent = val;
    },

    displayDec: function(val) {
        var display = document.getElementById("dec_display");
        display.textContent = val;
    },

    clearDisplay: function() {
        var display = document.getElementsByClassName("display");
        var content = display.innerText;
        console.log(content);
    },

    error: function() {
        var display = document.getElementById('hex_display');
        display.innerText = "Enter a number."
    }

};

view.setUpEventListeners();
