import Colors from '@jqcode/c-styles/src/styles/Colors'
import formControlCommons from '../styles'


export default (theme) => {
  const { hint } = formControlCommons(theme)

  return {
    hint,
    root: {
      width: '100%'
    },
    container: {
      display: 'flex',
      flex: 1
    },
    input: {
      width: '100%'
    },
    icon: {
      color: Colors.inputIcon,
      margin: [0, 5],
      paddingLeft: 7,
      width: 32,
      height: 22
    },
    iconLink: {
      cursor: 'pointer'
    },
    iconDivisor: {
      borderLeft: `1px solid ${ Colors.inputIconDivisor }`
    }
  }
}
