import { useState } from "react";
import { MyContext } from "./MyContext";

const MyProvider = ({ children }: any) => {
    const [reload, setReload] = useState(false)

    const data = {
        reload, setReload
    }

    return(
        <MyContext.Provider value={data}>
            {children}
        </MyContext.Provider>
    )
}

export default MyProvider;