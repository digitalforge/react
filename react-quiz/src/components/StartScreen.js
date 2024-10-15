import { useQuiz } from '../contexts/QuizContext'

function StartScreen() {
  const { numberOfQuestions, dispatch } = useQuiz()
  return (
    <div className='start'>
      <h2>Welcome to the React Quiz</h2>
      <h3>{numberOfQuestions} questions to test your React mastery</h3>
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'start' })}
      >
        Lets Start!
      </button>
    </div>
  )
}

export default StartScreen
