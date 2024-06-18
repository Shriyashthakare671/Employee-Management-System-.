import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './index.css';

function Dashboard() {
    var url = 'http://127.0.0.1:9900/emps';
    const [emps, setEmps] = useState([])
    const [EMP, setEmp] = useState({ empno: 0, ename: "", sal: "" })
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (message !== "") {
            setTimeout(() => {
                setMessage("");
            }, 3000);
        }
    }, [message]);

    const getData = () => {
        axios.get(url).then((result) => {

            setEmps(result.data);
        });
    }
    const onTextChange = (args) => {
        var copyOfEmp = { ...EMP };
        copyOfEmp[args.target.name] = args.target.value;
        setEmp(copyOfEmp)
    }
    const clearText = () => {
        setEmp({ empno: 0, ename: "", sal: "" });
    }

    const addRecord = () => {
        axios.post(url, EMP).then((result) => {
            if (result.data.affectedRows !== undefined && result.data.affectedRows > 0) {
                clearText();
                getData();
                setMessage("New Record Added!")
            }
            else {
                setMessage("Something went wrong!")
            }
        });
    }

    const updateRecord = () => {
        axios.put(url + `/${EMP.empno}`, EMP).then(result => {
            if (result.data.affectedRows !== undefined &&
                result.data.affectedRows > 0) {
                clearText();
                getData();
                setMessage("Record Updated!")
            }
            else {
                setMessage("Something went wrong!")
            }
        });
    }

    const editRecord = (empno) => {
        for (let i = 0; i < emps.length; i++) {
            if (emps[i].empno === empno) {
                var copyOfEmpFound = { ...emps[i] };
                setEmp(copyOfEmpFound);
                break;
            }
        }

    }

    const deleteRecord = (empno) => {
        axios.delete(url + `/${empno}`).then(result => {
            if (result.data.affectedRows !== undefined && result.data.affectedRows > 0) {
                clearText();
                getData();
                setMessage("Record Removed")
            }
            else {
                setMessage("Something went wrong!")
            }
        });

    }
    useEffect(() => {
        getData();
    }, [])


    return (<>
    <div className="d-flex justify-content-end">
            <div className='btn btn-outline-info me-2'><Link to="/dashboard" >Dashboard</Link></div>
            <div className='btn btn-outline-info me-2'><Link to="/about">About Us</Link></div>
            <div className='btn btn-outline-info me-2'><Link to="/contact">Contact Us</Link></div>
            <div className='btn btn-outline-danger me-3'><Link to="/">Sign Out</Link></div>
        </div>
        <h1>Dashboard</h1>
        <hr></hr>
        <table className="mytable2">
            <tbody>
                <tr>
                    <td>EmpNo</td>
                    <td>
                        <input type="text" name="empno"
                            value={EMP.empno}
                            onChange={onTextChange} />
                    </td>
                </tr>

                <tr>
                    <td>EName</td>
                    <td>
                        <input type="text" name="ename"
                            value={EMP.ename}
                            onChange={onTextChange} />
                    </td>
                </tr>


                <tr>
                    <td>Sal</td>
                    <td>
                        <input type="text" name="sal"
                            value={EMP.sal}
                            onChange={onTextChange} />
                    </td>
                </tr>

                <tr>
                    <td colSpan={2}>
                        <button className="btn btn-success" onClick={addRecord}>Add Record</button> {" "}
                        <button className="btn btn-warning" onClick={updateRecord}>Update Record</button>{" "}
                    </td>
                </tr>
            </tbody>
        </table>

        <hr></hr>
        {message}
        <hr></hr>

        <table className="table table-primary text-center table-bordered mytable">
            <thead>
                <tr>
                    <th>EmpNo</th>
                    <th>EName</th>
                    <th>Sal</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    emps.map((EMP) => {
                        return <tr key={EMP.empno}>
                            <td>{EMP.empno}</td>
                            <td>{EMP.ename}</td>
                            <td>{EMP.sal}</td>
                            <td>
                                <button className="btn btn-warning me-2" onClick={() => {
                                    editRecord(EMP.empno);
                                }}>Edit</button>
                            </td>
                            <td>
                                <button className="btn btn-danger me-2" onClick={() => {
                                    deleteRecord(EMP.empno);
                                }}>Delete</button>
                            </td>
                        </tr>
                    })
                }

            </tbody>
        </table>



                

    </>);
}

export default Dashboard;