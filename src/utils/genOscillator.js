function genOscillator(ctx, wave, frq, detune) {

//    console.log(wave, "IN GEN OSC");

    const osc = ctx.createOscillator();
    osc.type = wave;
    osc.frequency.value = frq;
    osc.detune.value = detune;
    return osc;
}

export default genOscillator