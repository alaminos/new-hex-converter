var converter = {
    dec_hex: function(decimal) {
        return decimal.toString(16);
        //this.oldHex_newHex(decimal.toString(16));
    },

    hex_dec: function(hex) {
        return parseInt(hex, 16);
    },

    oldHex_newHex: function(hex) {
        hex = hex.toUpperCase();
        var result = '';
        for (char of hex) {
            var index = this.map[0].indexOf(char);
            result += this.map[1][index];
        }
        console.log(result);
    },

    newHex_oldHex: function(hex) {
        hex = hex.toUpperCase();
        var result = '';
        for (char of hex) {
            var index = this.map[1].indexOf(char);
            result += this.map[0][index];
        }
        return result;
    },

    map: [
        hex_norm = "0123456789ABCDEF",
        hex_alt = "ʘרᴝᴟʁVИŁΛΨXБÇÐЄҒ"
    ]
};


var handlers = {
    enterNumber: function(elemClicked) {
        var value = elemClicked.textContent;
        var display = document.getElementById('userInputDisplay');
        display.textContent += value;
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
    }

};

view.setUpEventListeners();