import './menu-styles.scss';
import { type Category } from '../../types/Category';
// import collage from '../../assets/collage.png'
// import mixedmedia from '../../assets/mixed-media.png'
// import oil from '../../assets/oil.png'

interface MenuProps {
    categories: Category[];
}

const Menu = ({ categories }: MenuProps): JSX.Element => {
    return (
        <div className="menu">
            {categories.map((category) => {
                const { title, id, img } = category;
                const imagePath = `../../assets/${img}.png`
                return (
                    <div key={id} className="category">
                        <img src={imagePath} className="bg-img" />
                        <div className="category-body">
                            <h2>{title}</h2>
                            <p>Shop Now</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Menu;
