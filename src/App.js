import React, { useState, useEffect } from 'react'
import api from './services/api'

import './App.css'

import Header from './components/Header' 

function App(){
    const [projects, setProjects] = useState([])

    useEffect(() => {
        api.get('projects').then((response) => {
            setProjects(response.data)
        })
    }, [])

    async function handleAddProject(){ 
        // setProjects([...projects, `Novo proj ${Date.now()}`])
        const response = await api.post('projects', {
            title: `Projeto ${Date.now()}`,
            owner: "Felipe"
        })

        const project = response.data

        setProjects([...projects, project])
    }

    return (
        <>
            <Header title="ReactJS GoStack11"/>

            <button type="button" onClick={handleAddProject}>Add projeto</button>

            <ul>
                {projects.map(project => <li key={project.id}>{project.title}</li>)}
            </ul>
        </>
    )
}

export default App
