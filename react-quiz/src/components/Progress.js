import { useQuiz } from '../contexts/QuizContext'

function Progress() {
  const { index, numberOfQuestions, points, maxPoints, answer } = useQuiz()

  return (
    <header className='progress'>
      <progress
        max={numberOfQuestions}
        value={index + Number(answer !== null)}
      />
      <p>
        Question{' '}
        <strong>
          {index + 1} / {numberOfQuestions}
        </strong>
      </p>
      <p>
        <strong>{points}</strong> / {maxPoints} points
      </p>
    </header>
  )
}

export default Progress
