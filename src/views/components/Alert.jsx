import { createPortal } from "react-dom";
import '../../css/Alert.css';

function Alert({ visible, variant='success', children }) {
    if(visible){
        return createPortal(
            <div className={"alert-container bg-" + variant}>
                {children}
            </div>
        , document.getElementById('alert-container'))
    
    }
    return null
}

export default Alert;