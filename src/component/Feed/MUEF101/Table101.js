import React, {useState, useEffect} from 'react';
import ShowTable from '../ShowTable'
import API from '../../../API/API'

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
            {user && student && <ShowTable user={user} std={student} testCode={101}/>}            
        </div>
    );
}

export default Table101;
