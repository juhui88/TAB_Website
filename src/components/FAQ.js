import tw from "tailwind-styled-components";
import styled from "styled-components";
import React, { useState } from "react";

const P = tw.p`
ml-5
mt-3
font-bold
text-gray-600
`
function FAQ() {
  return (
    <div>
      <p className="text-2xl font-extrabold">자주 묻는 질문</p>
      <p className="text-base font-normal mt-3">
        궁금하신 점이 있다면 아래의 오픈 카톡으로 문의내용 남겨주시면
        답변해드리겠습니다.
      </p>
      <div className="mt-10 space-y-5">
        <details>
          <summary> 컴퓨터공학부, 이중전공생 혹은 서울캠퍼스 재학생도 지원이 가능한가요?</summary>
          <P> 아쉽지만 지원자격은 컴퓨터공학부 23학번 신입생한테만 주어지므로 이중 및 부전공, 2학년 이상 재학생, 서울캠퍼스 학생은 지원하실 수 없습니다.  </P>
        </details>
        <details>
          <summary> 지원했는데 연락이 안와요. </summary>
          <P> 학회에서 별도로 지원 확인에 대한 연락은 하지 않습니다. 사전에 공지된 면접 일정 안내 날짜까지 기다려주시고, 안내 날짜에 연락을 받지 못했다면 홈페이지 하단 연락처로 학회장에게 문자 남겨주세요 ! </P>
        </details>
        <details>
          <summary> 선발 기준은 무엇인가요? </summary>
          <P> 코딩 실력과는 전혀 무관하게 컴퓨터 분야에 대한 관심도와, 꾸준히 함게 활동하며 성장 할 수 있는 사람인가를 판단하여 선발합니다. 내향적인 성격이라거나 전공 지식이 부족하다고해서 '절대' 부정적으로 평가하지 않으므로 걱정 말고 지원해주세요! </P>
        </details>
        <details>
          <summary>학회비가 있나요? </summary>
          <P> 답변 </P>
        </details>
        <details>
          <summary>선발 인원이 몇 명인가요? </summary>
          <P> 10명 내외 선발 예정입니다.  </P>
        </details>
        <details>
          <summary>
            개발에 대해 막연한 관심은 있으나,개발에 대한 실질적인 지식은 없는데
            들어갈 수 있나요?
          </summary>
          <P> 
            다양한 주제의 세미나가 열려 공부할 기회와 환경이 지속적으로 주어지기 때문에 처음부터 컴퓨터를 잘 하실 필요는 없습니다! <br/>전공 공부와 더불어 꾸준히 학회활동에 참여할 열정만 있다면 누구든지 환영합니다.🤲</P>
        </details>
      </div>
    </div>
  );
}

export default FAQ;
