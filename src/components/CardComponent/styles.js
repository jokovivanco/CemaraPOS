import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    marginBottom: 8
  },
  contentWrapper: {
    flexDirection: 'row'
  },
  thumbnail: {
    width: 72,
    height: 72
  },
  mainInfoWrapper: {
    justifyContent: 'center',
    marginLeft: 10
  },
  mainInfoTitle: {
    fontSize: 14,
    letterSpacing: 1.5
  },
  rowInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  rowInfoText: {
    fontSize: 12,
    letterSpacing: 1.5
  },
  priceWrapper: {
    flex: 1,
    alignItems: 'flex-end'
  }
})