import React from 'react'

import Header from './components/Header' 

function App(){
    /*
     * Sem fragment, com um node (<div>) cobrindo os filhos
    return (
        <div>
        <Header/>
        </div>
    )
    */

    // Com fragment
    return (
        <>
        <Header title="ReactJS GoStack7">
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </Header>
        <Header title="ReactJS GoStack11">
            <ul>
                <li>4</li>
                <li>5</li>
                <li>6</li>
            </ul>
        </Header>
        </>
    )
}

export default App
