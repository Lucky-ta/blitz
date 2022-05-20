import { createContext } from "react";

export interface ITasks {
    id?: number;
    tasks: string
}

export const MyContext = createContext<any>(null!);