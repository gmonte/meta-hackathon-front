/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import { post } from '@jqcode/s-laravel'

async function createUser({ name, email, uid }) {
  return post({
    endpoint: 'user',
    data: {
      name,
      email,
      identification_token: uid
    }
  })
}

export {
  createUser
}
