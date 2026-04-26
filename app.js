let display = document.getElementById("display");
let yangiMisol = false; 

function bos(value) {
    if (yangiMisol) {
        display.value = "";
        yangiMisol = false;
    }
    display.value += value;
}

function hisoblash() {
    let qiymat = display.value;
    let son = "";
    let natija = null;
    let amal = null;

    for (let i = 0; i < qiymat.length; i++) {
        let belgi = qiymat[i];

        if ((belgi >= "0" && belgi <= "9") || belgi === ".") {
            son += belgi;
        } 
        else if ("+-*/".includes(belgi)) {
            let num = Number(son);
            if (natija === null) {
                natija = num;
            } else {
                if (amal === "+") natija += num;
                if (amal === "-") natija -= num;
                if (amal === "*") natija *= num;
                if (amal === "/") natija /= num;
            }
            amal = belgi;
            son = "";
        }
    }

    if (son !== "") {
        let num = Number(son);
        if (natija === null) {
            natija = num;
        } else {
            if (amal === "+") natija += num;
            if (amal === "-") natija -= num;
            if (amal === "*") natija *= num;
            if (amal === "/") natija /= num;
        }
    }

    display.value = natija;
    yangiMisol = true;
}

function tozalash() {
    display.value = "";
    yangiMisol = false;
}

window.addEventListener("keydown", function(event) {
    const key = event.key; 

    if ((key >= "0" && key <= "9") || "+-*/.".includes(key)) {
        bos(key);
    }
    
    // Enter bosilsa hisoblash
    if (key === "Enter") {
        event.preventDefault(); 
        hisoblash();
    }

    
    if (key === "Escape" || key === "Delete") {
        tozalash();
    }

    if (key === "Backspace") {
        display.value = display.value.slice(0, -1);
    }
});