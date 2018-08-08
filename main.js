/*MHV model = 3 consts: 
 * converter, 
 * handlers, 
 * view
 */

const converter = {
    dec_hex: function(decimal) {
        let hex = decimal.toString(16); //this is the way to convert to hexadecimal
        this.oldHex_newHex(hex); //it is sent to be mapped with new hexadecimal symbols
    },

    hex_dec: function(hex) {
        let result = parseInt(hex, 16); //converts hexadecimal to decimal
        view.displayDec(result);
    },

    oldHex_newHex: function(hex) {
        hex = hex.toUpperCase();
        let result = '';
        for (char of hex) {
            let index = this.map[0].indexOf(char);
            result += this.map[1][index];
        }
        //console.log(result);
        view.displayHex(result);
    },

    newHex_oldHex: function(hex) {
        hex = hex.toUpperCase();
        let result = '';
        for (char of hex) {
            let index = this.map[1].indexOf(char);
            result += this.map[0][index];
        }
        //return result;
        this.hex_dec(result);
    },

    map: [
        hex_norm = "0123456789ABCDEF", //conventional hexadecimal numerals
        hex_alt = "ʘIȤӠЯVИŁΛΨXБÇÐЄҒ" //customized ones
    ]
};


const handlers = {
    enterNumber: function(elemClicked) {
        let value = elemClicked.textContent;
        let display = document.getElementById('userInputDisplay');
        let dec_display = document.getElementById('dec_display');
        display.value += value;
        dec_display.innerHTML = "";

    },

    dec_hex: function() {
        let userInput = document.getElementById('decimalinput').valueAsNumber;
        if (userInput === undefined ) {
            view.error();
        }
        converter.dec_hex(userInput);
        return false;
    },

    hex_dec: function() {
        let userInput = document.getElementById('userInputDisplay').value;
        //console.log(userInput);
        converter.newHex_oldHex(userInput);
        return false;
    }
};


const view = {
    setUpEventListeners: function() {
        let numpad = document.getElementById("numpad");
        numpad.addEventListener('click', function(event) {
            let elemClicked = event.target;
            if (elemClicked.className = "numeral") {
                handlers.enterNumber(elemClicked);
            }
        }
        )
    },

    displayHex: function(val) {
        let display = document.getElementById("hex_display");
        display.textContent = val;
    },

    displayDec: function(val) {
        let display = document.getElementById("dec_display");
        display.textContent = val;
    },

    /*clearDisplay: function() {
        //not needed
        let display = document.getElementsByClassName("display");
        
    },*/

    error: function() { //currently not used, should be useful to avoid "NaN" displayed to user
        let display = document.getElementById('hex_display');
        display.innerText = "Enter a number."
    }

};

view.setUpEventListeners();
