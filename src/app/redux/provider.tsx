"use client"
import { Provider } from "react-redux";
import { store } from "./store";

type ChildrenType = {
    children: React.ReactNode
}

export function Providers({ children }: ChildrenType) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}