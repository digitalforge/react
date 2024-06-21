function SkillList(props) {
  return (
    <span style={{ backgroundColor: props.color }}>
      {props.skill} {props.emoji}
    </span>
  )
}

export default SkillList
