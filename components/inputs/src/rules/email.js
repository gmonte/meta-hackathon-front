import isEmpty from 'validator/lib/isEmpty'
import { validate } from 'email-validator'

const email = ({ value }) => {
  const response = {}

  if (isEmpty(value)) {
    return response
  }

  if (!validate(value)) {
    response.isValid = false
    response.errorText = 'Insira uma email válido'
  }

  return response
}

export default email
