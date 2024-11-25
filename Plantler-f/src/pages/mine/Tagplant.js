import '../../assets/css/mine.css';
import mine from '../../assets/img/mine';

const Tagplant = () => {
    return(
        <>
        <section className="section">
       		<div className="container">
            	<div className="row">
                	<div className="col-md-12 col-sm-12">
						<h1 className="sub_title">나만의 식물 찾기</h1>
					
						<h4 className="text-center">식물을 잘 모를때에는</h4>
						<div className="minetag">
							<a href="#">
							<img src={mine.filter} alt ="Icon 1" />
							</a>
							<button className="btn btn-secondary" style={{width: '100px', marginbottom: '10px'}}>#초보자</button>
							<button className="btn btn-secondary" style={{width: '100px', marginbottom: '10px'}}>#나무</button>
							<button className="btn btn-secondary" style={{width: '100px', marginbottom: '10px'}}>#뿌리식물</button>
							<button className="btn btn-secondary" style={{width: '100px', marginbottom: '10px'}}>#초보자</button>
						</div>
						<div>
							<h5>선택한 필터 - 식물 365종</h5>
						</div>
						<div className="mine-container4">
						{/* <!-- Question 1 --> */}
			            <div className="mine4">
			            	<a href="/pdetail">
			                	<img src={mine.Plantimg1} alt="Icon 1" />
			                </a>
			                <p className="text-center">황칠나무</p>
			            </div>
			            <div className="mine4">
			                <a href="/pdetail">
			                	<img src={mine.Plantimg2} alt="Icon 2" />
			                </a>
			                <p className="text-center">아이비(헤데라)</p>
			            </div>
			            <div className="mine4">
			                <a href="/pdetail">
			                	<img src={mine.Plantimg3} alt="Icon 3" />
			                </a>
			                <p className="text-center">무늬 아이비</p>
			            </div>
			             <div className="mine4">
			                <a href="/pdetail">
			                	<img src={mine.Plantimg4} alt="Icon 4" />
			                </a>
			                <p className="text-center">관음죽</p>
			            </div>
			             <div className="mine4">
			                <a href="/pdetail">
			                	<img src={mine.Plantimg5} alt="Icon 5" />
			                </a>
			                <p className="text-center">서황금 (무늬 관음죽)</p>
			            </div>
                        <div className="mine4">
			            	<a href="/pdetail">
			                	<img src={mine.Plantimg1} alt="Icon 1" />
			                </a>
			                <p className="text-center">황칠나무</p>
			            </div>
			            <div className="mine4">
			                <a href="/pdetail">
			                	<img src={mine.Plantimg2} alt="Icon 2" />
			                </a>
			                <p className="text-center">아이비(헤데라)</p>
			            </div>
			            <div className="mine4">
			                <a href="/pdetail">
			                	<img src={mine.Plantimg3} alt="Icon 3" />
			                </a>
			                <p className="text-center">무늬 아이비</p>
			            </div>
			             <div className="mine4">
			                <a href="/pdetail">
			                	<img src={mine.Plantimg4} alt="Icon 4" />
			                </a>
			                <p className="text-center">관음죽</p>
			            </div>
			             <div className="mine4">
			                <a href="/pdetail">
			                	<img src={mine.Plantimg5} alt="Icon 5" />
			                </a>
			                <p className="text-center">서황금 (무늬 관음죽)</p>
			            </div>
                        <div className="mine4">
			            	<a href="/pdetail">
			                	<img src={mine.Plantimg1} alt="Icon 1" />
			                </a>
			                <p className="text-center">황칠나무</p>
			            </div>
			            <div className="mine4">
			                <a href="/pdetail">
			                	<img src={mine.Plantimg2} alt="Icon 2" />
			                </a>
			                <p className="text-center">아이비(헤데라)</p>
			            </div>
			            <div className="mine4">
			                <a href="/pdetail">
			                	<img src={mine.Plantimg3} alt="Icon 3" />
			                </a>
			                <p className="text-center">무늬 아이비</p>
			            </div>
			             <div className="mine4">
			                <a href="/pdetail">
			                	<img src={mine.Plantimg4} alt="Icon 4" />
			                </a>
			                <p className="text-center">관음죽</p>
			            </div>
			             <div className="mine4">
			                <a href="/pdetail">
			                	<img src={mine.Plantimg5} alt="Icon 5" />
			                </a>
			                <p className="text-center">서황금 (무늬 관음죽)</p>
			            </div>
                        <div className="mine4">
			            	<a href="/pdetail">
			                	<img src={mine.Plantimg1} alt="Icon 1" />
			                </a>
			                <p className="text-center">황칠나무</p>
			            </div>
			        </div>
	                </div>
	            </div>
	        </div>
	    </section>
        
        
        </>
    );
}

export default Tagplant;