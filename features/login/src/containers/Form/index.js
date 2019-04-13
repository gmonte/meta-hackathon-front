import React, { Component } from 'react'
import PropTypes from 'prop-types'
import flow from 'lodash/fp/flow'
import { withStyles } from '@material-ui/core/styles'
import { inject, observer, PropTypes as MobxPropTypes } from 'mobx-react'
import Typography from '@material-ui/core/Typography'
import Form from '@jqcode/c-inputs/src/components/Form'
import TextInput from '@jqcode/c-inputs/src/components/TextInput'
import { withStores } from '@jqcode/c-stores-provider'
import Button from '@jqcode/c-buttons/src/components/Button'
import get from 'lodash/get'
import formLoginStore from '../../store'
import AccountIcon from 'mdi-material-ui/Account'

import styles from './styles'

@inject('formLoginStore')
@observer
class FormContainer extends Component {
  constructor(props) {
    super(props)
    this.onFormChange = this.onFormChange.bind(this)
    this.submit = this.submit.bind(this)
    this.sign = this.sign.bind(this)

    this.state = {
      mode: {
        create: true
      },
      errorText: null
    }

    console.warn('asiudhsaiuhdsiuahuidsahuiadhuidsh')
  }

  componentDidMount() {
    const {
      formLoginStore: {
        resetForm
      },
      auth: {
        resetLoader
      }
    } = this.props

    resetForm()
    resetLoader()
  }

  onFormChange(controlName, control) {
    this.props.formLoginStore.changeFormControl(controlName, control)
  }

  async submit() {

    const {
      formLoginStore: {
        validateForm,
        changeAllFormControls,
        formValues
      }
    } = this.props

    const {
      controlsAfterValidation,
      hasInvalidControls
    } = validateForm()

    if (hasInvalidControls !== undefined) {
      /*
     * caso exista algum controle com erros
     * alteramos a store do formulário
     * para que ele seja renderizado novamente
     * apontando os erros existentes
     * e não submetemos o formulário
     * */
      window.snackbar.warn('Por favor preencha os dados corretamente.')
      changeAllFormControls(controlsAfterValidation)
      throw new Error(get(controlsAfterValidation, `${ hasInvalidControls }.errorText`))
    } else {
      /*
      * caso o formulário esteja validado(this.formControls,
      * efetuamos o submit
      * */
      this.sign(formValues)
    }
  }

  async sign(formControls) {
    const {
      auth: {
        signIn
      }
    } = this.props
    try {
      await signIn(formControls)
    } catch (e) {
      this.setState(prevState => ({
        ...prevState,
        errorText: e.message
      }))
    }
  }

  render() {
    const {
      formLoginStore: store,
      loading,
      classes
    } = this.props

    const {
      getFormControls,
      changed,
    } = store

    const {
      email,
      password
    } = getFormControls

    const { mode, errorText } = this.state

    const disabled = loading

    return (
      <div>
        <Form
          mode={ mode }
          store={ store }
          onSuccess={ () => {} }
          controls={ { ...getFormControls } }
        >
          <TextInput
            name="email"
            label="E-mail"
            helperText="Informe o seu email"
            value={ email.value.toString() }
            isValid={ email.isValid }
            showError={ email.showError }
            rules={ email.rules }
            errorText={ email.errorText }
            onChange={ this.onFormChange }
            disabled={ disabled }
          />
          <TextInput
            name="password"
            label="Senha"
            helperText="Informe a sua senha"
            value={ password.value }
            isValid={ password.isValid }
            showError={ password.showError }
            rules={ password.rules }
            errorText={ password.errorText }
            onChange={ this.onFormChange }
            disabled={ disabled }
          />
        </Form>

        {
          errorText
            ? <Typography color="secondary">{ errorText }</Typography>
            : null
        }

        <Button
          type="button"
          onClick={ this.submit }
          loading={ loading }
          disabled={ !changed }
          btnClass={ classes.btn }
          iconLeft={ AccountIcon }
        >
          Entrar
        </Button>
      </div>
    )
  }
}

FormContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/require-default-props
  formLoginStore: MobxPropTypes.objectOrObservableObject
}

export default flow(
  withStyles(styles),
  withStores({ formLoginStore })
)(FormContainer)
