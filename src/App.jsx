import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '..//src/components/Header/Header';
import Home from '..//src/views/Home/Home';
import Help from './components/HelpMenu/HelpMenu';
import CalendarComponent from './components/Calendar/Calendar';

const App = () => {
    return (
        <div>
            <Header />
            <Home />
            <CalendarComponent />
            <Help />
        </div>
    );
};

export default App;
