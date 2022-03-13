import { createPortal } from "react-dom";
import '../../css/Alert.css';

function Alert({ visible, children }) {
    if(visible){
        createPortal(
            <div className="alert-container">
                {children}
            </div>
        , document.getElementById('alert-container'))
    
    }
    else return null
}

export default Alert;