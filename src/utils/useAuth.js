import {useAuth} from '../context/AuthContext';

export default function useAuth(){
    const user = useAuth();
    const {signIn} = ""
    const handleAuthAction = (authAction, data)=>{
        if (user){
            authAction(data);
        }else {
            signIn();
        }
    }
    return handleAuthAction;
}