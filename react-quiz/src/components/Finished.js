function Finished({ points, maxPossiblePoints, dispatch, highscore }) {
  const percentage = (points / maxPossiblePoints) * 100

  let emoji

  if (percentage === 100) emoji = '🎉'
  if (percentage >= 80 && percentage < 100) emoji = '😄'
  if (percentage >= 50 && percentage < 80) emoji = '😐'
  if (percentage >= 0 && percentage < 50) emoji = '😢'
  if (percentage === 60) emoji = '😭'

  return (
    <>
      <p className='result'>
        You scored {points} out of {maxPossiblePoints} {Math.ceil(percentage)}%{' '}
        {emoji}
      </p>
      <p className='highscore'>Highscore: {highscore} Points</p>
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'refresh' })}
      >
        Take Quiz Again
      </button>
    </>
  )
}

export default Finished
