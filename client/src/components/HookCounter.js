import React, {useState} from 'react'
import Button from '@material-ui/core/Button'

function HookCounter() {

    const [count, setCount] = useState(0)

    return (
        <div>
            <Button onClick={() => setCount(count + 1)}>Count {count}</Button>
        </div>
    )
}

export default HookCounter