import axios from 'axios'

export const state = () => ({
  decks: []
})
export const getters = {
  decks(state) {
    return state.decks
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
  }
}
export const actions = {
  nuxtServerInit(vuexContext, context) {
    console.log("asyncData is excuted!");
    const uri = "https://nuxtjs-tutorial-7151f-default-rtdb.firebaseio.com/decks.json"
    return axios.get(uri).then(response => {
      // console.log(response)
      const decksArr = []
      for (let key in response.data) {
        decksArr.push({
          ...response.data[key],
          _id: key
        })
      }
      vuexContext.commit('setDecks', decksArr)
    }).catch(err => {
      console.log(err)
      context.error(err)
    })
  },
  addDeck(vuexContext, deckData) {
    const uri =
      "https://nuxtjs-tutorial-7151f-default-rtdb.firebaseio.com/decks.json";
    return axios
      .post(uri, deckData)
      .then((response) => {
        console.log(data);
        vuexContext.commit('addDeck', { ...deckData, _id: response.data.name })
      })
      .catch((error) => {
        console.log(error);
      });
  },
  editDeck(vuexContext, deckData) {
    const uri = `https://nuxtjs-tutorial-7151f-default-rtdb.firebaseio.com/decks/${deckData._id}.json`;
    return axios
      .put(uri, deckData)
      .then((response) => {
        vuexContext.commit('editDeck', { ...response.data, _id: deckData._id })
      })
      .catch((error) => {
        console.log(error);
      });
  },
  setDecks(vuexContext, payload) {
    vuexContext.commit('setDecks', payload)
  }
}
