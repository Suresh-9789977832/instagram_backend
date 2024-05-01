import { useNavigate } from 'react-router-dom';

export const Logout=() =>{
    let navigate=useNavigate()
    return () => {
        sessionStorage.clear()
        navigate('/')
  }
}

