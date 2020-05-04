import React from 'react';
import Header from '../component/Home/Header'
import Content from '../component/Home/Content'

const Home = (props) => {     
    var url = window.location.href
    var check = url.split("/")
    console.log(check[3])
    if(check[3] !== ""){
        var id = url.split("?")[1]
        var value = id.split("=")
        console.log(value[0])
        if(value[0]){
            localStorage.setItem("key", value[1])
        }
    }        
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
