import NavBar from "./components/NavBar";
import { useState } from "react";
import FoodItem from "./components/FoodItem";
import Alert from "./components/Alert";

function Menu(){
    const [searchedItems, setSearchedItems] = useState([{id: 1, energ_kcal: 10}]);
    const [alertVisible, setAlertVisible] = useState(false);
    const handleAlert = () => {
        setAlertVisible(true)
        setTimeout(() => setAlertVisible(false), 700);
    }
    return (
        <>
            <NavBar handleResults={searchResult => setSearchedItems(searchResult)}/>
            <Alert visible={alertVisible}>
                <h6>
                    Item added
                </h6>
            </Alert>
            {searchedItems.map(item => <FoodItem food={item} key={item.id || 0} onAddFunc={handleAlert}/>)}
        </>
    );
}

export default Menu;