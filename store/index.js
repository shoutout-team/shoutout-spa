import endpoints from '~/store/utils/endpoints.js'

export const state = () => ({
  location: {
    coords: {
      latitude: 50.73743,
      longitude: 7.0982068
    }
  },
  loading: false,
  categories: {},
  companies: [],
  user: {},
  login: null
})

export const mutations = {
  setLocation (state, payload) {
    state.location = payload
  },
  setLoading (state, payload) {
    state.loading = payload
  },
  setCompanies (state, payload) {
    state.companies = payload
  },
  setCategories (state, payload) {
    state.categories = payload
  },
  setUser (state, payload) {
    state.user = payload
  },
  setLogin (state, payload) {
    state.login = payload
  }
}

export const actions = {
  setLocation ({ commit }, payload) {
    commit('setLocation', payload)
  },
  setLoading ({ commit }, payload) {
    commit('setLoading', payload)
  },
  setCompanies ({ commit }, payload) {
    commit('setCompanies', payload)
  },
  async initialFetch ({ commit }) {
    const response = await this.$axios.$get(endpoints.INITIAL_ENDPOINT)
    commit('setCompanies', response.companies)
    commit('setCategories', response.categories)
  },
  async login ({ commit }, payload) {
    commit('setLogin', 'pending')
    try {
      const response = await this.$axios.$post(endpoints.LOGIN_ENDPOINT, { user: payload })
      commit('setUser', response.user)
      commit('setLogin', 'success')
    } catch (err) {
      commit('setLogin', 'failed')
    }
  }
}
