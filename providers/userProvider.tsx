'use client'

import { MyUserContextProvider } from "@/hooks/useUser";

interface useProviderProps {
    children: React.ReactNode;
}

const UserProvider: React.FC<useProviderProps> = ({
    children
}) => {
    return (
        <MyUserContextProvider>
            {children}
        </MyUserContextProvider>
    )
}

export default UserProvider;