import Menu from './components/menu-component/menu'
import { Category } from './types/Category';

function App() {

  const categories: Category[] = [
    {
      id: 1,
      title: 'Collages'
    },
    {
      id: 2,
      title: 'Oil Paintings'
    },
    {
      id: 3,
      title: 'Acrylic Paintings'
    }
  ]

  return <Menu categories={categories}/>
}

export default App
