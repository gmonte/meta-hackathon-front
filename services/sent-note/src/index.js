/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import { post } from '@jqcode/s-laravel'

async function sentNote({ uid, noteIdentifier }) {
  return post({
    endpoint: 'note',
    data: {
      user_id: uid,
      data: {
        note_identifier: noteIdentifier
      }
    }
  })
}

export {
  sentNote
}
