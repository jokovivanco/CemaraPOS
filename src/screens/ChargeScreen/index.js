import React from 'react'
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { TextInput, Switch, Text } from 'react-native-paper'
import { InterMedium, InterBlack, InterBold } from '../../components/Fonts'
import Icon from 'react-native-vector-icons/FontAwesome5'

const ChargeScreen = ({ navigation, route }) => {
  const { item } = route.params
  return (
    <View style={styles.container}>
      <View style={{ borderBottomWidth: 1 }}>
        <InterBold text={item.name} style={styles.itemName} />
        <View style={{ flexDirection: 'row' }}>
          <View style={{ width: 164 }}>
            <Image source={item.image} style={{ width: 113, height: 113 }} />
          </View>
          <View style={{ flex: 1 }}>
            <View>
              <Text>Total</Text>
              <View style={{ paddingRight: 13, borderWidth: 1, borderRadius: 10 }}>
                <Text style={{ textAlign: 'right', fontSize: 18 }}>{item.price}</Text>
              </View>
            </View>
            <View>
              <Text>Stock</Text>
              <View style={{ paddingRight: 13, borderWidth: 1, borderRadius: 10 }}>
                <Text style={{ textAlign: 'right', fontSize: 18 }}>{item.stock}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={{ borderBottomWidth: 1, marginTop: 9 }}>
        <View>
          <Text>Variation & Quantity</Text>
        </View>
        <View>
          {item.varianItems.length > 0 && item.varianItems.map((varian, i) => (
            <View key={i} style={{ flexDirection: 'row' }}>
              <TouchableOpacity style={{ flex: 1, justifyContent: 'center', borderWidth: 1, marginRight: 10 }}>
                <Text>{varian}</Text>
              </TouchableOpacity>
              <View style={{ padding: 20, fontSize: 20, borderWidth: 1 }}>
                <Text>0</Text>
              </View>
            </View>
          ))}
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 28 }}>
          {/* nanti bungkus pake TouchableOpacity */}
          <Text style={{ borderWidth: 1, padding: 20, fontSize: 20, paddingHorizontal: 30, marginRight: 8 }}>+</Text>
          {/* nanti bungkus pake TouchableOpacity */}
          <Text style={{ borderWidth: 1, padding: 20, fontSize: 20, paddingHorizontal: 30 }}>-</Text>
        </View>
      </View>

      <View style={{ marginTop: 8 }}>
        <View>
          <Text>Discount</Text>
        </View>
        <DiscountField />
        <SwitchPromo label="Promo 1" />
        <SwitchPromo style={{ marginTop: 8 }} label="Promo 2" />
      </View>
    </View >
  )
}

//component Promo
const SwitchPromo = ({ label, style }) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <View style={[style, { flexDirection: 'row', borderRadius: 5, padding: 15, borderWidth: 1, justifyContent: 'space-between', alignItems: 'center' }]}>
      <Text>{label}</Text>
      <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
    </View>
  )
};

//component Discount
const DiscountField = () => (
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <View style={{ height: 70, justifyContent: 'flex-start', flex: 1 }}>
      <TextInput
        mode='outlined'
        value='0'
        style={{
          textAlign: 'right'
        }}
        right={<TextInput.Affix text=" % " />}

      />
    </View>
    <TouchableOpacity style={{ borderRadius: 5, marginLeft: 10, padding: 20, borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Icon name='plus' size={12} color='#000' />
    </TouchableOpacity>
    <TouchableOpacity style={{ borderRadius: 5, marginLeft: 10, padding: 20, borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Icon name='minus' size={12} color='#000' />
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 28,
    paddingRight: 19,
    paddingTop: 14
  },
  subContainer: {
    borderBottomWidth: 1,
  },
  itemName: {
    fontSize: 20
  }
})

export default ChargeScreen
