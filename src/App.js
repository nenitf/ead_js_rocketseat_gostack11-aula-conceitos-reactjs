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
        <Header/>
        </>
    )
}

export default App
