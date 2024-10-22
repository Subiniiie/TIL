import React, { useEffect, useRef } from 'react'
import WaveSurfer from 'wavesurfer.js'

export default function Wave() {
    const waveformRef = useRef<HTMLDivElement | null>(null);
    const wavesurferRef = useRef<WaveSurfer | null>(null);

    useEffect(() => {
        if (!waveformRef.current) return;
        
        wavesurferRef.current = WaveSurfer.create({
            container: '#waveform',
            waveColor: '#4F4A85',
            progressColor: '#383351',
            url: '/audio.mp3',
        })
        
        return () => {
            wavesurferRef.current?.destroy();
        }
    }, [])

    return (
        <div>
            <div id='waveform' ref={waveformRef}></div>
        </div>
    )
    }
