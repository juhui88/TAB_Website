import tw from "tailwind-styled-components";
import styled from "styled-components";
import React, { useState } from "react";

function FAQ() {
  return (
    <div>
      <p className="text-2xl font-extrabold">자주 묻는 질문</p>
      <p className="text-base font-normal mt-3">
        궁금하신 점이 있다면 아래의 오픈 카톡으로 문의내용 남겨주시면
        답변해드리겠습니다.
      </p>
      <div className="mt-10">
        <details>
          <summary> 컴퓨터공학부 이중전공생도 지원이 가능한가요?</summary>
          <p> 답변 </p>
        </details>
        <details>
          <summary> 지원했는데 연락이 안와요. </summary>
          <p> 답변 </p>
        </details>
        <details>
          <summary>서울 캠퍼스도 지원이 가능한가요? </summary>
          <p> 답변 </p>
        </details>
        <details>
          <summary> 선발 기준은 무엇인가요? </summary>
          <p> 답변 </p>
        </details>
        <details>
          <summary>학회비가 있나요? </summary>
          <p> 답변 </p>
        </details>
        <details>
          <summary>선발 인원이 몇 명인가요? </summary>
          <p> 답변 </p>
        </details>
        <details>
          <summary> 코딩이 처음인데 지원 가능한가요? </summary>
          <p> 답변 </p>
        </details>
        <details>
          <summary>
            개발에 대해 막연한 관심은 있으나,개발에 대한 실질적인 지식은 없는데
            들어갈 수 있나요?
          </summary>
          <p> 답변 </p>
        </details>
        <details>
          <summary> 올해는 어떤 활동을 하나요? </summary>
          <p> 답변 </p>
        </details>
      </div>
    </div>
  );
}

export default FAQ;
