import Student from "./Student";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Student Information</h1>

      <Student
        name="Rahul Sharma"
        course="B.Tech CSE"
        marks="92"
      />

      <Student
        name="Priya Verma"
        course="B.Tech IT"
        marks="88"
      />

      <Student
        name="Aman Singh"
        course="B.Tech ECE"
        marks="95"
      />
    </div>
  );
}

export default App;