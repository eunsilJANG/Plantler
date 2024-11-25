import axios from 'axios';
import '../../assets/css/mine.css';
import mine from '../../assets/img/mine';
import React, { useState } from 'react';

const PlantMine = () => {
  const [question1, setQuestion1] = useState(null);
  const [question2, setQuestion2] = useState(null);
  const [question3, setQuestion3] = useState(null);
  const [question4, setQuestion4] = useState(null);

  const handleSelectionComplete = async () => {
    localStorage.removeItem('plants');

    // 선택된 값을 true/false로 변환
    const question1Value = question1 !== null ? question1 === 0 : null;
    const question2Value = question2 !== null ? question2 === 0 : null;
    const question3Value = question3 !== null ? question3 === 0 : null;
    const question4Value = question4 !== null ? question4 === 0 : null;

    const noSelect =
      question1 === null ||
      question2 === null ||
      question3 === null ||
      question4 === null;

    // 만약 어떤 질문도 선택되지 않았다면, 알림 표시
    if (noSelect) {
      if (question1 === null)
        alert('식물을 키워본 경험이 있는지 알려주세요 😀');
      else if (question2 === null)
        alert('좋아하는 식물의 종류를 알려주세요 😉');
      else if (question3 === null)
        alert('원하는 식물의 능력을 선택해 주세요 😎');
      else if (question4 === null)
        alert('어떤 공간에서 식물을 키우실건지 알려주세요 😃');
      return;
    }

    try {
      // POST 요청을 사용하여 서버에 데이터 전송
      const response = await axios.post(
        process.env.REACT_APP_BACK_HOST_URL + '/api/getQuestionNo',
        {
          question1: question1Value,
          question2: question2Value,
          question3: question3Value,
          question4: question4Value,
        }
      );

      const questionNo = response.data; // 서버에서 받은 Question_no
      console.log('Matched Question_no:', questionNo);

      // 선택 완료 후 리다이렉션
      window.location.href = `/plantRecomend?questionNo=${questionNo}`;
    } catch (error) {
      console.error('Error fetching Question_no:', error);
    }
  };

  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <h1 className="sub_title">나만의 식물 찾기</h1>
            <h4 className="text-center">당신의 취향을 선택해주세요</h4>
            <div className="question-container">
              {/* Question 1 */}
              <div className="question">
                <img src={mine.img1} alt="Icon 1" />
                <p className="text-center">식물을 키워본 경험이 있나요?</p>
                <div className="options">
                  <button
                    className={`btn btn-success ${
                      question1 === 0 ? 'active' : ''
                    }`}
                    onClick={() => setQuestion1(0)}
                    style={{ width: '300px', marginBottom: '10px' }}
                  >
                    처음 도전
                  </button>
                  <button
                    className={`btn btn-success ${
                      question1 === 1 ? 'active' : ''
                    }`}
                    onClick={() => setQuestion1(1)}
                    style={{ width: '300px', marginBottom: '10px' }}
                  >
                    우리집 아마존!
                  </button>
                </div>
              </div>

              {/* Question 2 */}
              <div className="question">
                <img src={mine.img2} alt="Icon 2" />
                <p className="text-center">어떤 종류의 식물을 좋아하시나요?</p>
                <div className="options">
                  <button
                    className={`btn btn-success ${
                      question2 === 0 ? 'active' : ''
                    }`}
                    onClick={() => setQuestion2(0)}
                    style={{ width: '300px', marginBottom: '10px' }}
                  >
                    다육과 선인장과의 식물
                  </button>
                  <button
                    className={`btn btn-success ${
                      question2 === 1 ? 'active' : ''
                    }`}
                    onClick={() => setQuestion2(1)}
                    style={{ width: '300px', marginBottom: '10px' }}
                  >
                    꽃이나 열매가 피는 식물
                  </button>
                </div>
              </div>

              {/* Question 3 */}
              <div className="question">
                <img src={mine.img3} alt="Icon 3" />
                <p className="text-center">
                  어떤 능력의 식물을 키우고 싶은가요?
                </p>
                <div className="options">
                  <button
                    className={`btn btn-success ${
                      question3 === 0 ? 'active' : ''
                    }`}
                    onClick={() => setQuestion3(0)}
                    style={{ width: '300px', marginBottom: '10px' }}
                  >
                    공기 정화가 탁월한 식물
                  </button>
                  <button
                    className={`btn btn-success ${
                      question3 === 1 ? 'active' : ''
                    }`}
                    onClick={() => setQuestion3(1)}
                    style={{ width: '300px', marginBottom: '10px' }}
                  >
                    선물용으로 아주 좋은 식물
                  </button>
                </div>
              </div>

              {/* Question 4 */}
              <div className="question">
                <img src={mine.img4} alt="Icon 4" />
                <p className="text-center">어느 공간에서 키울 예정이신가요?</p>
                <div className="options">
                  <button
                    className={`btn btn-success ${
                      question4 === 0 ? 'active' : ''
                    }`}
                    onClick={() => setQuestion4(0)}
                    style={{ width: '300px', marginBottom: '10px' }}
                  >
                    실 내
                  </button>
                  <button
                    className={`btn btn-success ${
                      question4 === 1 ? 'active' : ''
                    }`}
                    onClick={() => setQuestion4(1)}
                    style={{ width: '300px', marginBottom: '10px' }}
                  >
                    실 외
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 선택 완료 버튼 */}
      <div style={{ textAlign: 'center' }}>
        <button className="selecbtn" onClick={handleSelectionComplete}>
          선택 완료!
        </button>
      </div>
    </section>
  );
};

export default PlantMine;
