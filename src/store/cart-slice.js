import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        itemsList: [], 
    },
    reducers: {
        addToCart(state,action){
            const newItem = action.payload;
            const existingItem = state.itemsList.find((item)=> item.id === newItem.id)

            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.price * existingItem.quantity
            } else {
                state.itemsList.push({
                    id: newItem.id,
                    name: newItem.itemName,
                    price:newItem.itemPrice, 
                    totalPrice: newItem.itemPrice,
                    quantity: 1,   
                })   
            }
        },
    
        decrementQuantity(state, action){
            const id = action.payload;
            const existingItem = state.itemsList.find((item)=> item.id === id)
            if (existingItem.quantity <= 1 ) {
                state.itemsList= state.itemsList.filter(item=> item.id !== id)
                
            } else {
                existingItem.quantity--;
               
            }
        },

        removeItem(state, action){
            const id = action.payload
            state.itemsList = state.itemsList.filter(item=> item.id !== id)
        }
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice;