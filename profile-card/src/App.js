import Avatar from './components/Avatar'
import Data from './components/Data'
import SkillList from './components/Skilllist'

function App() {
  return (
    <div className='card'>
      <Avatar img='avatar.jpeg' />
      <div className='data'>
        <Data />
        <div className='skills'>
          <SkillList skill='HTML' emoji='💪' color='#d5e2ff' />
          <SkillList skill='CSS' emoji='💪' color='#d5e2ff' />
          <SkillList skill='JavaScript' emoji='💪' color='#d5e2ff' />
          <SkillList skill='React' emoji='👶' color='#d5e2ff' />
          <SkillList skill='Node.js' emoji='👉' color='#d5e2ff' />
          <SkillList skill='Express' emoji='😞' color='#d5e2ff' />
          <SkillList skill='MongoDB' emoji='💪' color='#d5e2ff' />
        </div>
      </div>
    </div>
  )
}

export default App
