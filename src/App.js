import { useState } from 'react';
import './App.css';
import { questions } from './Components/Questions'


//  const correct={background:"white"}
//  const wrong={background:"red"}


function App() {
  const [currentvalue, setCurrentvalue] = useState(0)
  const [showScore, setShowScore] = useState(false);
  // const[btncolor, SetBtncolor] = useState(true)
  const [score, setScore]=useState(0)

  const handleanswer=( isCorrect)=>{
    if(isCorrect){
      setScore(score+1)
    }
   

    const nextvalue= currentvalue+1
    if(nextvalue < questions.length){
      setCurrentvalue(nextvalue)
    }
    else{
      setShowScore(true)
    }
    
    
  }

  return (
    <div className="app">
      {showScore?(<div className='maincontainer'>
				<h1>You scored {score} out of {questions.length}</h1>	
  
				</div>):(<>
          <div className='maincontainer'>
        <div className='header'>
          <h1>Geekster Quiz</h1>
          <h2>Current Score : {score}</h2>
        </div>
        <div className='question-section'>
          <h2>Questions {currentvalue+1} out of {questions.length}</h2>
          <h3> {questions[currentvalue].questionText}</h3>

          <div className='answer-section'>
          {questions[currentvalue].answerOptions.map((ele)=>{
           return <button  onClick={()=>{
            handleanswer(ele.isCorrect)
            
           }}>{ele.answerText} </button>
         

          })}
          </div>
          
         

        </div>

      </div>
</>)}
     
    
    </div>
  );
}

export default App;
