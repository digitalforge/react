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
  const { status } = useQuiz()

  return (
    <div className='app'>
      <Header />
      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && <StartScreen />}
        {status === 'finished' && <Finished />}

        {status === 'active' && (
          <>
            <Progress />
            <Question />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}
      </Main>
    </div>
  )
}
