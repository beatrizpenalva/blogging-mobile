import { useState } from "react"
import { StyleSheet, View } from "react-native"

import { FormSearch } from "../../components/Form/FormSearch"
import { SearchFormValues } from "../../components/Form/FormSearch/SearchSchema"
import { Header } from "../../components/Header"
import { TimelineContent } from "../../components/TimelineContent"

export const Timeline = () => {
    const [currentList] = useState([])

    const handleSearch = (data: SearchFormValues) => {
        console.log('Search data:', data)
    }

    return (
        <View style={styles.container}>
            <Header />
            <FormSearch onSearch={handleSearch} />
            <TimelineContent onTryAgain={() => console.log('Clicou no erro')} posts={currentList} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        alignItems: 'center',
        justifyContent: 'center'
    }
})