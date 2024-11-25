import '../../assets/css/mine.css';
import mine from '../../assets/img/mine';
import { useState, useEffect } from "react";
import axios from 'axios';


const Recplant = () =>{
	const plantImage = [mine.Plantimg1,mine.Plantimg2,mine.Plantimg3,mine.Plantimg4,mine.Plantimg5];
	const plants = [{plantname:'황칠나무',plantkeyword1:'#초심자',plantkeyword2:'#나무',plantkeyword3:'#화분'}
					,{plantname:'아이비(헤데라)',plantkeyword1:'#아',plantkeyword2:'#이',plantkeyword3:'#비'}
					,{plantname:'무늬 아이비',plantkeyword1:'#무늬',plantkeyword2:'#아이',plantkeyword3:'#비'}
					,{plantname:'관음죽',plantkeyword1:'#관',plantkeyword2:'#음',plantkeyword3:'#죽'}
					,{plantname:'서황금 (무늬 관음죽)',plantkeyword1:'#서',plantkeyword2:'#황',plantkeyword3:'#금'}];
	// const [plants, setPlants] = useState([]);
	// const [loading, setLoading] = useState(false);
	
	// useEffect(()=>{
	// 	const fetchPlants = async () => {
	// 		try {
	// 			const response = await axios.get('/api/plants');
	// 			setPlants(response.data);
	// 			setLoading(false);
	// 		} catch(error){
	// 			console.error("Error fetching plants:", error);
	// 			setLoading(false);
	// 		}
	// 	};

	// 	fetchPlants();
	// },[]);

	// if(loading){
	// 	return (
	// 		<div>
	// 			Loading...
	// 		</div>
	// 	);
	// }
	
	const plantList = plants.map((plant,index) => { 
		return(
			<div className="mine2" key={plant.plantname}>
		            	<a href="/pdetail">
		                	<img src={plantImage[index % plantImage.length]} alt={`Icon 1 ${index}`} />
		                </a>
		                <p class="text-center">{plant.plantname}</p>
		                <div class="options">
		                    <button className="btn btn-secondary" style={{width: '200px', marginBottom: '10px'}}>{plant.plantkeyword1}</button>
		                    <button className="btn btn-secondary" style={{width: '200px', marginBottom: '10px'}}>{plant.plantkeyword2}</button>
		                    <button className="btn btn-secondary" style={{width: '200px', marginBottom: '10px'}}>{plant.plantkeyword3}</button>
		                </div>
		    </div>
		);
	})
    return(
    <>
    <section className="section">
       		<div className="container">
            	<div className="row">
                	<div className="col-md-12 col-sm-12">
						<h1 className="sub_title">나만의 식물 찾기</h1>
					
						<h4 className="text-center">당신의 선택에 추천드리는 식물은</h4>
						<div className="mine-container2">
						{plantList}
					</div>       
                </div>
            </div>
        </div>
        <div style={{textAlign: 'center'}}>
        <a href="/minelist" className="selecbtn">다시 선택</a>
        <a href="/tagplant" style={{marginLeft: '40px'}} className="selecbtn">여기는 제가 원하는 식물이 없어요!</a>
        </div>
    	</section>
    </>
    );
}

export default Recplant;