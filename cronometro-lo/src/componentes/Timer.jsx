import React, {useState} from "react"

// SETTIMEOUT: É UM MEDTODO QUE EXECUTARÁ UM CODIGO APÓS O TEMPO ESPECIFICADO(DELAY), o tempo correspondido por milisegundos (3s = 3000 ms)
// SINTAXE: setTimeout(()=>{},tempo)
export default function Timer(){

const Mensagem = () => {

    setTimeout(()=>{alert("Usando setTimeout")}, 30)
}

//SEGUNDO EXEMPLO DE setTimeout

const [state, setState] = useState (0)
const Add = () => {
    setTimeout(() => {setState(prevState => prevState + 1)}, 1000)
}

// retorno com () quer dizer um retorno com html

// retorno com {} quer  dizer um retorno com função

//SETINTERVAL: É O METODO QUE PERMITE EXECUTAR REPETIDAMENTE UM BLOCO DE CODIGO A CADA INTERVALO DE TEMPO. EXEMPLO: DE 3 EM 3 SEGUNDOS EXECUTE A AÇÃO.
//SINTAXE setInterval(()=>{o que ele irá fazer}, tempo)

const [timer, setTimer] = useState(0);

// setInterval(()=>{setTime(prevTime => prevTime + 1)}, 1000)

const Start = () => {
    const stopInterval = setInterval(() => {setTimer((prevTimer) => prevTimer + 1)}, 1000)

    setPause(stopInterval)
}

//clearInterval: Interrompe a execução repetida de um bloco, o setIterval.
//inicia-se indo na função que inicia colocando o interval como const e setando o estado 

const [pause, setPause] = useState ()

const Stop = () => {
    clearInterval(pause)
}


    return(
        <main>
            <div>
                <button onClick={Mensagem}>Mensagem pra vc</button>
                <h1>{state}</h1>
                <button onClick={Add}>Add + 1</button>
            </div>
            <div className="cronometro">
                <h2>Cronômetro</h2>
                <h2>{timer}</h2>
                <button onClick={Start}>Play</button>
                <button onClick={Stop}>Pause</button>
                <button>Clear</button>
            </div>
        </main>
    )
}