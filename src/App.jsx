import { useState, useEffect } from "react";
import "./App.css";
import Timer from "./component/Timer";
import Firstpage from "./component/Firstpage";
import Calender from "./component/Calender";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./utils/Login";
import Logout from "./utils/Logout";
import Register from "./utils/Register";
import { useNavigate } from "react-router-dom";
import PrivateRoute from "./Routes/PrivateRoute";
import Quote from "./component/Sub-component/Sub-Sub-component/Quote";
import Average from "./component/Sub-component/Sub-Sub-component/Average";
import Dashboard from "./component/Sub-component/Sub-Sub-component/Dashboard";
import Jamb from "./component/Sub-component/Sub-Sub-component/Jamb";
import Time from "./component/Sub-component/Sub-Sub-component/Time";
import Improvement from "./component/Sub-component/Sub-Sub-component/Improvement";
import Reading from "./component/Sub-component/Sub-Sub-component/Improvement";
import Exam from "./component/Sub-component/Sub-Sub-component/Exam";
import Av2 from "./component/Sub-component/Sub-Sub-component/subjectAverage/Av2";
import Av3 from "./component/Sub-component/Sub-Sub-component/subjectAverage/Av3";
import Av5 from "./component/Sub-component/Sub-Sub-component/subjectAverage/Av5";
import Av10 from "./component/Sub-component/Sub-Sub-component/subjectAverage/Av5";
import Av15 from "./component/Sub-component/Sub-Sub-component/subjectAverage/Av15";
import Quiz from "./component/Sub-component/Sub-Sub-component/Quiz";

function App() {
  return (
    <Routes>
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />

      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Firstpage />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/average" element={<Average />} />
        <Route path="/qot" element={<Jamb />}></Route>
        <Route path="/time" element={<Time />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/improvement" element={<Improvement />}></Route>
        <Route path="/read" element={<Reading />}></Route>
        <Route path="/exam" element={<Exam />}></Route>
        <Route path="/av2" element={<Av2 />}></Route>
        <Route path="/av3" element={<Av3 />}></Route>
        <Route path="/av5" element={<Av5 />}></Route>
        <Route path="/av10" element={<Av10 />}></Route>
        <Route path="/av15" element={<Av15 />}></Route>
        <Route path="/quiz" element={<Quiz />}></Route>
        <Route path="/calender" element={<Calender />} />
      </Route>
    </Routes>
  );
}

export default App;
