import React , {useState} from 'react'

export const ToggleComponent = (component , visibility) => {

const [visible , setVisibility] = useState(()=>visibility)

console.log(visible);

    return [
        visible ? component : null ,
        () => setVisibility(!visible) ,
    ]
}
