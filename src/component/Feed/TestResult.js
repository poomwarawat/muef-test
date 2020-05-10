import React, {useState, useEffect, Suspense} from 'react';
import Header from '../Home/Header'
import {Container} from 'reactstrap'
import API from '../../API/API'
import SpinComp from '../SpinComp'
const OutputResult = React.lazy(() => {
    const x = new Promise((resolve) => {
        setTimeout(() => {
            return resolve(import('./OutputResult'))
        }, 1500);
    })
    return x
})

const TestResult = (props) => {
    const [student, setStudent] = useState([])
    const codeId = props.match.params.name
    
    useEffect(() => {
        API.get(`/get-result/${codeId}`)
        .then(res => {
            // console.log(res.data.data)
            if(res.data){
                setStudent(student.concat(res.data.data))
            }            
        })
    },[])
    return (
        <div className="result-page"> 
            <Header/>
            <Container>
                <div className="test-page">                    
                    <Suspense fallback={<SpinComp/>}>
                        {student.length > 0 && <OutputResult result={student}/>}
                    </Suspense>
                </div>
            </Container>
        </div>
    );
}

export default TestResult;
