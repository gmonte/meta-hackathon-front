import { Colors, Fonts } from '@jqcode/c-styles'

export default() => ({
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    marginBottom: 10
  },
  greyContainer: {
    padding: 30,
    width: '100%',
    boxShadow: 'none',
    backgroundColor: Colors.grey,
    textAlign: 'center'
  },
  cashbackContainer: {
    padding: 30,
    width: '100%',
    textAlign: 'center',
  },
  dateText: {
    color: Colors.white,
    fontWeight: Fonts.fontWeight.bold
  },
  valueText: {
    color: Colors.white,
    fontWeight: Fonts.fontWeight.bold
  },
  cashbackText: {
    backgroundColor: Colors.white,
    color: Colors.text
  }
})
