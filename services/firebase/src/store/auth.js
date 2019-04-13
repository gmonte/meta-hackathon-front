import { observable, action, computed } from 'mobx'
import get from 'lodash/get'
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
    this.signIn = this.signIn.bind(this)
    this.signOut = this.signOut.bind(this)

    this.initFirebaseAuth()
  }

  @observable
  loader = false

  @observable
  authenticated = false

  @observable
  done = false

  @observable
  user = null

  initFirebaseAuth() {
    firebaseAuth().onAuthStateChanged((user) => {
      this.done = true
      if (user) {
        // User is signed in.
        this.authenticated = true
        this.user = user
      } else {
        // User is signed out.
        this.authenticated = false
        this.user = null
        console.warn('firebase user was logged out')
      }
    })
  }

  @action
  resetLoader = () => {
    this.loader = false
  }

  @action
  async createUserWithEmailAndPassword({ email, password }) {
    try {
      this.loader = true
      const response = await firebaseAuth().createUserWithEmailAndPassword(email, password)
      this.createUserApi(response)
    } catch (e) {
      console.error('Error when was creating the user with email and password', e)
      this.loader = false
      throw e
    }
  }

  @action
  async signInWithGoogle() {
    try {
      this.loader = true
      const provider = new firebaseAuth.GoogleAuthProvider()
      const response = await firebaseAuth().signInWithPopup(provider)
      this.createUserApi(response)
    } catch (e) {
      console.error('Error when was logging the user with google', e)
      this.loader = false
      throw e
    }
  }

  @action
  async signInWithFacebook() {
    try {
      this.loader = true
      const provider = new firebaseAuth.FacebookAuthProvider()
      const response = await firebaseAuth().signInWithPopup(provider)
      this.createUserApi(response)
    } catch (e) {
      console.error('Error when was logging the user with facebook', e)
      this.loader = false
      throw e
    }
  }

  async createUserApi({ user }) {
    try {
      console.warn('user', user)
      await createUser({
        name: get(user, 'displayName', null),
        email: get(user, 'email'),
        uid: get(user, 'uid')
      })
      this.loader = false
    } catch (e) {
      throw e
    }
  }

  @action
  async signInWithEmailAndPassword({ email, password }) {
    try {
      this.loader = true
      await firebaseAuth().signInWithEmailAndPassword(email, password)
      this.loader = false
    } catch (e) {
      console.error('Error when was logging the user with email and password', e)
      this.loader = false
      throw e
    }
  }

  @action
  async signIn({ email, password }) {
    let hasError = false
    try {
      await this.signInWithEmailAndPassword({ email, password })
    } catch (errLogin) {
      hasError = true
    }

    if (hasError) {
      try {
        await this.createUserWithEmailAndPassword({ email, password })
      } catch (e) {
        throw e
      }
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

  @computed
  get isAuthenticated() {
    return this.authenticated
  }

  @computed
  get loading() {
    return this.loader
  }
}

const store = new Auth()

export default store
