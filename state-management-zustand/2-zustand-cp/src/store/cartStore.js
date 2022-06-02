import create from "zustand"
// TODO: answer here
import { devtools, persist } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"
import { produce } from "immer";

const cartQuantityMiddleware = (config) => (set, get, api) =>
  config(
    // TODO: answer here
    (...args) => {
      set(...args);
      //console.log(get().items);

      // const moreThanStock = get().items.map((item) => {
      //   if (item.quantity > item.stock) {
      //     return item
      //   } 
      // })
      //console.log(get())
      const moreThanStock = get().items.filter((item) => item.quantity > item.stock)
      //console.log(moreThanStock.length)
      if (moreThanStock.length > 0) {
        return set((state) => ({
          items: state.items.map((item) => {
            if (item.id === moreThanStock[0].id) {
              // console.log(item.id,moreThanStock[0].id)
              return { ...item, quantity: item.stock }
            }
            return item
          })
        }))
      }
      const moreThanNol = get().items.filter((item) => item.quantity < 1)
      //console.log(moreThanNol.length)
      if (moreThanNol.length > 0) {
        return set((state) => ({
          items: state.items.map((item) => {
            if (item.id === moreThanNol[0].id) {
              // console.log(item.id,moreThanStock[0].id)
              return { ...item, quantity: 1 }
            }
            return item
          })
        }))
      }

      // return set((state)=>({
      //   items:state.items.map((item)=>item.id===moreThanStock)
      // }))
    }
    ,
    get,
    api,
  )

const useCartStore = create(
  persist(
  devtools(
    produce(
      immer(
        cartQuantityMiddleware(
          (set, get) => ({
            items: [],
            // addItem: (item) => set(produce((state) => {
            //   const itemIndex = get().items.find((i) => i.id === item.id)
            //   console.log(itemIndex)
            //   state.items.push({ ...item, quantity: 1 })
            // })),

            addItem: (item) => {
              const itemIndex = get().items.filter((i) => i.id === item.id)
              //console.log(item)
              set((state) => ({
                items: [
                  ...state.items.filter((i) => i.id !== item.id),
                  {
                    ...item, quantity: itemIndex[0] ? itemIndex[0].quantity + 1 : 1
                  }
                ]
              }))
              //console.log(get().items)
            },
            removeItem: (itemId) => set(produce((state) => {
              state.items = state.items.filter((item) => item.id !== itemId)
            })),
            changeQuantity: (itemId, quantity) => set(produce(
              (state) => {
                state.items = state.items.map((item) => {
                  if (item.id === itemId) {
                    item.quantity = quantity
                  }
                  return item;
                })
              }
            ))
          })
        )
      )
    )
  )

  , {
    name: "cart"
  })
)
// TODO: answer here



export default useCartStore
