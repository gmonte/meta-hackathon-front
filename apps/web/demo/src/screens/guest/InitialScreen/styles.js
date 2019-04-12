import Colors from '@jqcode/c-styles/src/styles/Colors'
import Fonts from '@jqcode/c-styles/src/styles/Fonts'

export default () => ({
  backgroundImageContainer: {
    backgroundColor: Colors.lightBlue,
    justifyContent: 'center'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center'
  },
  contentContainer: {
    justifyContent: 'space-between',
    padding: [100, 0]
  },
  topContainer: {
    margin: [50, 30],
    justifyContent: 'flex-start'
  },
  img: {
    maxWidth: 400,
    height: 'auto'
  },
  payHere: {
    fontWeight: Fonts.fontWeight.bold,
    color: Colors.primary,
    // margin: [50, 0, 10]
  },
  btn: {
    fontSize: Fonts.fontSize.XXXXL,
    padding: 50,
    margin: [100, 0, 20],
    whiteSpace: 'pre-wrap',
    lineHeight: '1.3em'
  },
  icon: {
    fontSize: Fonts.fontSize.IconXXL
  },
  copyrights: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: Colors.muted
  },
  copyrightsSVG: {
    width: 150,
    marginBottom: -8
  },
  version: {
    position: 'absolute',
    right: 15,
    bottom: 10,
    color: Colors.muted
  }
})
