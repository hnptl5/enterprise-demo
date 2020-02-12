import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import HomePage from './pages/HomePage';
import NewFeature from './pages/NewFeature';
import NewUseCase from './pages/NewUseCase';
import MainHeader from './components/common/Header';
import Signup from './pages/SignupPage';
import UseCase from './pages/UseCase'
import Footer from './components/common/Footer';
import IconLabelTabs from './components/common/Tabs';
import Feature from './pages/Feature';
import toastr from 'toastr';
import { ThemeProvider } from 'styled-components';
import theme from './assets/styleSheet';
import MainPage from './pages/MainPage';
import 'bootstrap/dist/css/bootstrap.min.css';

toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-top-center",
    "preventDuplicates": true,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}

const IndexApp = () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Router>
                    <MainHeader />
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/main" exact component={MainPage} />
                        <Route path='/home' exact component={HomePage} />
                        <Route path='/signup' exact component={Signup} />
                        <Route path='/tabs' exact component={IconLabelTabs} />
                        <Route path='/case' exact component={UseCase} />
                        <Route path='/feature' exact component={Feature} />
                        <Route path='/newcase' exact component={NewUseCase} />
                        <Route path='/newfeature' exact component={NewFeature} />
                    </Switch>
                    <Footer />
                </Router>
            </ThemeProvider>
        </Provider>
    )
}

ReactDOM.render(<IndexApp />, document.getElementById('root'));
serviceWorker.unregister();
