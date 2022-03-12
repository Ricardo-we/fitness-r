import 'bootswatch/dist/flatly/bootstrap.min.css';
import Menu from './views/Menu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserFoodList from './views/UserFoodList';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Menu/>}/>
				<Route path="/your-food-list" element={<UserFoodList/>}/>
			</Routes>
		</BrowserRouter>
	);
}

export const APIDATA = {
	url: 'https://food-calorie-data-search.p.rapidapi.com/api/search',
	headers: {
		'x-rapidapi-host': 'food-calorie-data-search.p.rapidapi.com',
		'x-rapidapi-key': '8451e3cf1amshd9af612ba61ed07p12e969jsn0c7d221ebe7e'
	}
}

export default App;
