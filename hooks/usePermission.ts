import { useContext } from "react"

import { PermissionContext, type PermissionContextState } from "../context/permission"

export const usePermission = () => {
    const { permission, setPermission } = useContext(PermissionContext)

    const { token, user } = permission
    const hasPermission = Boolean(token)

    const handleSetUserInfo = ({ token = "", user = "" }: PermissionContextState) => {
        setPermission({ ...permission, token: `Bearer ${token}`, user })
    }

    return {
        hasPermission,
        setUserInfo: handleSetUserInfo,
        token,
        user
    }
}