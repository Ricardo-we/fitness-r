import { useState } from "react";
import getFoodList from "../libs/manage-food-list";
import NavBar from "./components/NavBar";
import FoodItem from "./components/FoodItem";
import UserFoodListTable from "./components/UserFoodListTable";
import Alert from "./components/Alert";

function UserFoodList() {
    const [foodList, setFoodList] = useState(getFoodList());
    const [searchedItems, setSearchedItems] = useState([{id: 1, energ_kcal: 10}]);
    const [alertVisible, setAlertVisible] = useState(false);
    const handleSetFoodList = () => {
        setFoodList(getFoodList())
    };
    

    return ( 
        <div>
            <NavBar handleResults={result => setSearchedItems(result)}/>
            {searchedItems.map(item => <FoodItem food={item} key={item.id || 0} onAddFunc={handleSetFoodList}/>)}
            <Alert variant="danger" visible={alertVisible}>
                <h6>
                    Item deleted
                </h6>
            </Alert>
            <UserFoodListTable foodList={foodList} onDeleteAction={() => {
                handleSetFoodList()
                setAlertVisible(true)
                setTimeout(() => setAlertVisible(false), 700)
            }}/>
        </div>
    );
}

export default UserFoodList;