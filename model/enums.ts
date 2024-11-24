export enum UserProfile {
    admin = "admin",
    viewer = "viewer"
}

export const UserProfileLabels = {
    [UserProfile.admin]: "Administrativo",
    [UserProfile.viewer]: "Discente",
}