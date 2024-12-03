import { createContext, useMemo, useState, type PropsWithChildren } from "react"

export type PermissionContextState = {
    token: string
    user: string
}

export const DEFAULT_PERMISSION_STATE: PermissionContextState = {
    token: "",
    user: "",
}

export const PermissionContext = createContext({
    permission: DEFAULT_PERMISSION_STATE,
    setPermission: (permission: PermissionContextState) => {
        if (!permission) {
            throw new Error("Misuse when of set permission context.")
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