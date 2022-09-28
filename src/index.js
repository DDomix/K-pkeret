import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

function kep(){
    let link=document.getElementById("url").value;
    document.getElementById("kep").src = link;
}
function szelessegvaltozas(){
    let szelesseg=document.getElementById('width').value;
    document.getElementById('kep').style.width=szelesseg+"px";
}
function kepkeret(){
    let vastag=document.getElementById('vastagsag').value;
    document.getElementById('kep').style.borderWidth = vastag + "px";
    console.log(vastag);
}
function szin(){
    let szinek =document.getElementById('szin').value;
    document.getElementById('kep').style.borderColor=szinek;
}

document.getElementById('url').addEventListener('change', kep);
document.getElementById('width').addEventListener('change', szelessegvaltozas);
document.getElementById('vastagsag').addEventListener('change', kepkeret);
document.getElementById('szin').addEventListener('input', szin);

