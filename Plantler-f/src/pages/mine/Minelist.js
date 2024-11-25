import '../../assets/css/mine.css';
import mine from '../../assets/img/mine';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Minelist = () => {
  const [question1, setQuestion1] = React.useState(null);
  const [question2, setQuestion2] = React.useState(null);
  const [question3, setQuestion3] = React.useState(null);
  const [question4, setQuestion4] = React.useState(null);
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <h1 className="sub_title">나만의 식물 찾기</h1>

              <h4 className="text-center">당신의 취향을 선택해주세요</h4>
              <div className="question-container">
                {/* <!-- Question 1 --> */}
                <div className="question">
                  <img src={mine.img1} alt="Icon 1" />
                  <p className="text-center">식물을 키워본 경험이 있나요?</p>
                  <div className="options">
                    <button
                      className={`btn btn-success ${
                        question1 === '1' ? 'active' : ''
                      }`}
                      onClick={() => setQuestion1('1')}
                      style={{ width: '300px', marginBottom: '10px' }}
                    >
                      처음 도전
                    </button>
                    <button
                      className={`btn btn-success ${
                        question1 === '2' ? 'active' : ''
                      }`}
                      onClick={() => setQuestion1('2')}
                      style={{ width: '300px', marginBottom: '10px' }}
                    >
                      우리집 아마존!
                    </button>
                  </div>
                </div>
                {/* <!-- Question 2 --> */}
                <div className="question">
                  <img src={mine.img2} alt="Icon 2" />
                  <p className="text-center">
                    어떤 종류의 식물을 좋아하시나요?
                  </p>
                  <div className="options">
                    <button
                      className={`btn btn-success ${
                        question2 === '1' ? 'active' : ''
                      }`}
                      onClick={() => setQuestion2('1')}
                      style={{ width: '300px', marginBottom: '10px' }}
                    >
                      다육과 선인장과의 식물
                    </button>
                    <button
                      className={`btn btn-success ${
                        question2 === '2' ? 'active' : ''
                      }`}
                      onClick={() => setQuestion2('2')}
                      style={{ width: '300px', marginBottom: '10px' }}
                    >
                      꽃이나 열매가 피는 식물
                    </button>
                  </div>
                </div>
                {/* <!-- Question 3 --> */}
                <div className="question">
                  <img src={mine.img3} alt="Icon 3" />
                  <p className="text-center">
                    어떤 능력의 식물을 키우고 싶은가요?
                  </p>
                  <div className="options">
                    <button
                      className={`btn btn-success ${
                        question3 === '1' ? 'active' : ''
                      }`}
                      onClick={() => setQuestion3('1')}
                      style={{ width: '300px', marginBottom: '10px' }}
                    >
                      공기 정화가 탁월한 식물
                    </button>
                    <button
                      className={`btn btn-success ${
                        question3 === '2' ? 'active' : ''
                      }`}
                      onClick={() => setQuestion3('2')}
                      style={{ width: '300px', marginBottom: '10px' }}
                    >
                      선물용으로 아주 좋은 식물
                    </button>
                  </div>
                </div>
                {/* <!-- Question 4 --> */}
                <div className="question">
                  <img src={mine.img4} alt="Icon 4" />
                  <p className="text-center">
                    어느 공간에서 키울 예정이신가요?
                  </p>
                  <div className="options">
                    <button
                      className={`btn btn-success ${
                        question4 === '1' ? 'active' : ''
                      }`}
                      onClick={() => setQuestion4('1')}
                      style={{ width: '300px', marginBottom: '10px' }}
                    >
                      실 내
                    </button>
                    <button
                      className={`btn btn-success ${
                        question4 === '2' ? 'active' : ''
                      }`}
                      onClick={() => setQuestion4('2')}
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
        <div style={{ textAlign: 'center' }}>
          <a href="/recplant" className="selecbtn">
            선택 완료!
          </a>
        </div>
      </section>
    </>
  );
};

export default Minelist;
