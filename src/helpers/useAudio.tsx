import { useRef, useEffect } from 'react'

import click from '../../public/music/click.wav'
import jump from '../../public/music/jump.wav'
import error from '../../public/music/error.wav'
import select from '../../public/music/select.wav'

export const useWithSound = (as: 'jump' | 'click' | 'error' | 'select') => {
    const soundRef = useRef<any>()

    let au = click
    switch (as) {
        case 'jump':
            au = jump
            break
        case 'error':
            au = error
            break
        case 'select':
            au = select
            break
        default:
            au = click
            break
    }

    useEffect(() => {
        soundRef.current = new Audio(au)
    }, [au])

    const playSound = () => {
        soundRef.current.play()
    }

    const pauseSound = () => {
        soundRef.current.pause()
    }

    return {
        playSound,
        pauseSound,
    }
}
