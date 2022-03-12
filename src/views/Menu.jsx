import NavBar from "./components/NavBar";
import { useState } from "react";
import FoodItem from "./components/FoodItem";

function Menu(){
    const [searchedItems, setSearchedItems] = useState([{id: 1, energ_kcal: 10}]);

    return (
        <>
            <NavBar handleResults={searchResult => setSearchedItems(searchResult)}/>
            {searchedItems.map(item => <FoodItem food={item} key={item.id}/>)}
        </>
    );
}

export default Menu;