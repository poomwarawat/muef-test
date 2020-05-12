import React, {useEffect} from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import API from '../../API/API'

const Search = (props) => {
    const getALlUser = () =>{
        API.get("/admin/get-user")
        .then(res => {            
            props.handleSearch(res.data)
        })  
    }
    useEffect(() => {
        getALlUser()
    }, [])
    const handelOnChange = (e) => {
        const data = new FormData()
        data.append('data', e.target.value)
        if(e.target.value !== ""){
            API.post("/admin/search-user", data)
            .then(res => {   
                if(res.data.not === true){                    
                    props.handleSearch({not : "ไม่พบข้อมูลผู้ใช้งาน"})
                }else{
                    props.handleSearch(res.data)
                }          
            })            
        }else{
            getALlUser()
        }
    }
    return (
        <div>
            <InputGroup>
                <Input placeholder="ค้นหาโดย ชื่อ นามสกุล ชื่อผู้ใช้งาน เลขไอดี" onChange={handelOnChange} />
                <InputGroupAddon addonType="append">
                    <InputGroupText>Search</InputGroupText>
                </InputGroupAddon>
            </InputGroup>
        </div>
    );
}

export default Search;
