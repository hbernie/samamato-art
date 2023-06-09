import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home-component';
import Navbar from './routes/navbar/navbar-component';
import SignIn from './routes/signin/signin-component';

const Shop = (): JSX.Element => {
    return <h1>This is the shop page</h1>;
};
const App = (): JSX.Element => {
    return (
        <Routes>
            <Route path="/" element={<Navbar />}>
                <Route index={true} element={<Home />} />
                <Route path="shop" element={<Shop />} />
                <Route path="sign-in" element={<SignIn />} />
            </Route>
        </Routes>
    );
};

export default App;
