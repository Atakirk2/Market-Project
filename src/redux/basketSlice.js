import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemList: [],
  itemIDs: [],
  totalPrice: 0
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem: (state, item) => {
      if (state.itemIDs.includes(item.payload.added)) {
        state.itemList.forEach((product) => {
          if (product.added === item.payload.added) {
            product.quantity++;
          }
        });
      } else {
        state.itemIDs = [...state.itemIDs, item.payload.added];
        state.itemList = [
          ...state.itemList,
          {
            name: item.payload.name,
            price: item.payload.price,
            quantity: 1,
            added: item.payload.added,
          },
        ];
      }
    },
    deleteItem: (state, item) => {
        if(state.itemIDs.includes(item.payload.added)){
            state.itemList.forEach((product) => {
                if (product.added === item.payload.added && product.quantity > 0) {
                  product.quantity--;
                }
                if(product.quantity === 0){
                    state.itemIDs.splice(state.itemIDs.indexOf(product.added),1);
                    state.itemList = state.itemList.filter(newItem => newItem.quantity !== 0);
                }
              });
        }
        else{
            console.log('error occurred when item is deleting')
        }
    },
    calculateTotalPrice: (state)=>{
        let total = 0;
        state.itemList.forEach(item=>{
            total += item.quantity * item.price
        })
        state.totalPrice = total
        console.log(state.totalPrice)
    }
  },
});

export const { addItem, deleteItem, calculateTotalPrice } = basketSlice.actions;

export default basketSlice.reducer;
