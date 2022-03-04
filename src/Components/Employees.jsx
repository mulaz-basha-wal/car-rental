import "./employee.css";
import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";

export default function Employees() {
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        axios.get("/employees.json").then((res) => {
            setEmployees(res.data);
        });
    }, []);

    return (
        <div className="employeeWrapper">
            <h1>Employees</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => {
                        return (
                            <tr>
                                <td>{employee.name}</td>
                                <td>{employee.loc}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
