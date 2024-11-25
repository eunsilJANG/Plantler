import React from 'react';
import '../../assets/css/khboard.css';
import khboard from '../../assets/img/khboard';

function Freeboarddetail() {
    return (    
        <main>
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <h1 className="sub_title">식물 무료 나눔 게시판</h1>
                            
                            <table className="detail_table">
                            <thead>
                                <tr>
                                <td>
                                    <span>[겉씨]</span>장미 드루와 드루와~ 
                                    <p>장미허브사랑 | 2024-08-21 3:47:00</p>                      
                                </td>
                                <td><p className="text_right">조회 10 | 댓글 22 | 좋아요 10</p></td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>
                                    꿀팁 방출~~~~~~~<br/>흙마름을 체크하신 후 물을 주셔야 뿌리 과습을 예방할 수 있답니다.
                                    <p><img src={khboard.main.img_01} alt='img_01' /></p>
                                </td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ol-sm-12">
                            <div className="detail_comment">댓글 3</div>
                            <div className="detail_like"><img src={khboard.main.img_02} alt='img_02' /> 좋아요 10</div>
                        </div>
                        <div className="col-md-12 ol-sm-12">
                            {/* <!-- 댓글 창--> */}
                            <div className="reply_box">
                            <ul>
                                <li className="bold_text">알로카시아 <img src={khboard.main.img_05} alt='img_05' className="more_btn" /></li>
                                <li>감사합니다 ㅎㅎ</li>
                                <li><span className="detail_reg">2024-08-21</span> <span className="detail_reply">답글쓰기</span> <img src={khboard.main.img_02} alt='img_02' /></li>
                            </ul>

                            <ul>
                                <li className="bold_text">박알로카시아 <img src={khboard.main.img_05} alt='img_05' className="more_btn" /></li>
                                <li>꿀팁!</li>
                                <li><span className="detail_reg">2024-08-21</span> <span className="detail_reply">답글쓰기</span> <img src={khboard.main.img_02} alt='img_02' /></li>
                            </ul>

                            <ul>
                                <li className="bold_text"><img src={khboard.main.img_04} alt='img_04' /> 김알로카시아 <img src={khboard.main.img_05} alt='img_05' className="more_btn" /></li>
                                <li>오 꿀 팁 감삼돠~~!</li>
                                <li><span className="detail_reg">2024-08-21</span> <span className="detail_reply">답글쓰기</span> <img src={khboard.main.img_03} alt='img_03' />1</li>
                            </ul>
                            </div>
                            <div className="comment_writer">
                                <div className="comment_inbox_name">장미허브사랑</div>
                                <textarea className="comment_inbox_text" placeholder="댓글을 남겨보세요." rows="2"></textarea>
                                <button>등록</button>
                            </div>
                            <div className="text-center mt-5">
                                <a href="/freeboardadd" className="btn_primary">수정</a>
                                <button type="button" className="btn_primary btn_delete">삭제</button>
                                <a href="/freeboardlist" className="btn_primary btn_cancle">목록</a>
                            </div>

                        </div>
                    </div>
                </div>
            </section> 
        </main>
    );
}

export default Freeboarddetail;
