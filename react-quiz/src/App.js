// import DateCounter from './DateCounter'
import Main from './components/Main'
import Header from './components/Header'
import Loader from './components/Loader'
import Error from './components/Error'
import StartScreen from './components/StartScreen'
import Question from './components/Question'
import NextButton from './components/NextButton'

import Progress from './components/Progress'
import Finished from './components/Finished'
import Timer from './components/Timer'
import Footer from './components/Footer'
import { useQuiz } from './contexts/QuizContext'

export default function App() {
  const {
    questions,
    status,
    index,
    answer,
    points,
    highscore,
    secondsRemaining,
    dispatch,
    numberOfQuestions,
    maxPossiblePoints,
  } = useQuiz()

  return (
    <div className='app'>
      <Header />

      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && (
          <StartScreen questions={numberOfQuestions} dispatch={dispatch} />
        )}
        {status === 'finished' && (
          <Finished
            points={points}
            maxPossiblePoints={maxPossiblePoints}
            dispatch={dispatch}
            highscore={highscore}
          />
        )}

        {status === 'active' && (
          <>
            <Progress
              index={index}
              numberOfQuestions={numberOfQuestions}
              maxPoints={maxPossiblePoints}
              points={points}
              answer={answer}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <Footer>
              <Timer secondsRemaining={secondsRemaining} dispatch={dispatch} />
              <NextButton
                dispatch={dispatch}
                answer={answer}
                index={index}
                numberOfQuestions={numberOfQuestions}
              />
            </Footer>
          </>
        )}
      </Main>
    </div>
  )
}
