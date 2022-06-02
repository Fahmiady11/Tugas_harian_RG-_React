import create from "zustand"
import { devtools, persist } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"
import { produce } from "immer";
// TODO: answer here

const useItemStore = create(
    persist(
        immer(
            devtools(
                (set) => ({
                    items: [],
                    addItem: (item) => set(produce((state) => { state.items.push(item) })),
                    removeItem: (itemId) => set(produce((state) => {
                        state.items = state.items.filter((item) => item.id !== itemId)
                    }))
                }
                )
            )
        )
        , {
            name: "items"
        }
    )
)
// TODO: answer here

export default useItemStore
