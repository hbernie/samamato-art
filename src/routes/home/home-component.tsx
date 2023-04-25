import Menu from '../../components/menu-component/menu'
import { Category } from '../../types/Category';
import { Outlet } from 'react-router-dom';

const Home = () => {

  const categories: Category[] = [
    {
      id: 1,
      title: 'Collages',
      imgUrl: 'https://i.ibb.co/px2tCc3/jackets.png'
    },
    {
      id: 2,
      title: 'Oil Paintings',
      imgUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png'
    },
    {
      id: 3,
      title: 'Acrylic Paintings',
      imgUrl: 'https://i.ibb.co/GCCdy8t/womens.png'
    }
  ]

  return (
    <div>
      <Menu categories={categories}/>
    </div>
  )
}

export default Home
