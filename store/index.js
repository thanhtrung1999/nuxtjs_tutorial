export const state = () => ({
  decks: []
})
export const getters = {
  decks(state) {
    return state.decks
  }
}
export const mutations = {
  setDecks(state, params) {
    state.decks = params
  }
}
export const actions = {
  nuxtServerInit(vuexContext, context) {
    console.log("asyncData is excuted!");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          decks: [
            {
              _id: 1,
              name: "Learn English",
              description:
                "<p>Exercitation donec metus facilisis sociosqu aut egestas dignissimos, quisquam vestibulum assumenda autem? Et magni pharetra vestibulum, dolores taciti, commodo aliqua.</p>",
              thumpnail:
                "https://msquynhphuong.gnomio.com/pluginfile.php/2/course/section/1/english-course.jpg",
            },
            {
              _id: 2,
              name: "Learn Japanese",
              description:
                "<p>Tempora suscipit ridiculus porro morbi blandit porro suscipit sint curabitur, wisi donec quisque perferendis ante, porttitor qui commodi alias accusamus.</p>",
              thumpnail:
                "https://msquynhphuong.gnomio.com/pluginfile.php/2/course/section/1/english-course.jpg",
            },
            {
              _id: 3,
              name: "Learn Chinese",
              description:
                "<p>Dui sagittis, similique interdum, facilis beatae inventore ultricies varius porttitor. Pretium hymenaeos dolorum rhoncus nostra, imperdiet risus, adipisicing elit provident.</p>",
              thumpnail:
                "https://msquynhphuong.gnomio.com/pluginfile.php/2/course/section/1/english-course.jpg",
            },
          ]
        })
      }, 1000);
    }).then(data => {
      vuexContext.commit('setDecks', data.decks)
    }).catch(e => {
      context.error(e)
    });
  },
  setDecks(vuexContext, payload) {
    vuexContext.commit('setDecks', payload)
  }
}
