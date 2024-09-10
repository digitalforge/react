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

const initialState = {
  questions: [],

  //status states - loading, error, ready, active, finished
  status: 'loading',
  index: 0,
  answer: null,
  points: 0,
}

function reducer(state, action) {
  switch (action.type) {
    case 'dataReceived':
      return { ...state, questions: action.payload, status: 'ready' }
    case 'dataFailed':
      return { ...state, status: 'error' }
    case 'start':
      return { ...state, status: 'active', index: 0, points: 0, answer: null }
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
      if (state.index === state.questions.length - 1) {
        return { ...state, status: 'finished' }
      }
      return { ...state, index: state.index + 1, answer: null }
    default:
      throw new Error('Invalid action type')
  }
}

export default function App() {
  const [{ questions, status, index, answer, points }, dispatch] = useReducer(
    reducer,
    initialState
  )

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
          <div>
            <h2>Quiz Finished</h2>
            <h3>
              You scored {points} out of{' '}
              {questions.reduce((acc, q) => acc + q.points, 0)}
            </h3>
            <button
              className='btn btn-ui'
              onClick={() => dispatch({ type: 'start' })}
            >
              Take Again
            </button>
          </div>
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
            <NextButton dispatch={dispatch} answer={answer} />
          </>
        )}
      </Main>
    </div>
  )
}
