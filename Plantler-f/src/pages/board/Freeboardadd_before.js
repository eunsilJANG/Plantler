import React from 'react';
import '../../assets/css/khboard.css';

function Freeboardadd() {
    const style = {display:'none'}
    
    return (    
        <main>
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <h1 className="sub_title">식물 무료 나눔 글쓰기</h1>
                            <table className="sub_table add">
                                <tbody>
                                    <tr>
                                        <th>제목</th>
                                        <td><input type="text" placeholder="제목을 입력해주세요." /></td>
                                    </tr>
                                    <tr>
                                        <th>내용</th>
                                        <td><textarea rows="10" placeholder="내용을 입력해주세요."></textarea></td>
                                    </tr>
                                    <tr>
                                        <th>분류</th>
                                        <td>
                                            <input type="radio" id="part_1" name="part" /> <label for="part_1">전체</label>
                                            <input type="radio" id="part_2" name="part" /> <label for="part_2">이사/환경</label>
                                            <input type="radio" id="part_3" name="part" /> <label for="part_3">건강문제</label>
                                            <input type="radio" id="part_4" name="part" /> <label for="part_4">식물나눔</label>
                                            <input type="radio" id="part_5" name="part" /> <label for="part_5">기타</label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>파일첨부</th>
                                        <td><input type="file" className="input_file" /></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="text-center mt-5">
                                <button type="button" className="btn_primary" style={style}>수정</button>									
                                <a href="/freeboardlist" className="btn_primary btn_cancle">취소</a>
                                <a href="/freeboardadd" className="btn_primary btn_add">등록</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Freeboardadd;
