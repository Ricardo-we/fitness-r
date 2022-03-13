import { faSpinner, faArrowDown, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import '../../css/FoodItem.css'
import { addFood } from "../../libs/manage-food-list";
import rewriteCorrectly from '../../libs/grammar-handlers'

// CHART JS
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);



function FoodItem({ food, onAddFunc }) {
    let foodName = rewriteCorrectly(food.shrt_desc);
    
    let foodWeight = Math.floor(food.protein + food.carbohydrt + food.lipid_tot + food.water);
    const [detailsVisible, setDetailsVisible] = useState(false);

    // PIECHART CONFIG AND DATA
    const data = {
        labels: ['protein', 'carbs', 'fat'],
        datasets: [{
            data: [food.protein, food.carbohydrt, food.lipid_tot],
            backgroundColor: ['#F73911','#0881F7', '#F3F708',]
        }]
    }

    const pieOptions =  {
        responsive: true, 
        maintainAspectRatio: false, 
        legend:{
            position:'bottom'
        }
    }

    const handleDetailsVisible = () => {
        detailsVisible? setDetailsVisible(false)
        : setDetailsVisible(true)
    }

    if(foodName){
        return ( 
            <div className="rounded container-xxl border border-primary my-3 p-2 d-flex flex-row justify-content-between flex-wrap">
            {/* FOOD MAIN DATA, CALORIES, NAME */}
            <div>
                {foodName}
                <p>
                    Portion size: {food.gmwt_desc1}
                    <br />
                    Weight: {foodWeight}g
                    <br />
                    {food.energ_kcal} kcal
                </p>
            </div>

            <button 
                onClick={handleDetailsVisible} 
                className={detailsVisible? "btn btn-link details-btn details-btn-close" : "btn btn-link details-btn"}
                style={{alignSelf: 'center'}}
                >
                <FontAwesomeIcon icon={faArrowDown}/>    
            </button>
            
            {/* FOOD DETAILS SECTION */}
            <div className={detailsVisible? "details-container details-container-open" : 'details-container'}>
                    <div style={{width: '50%', height: '300px', position: 'relative'}}>
                        <Pie options={pieOptions} data={data}/>
                    </div>
                    <div className="d-flex flex-wrap  justify-content-evenly">
                        <ul>
                            <h4>Macro nutrients</h4>
                            <li><strong>kcal: {food.energ_kcal}</strong></li>        
                            <li><strong>protein: {food.protein}g</strong></li>
                            <li><strong>carbs: {food.carbohydrt}g</strong></li>
                            <li><strong>fat: {food.lipid_tot}g</strong></li>
                        </ul>
                        <ul>
                            <h4>Micro nutrients</h4>
                            <li>sugar: {food.sugar_tot}g</li>
                            <li>sodium: {food.sodium}mg</li>
                            <li>potassium: {food.potassium}mg</li>
                            <li>magnesium: {food.magnesium}mg</li>
                            <li>calcium: {food.calcium}mg</li>
                            <li>cholestrl: {food.cholestrl}mg</li>
                        </ul>
                    </div>
                    <button title="Add to food list" style={{alignSelf: 'center'}} className="btn btn-outline-primary" onClick={() => {
                        addFood(food)
                        onAddFunc()
                    }}>
                        <FontAwesomeIcon icon={faPlus}/>
                    </button>
                </div>
            </div>
        );
    }
    return (
        <div className="container">
            {food.loading?
                <h1>
                    <FontAwesomeIcon className="fa-spin" style={{fontSize: 30}} icon={faSpinner}/>
                </h1>   
            : <h1> Search some goodies 🍕</h1>
            }
            
        </div>
    )
}

export default FoodItem;