import React, {useState, useEffect, Suspense} from 'react';
import {Container} from 'reactstrap'
import Header from '../component/Home/Header'
// import TestingMenu from '../component/Feed/TestingMenu'
import API from '../API/API'
import SpinComp from '../component/SpinComp'
const TestingMenu = React.lazy(() => import('../component/Feed/TestingMenu'))

const MenuTest = (props) => {
    const [user, setUser] = useState()
    const [student, setStudent] = useState([])

    useEffect(() => {
        const codeId = props.match.params.name
        const access = localStorage.getItem('key')
        API.get(`/get-access-user/${access}`)
        .then(res => {
            setUser(res.data[0].username)
        })
        API.get(`/get-student/${codeId}`)
        .then(res => {
            if(res.data){                
                setStudent(student.concat(res.data[0]))
            }
        })        
    }, [])
    return (
        <div className="start-testing">
            <Header/>
            <Container>
                <div className="test-page">                                      
                    <Suspense fallback={<SpinComp/>}>
                        <TestingMenu username={user} std={student[0]} test="101"/>
                    </Suspense>
                </div>
            </Container>
        </div>
    );
}

export default MenuTest;
