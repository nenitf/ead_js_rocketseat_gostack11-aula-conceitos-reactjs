import React, { useState } from 'react'

import './App.css'
import background from './assets/background.jpg'

import Header from './components/Header' 

function App(){
    const [projects, setProjects] = useState(['Desenvolvimento de app', 'Frontend web'])

    function handleAddProject(){ 
        // projects.push(`Novo proj ${Date.now()}`)
        // console.log(projects)
        setProjects([...projects, `Novo proj ${Date.now()}`])
    }

    return (
        <>
            <Header title="ReactJS GoStack11"/>

            <img width={300} src={background}/>

            <button type="button" onClick={handleAddProject}>Add projeto</button>

            <ul>
                {projects.map(project => <li key={project}>{project}</li>)}
            </ul>
        </>
    )
}

export default App
