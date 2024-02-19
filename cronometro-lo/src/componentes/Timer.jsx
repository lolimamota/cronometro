import React, {useState} from "react"

// SETTIMEOUT: É UM MEDTODO QUE EXECUTARÁ UM CODIGO APÓS O TEMPO ESPECIFICADO(DELAY), o tempo correspondido por milisegundos (3s = 3000 ms)
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

const [timer, setTimer] = useState(0);

const Start = () => {setInterval(() => 
    {setTimer((prevTimer) => prevTimer + 1), 1000})
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
                <button>Pause</button>
                <button>Clear</button>
            </div>
        </main>
    )
}