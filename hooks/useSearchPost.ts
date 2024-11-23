import type { PostResponse } from "../api"

import { useState } from "react"

import { getPostByKeyWord } from "../api"
import { useSnackbar } from "./useSnackbar"

export const useSearchPost = () => {
    const { setSnackbar } = useSnackbar()

    const [loading, setLoading] = useState(false)
    const [posts, setPosts] = useState<Array<PostResponse>>([])

    const searchPost = async (word: string) => {
        setLoading(true)
        try {
            const data = await getPostByKeyWord(word)
            setPosts(data)
        } catch {
            setSnackbar({
                show: true,
                message: "Ocorreu um erro. Por favor, tente novamente mais tarde.",
                variant: "error"
            })
        } finally {
            setLoading(false)
        }
    }

    return {
        loading,
        posts,
        searchPost,
    }
}