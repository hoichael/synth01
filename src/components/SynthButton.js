
import { useEffect, useRef, useCallback } from "react"

import notes from "../data/notes"
import genOscillator from "../utils/genOscillator"


function SynthButton( { ctx, gainNode, id, keyCode, wave }) {

    const osc = useRef();

    const btnElement = useRef();
    const playing = useRef(false);

    const handlePress = useCallback(function (e) {
        if(e) {
            if(e.code !== "Digit".concat(keyCode)) {
                return;
            }
        }

        if(playing.current) { return };

    //    console.log(wave, "IN SYNTH BTN");
        osc.current = genOscillator(ctx, wave, notes[id], 0)
        osc.current.connect(gainNode);

        osc.current.start();

        btnElement.current.classList.add("pressed");

        playing.current = true;
    }, [wave]);

    const handleRelease = useCallback(function (e) {
        if(e) {
            if(e.code !== "Digit".concat(keyCode)) {
                    return;
                }
        }

        if(!playing.current) { return };
        osc.current.stop();
        btnElement.current.classList.remove("pressed");

        playing.current = false;
    }, [])

    useEffect(() => {
        btnElement.current = document.getElementById(id);
        
        window.addEventListener('keypress', handlePress);
        window.addEventListener('keyup', handleRelease);
        
        return () => {
            window.removeEventListener('keypress', handlePress);
            window.removeEventListener('keyup', handleRelease);
          };

    }, [handlePress, handleRelease])

    return(
        <div className="key-wrapper-outer">
            <div className="key-wrapper-inner">
                <button id={id} onMouseLeave={() => handleRelease()} onMouseUp={() => handleRelease()} onMouseDown={() => handlePress()} className={"key"}></button>
            </div>
            <div className="key-label">
                {`${id} / ${keyCode}`}
            </div>
        </div>
    )
}

export default SynthButton;