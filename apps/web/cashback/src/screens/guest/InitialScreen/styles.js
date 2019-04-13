import Colors from '@jqcode/c-styles/src/styles/Colors'
import Fonts from '@jqcode/c-styles/src/styles/Fonts'

export default () => ({
  container: {
    padding: 0,
    margin: 0,
    alignItems: 'center',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  buttons: {
    margin: 10,
    width: '100%',
    maxWidth: 70,
    borderRadius: '500px',
    fontSize: '14px',
    lineHeight: 1,
    padding: '16px 48px 16px',
    letterSpacing: '2px',
    minWidth: '320px',
    textTransform: 'uppercase',
    whiteSpace: 'normal',
    textAlign: 'center',
    cursor: 'pointer',
    verticalAlign: 'middle'
  },
  facebook: {
    background: '#3b5998',
    '&:hover': {
      background: '#3961B3'
    },
    color: 'white'
  },
  login: {
    background: '#ffffff',
    '&:hover': {
      background: '#f0ffff'
    },
    color: '#00193e'
  },
  google: {
    background: '#ffffff',
    '&:hover': {
      background: '#f0ffff'
    },
    border: '1px solid grey',
    color: 'black'
  }
})
