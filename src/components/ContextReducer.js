import React, { createContext, useContext, useReducer } from "react";

const CartStateContext=createContext();
const CartDispatchContext=createContext();





const reducer=(state ,action)=>{
    switch(action.type){
        case "ADD":
            return [...state,{id:action.id, name:action.name, price:action.price, img:action.img, qty:action.qty, size:action.size}]

            break;
        case "REMOVE":
            const newArr=[...state]
            newArr.splice(action.index,1)
            return newArr;
        
            case "UPDATE":
                const arr=[...state]
                arr.find((food ,index)=>{
                    if(food.id===action.id){
                        arr[index]={...food,qty:parseInt(action.qty)+food.qty,price:action.price+food.price}

                        
                        
                    }
                    return arr
                })
                return arr

            case "DROP":
                let empArry=[]
                return empArry

        default:console.log("Error in reducer")
    }


}

export const CartProvider=({children})=>{

    const [state ,dispatch]=useReducer(reducer,[])

    


    return(

        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>

                {children}
            </CartStateContext.Provider>

        </CartDispatchContext.Provider>

    )

}



export const useCart= ()=> useContext(CartStateContext);
export const useDispatchCart =()=>useContext(CartDispatchContext);
