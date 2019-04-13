import FormStore from '@jqcode/c-inputs/src/store/FormStore'

class FormLogin extends FormStore {
  constructor() {
    super({
      initialFormControls: {
        email: {
          value: '',
          rules: ['required', 'email']
        },
        password: {
          value: '',
          rules: ['required']
        }
      }
    })
  }
}

const store = new FormLogin()
export default store
