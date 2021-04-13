import { useState, useRef, useEffect } from "react"
import GainRange from "./GainRange"
import KeyPanel from "./KeyPanel"
import WaveRange from "./WaveRange"


export default function Main() {

    const [ctx, setCTX] = useState(new AudioContext());
    const [gainNode, setGainNode] = useState(ctx.createGain());
    const [wave, setWave] = useState("sawtooth");

    useEffect(() => {
        gainNode.gain.value = 0.18;
        gainNode.connect(ctx.destination)
    }, [])


    function handleGainChange(e) {
        gainNode.gain.value = e.target.value * 0.005;
    }

    function handleWaveChange(e) {
        let newWave;
    //    console.log(e.target.value);

        switch(e.target.value) {
            case "1":
                newWave = "sine"
            //    console.log(newWave, "NEW WAVE")
                setWave(newWave);
                break;
            case "2":
                newWave = "square"
            //    console.log(newWave, "NEW WAVE")
                setWave(newWave);
                break;
            case "3":
                newWave = "triangle"
            //    console.log(newWave, "NEW WAVE")
                setWave(newWave);
                break;
            case "4":
                newWave = "sawtooth"
            //    console.log(newWave, "NEW WAVE")
                setWave(newWave);
                break;
        }

    }

    return (
        <div className="container">
            <div className="div-upper">
                <div className="name">RMS-001</div>
            </div>
            <div className="div-lower">
                <KeyPanel ctx={ctx} gainNode={gainNode} wave={wave} />
                <div className="range-div">
                    <GainRange handleGainChange={handleGainChange} />
                    <WaveRange handleWaveChange={handleWaveChange} />
                </div>
            </div>
        </div>
    )
}