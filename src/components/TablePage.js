import React from "react";
import Table from "react-bootstrap/Table";
import { withRouter } from "react-router-dom";
import data from './data/test.json'
class tablePage extends React.Component{

    constructor(props) {
        super(props);
        this.state = {data: [], setData: []}
    }
    render() {
        return (
            <div>
                <h1 className="col-lg-1 col-centered">JSON reader</h1>
                <Table className={"table-striped table-hover"} >
                    <thead>
                    <tr style={{background: "orange"}}>
                        <th>Id</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>email</th>
                        <th>gender</th>
                        <th>ip address</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((person) => {
                            return (
                            <tr>
                                <td>{person.id}</td>
                                <td>{person.first_name}</td>
                                <td>{person.last_name}</td>
                                <td>{person.email}</td>
                                <td>{person.gender}</td>
                                <td>{person.ip_address}</td>
                            </tr>
                            )
                    })}
                    </tbody>
                </Table>
            </div>
        )
    }
}
export default withRouter(tablePage);


