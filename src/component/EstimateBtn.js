import React, {useState, useEffect} from 'react';
import {Button} from 'reactstrap'
import {Link} from 'react-router-dom'
import API from '../API/API'

const EstimateBtn = (props) => {
    const codeId = props.codeId
    const [score, setScore] = useState(false)
    
    useEffect(() => {
        API.get(`/check-total-score/${codeId}`)
        .then(res => {
            if(res.data.result){
                setScore(true)
            }
        })
    }, [])

    return (
        <div>
            { score !== false ? <div></div> : 
            <Link to={`${props.url}`}>
                <Button color="primary">ประเมิน</Button>
            </Link>}
        </div>
    );
}

export default EstimateBtn;
