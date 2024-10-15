function NextButton({ dispatch, answer, index, numberOfQuestions }) {
  if (answer === null) {
    return null
  }

  if (index < numberOfQuestions - 1)
    return (
      <div>
        <button
          className='btn btn-ui'
          onClick={() => dispatch({ type: 'nextQuestion' })}
        >
          Next
        </button>
      </div>
    )
  if (index === numberOfQuestions - 1)
    return (
      <div>
        <button
          className='btn btn-ui'
          onClick={() => dispatch({ type: 'finished' })}
        >
          Finish
        </button>
      </div>
    )
}

export default NextButton
