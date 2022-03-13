import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import rewriteCorrectly from "../../libs/grammar-handlers";
import { deleteFood } from "../../libs/manage-food-list";

function UserFoodListTable({ foodList, onDeleteAction }) {
    let totalCalories = 0;
    const totalMacros = {
        protein: 0,
        fat: 0,
        carbs: 0
    }

    foodList.forEach(food => {
        totalCalories += food.energ_kcal
        totalMacros.protein += food.protein
        totalMacros.carbs += food.carbohydrt
        totalMacros.fat += food.lipid_tot
    });

    return ( 
        <div className="container-xxl">
            <table className="table table-hover table-bordered">
                <thead className="text-center">
                    <th>Item</th>
                    <th>Calories</th>
                    <th>Macros</th>
                    <th>Remove</th>
                </thead>
                <tbody className="text-center">
                    {foodList.map( (food, index) =>(
                        <tr>
                            <td style={{maxWidth: 120, wordBreak: 'break-word'}}>
                                {rewriteCorrectly(food.shrt_desc)}
                            </td>
                            <td>{food.energ_kcal}</td>
                            <td>
                                protein: {food.protein}g
                                <br />
                                carbs: {food.carbohydrt}g 
                                <br />
                                fat: {food.lipid_tot}g
                            </td>
                            <td >
                                <button 
                                    className="btn btn-outline-danger ms-2"
                                    onClick={() => {
                                        deleteFood(index)
                                        onDeleteAction()
                                    }} 
                                >
                                    <FontAwesomeIcon icon={faXmark}/>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
            <div className="container-xxl">
                <h3><strong>Total calories: {Math.floor(totalCalories)}</strong></h3>
                <ul>
                    <li>
                        <h5><strong>Total Protein: {Math.floor(totalMacros.protein)}</strong></h5>
                    </li>
                    <li>
                        <h5><strong>Total Carbs: {Math.floor(totalMacros.carbs)}</strong></h5>
                    </li>
                    <li>
                        <h5><strong>Total Fat: {Math.floor(totalMacros.fat)}</strong></h5>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default UserFoodListTable;