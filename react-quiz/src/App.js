// import DateCounter from './DateCounter'
import Main from './components/Main'
import Header from './components/Header'
import Loader from './components/Loader'
import Error from './components/Error'
import StartScreen from './components/StartScreen'
import Question from './components/Question'
import NextButton from './components/NextButton'

import { useEffect, useReducer } from 'react'
import Progress from './components/Progress'
import Finished from './components/Finished'
import Timer from './components/Timer'
import Footer from './components/Footer'

const SECS_PER_QUESTION = 30

const initialState = {
  questions: [],

  //status states - loading, error, ready, active, finished
  status: 'loading',
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
}

function reducer(state, action) {
  switch (action.type) {
    case 'dataReceived':
      return { ...state, questions: action.payload, status: 'ready' }
    case 'dataFailed':
      return { ...state, status: 'error' }
    case 'start':
      return {
        ...state,
        status: 'active',
        index: 0,
        points: 0,
        answer: null,
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
      }
    case 'newAnswer':
      const question = state.questions.at(state.index)
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      }
    case 'nextQuestion':
      return { ...state, index: state.index + 1, answer: null }
    case 'finished':
      return {
        ...state,
        status: 'finished',
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      }
    case 'refresh':
      return {
        ...state,
        index: 0,
        answer: null,
        points: 0,
        status: 'ready',
        secondsRemaining: 10,
      }
    case 'tick':
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? 'finished' : state.status,
      }
    default:
      throw new Error('Invalid action type')
  }
}

export default function App() {
  const [
    { questions, status, index, answer, points, highscore, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState)

  const numberOfQuestions = questions.length
  const maxPossiblePoints = questions.reduce((acc, q) => acc + q.points, 0)

  useEffect(() => {
    fetch('http://localhost:3001/questions')
      .then(res => res.json())
      .then(data => dispatch({ type: 'dataReceived', payload: data }))
      .catch(err => dispatch({ type: 'dataFailed' }))
  }, [])

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
