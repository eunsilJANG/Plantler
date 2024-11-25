import React from 'react';
import '../../assets/css/khboard.css';


function Freeboardlist() {
    return (    
        <main>
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <h1 className="sub_title">식물 무료 나눔</h1>                        
                            <a href="freeboardadd" className="list_btn">등록</a>
                            <div className="search">
                                <form>
                                    <input type="text" name="search" className="search_input" />
                                    <input type="submit" value="조회" className="search_btn" />
                                </form>
                            </div>
                            
                            <ul className="filter_list">
                                <li><a href="#" className="active">전체</a></li>
                                <li><a href="#">이사/환경</a></li>
                                <li><a href="#">건강문제</a></li>
                                <li><a href="#">식물나눔</a></li>
                                <li><a href="#">기타</a></li>
                            </ul>
                            
                            <table className="sub_table free">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>제목</th>
                                        <th>작성자</th>
                                        <th>작성일</th>
                                        <th>조회수</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>10</td>
                                        <td><a href="/freeboarddetail"><span className="filter">[이사/환경]</span> 아내 몰래 허브 무료 나눔합니다.</a></td>
                                        <td>장미허브사랑</td>
                                        <td>2024-08-21 3:47:00</td>
                                        <td>10</td>
                                    </tr>								
                                </tbody>
                            </table>

                            <ul className="pagination">
                                <li><a href=""><i className="bi bi-chevron-left"></i></a></li>
                                <li><a href="" className="active">1</a></li>
                                <li><a href="">2</a></li>
                                <li><a href="">3</a></li>
                                <li><a href="">4</a></li>
                                <li><a href="">5</a></li>
                                <li><a href=""><i className="bi bi-chevron-right"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Freeboardlist;
