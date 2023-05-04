import Menu from '../../components/menu-component/menu';
import { type Category } from '../../types/Category';


const Home = (): JSX.Element => {
    const categories: Category[] = [
        {
            id: 1,
            title: 'Collages',
            img: 'collage',
        },
        {
            id: 2,
            title: 'Oil Paintings',
            img: 'oil'
        },
        {
            id: 3,
            title: 'Mixed Media',
            img: 'mixedmedia'
        },
    ];

    return (
        <div>
            <Menu categories={categories} />
        </div>
    );
};

export default Home;
