import React from 'react'
import {Quiz} from '../../data/data';
import {useState} from 'react';
import styles from './question.module.css'

type QuestionPropsType = {
    data: Quiz
}

const Question:React.FC<QuestionPropsType> = ({questionIndex,data}) => {
    const [variantId,setVariantId]=useState();
    const [score,setScore]=useState({
        correctAnswerId:2,
        correctAnswerId:1,
        correctAnswerId:3,
        correctAnswerId:2,
      });

   const question = data.questions.find((quesiton)=>{
    return quesiton.id===questionIndex
   })

    const handleClick = (id) => {
        setVariantId(id);
    }


  return (
    <div>
        <h2>{question?.name}</h2>
    
       {
        question.variants.map((v)=>{
            const isSelected = variantId===v.id
             return(
                    <div key={v.id}  className={isSelected?styles.variantActive:styles.variant} onClick={()=>handleClick(v.id)}>
                        {v.name}
                    </div>
                )
        }
        
        )
       }

    </div>
  )
}

export default Question;