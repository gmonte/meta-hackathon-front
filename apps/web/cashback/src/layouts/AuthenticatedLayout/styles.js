import { Colors } from '@jqcode/c-styles'

export default () => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuLeft: {
    opacity: 0
  },
  container: {
    width: '100%'
  },
  icons: {
    color: Colors.primary
  },
  toolbar: {
    backgroundColor: Colors.white,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    width: 100
  },
  contentContainer: {
    marginTop: 70,
    marginBottom: 70,
  },
  footer: {
    top: 'unset',
    bottom: 0,
    position: 'fixed'
  },
  usarMeuSaldo: {
    color: Colors.white,
    textAlign: 'center',
    width: '100%'
  }
})
