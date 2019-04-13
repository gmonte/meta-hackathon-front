import map from 'lodash/map'
import { firebaseDatabase } from './utils'

const getDataList = (nodePath, size = 10) => new Promise((resolve) => {
  const query = firebaseDatabase.ref(nodePath).limitToLast(size)
  query.once('value').then((dataSnapshot) => {
    const items = map(dataSnapshot, childSnapshot => ({
      ...childSnapshot.val(),
      key: childSnapshot.key
    }))
    resolve(items)
  })
})

export {
  getDataList
}
