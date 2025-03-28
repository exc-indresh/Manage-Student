import { Button } from "@mui/material";
import React, { useState } from "react";

export default function StudentCard({ student, onUpdate, onDelete, onClose }) {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedStudent, setUpdatedStudent] = useState({ ...student });

    const handleChange = (e) => {
        setUpdatedStudent({ ...updatedStudent, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        onUpdate(updatedStudent);
        setIsEditing(false);
    };

    return (
        <div className="student-card" style={{ width: '30%', maxWidth: '400px', minWidth: '250px'}}>
            <Button onClick={onClose}>X</Button>
            {isEditing ? (
                <div>
                    <div style={{display:'block', margin:'10px auto', padding:'8px'}}>
                        <label htmlFor="" style={{margin:'10px'}}>Name</label>
                        <input style={{padding:'7px 10px'}} type="text" name="name" value={updatedStudent.name} onChange={handleChange} />
                    </div>
                    <div style={{display:'block', margin:'10px auto', padding:'8px'}}>
                        <label htmlFor="" style={{margin:'10px'}}>Age</label>
                        <input style={{padding:'7px 10px'}} type="number" name="age" value={updatedStudent.age} onChange={handleChange} />
                    </div>
                    <div style={{display:'block', margin:'10px auto', padding:'8px'}}>
                        <label htmlFor="" style={{margin:'10px'}}>Skills</label>
                        <input style={{padding:'7px 10px'}} type="text" name="skills" value={updatedStudent.skills} onChange={handleChange} />
                    </div>
                    <Button onClick={handleSave} style={{backgroundColor:'#9589f7', color:'black', fontWeight:'500', margin:'10px'}}>Save</Button>
                </div>
            ) : (
                <div>
                    <h3>{student.name}</h3>
                    <p>Roll No - {student.roll_no}</p>
                    <p>Branch - {student.branch}</p>
                    <p>Age - {student.age}</p>
                    <p>CGPA - {student.cgpa}</p>
                    <p>Skills - {student.skills}</p>
                    <Button onClick={() => setIsEditing(true)} style={{backgroundColor:'#9589f7', color:'black', fontWeight:'500', margin:'10px'}}>Edit</Button>
                    <Button onClick={() => onDelete(student.id)} style={{backgroundColor:'#9589f7', color:'black', fontWeight:'500', margin:'10px'}}>Delete</Button>
                </div>
            )}
        </div>
    );
}
