import React, {useState} from 'react'
import Button from '@material-ui/core/Button'

function HookCounter() {

    const [x, setCount] = useState(0)

    return (
        <div>
            <Button onClick={() => setCount(x + 1)}>Count {x}</Button>
        </div>
    )
}

export default HookCounter