import React,{ReactNode} from 'react'

type props={
    children:ReactNode;
}

 const Center=(props:props):JSX.Element=> {
    return (
        <div style={{alignItems:"center",marginLeft:'7%'}}>
            {props.children}
        </div>
    )
}

export default Center;