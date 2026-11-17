wavesurfer.js draws an interactive waveform for an audio file inside a container element and plays the audio. Its options set the colors of the waveform and its playback progress. Official plugins add regions, a timeline, a minimap, envelope controls, recording, a spectrogram and a hover readout, and the package ships TypeScript types.

The [wavesurfer.js guide](https://wavesurfer.xyz/docs/) covers common use cases, plugins and framework integration.

## Worth knowing

Audio is decoded in the browser, so long clips can fail to decode for memory reasons. The FAQ recommends pre-decoded peaks for large files, and streaming audio needs them. Audio served from another domain must send CORS headers, or the browser will not fetch it.
