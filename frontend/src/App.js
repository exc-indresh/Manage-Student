import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentForm from "./Component/StudentForm";
import StudentTable from "./Component/StudentTable";
import StudentCard from "./Component/StudentCard";
import "./App.css"

const API_URL = "https://manage-student-backend-l8rc.onrender.com/api/students/";

export default function App() {
    const [students, setStudents] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState(null);
    useEffect(() => {
        axios.get(API_URL)
            .then(res => setStudents(res.data))
            .catch(err => console.error("Error fetching students:", err));
    }, []);
    const addStudent = (student) => {
        axios.post(API_URL, student)
            .then(res => setStudents([...students, res.data]))
            .catch(err => console.error("Error adding student:", err));
    };

    const updateStudent = (updatedStudent) => {
        axios.put(`${API_URL}${updatedStudent.id}/`, updatedStudent)
            .then(res => {
                setStudents(students.map(student => (student.id === updatedStudent.id ? res.data : student)));
                setSelectedStudent(res.data);
            })
            .catch(err => console.error("Error updating student:", err));
    };

    const deleteStudent = (id) => {
        axios.delete(`${API_URL}${id}/`)
            .then(() => {
                setStudents(students.filter(student => student.id !== id));
                setSelectedStudent(null);
            })
            .catch(err => console.error("Error deleting student:", err));
    };

    return (
        <div className="container">
            <h1>Student Management System</h1>
            <StudentForm addStudent={addStudent} />
            <StudentTable students={students} onSelect={setSelectedStudent} />
            {selectedStudent && (
                <StudentCard
                    student={selectedStudent}
                    onUpdate={updateStudent}
                    onDelete={deleteStudent}
                    onClose={() => setSelectedStudent(null)}
                />
            )}
        </div>
    );
}
