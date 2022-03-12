export default function getFoodList(){
    const foodList = localStorage.getItem('food-list');
    if(!foodList) localStorage.setItem('food-list', JSON.stringify([]));
    return JSON.parse(localStorage.getItem('food-list'));
}

export function addFood(food={}){
    const foodList = getFoodList();
    foodList.push(food)
    localStorage.setItem('food-list', JSON.stringify(foodList))
}

export function deleteFood(index){
    const foodList = getFoodList();
    const newFoodList = foodList.filter((item, index_) => index_ !== index)
    localStorage.setItem('food-list', JSON.stringify(newFoodList));
    return newFoodList;
}