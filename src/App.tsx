import React from 'react'
import Panel from './panel'
import Diode from './Diode'
import './styles.scss'
const diodes:any[] = [];
for (let i:number = 0; i<=9; i++){
    diodes.push(<Diode/>)
}

const App:React.FC = (props: any)=>{
    return(
        <>
        <Panel >
            {...diodes}
        </Panel>
        
        </>
    )
}
 export default App;