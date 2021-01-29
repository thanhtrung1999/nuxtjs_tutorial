// import axios from 'axios'

const baseApiUrl = process.env.baseApiUrl

export const state = () => ({
  decks: [],
  token: null
})
export const getters = {
  decks(state) {
    return state.decks
  },
  isAuthenticated(state) {
    return state.token != null
  }
}
export const mutations = {
  addDeck(state, newDeck) {
    state.decks.push(newDeck)
  },
  editDeck(state, editDeck) {
    const deckIndex = state.decks.findIndex(deck => deck._id === editDeck._id)
    state.decks[deckIndex] = editDeck
  },
  setDecks(state, params) {
    state.decks = params
  },
  setToken(state, token) {
    state.token = token
  },
  clearToken(state) {
    state.token = null
  }
}
export const actions = {
  async nuxtServerInit(vuexContext, context) {
    const uri = `${baseApiUrl}/decks.json`
    try {
      const data = await context.app.$axios.$get(uri)
      // console.log(response)
      const decksArr = []
      for (let key in data) {
        decksArr.push({
          ...data[key],
          _id: key
        })
      }
      vuexContext.commit('setDecks', decksArr)
    } catch (err) {
      console.log(err)
      context.error(err)
    }
  },
  async addDeck(vuexContext, deckData) {
    const uri = `${baseApiUrl}/decks.json?auth=${vuexContext.state.token}`;
    try {
      const data = await this.$axios.$post(uri, deckData)
      console.log(data)
      vuexContext.commit('addDeck', { ...deckData, _id: data.name })
    } catch (error) {
      console.log(error)
    }
  },
  async editDeck(vuexContext, deckData) {
    const uri = `${baseApiUrl}/decks/${deckData._id}.json?auth=${vuexContext.state.token}`;
    try {
      const data = await this.$axios.$put(uri, deckData)
      vuexContext.commit('editDeck', { ...data, _id: deckData._id })
    } catch (error) {
      console.log(error)
    }
  },
  setDecks(vuexContext, payload) {
    vuexContext.commit('setDecks', payload)
  },
  authenticateUser(vuexContext, credentials) {
    return new Promise((resolve, reject) => {
      // check login or register
      let authUrlApi = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.firebaseApiKey}`

      if (!credentials.isLogin) {
        authUrlApi = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.firebaseApiKey}`
      }
      this.$axios.$post(authUrlApi, {
        email: credentials.email,
        password: credentials.password,
        returnSecureToken: true,
      })
        .then((data) => {
          resolve({ data, success: true })
          vuexContext.commit('setToken', data.idToken)
          vuexContext.dispatch('setLogoutTimer', data.expiresIn)
        })
        .catch((err) => {
          reject(err.response)
        });
    })
  },
  setLogoutTimer(vuexContext, duration) {
    setTimeout(() => {
      vuexContext.commit('clearToken')
    }, duration)
  }
}
