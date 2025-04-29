import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cartItem:[]
    },
    reducers:{
        addToCart: function(state,action) {
            const {productId,quantity} = action.payload;
            const existingItem = state.cartItem.find((item) => {
                return item.id === productId;
            })

            if(existingItem) {
                existingItem.quantity += quantity;
            }else {
                state.cartItem.push({
                    id:productId,
                    quantity:quantity,
                    deliveryOptionId:'1' 
                })
            }
            alert("added to cart")
        },

        updateCart: function(state,action) {
             const {productId,quantity} = action.payload;

             const matchingItem = state.cartItem.find((item) => {
                return item.id === productId;
             })
             
             if(matchingItem) {
                matchingItem.quantity = quantity;
             }
        },

        cartItemDelete:function (state,action)  {
               const {productId} = action.payload;

               state.cartItem = state.cartItem.filter((item) => {
                  return productId !== item.id;
               })
        },

        deliveryOptionChange: function(state,action) {
            const {productId,optionId} = action.payload;
           const matchingItem =  state.cartItem.find((item) => {
                return item.id === productId;
            })
            if(matchingItem) {
                matchingItem.deliveryOptionId = optionId
            }
        },

        clearCart: (state) => {
            state.cartItem = [];
          }
            
    }
})

export const { addToCart, updateCart, cartItemDelete,deliveryOptionChange,clearCart } = cartSlice.actions;
 export default cartSlice.reducer;