import SynthButton from "./SynthButton"


export default function KeyPanel( { ctx, gainNode, wave } ) {

    return(
        <div className="keypanel">
            <SynthButton ctx={ctx} gainNode={gainNode} id={"C4"} keyCode={"1"} wave={wave}/>
            <SynthButton ctx={ctx} gainNode={gainNode} id={"D4"} keyCode={"2"} wave={wave}/>
            <SynthButton ctx={ctx} gainNode={gainNode} id={"E4"} keyCode={"3"} wave={wave}/>
            <SynthButton ctx={ctx} gainNode={gainNode} id={"F4"} keyCode={"4"} wave={wave}/>
            <SynthButton ctx={ctx} gainNode={gainNode} id={"G4"} keyCode={"5"} wave={wave}/>
            <SynthButton ctx={ctx} gainNode={gainNode} id={"A4"} keyCode={"6"} wave={wave}/>
            <SynthButton ctx={ctx} gainNode={gainNode} id={"B4"} keyCode={"7"} wave={wave}/>
            <SynthButton ctx={ctx} gainNode={gainNode} id={"C5"} keyCode={"8"} wave={wave}/>
        </div>
    )
}