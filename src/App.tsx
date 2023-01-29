import React, {Suspense, useContext, useState} from 'react';
import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames";


const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Change theme</button>
            <Link to='/about'>About</Link>
            <Link to='/'>Main page</Link>
            <Suspense fallback={<div>Loading</div>}>
            <Routes>
                <Route path={'/about'} element={<AboutPageAsync/>}/>
                <Route path={'/'} element={<MainPageAsync/>}/>
            </Routes>
        </Suspense>
        </div>
    );
};

export default App;
