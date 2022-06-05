import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table'
function ApiUser(props) {
    const [users, setUsers] = useState([])
    
    useEffect(() => {
         
        axios.get('https://ecomerce-back-end.herokuapp.com/api/users').then(res => {

            console.log("res", res)
            setUsers(res.data.result)
            console.log("courses",users)
        }).catch(error => {
            console.log("error", error)
        })
    })

    return (
        <div>
           
           <Table className="table">
                <thead>
                    <tr>
                        <th>name</th>
                        <th>Email</th>
                        <th>Password</th>
                    
                    </tr>
                </thead>
                <tbody>

                    {

users.map((users)=>{

                        return(<tr >
                            <td>{users.name}</td>
                            <td>{users.email}</td>
                            <td>{users.password}</td>
                           
                        </tr>)
                     })
                    }
                 

                </tbody>

            </Table>

        </div>
    );
}

export default React.memo(ApiUser)