import { createContext, useMemo, useState, type PropsWithChildren } from "react"

type PermissionContextState = {
    token: string;
}

export type PermissionContextValue = {
    token: string;
    setToken: (token: string) => void;
}

export const DEFAULT_PERMISSION_STATE: PermissionContextState = {
    token: "",
}

export const PermissionContext = createContext({
    permission: DEFAULT_PERMISSION_STATE,
    setPermission: (permission: PermissionContextState) => {
        if (!permission) {
            throw new Error("Misuse when try to get token.")
        }
    },
})

type PermissionProviderProps = PropsWithChildren

export const PermissionProvider = ({ children }: PermissionProviderProps) => {
    const [permission, setPermission] = useState<PermissionContextState>(DEFAULT_PERMISSION_STATE)

    const memoizedPermission = useMemo(() => ({
        permission,
        setPermission,
    }), [permission, setPermission])

    return (
        <PermissionContext.Provider value={memoizedPermission}>{children}</PermissionContext.Provider>
    )
}