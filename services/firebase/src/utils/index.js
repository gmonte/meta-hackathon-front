import { initializeApp, database, auth } from 'firebase'

const config = {
  apiKey: 'AIzaSyB0xbyecX52CJolwSbO3F0uaFc_lTaLzno',
  authDomain: 'havan-625da.firebaseapp.com',
  databaseURL: 'https://havan-625da.firebaseio.com',
  projectId: 'havan-625da',
  storageBucket: 'havan-625da.appspot.com',
  messagingSenderId: '947713473265'
}

const firebaseImpl = initializeApp(config)
const firebaseDatabase = database()
const firebaseAuth = auth

export {
  firebaseImpl,
  firebaseDatabase,
  firebaseAuth
}
