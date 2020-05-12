import React from 'react';
import { Table } from 'reactstrap'


const Users = (props) => {
    
    var users = []
    if(props.userlist.length > 0){
        users = users.concat(props.userlist)
    }      
    return (
        <div>            
            <Table>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>ชื่อผู้ใช้งาน</th>
                    <th>ชื่อ</th>
                    <th>นามสกุล</th>
                    </tr>
                </thead>
                <tbody>  
                {users.length > 0 && users.map((user, index) => {
                    return(
                        <tr key={index}>                            
                            <th scope="row">{user.id}</th>
                            <td>{user.username}</td>
                            <td>{user.fname}</td>
                            <td>{user.lname}</td>
                        </tr>        
                    )
                })}
                </tbody>
            </Table>
        </div>
    );
}

export default Users;
