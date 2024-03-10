const kiiras = document.getElementsByClassName("kifejezes")[0];
const osszeadasGomb = document.getElementById("osszeadas");
const kivonasGomb = document.getElementById("kivonas");
const szorzasGomb = document.getElementById("szorzas");
const osztasGomb = document.getElementById("osztas");
const egyenlosegGomb = document.getElementById("egyenlo");
const tortreszGomb = document.getElementById(".");

export function szamok(){
    const tarolo = document.getElementsByClassName("szamok")[0];
    for(let i=0; i<10; i++){
        tarolo.innerHTML += `<button id='item${i}' class='item' value='${i}'>${i}</button>`;
    }
}

export function szam(){
    for(let i=0; i<10; i++){
        document.getElementById(`item${i}`).onclick = function(){
            let a = document.getElementById(`item${i}`).value;
            const kiiratas = document.getElementsByClassName("kifejezes")[0];
            kiiratas.innerHTML += a;
            return a;
        }
    }
}

export function nullazas(){
    const nullazas = document.getElementById("torles");
    nullazas.addEventListener("click", function törlés(){
        kiiras.innerHTML = "";
    })
}

export function operator(){
    osszeadasGomb.addEventListener("click", function osszeadasJel(){
        if(kiiras.innerHTML == ""){
            kiiras.innerhtml = "";
        }
        else{
        kiiras.innerHTML += "+";
        }
    })
    kivonasGomb.addEventListener("click", function kivonasJel(){
        if(kiiras.innerHTML == ""){
            kiiras.innerhtml = "";
        }
        else{
        kiiras.innerHTML += "-";
        }
    })
    szorzasGomb.addEventListener("click", function szorzasJel(){
        if(kiiras.innerHTML == ""){
            kiiras.innerhtml = "";
        }
        else{
        kiiras.innerHTML += "*";
        }
    })
    osztasGomb.addEventListener("click", function osztasJel(){
        if(kiiras.innerHTML == ""){
            kiiras.innerhtml = "";
        }
        else{
        kiiras.innerHTML += "/";
        }
    })
}

export function tortresz(){
    tortreszGomb.addEventListener("click", function tortreszJel(){
        if(kiiras.innerHTML == ""){
            kiiras.innerhtml = "";
        }
        else{
        kiiras.innerHTML += ".";
        }
    })
}

let eredmeny;

export function egyenloseg(){
    egyenlosegGomb.addEventListener("click", function szamolas(){
            let muvelet = kiiras.innerHTML;
            let szamELso = parseFloat(muvelet);
            let szamStringkent = szamELso.toString();
            let hossz = szamStringkent.length
            console.log(hossz)
            muvelet = muvelet.slice(hossz)
            let operator = muvelet.charAt(0);
            let operatorhossz = operator.length;
            muvelet = muvelet.slice(operatorhossz)
            let szamMasodik = parseFloat(muvelet);
        console.log(szamELso, szamMasodik, operator)
        if(operator == "+"){
            eredmeny = szamELso + szamMasodik;
            console.log(eredmeny)
            kiiras.innerHTML = eredmeny;
        }
        else if(operator == "-"){
            eredmeny = szamELso - szamMasodik;
            console.log(eredmeny)
            kiiras.innerHTML = eredmeny;
        }
        else if(operator == "*"){
            eredmeny = szamELso * szamMasodik;
            console.log(eredmeny)
            kiiras.innerHTML = eredmeny;
        }
        else if(operator == "/"){
            eredmeny = szamELso / szamMasodik;
            console.log(eredmeny)
            kiiras.innerHTML = eredmeny;
        }
    })
}

