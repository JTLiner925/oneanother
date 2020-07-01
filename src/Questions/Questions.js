import React from 'react'
import './Questions.css'

export default function Questions(props) {
  // console.log(props.question)
    return (
      <div>
        <div className='Question'>
          {props.question.map((question, i) => {
            return (
              <div key={i}>
        <p  id={question} value={question}>{question}</p>

              </div>
            )
          })}
        </div>
      </div>
    )
  
}
