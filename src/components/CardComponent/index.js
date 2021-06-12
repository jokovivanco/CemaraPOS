import React from 'react'
import { InterLight, InterMedium } from '../Fonts'
import { View, Image } from 'react-native'
import { Card } from 'react-native-paper'
import styles from './styles'

const CardComponent = ({ title, variant, stock, image, price }) => (
  <Card style={styles.container} onPress={() => { }}>
    <Card.Content style={styles.contentWrapper}>
      <Image source={image} style={styles.thumbnail} />
      <View style={styles.mainInfoWrapper}>
        <InterMedium text={title} style={styles.mainInfoTitle} />
        <View style={styles.rowInfo}>
          <InterLight text={`Variant (${variant})  `} style={styles.rowInfoText} />
          <InterLight text={`Stock (${stock})`} style={styles.rowInfoText} />
        </View>
      </View>
      <View style={styles.priceWrapper}>
        <InterMedium text={`${price}K/Item`} />
      </View>
    </Card.Content>
  </Card>
)

export default CardComponent