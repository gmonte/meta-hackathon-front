import Colors from '@jqcode/c-styles/src/styles/Colors'
import Fonts from '@jqcode/c-styles/src/styles/Fonts'

export default () => ({
  backgroundImage: {
    display: 'flex',
    flex: 1,
    backgroundColor: Colors.lightPurple,
    justifyContent: 'center',
    alignItems: 'center'
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
    margin: [50, 30, 0],
    justifyContent: 'flex-start'
  },
  carouselContainer: {
    width: '100%'
  },
  avatar: {
    width: 220,
    height: 220,
    backgroundColor: Colors.lightGreyAvatar,
    marginBottom: 40
  },
  avatarIcon: {
    width: 140,
    height: 140,
    color: Colors.primary
  },
  content: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonControls: {
    flex: '0'
  },
  buttons: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center !important',
    flex: 0.3,
    '& > div': {
      marginTop: 10,
      // display: 'flex',
      '& > .btn': {
        fontSize: Fonts.fontSize.XXL,
        padding: '15px 20px !important'
      }
    }
  },
  mailContainer: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 15
  },
  asterisk: {
    width: 15,
    color: Colors.error.main,
    marginRight: 5
  }
})
