import React, { useState } from "react";

export default function StudentTable({ students, onSelect }) {
    const [filters, setFilters] = useState({ branch: "", skills: "" });

    const filteredStudents = students.filter(student =>
        (filters.branch ? student.branch.toLowerCase().includes(filters.branch.toLowerCase()) : true) &&
        (filters.skills ? student.skills.toLowerCase().includes(filters.skills.toLowerCase()) : true)
    );

    if (students.length === 0) {
        return <h1>No items found!</h1>;
    }

    return (
        <div>
            {students.length > 0 && (
                <div className="filter-section">
                    <input
                        type="text"
                        placeholder="Filter by Branch"
                        value={filters.branch}
                        onChange={(e) => setFilters({ ...filters, branch: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Filter by Skills"
                        value={filters.skills}
                        onChange={(e) => setFilters({ ...filters, skills: e.target.value })}
                    />
                </div>
            )}

            {filteredStudents.length > 0 ? (
                <div style={{margin:'16px'}}>
                    <span style={{color:'red', fontSize:'14px'}}>*Click on Student Name to update/delete details</span>
                    <table style={{boxShadow:'4px 4px 4px 2px gray'}}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Roll No</th>
                                <th>Age</th>
                                <th>Branch</th>
                                <th>CGPA</th>
                                <th>Skills</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredStudents.map(student => (
                                <tr key={student.id} onClick={() => onSelect(student)}>
                                    <td >{student.name}</td>
                                    <td>{student.roll_no}</td>
                                    <td>{student.age}</td>
                                    <td>{student.branch}</td>
                                    <td>{student.cgpa}</td>
                                    <td>{student.skills}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p>No items found</p>
            )}
        </div>
    );
}
