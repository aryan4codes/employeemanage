//Create a Context

import { createContext, useState , useContext} from "react";

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({ children }) {

    function login(username, password) {
        if(username==='admin' && password==='admin'){
            setAuthenticated(true)
            return true            
        } else {
            setAuthenticated(false)
            return false
        }        
    }

    function logout() {
        setAuthenticated(false)
    }
    

    const [isAuthenticated, setAuthenticated] = useState(false)

    return (
        <AuthContext.Provider value={ { isAuthenticated,login, logout} }>
            {children}
        </AuthContext.Provider>
    )
} 