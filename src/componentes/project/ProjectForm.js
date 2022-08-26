import { useEffect, useState } from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'

const ProjectForm = ({ handleSubmit, btnText, projectData }) => {


    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {}) 

    useEffect(() => {

        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategories(data)
            })
            .catch((err) => console.log(err))

    }, [])

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }

    const handleChange = (e) => {
        setProject({ ...project, [e.target.name]: e.target.value })
        console.log(project)
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
                type='text'
                text='Nome do Projeto'
                name='name'
                placeholder='Insira o nome do projeto'
                handleOnChange={handleChange}
                
            />
            <Input
                type='number'
                text='Orçamento do Projeto'
                name='budget'
                placeholder='Insira o orçamento total'
                handleOnChange={handleChange}
            />

            <Select
                name='category_id'
                text='Selecione a categoria'
                options={categories}
            />

            <SubmitButton text={btnText} />
        </form>
    )
}

export default ProjectForm