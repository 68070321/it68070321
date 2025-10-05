let myinput = document.getElementById("myinput");

let outputUI = document.getElementById("historyUI");

let bankcash = document.getElementById("currentaccount");
let mycash = document.getElementById("currentcash");
let bankval = bankcash.value;
let myval = mycash.value;

function Depo_Or_With() {
    let dowinput = document.getElementById("bankoperatorcash");
    let dowval = dowinput.value;
    let selected = document.getElementById("bankoperator").value;

    let bankcash = document.getElementById("currentaccount");
    let mycash = document.getElementById("currentcash");
    let bankval = bankcash.value;
    let myval = mycash.value;

    if (selected == "Deposit") {
        if (Number(myval) >= Number(dowval) && Number(dowval) > 0 ) {
            myval = Number(myval) - Number(dowval);
            bankval = Number(bankval) + Number(dowval);
        }
    } else {
        if (Number(bankval) >= Number(dowval) && Number(bankval) >= Number(myinput) && Number(myval) >= Number(dowval) && Number(dowval) > 0 ) {
            myval = Number(myval) + Number(dowval);
            bankval = Number(bankval) - Number(dowval);
        }
    }

    outputUI.textContent = "Bank balance " + Number(bankval) + ", " + "My Balance " + Number(myval);
}

function ChangeMoney() {
    let bankcash = document.getElementById("currentaccount");
    let mycash = document.getElementById("currentcash");
    let bankval = bankcash.value;
    let myval = mycash.value;

    myval = Number(myval);
    bankval = Number(bankval);
    outputUI.textContent = "Bank balance " + bankval + ", " + "My Balance " + myval;
}