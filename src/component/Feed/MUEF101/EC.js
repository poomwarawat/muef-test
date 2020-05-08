import React, {useState, useEffect} from 'react';
import Header from '../../Home/Header'
import {Container} from 'reactstrap'
import Question from './Question'
import API from '../../../API/API'
import LazyLoad from 'react-lazyload';

const EC = () => {
    const [question, setQuestion] = useState([])

    useEffect(() => {
        API.get("/GET-EC")
        .then(res => {
            if(res.data){
                setQuestion(res.data)        
            }
        })
    }, [])
    return (
        <div className="INH-page">
            <Header/>
            <Container>
                <div className="test-page">
                    <h1>แบบทดสอบพัฒนาด้านการควบคุมอารมณ์ (EC)</h1>
                    <h3>ในระยะ 3 เดือนที่ผ่านมาเด็กมีพฤติกรรมต่อไปนี้บ่อยแค่ไหน ให้เลือกตอบข้อที่ตรงกับความเป็นจริงมากที่สุด</h3>
                    <LazyLoad height={1000}>
                        <Question question={question}/>
                    </LazyLoad>
                </div>
            </Container>
        </div>
    );
}

export default EC;
