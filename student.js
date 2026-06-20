function Student({ name, course, marks }) {
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "10px",
        margin: "10px",
        width: "300px",
      }}
    >
      <h2>Student Details</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Course:</strong> {course}</p>
      <p><strong>Marks:</strong> {marks}</p>
    </div>
  );
}

export default Student;