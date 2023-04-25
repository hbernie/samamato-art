import './menu-styles.scss'
import { Category } from '../../types/Category';


interface MenuProps {
  categories: Category[];
}

const Menu = ({ categories }: MenuProps) => {
  return(
    <div className='menu'>
      {categories.map((category) => {
        const { title, id, imgUrl } = category;
        return(
          <div key={id} className='category'>
          <img src={imgUrl} className='bg-img'/>
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