import axios from "axios";
import { createContext, useEffect, useState } from "react";
import env from "../env";
import { useNavigate } from "react-router-dom"

export const Usercontext = createContext()

function Usercontextprovider({ children }) {
    

    
    const navigate = useNavigate()
    const [userdata, setuserdata] = useState({})
    const [user, setuser] = useState({})
    const token = sessionStorage.getItem("token")


    function logout() {
        sessionStorage.removeItem("token")
        setuserdata(null)
        navigate('/')
    }

    

    useEffect(() => {
      
            const getuser = async () => {
                try {
                    let res = await axios.get(`${env.BASE_URL}/user/refreshuser/${token}`)
                    setuserdata(res.data)
                } catch (error) {
                    if (error?.response?.status == 401) {
                      logout()
                    }
                    if (error?.response?.status === 500) {
                        logout()
                    }if (error?.response?.status == 498) {
                        logout()
                      }
                }
            } 
            getuser()
    }, [])
    
    return <Usercontext.Provider value={{userdata,setuserdata,logout,user, setuser}}>
        {children}
    </Usercontext.Provider>
}

export default Usercontextprovider