let display = document.getElementById("display");

function bos(value) {
    display.value += value;
}

function hisoblash() {
    let qiymat = display.value;

    let son = "";
    let natija = 0;
    let amal = "+";

    for (let i = 0; i < qiymat.length; i++) {
        let belgi = qiymat[i];

        // raqam bo‘lsa yig‘amiz
        if (belgi >= "0" && belgi <= "9") {
            son += belgi;
        }

        // agar amal chiqsa
        if (belgi === "+" || belgi === "-" || belgi === "*" || belgi === "/") {

            let num = Number(son);

            if (amal === "+") natija += num;
            if (amal === "-") natija -= num;
            if (amal === "*") natija *= num;
            if (amal === "/") natija /= num;

            amal = belgi;
            son = "";
        }
    }

    // oxirgi sonni ham hisoblaymiz
    let num = Number(son);

    if (amal === "+") natija += num;
    if (amal === "-") natija -= num;
    if (amal === "*") natija *= num;
    if (amal === "/") natija /= num;

    display.value = natija;
}

function tozalash() {
    display.value = "";
}