import React from 'react'

// export default function Header(props){
// <h1>{props.title}</h1>
export default function Header({title, children}){
    return (
        <header>
            <h1>{title}</h1>
            {children}
        </header>
    )
}
