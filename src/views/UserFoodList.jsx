import { useState } from "react";
import getFoodList from "../libs/manage-food-list";
import NavBar from "./components/NavBar";
import FoodItem from "./components/FoodItem";
import UserFoodListTable from "./components/UserFoodListTable";

function UserFoodList() {
    const [foodList, setFoodList] = useState(getFoodList());
    const handleSetFoodList = () => setFoodList(getFoodList());
    const [searchedItems, setSearchedItems] = useState([{id: 1, energ_kcal: 10}]);

    return ( 
        <div>
            <NavBar handleResults={result => setSearchedItems(result)}/>
            {searchedItems.map(item => <FoodItem food={item} key={item.id} onAddFunc={handleSetFoodList}/>)}
            
            <UserFoodListTable foodList={foodList} onDeleteAction={handleSetFoodList}/>
        </div>
    );
}

export default UserFoodList;