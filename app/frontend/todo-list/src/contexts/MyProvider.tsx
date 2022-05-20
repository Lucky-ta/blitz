import { useEffect, useState } from "react";
import UseApi from "../services/UseApi";
import { MyContext } from "./MyContext";

const MyProvider = ({ children }: any) => {
    // const [ tasks, setStasks ] = useState([]);

    const data = {
    }

    // useEffect(() =>{
    //     const getTasks = async () => {
    //         try {
    //             const data = await UseApi.getAllTasks();
    //             console.log(data);
                
    //             setStasks(data)
    //         } catch (e: any) {
    //             console.log(e.message);
    //         }
    //     }
    //     getTasks();
    // }, [UseApi])

    return(
        <MyContext.Provider value={data}>
            { children }
        </MyContext.Provider>
    )
}

export default MyProvider;