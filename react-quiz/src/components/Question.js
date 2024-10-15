import Options from './Options'
import { useQuiz } from '../contexts/QuizContext'

function Question() {
  const { index, questions, dispatch, answer } = useQuiz()
  const question = questions.at(index)
  // console.log(question.question)
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} />
    </div>
  )
}

export default Question
