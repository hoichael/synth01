
export default function GainRange( { handleGainChange } ) {

    return (
        <div className="gain-range-div">
            <div className="range-wrapper">
                <input onChange={(e) => {handleGainChange(e)}} type="range" min="1" max="100" className="gain-range"></input>
            </div>
            <div className="gain-range-label">VOL</div>
        </div>
    )
}