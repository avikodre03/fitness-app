import { createContext, useState } from "react";

export const AuthContext=createContext()

export function CustomProvider({ children }){
    const [exercises, setExercises] = useState([])
  const [bodyPart, setbodyPart] = useState("all")
return(
    <AuthContext.Provider value={{exercises,setExercises,bodyPart,setbodyPart}}>
        {children}
    </AuthContext.Provider>
)
}