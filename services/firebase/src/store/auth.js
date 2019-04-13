import { observable, action } from 'mobx'
import get from 'lodash'
import { createUser } from '@jqcode/s-user'
import { firebaseAuth } from '../utils'

class Auth {
  constructor() {
    this.initFirebaseAuth = this.initFirebaseAuth.bind(this)
    this.createUserWithEmailAndPassword = this.createUserWithEmailAndPassword.bind(this)
    this.signInWithEmailAndPassword = this.signInWithEmailAndPassword.bind(this)
    this.signInWithGoogle = this.signInWithGoogle.bind(this)
    this.signInWithFacebook = this.signInWithFacebook.bind(this)
    this.createUserApi = this.createUserApi.bind(this)
    this.signOut = this.signOut.bind(this)

    this.initFirebaseAuth()
  }

  @observable
  loading = false

  @observable
  isAuthenticated = false

  @observable
  done = false

  @observable
  user = null

  initFirebaseAuth() {
    firebaseAuth().onAuthStateChanged((user) => {
      this.done = true
      if (user) {
        // User is signed in.
        this.isAuthenticated = true
        this.user = user
      } else {
        // User is signed out.
        this.isAuthenticated = false
        this.user = null
        console.warn('firebase user was logged out')
      }
    });
  }

  @action
  async createUserWithEmailAndPassword({ email, password }) {
    try {
      this.loading = true
      const response = await firebaseAuth().createUserWithEmailAndPassword(email, password)
      this.createUserApi(response)
    } catch (e) {
      console.error('Error when was creating the user with email and password', e)
      this.loading = false
      throw e
    }
  }

  @action
  async signInWithGoogle() {
    try {
      this.loading = true
      const provider = new firebaseAuth.GoogleAuthProvider()
      const response = await firebaseAuth().signInWithPopup(provider)
      this.createUserApi(response)
    } catch (e) {
      console.error('Error when was logging the user with google', e)
      this.loading = false
      throw e
    }
  }

  @action
  async signInWithFacebook() {
    try {
      this.loading = true
      const provider = new firebaseAuth.FacebookAuthProvider()
      const response = await firebaseAuth().signInWithPopup(provider)
      this.createUserApi(response)
    } catch (e) {
      console.error('Error when was logging the user with facebook', e)
      this.loading = false
      throw e
    }
  }

  async createUserApi(user) {
    try {
      await createUser({
        name: get(user, 'displayName', null),
        email: get(user, 'name'),
        uid: get(user, 'uid')
      })
      this.loading = false
    } catch (e) {
      this.loading = false
      throw e
    }
  }

  @action
  async signInWithEmailAndPassword({ email, password }) {
    try {
      this.loading = true
      await firebaseAuth().signInWithEmailAndPassword(email, password)
      this.loading = false
    } catch (e) {
      console.error('Error when was logging the user with email and password', e)
      this.loading = false
      throw e
    }
  }

  @action
  async signOut() {
    try {
      firebaseAuth().signOut()
    } catch (e) {
      console.error('Error when was signOut the user', e)
      throw e
    }
  }
}

const store = new Auth()

export default store
