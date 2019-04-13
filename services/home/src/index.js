/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import { get } from '@jqcode/s-laravel'

async function getHome({ uid }) {
  return get({
    endpoint: `home?user_id=${ uid }`
  })
}
async function getQr({ uid }) {
  return get({
    endpoint: `whoami?user_id=${ uid }`
  })
}

export {
  getHome,
  getQr
}
