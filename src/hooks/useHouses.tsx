import { useContext } from "react"
import { HousesContext } from "../providers/housesProvider"

const useHouses = () => {
    const context = useContext(HousesContext)

    if (!context) {
        throw new Error("useHouses must be used within HousesProvider")
    }

    return context
}

export default useHouses;