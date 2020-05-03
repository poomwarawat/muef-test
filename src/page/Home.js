import React from 'react';
import Header from '../component/Home/Header'
import Content from '../component/Home/Content'

const Home = () => {
    return (
        <div>
            <div className="home-content">
                <Header/>
                <Content/>
            </div>
        </div>
    );
}

export default Home;
