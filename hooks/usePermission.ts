import { useContext } from "react"

import { PermissionContext } from "../context/permission"

export const usePermission = () => {
    const { permission, setPermission } = useContext(PermissionContext)

    const { token } = permission
    const hasPermission = Boolean(token)

    const handleSetToken = (newToken: string) => {
        if (Boolean(newToken)) setPermission({ ...permission, token: `Bearer ${newToken}` })
        setPermission({ ...permission, token: newToken })
    }

    return {
        hasPermission,
        setToken: handleSetToken,
        token
    }
}