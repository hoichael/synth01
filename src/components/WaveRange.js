
export default function WaveRange( { handleWaveChange } ) {

    return (
        <div className="wave-range-div">
            <div className="range-wrapper">
                <input onChange={(e) => {handleWaveChange(e)}} type="range" min="1" max="4" className="wave-range"></input>
            </div>
            <div className="wave-range-label">
                <div className="gain-range-entry-first">SIN</div>
                <div className="gain-range-entry">SQR</div>
                <div className="gain-range-entry">TRI</div>
                <div className="gain-range-entry-last">SAW</div>
            </div>
        </div>
    )
}