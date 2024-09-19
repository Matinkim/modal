import { useState, useRef } from "react";
import "./App.css";
import Modal from "./assets/Modal";

function App() {
  const [timeStart, setTimeStart] = useState(false); //true 교수님 풀이
  const timeRef = useRef();
  const dialogRef = useRef();

  const targetTime = 5;

  function handleTimer() {
    if (timeStart === false) {
      setTimeStart(true);
      console.log("된다");

      // 5초 후에 함수 실행
      timeRef.current = setTimeout(() => {
        //dialog 열기 함수
        dialogRef.current.showModal();
        console.log("김환");
      }, targetTime * 1000);
      //setTimeStart(false)
    } else {
      setTimeStart(false);
      handleStop();
    }
  }

  function handleStop() {
    clearTimeout(timeRef.current);
    // setTimeStart(true)
  }
  return (
    <>
      <Modal targetTime={targetTime} ref={dialogRef} />
      <h1>시간 버튼 만들기</h1>
      <button onClick={handleTimer}>{timeStart ? "멈춤" : "시작"}</button>
    </>
  );
}
export default App;

//<button onClick={timeStart ? handleTimer : handleStop}>{timeStart ? "시작" : "멈춤"}</button>;
