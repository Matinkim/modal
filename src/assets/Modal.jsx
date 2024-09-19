//forwardRef

import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const modal = forwardRef(function Modal({ targetTime }, ref) {
  // 첫번째 : ref
  // 두번째 : 함수
  // ref에 적용된 메서드(함수)를 임의대로 변경

  const dialogChild = useRef();
  //여기에 등록된 ref는 App.jsx -> dialogRef
  // dialog (자식에 있는 ref)
  // 문제 : <dialog>에 등록되어 있는 ref 는 자식에 있는 ref 기 때문에
  // 부모(App.jsx) 에서 열수가 없다.
  // useImperativeHandle 를 사용하여 부모 ref의 메서드를 만들고
  // 만든 메서드는 부모에서 실행가능하고 코드는 자유롭게 넣을 수 있다.
  useImperativeHandle(ref, () => {
    return {
      openModal: () => {
        dialogChild.current.showModal();
      },
      openDialog: () => {
        console.log("김환씨 다이얼로그");
      },
    };
  });
  // 첫번째 : jsx코드
  // 두번째 : dom
  return createPortal(
    <dialog ref={dialogChild}>
      <h2>모달창</h2>
      <p>{targetTime}초가 지났습니다.</p>
      <form action="">
        <button>close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default modal;
