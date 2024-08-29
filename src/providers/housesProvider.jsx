import { createContext, useState, useEffect } from "react"

// definition/description de ce qu'on va passer dans l'app
export const HousesContext = createContext({
    houses: [],
})


// component
const HousesProvider = ({children}) => {
    const [houses, setHouses] = useState([])

    useEffect(() => {
        fetch("./logements.json")
          .then((data) => data.json())
          .then((data) => setHouses(data))
          .catch((error) => console.log(error));
      }, []);

    return (
        <HousesContext.Provider value={houses}>
            {children}
        </HousesContext.Provider>
    )
}

export default HousesProvider