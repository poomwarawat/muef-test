import React, {useState, useEffect} from 'react';
import {Button} from 'reactstrap'
import {Link} from 'react-router-dom'
import API from '../API/API'


const ResultBtn = (props) => {    
    const codeId = props.codeId
    const [score, setScore] = useState(null)    
    useEffect(() => {
        API.get(`/check-total-score/${codeId}`)
        .then(res => {
            if(res.data.result){                
                setScore(false)                
            }else{
                setScore(true)
            }
        })
    }, [])

    return (
        <div>
            { score !== false ? <div></div> : 
            <Link to={`${props.url}`}>
                ผลประเมิน
            </Link>}
        </div>
    );
}

export default ResultBtn;
