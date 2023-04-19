import './menu-styles.scss'
import { Category } from '../../types/Category';


interface MenuProps {
  categories: Category[];
}

const Menu = ({ categories }: MenuProps) => {
  return(
    <div className='menu'>
      {categories.map((category) => {
        const { title, id } = category;
        return(
          <div key={id} className='category'>
          {/* <img /> */}
          <div className='category-body'>
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
          </div>
        ) 
      })}
    </div>
  )
}

export default Menu;