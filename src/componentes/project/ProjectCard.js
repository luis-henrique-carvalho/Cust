import React from 'react'
import styles from './ProjectCard.module.css'

import {BsPencil, BsFillTrashFill} from 'react-icons'
 

const ProjectCard = ({id, name, budget, category, handleRemove}) => {
  
  return (
    <div className={styles.project_card}>
      <h4>{name}</h4>
      <p>
        <span>Orçamento:</span> R${budget}
      </p>
      <p className={styles.category_text}>
        <span className={`${styles[category.toLowerCase()]}`}></span> {category}
      </p>
      <div>
        <p>editar</p>
        <p>remover</p>
      </div>
    </div>
  )
}

export default ProjectCard