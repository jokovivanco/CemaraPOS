import React from 'react'
import { View, Text, FlatList, Image, TouchableWithoutFeedback } from 'react-native'
import { data } from '../../dummy/data'
import { colors } from '../../assets/color'

const RecentScreen = () => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <TouchableWithoutFeedback onPress={() => alert(`You clicked ${item.name}`)}>
          <View style={{
            backgroundColor: colors.white,
            marginTop: 19,
            marginHorizontal: 18,
            shadowColor: colors.black,
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.20,
            shadowRadius: 1.41,
            elevation: 2,
          }}>
            <View style={{
              flexDirection: 'row',
              padding: 12
            }}>
              <View style={{ marginRight: 5 }}>
                <Image source={item.image} style={{
                  width: 72,
                  height: 72
                }} />
              </View>
              <View style={{ flex: 2, justifyContent: 'center' }}>
                <View style={{ paddingBottom: 10 }}>
                  <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ color: colors.gray }}>Varian ({item.varian})    </Text>
                  <Text style={{ color: colors.gray }}>Stock ({item.stock})</Text>
                </View>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.price}K/item</Text>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      )}
      keyExtractor={(item, i) => i}
    />
  )
}

export default RecentScreen
