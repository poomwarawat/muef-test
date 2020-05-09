import React, {useState, Suspense} from 'react';
// import QuestionBox from './QuestionBox'
import {Link} from 'react-router-dom'
import {Button} from 'reactstrap'
import SpinComp from '../../SpinComp'
const QuestionBox = React.lazy(() => import("./QuestionBox"))

const Question = (props) => {  
    const url = window.location.href
    const urlnew = url.split("/")
    console.log(urlnew)      
    return (
        <div>
            <Suspense fallback={<SpinComp/>}>
            {props.question && props.question.map((question, index) => {
                return(
                    <div key={index}>
                        <QuestionBox question={question}/>                        
                    </div>
                )
            })}   
            </Suspense>         
            <div className="back-menu">
                <div>
                    <Link to={`/MUEF-TEST-101/${urlnew[4]}`}>
                        <Button color="light" outline>กลับสู่หน้าหลัก</Button>
                    </Link>
                </div>
                <div>
                    <Link to="/ShowStudent/tutorial">
                        <Button color="light">บันทึกผล</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Question;
