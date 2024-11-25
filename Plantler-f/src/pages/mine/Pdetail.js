import '../../assets/css/mine.css';
import mine from '../../assets/img/mine';

const Pdetail = () => {
    return(
        <>
        <section className="section">
       		<div className="container">
            	<div className="row">
                	<div className="col-md-12 col-sm-12">
						<h1 className="sub_title">나만의 식물 찾기</h1>
						
						<h4 className="text-center">식과 사전</h4>
						
						<div className="mine-container3">
					
					{/* <!-- Question 1 --> */}
		            <div className="mine3">
		                <img src={mine.Detailimg} alt="Icon 1" />
		                <p className="text-center" style={{fontsize: '200%'}}>황칠나무</p>
		            </div>
		            <div className="options3">
		           		<ul>
			                <button className="btn btn-secondary" style={{width: '100px', marginBottom: '10px'}}>#초심자</button>
			                <button className="btn btn-secondary" style={{width: '100px', marginBottom: '10px'}}>#초심자</button>
			                <button className="btn btn-secondary" style={{width: '100px', marginBottom: '10px'}}>#초심자</button>
			                <button className="btn btn-secondary" style={{width: '100px', marginBottom: '10px'}}>#초심자</button>
                            <button className="btn btn-secondary" style={{width: '100px', marginBottom: '10px'}}>#초심자</button>
                            <button className="btn btn-secondary" style={{width: '100px', marginBottom: '10px'}}>#초심자</button>
                            <button className="btn btn-secondary" style={{width: '100px', marginBottom: '10px'}}>#초심자</button>
                            <button className="btn btn-secondary" style={{width: '100px', marginBottom: '10px'}}>#초심자</button>
                            <button className="btn btn-secondary" style={{width: '100px', marginBottom: '10px'}}>#초심자</button>
                            <button className="btn btn-secondary" style={{width: '100px', marginBottom: '10px'}}>#초심자</button>
                            <button className="btn btn-secondary" style={{width: '100px', marginBottom: '10px'}}>#초심자</button>
                            <button className="btn btn-secondary" style={{width: '100px', marginBottom: '10px'}}>#초심자</button>
		                </ul>
		                
		                <div>
		                	<h6>황칠나무는 우리나라 남부지방에서 자생하는 토종식물이에요.
		                	목공예품을 만들 때 황칠나무의 진액을 모아서 마감을 하면 황금같은 노란 빛을 내어 귀한 가구를 만들 때 사용되어 ‘황칠’이라는 이름을 갖게 되었답니다.
		                	봄에는 앙증맞은 새 순을 잘 내어주고, 여름철에는 하얗고 작은 꽃을 피우고, 가을에는 열매도 맺어 사계절 키우는 재미가 있는 식물이랍니다. 
		                	황칠나무의 꽃말은 ‘효도, 효심’을 의미해 어버이날 부모님께 선물로 드리기도 아주 좋은 식물입니다. 
		                	줄기와 잎, 열매까지 약재로 쓰이고, 공기 중의 포름알데히드를 제거하는 공기정화 능력이 있는 팔방미인 같은 식물이기도 해요. 
							여리여리한 가지로 예쁜 수형을 잡아 공간에 배치하면 아름다운 선의 미를 보여주며 존재감을 뽐내어 많은 분들에게 사랑을 받고 있어요. 은은한 빛이 
							오랫동안 머무는 곳에서 한겨울의 추위만피해주시면 건강하게 잘 키울 수 있어요.</h6>
		                </div>
		                <div className="khdetail-container">
			                <div className="khdetail"> 
			                 	<h6>노하우1</h6> 
			                </div>
			                <div className="khdetail"> 
			                	<h6>노하우2</h6> 
			                </div>
			                <div className="khdetail"> 
			                 	<h6>노하우3</h6> 
			                </div>
			                <div className="khdetail"> 
			                	<h6>노하우4</h6> 
			                </div>
		                </div>
		            </div>
					</div>       
                </div>
		             	<div style={{textAlign: 'center'}}>
		            		<a href="/recplant" class="selecbtn">뒤로 돌아가기</a>
		           		</div>
            </div>
        </div>
    	</section>
        </>
    );
}

export default Pdetail;