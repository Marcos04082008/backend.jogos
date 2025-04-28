
    const { json } = require("stream/consumers");
let times = require("./dados.json")
function verTimes(){
    times.forEach((time) => {
       console.log(time.nome + "-" + 
                   time.goleiro + "(goleiro)," + 
                   time.alaDireito + "(Ala Direito)," + 
                   time.alaEsquerdo + "(Ala Esquerdo)," + 
                   time.fixo + "(Fixo),"+
                   time.tecnico + "(Técnicos),"+
                   time.vitorias + "(Vitorias),"+
                   time.derrotas + "(derrotas)")
 
    });
 }

 function criarArquivo(){
    let dadosEmTexto = json.stringify(times);
    const fs = require("fs");
    fs.writeFileSync("dados.json",dadosEmTexto);
    console.log("Arquivo criado");
 }

function marcarJogos(timeA, timeB, data, horario, estadio, cidade){
    let jogos = require("./jogos.json");
    jogo = {
        timeA: timeA,
        timeB: timeB,
        data: data,
        horario: horario,
        estadio: estadio,
        cidade: cidade,
    }
    jogos.push(jogo);
    jogosJSON = JSON.stringify(jogos);
    const fs = require('fs');
    fs.writeFileSync("jogos.json", jogosJSON);
}
 marcarJogos("Real Madrid", "Brasil" , "15/08/2014" , "16:00" , "Aliaz Parque" , "Mato Grosso");

 function mostrarJogos(){
     let jogos= require("./jogos.json")
     jogos.forEach((jogo )=>{
         console.log (jogo.timeA + "x" + "santos" + "27/08/2025" + "21:00" + "Neo Química" + "SãoPaulo")
     }
     );
 }
 mostrarJogos();

 