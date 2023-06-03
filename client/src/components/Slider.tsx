import React, { useState } from 'react'

interface sliderProps extends React.HTMLAttributes<HTMLDivElement>{
    id?:string
}

const Slider = (props:sliderProps)=>{
    const {id, ...rest } = props
    const [color, setColor] = useState('red')
    return(
                <input type="range" min="1" max="100" value="50" className="slider" id={props.id}></input>
    )
}
 export default Slider;