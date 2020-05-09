import React, {useState, useEffect, Suspense} from 'react';
// import ShowTable from '../ShowTable'
import API from '../../../API/API'
import SpinComp from '../../SpinComp'
const ShowTable = React.lazy(() => {
    const x = new Promise((resolve) => {
        setTimeout(() => {
            return resolve(import('../ShowTable'))
        }, 1500);
    })
    return x
})

const Table101 = () => {
    const [user, setUser] = useState("")  
    const [student, setStd] = useState([])    

    useEffect(() => {
        const access = localStorage.getItem('key')
        API.get(`/get-access-user/${access}`)
        .then(res => {            
            setUser(res.data[0].username)
            API.get(`/get-student-user/${res.data[0].username}`)
            .then(res => {
                if(res.data){
                    setStd(res.data)             
                }
            })
        })        
    }, [])


    
    return (
        <div>                     
            <Suspense fallback={<SpinComp/>}>
                {user && student && <ShowTable user={user} std={student} testCode={101}/>}            
            </Suspense>   
        </div>
    );
}

export default Table101;
