import './App.css'
import { useState } from 'react';
import Question from './components/question/question.tsx';
import {quiz} from './data/data.ts';

function App() {
  const [questionState,setQuestionState]=useState(1);

  const handleQuestion = () =>{
    if(questionState<4){
      setQuestionState(questionState+1) 
    }else{
      alert('Finish')
      setQuestionState(1)
    }
  }
  
  return (
    <div >
      <div className="quizBox">
        <div>
          Quiz Time
        </div>
        <div>
          Quiz #2
        </div>
      </div>

      <Question  questionIndex={questionState} data={quiz}/>

      <div>
        <button onClick={handleQuestion}>CONTINUE</button>
      </div>

    </div>
  )
}

export default App
