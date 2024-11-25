import '../../assets/css/mine.css';
import '../../assets/css/main.css';
import '../../assets/css/common.css';
import '../../assets/css/mapsmain.css';
import Minelist from './Minelist';
import Recplant from './Recplant';
import Pdetail from './Pdetail';
import Tagplant from './Tagplant';
import {Routes, Route } from 'react-router-dom';

const Mine = () => {
return(
    <>
		<Routes>
			<Route path="/mine" element={<Minelist />} />
			<Route path="/mine/recplant" element={<Recplant />} />
			<Route path="/mine/pdetail" element={<Pdetail />} />
			<Route path="/mine/tagplant" element={<Tagplant />} />
		</Routes>
    <Minelist />
    </>
    );
}
export default Mine;