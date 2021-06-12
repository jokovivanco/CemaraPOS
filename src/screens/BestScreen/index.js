import React from 'react'
import { FlatList } from 'react-native'
import { data } from '../../dummy/data'
import CardComponent from '../../components/CardComponent'
import styles from './styles'

const BestScreen = ({ navigation }) => {
  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={data}
      renderItem={({ item }) => (
        <CardComponent
          title={item.name}
          variant={item.varian}
          stock={item.stock}
          image={item.image}
          price={item.price}
        />
      )}
      keyExtractor={(item, i) => i}
    />
  )
}

export default BestScreen
