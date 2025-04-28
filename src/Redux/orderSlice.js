import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";


const orderSlice = createSlice({
    name:'orders',
    initialState:{
        orderItems:[]
    },
    reducers:{
        placeYourOrder: function (state,action) {
             const {totalCost,cart} = action.payload
             if(cart.length>0) {
              const id = crypto.randomUUID();
                const today = dayjs().format();
                  
                state.orderItems.unshift({
                    id: id,
                    orderTime: today,
                    totalCost: totalCost,
                    products: [...cart]
                })
               
            }
        }
    }
})

export const {placeYourOrder} =  orderSlice.actions;
export default orderSlice.reducer