import React, { useState } from "react";
import Button from '@mui/material/Button';

export default function StudentForm({ addStudent }) {
    const [student, setStudent] = useState({
        name: "",
        roll_no: "",
        branch: "",
        age: "",
        cgpa: "",
        skills: "",
    });

    const handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addStudent(student);
        setStudent({ name: "", roll_no: "", branch: "", age: "", cgpa: "", skills: "" });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" value={student.name} onChange={handleChange} required />
            <input type="text" name="roll_no" placeholder="Roll No" value={student.roll_no} onChange={handleChange} required />
            <input type="text" name="branch" placeholder="Branch" value={student.branch} onChange={handleChange} required />
            <input type="number" name="age" placeholder="Age" value={student.age} onChange={handleChange} required />
            <input type="number" step="0.01" name="cgpa" placeholder="CGPA" value={student.cgpa} onChange={handleChange} required />
            <input type="text" name="skills" placeholder="Skills (comma-separated)" value={student.skills} onChange={handleChange} required />
            <Button  type="submit" style={{backgroundColor:'#9589f7', color:'black', fontWeight:'500', margin:'10px'}}>ADD STUDENT</Button>
        </form>
    );
}
