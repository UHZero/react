import { useState } from 'react';

export function useCounter(initialCount = 100) {
    const [count, setCount] = useState(initialCount)

    function inc() {
        setCount(count + 1)
    }

    function dec() {
        setCount(count - 1)
    }

    return [count, inc, dec]
}