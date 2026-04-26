let display = document.getElementById('display')
function bos(value) {
    display.value += value
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

        if (belgi === "+" || belgi === "-" || belgi === "*" || belgi === "/") {
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
}
function tozalash(params) {
    display.value = "";
}