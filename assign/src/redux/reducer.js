import { IS_LOADING } from "./actiontypes";
import { SIGN_UP } from "./actiontypes";
import { IS_ERROR} from "./actiontypes";

let init = {isloading:false,iserror:false,signup:false}
export const reducer = (state=init, { type, payload })=>{
    switch (type){
        case IS_LOADING:
            return (
                {
                    ...state,
                    isloading:true
                }
            );
        case IS_ERROR:
            return (
                {
                    ...state,
                    iserror:payload,
                    isloading: false
                }
            );
        case SIGN_UP:
            return (
                {
                    ...state,
                    signup:payload,
                    isloading: false,
                    iserror:false
                }
            );  
        default:
            return state;    
    }
}