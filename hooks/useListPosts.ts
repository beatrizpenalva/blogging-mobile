import type { PostResponse } from "../api"

import { useState } from "react"

import { getPosts } from "../api"

type RequestStatus = "error" | "loading" | "success"

export const useListPosts = () => {
    const [postsList, setPostsList] = useState<Array<PostResponse>>([])
    const [requestStatus, setRequestStatus] = useState<RequestStatus>("loading")

    const getListPosts = async () => {
        setRequestStatus("loading")
        try {
            const data = await getPosts()
            setPostsList(data)
            setRequestStatus("success")
        } catch {
            setRequestStatus("error")
        }
    }

    return {
        getListPosts,
        postsList,
        requestStatus,
    }
}