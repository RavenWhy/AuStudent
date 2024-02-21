import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [studentInfo, setStudentInfo] = useState({});

  useEffect(() => {
    window
      .fetch("http://192.168.2.11:9000/student")
      .then((res) => res.json())
      .then(setStudentInfo)
      .catch((e) => console.error(e));
  }, []);

  return (
    <div className="App">
      <ul>
        <li>
          <label>名称：</label>
          <span>{studentInfo.name || "wuli"}</span>
        </li>
        <li>
          <label>性别：</label>
          <span>{studentInfo?.sex || "男"}</span>
        </li>
        <li>
          <label>年龄：</label>
          <span>{studentInfo?.age || 12}</span>
        </li>
        <li>
          <label>2024成绩：</label>
          <span>{studentInfo?.score?.[0] || 90}</span>
        </li>
        <li>
          <label>2023成绩：</label>
          <span>{studentInfo?.score?.[1] || 90}</span>
        </li>
        <li>
          <label>2022成绩：</label>
          <span>{studentInfo?.score?.[2] || 90}</span>
        </li>
      </ul>
    </div>
  );
}

export default App;
