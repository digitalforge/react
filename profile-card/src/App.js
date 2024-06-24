import Avatar from './components/Avatar'
import Data from './components/Data'
import SkillList from './components/Skilllist'
import { skillsList } from './skills'

function App() {
  return (
    <div className='card'>
      <Avatar img='avatar.jpeg' />
      <div className='data'>
        <Data />
        <div className='skills'>
          {skillsList.map(skill => {
            return (
              <SkillList
                skill={skill.skill}
                color={skill.color}
                level={skill.level}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App
