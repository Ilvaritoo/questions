import React, { useState } from 'react';
import Question from './components/Question';
import data from './data'
function App() {
  const [questions, setQuestions] = useState(data);
  // console.log(question);
  return (
    <section className="content">
      <div className="main-text">
        <h2>Questions and answers about login</h2>
      </div>
      <div className="questions">
        {
          questions.map(question => {
            return(
              <Question key={question.id} {...question}/>
            )
          })
        }
      </div>
    </section>
  );
}

export default App;
