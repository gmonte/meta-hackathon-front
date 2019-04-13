import Fonts from '@jqcode/c-styles/src/styles/Fonts'
import Colors from '@jqcode/c-styles/src/styles/Colors'

export default () => ({
  '@global': {
    'html, body, #react-root': {
      fontFamily: Fonts.fontFamily,
      width: '100%',
      height: '100%',
      padding: 0,
      margin: 0,
      display: 'flex',
      flex: 1,
      userSelect: 'none'
    },
    ':: selection': {
      background: 'transparent',
    },
    'p': {
      margin: '5px'
    },
    '@keyframes AnimationBackgroundImage': {
      '0%': {
        backgroundPosition: '0% 50%'
      },
      '50%': {
        backgroundPosition: '100% 50%'
      },
      '100%': {
        backgroundPosition: '0% 50%'
      }
    },
    '.grid': {
      display: 'flex',
      flex: 1
    },
    '.card': {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      margin: '0 !important',
      borderRadius: 0,
      boxShadow: '0px 4px 300px -6px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12) !important'
    },
    '.pinpad': {
      width: '100%',
      maxWidth: 600
    },
    '.pageTitle': {
      fontWeight: Fonts.fontWeight.bold,
      color: Colors.primary
    },
    '.buttonControls': {
      display: 'flex',
      flex: 1,
      justifyContent: 'space-evenly',
      alignItems: 'flex-end',
      width: '100%'
    },
    '.buttonBack': {
      backgroundColor: Colors.secondaryLight
    },
    'a': {
      textDecoration: 'none'
    },
    '.btn': {
      fontSize: `${ Fonts.fontSize.XXXL }px !important`,
      padding: '15px 100px !important'
    },
    '.modal-open': {
      '& > .modal': {
        overflowY: 'hidden !important'
      }
    }
  },
  cardHeightFull: {
    display: 'flex',
    flex: 1,
    width: '100%',
    background: 'transparent',
    border: 0,
    boxShadow: 'none',
    '& > div': {
      display: 'flex',
      flex: 1,
      height: '100% !important',
      '& > div': {
        display: 'flex',
        flex: 1,
        // flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100% !important'
      }
    }
  },
  waitingFirebase: {
    display: 'flex',
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
