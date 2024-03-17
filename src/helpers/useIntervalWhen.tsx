import { useEffect, useRef } from 'react'

function useIntervalWhen(callback: () => void, delay: number, condition: boolean) {
    const savedCallback = useRef<() => void | null>()

    useEffect(() => {
        savedCallback.current = callback
    }, [callback])

    useEffect(() => {
        function tick() {
            if (savedCallback.current) {
                savedCallback.current()
            }
        }
        if (condition) {
            const id = setInterval(tick, delay)
            return () => clearInterval(id)
        }
    }, [delay, condition])
}

export default useIntervalWhen
