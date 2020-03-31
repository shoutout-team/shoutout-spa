import endpoints from '~/store/utils/endpoints.js'

export const state = () => ({
  location: {
    coords: {
      latitude: 50.73743,
      longitude: 7.0982068
    }
  },
  loading: false,
  keepers: [],
  companies: [],
  company: {},
  categories: {},
  user: {},
  token: null,
  initialFetchCompleted: false,
  company_request: null,
  login_request: null,
  company_edit_request: null
})

export const mutations = {
  setLocation (state, payload) {
    state.location = payload
  },
  setLoading (state, payload) {
    state.loading = payload
  },
  setKeepers (state, payload) {
    state.keepers = payload
  },
  setCompanies (state, payload) {
    state.companies = payload
  },
  setCategories (state, payload) {
    state.categories = payload
  },
  setToken (state, payload) {
    state.token = payload
  },
  setUser (state, payload) {
    state.user = payload
  },
  setLoginRequest (state, payload) {
    state.login_request = payload
  },
  setCompanyRequest (state, payload) {
    state.company_request = payload
  },
  setCompanyEditRequest (state, payload) {
    state.company_edit_request = payload
  },
  setCompany (state, payload) {
    state.company = payload
  },
  initialFetchCompleted (state, payload) {
    state.initialFetchCompleted = true
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
  async setCompany ({ commit }, payload) {
    try {
      const response = await this.$axios.$get(endpoints.COMPANY_FETCH_ENDPOINT, { params: payload })
      commit('setCompany', response.result)
    } catch {}
  },
  async initialFetch ({ commit, dispatch, state }) {
    const response = await this.$axios.$get(endpoints.INITIAL_ENDPOINT)
    commit('setCompanies', response.companies)
    commit('setCategories', response.categories)
    commit('setKeepers', response.keepers)
    commit('initialFetchCompleted', true)
  },
  async login ({ commit, dispatch }, payload) {
    commit('setLoginRequest', 'pending')
    try {
      const response = await this.$axios.$post(endpoints.LOGIN_ENDPOINT, { user: payload })
      commit('setToken', response.token)
      this.$axios.setToken(response.token, 'Token')
      commit('setUser', response.user)
      commit('setLoginRequest', 'success')
      dispatch('setCompany', { keeper_token: response.user.gid })
    } catch (err) {
      commit('setLoginRequest', 'failed')
    }
  },
  logout ({ commit }) {
    commit('setUser', {})
    commit('setCompany', {})
  },
  async postCompany ({ commit, state, dispatch }, payload) {
    this.$axios.setToken(state.token, 'Token')
    commit('setCompanyRequest', 'pending')
    const company = state.company
    if (!Object.values(company).length) {
      try {
        await this.$axios.$post(endpoints.ADD_COMPANY_ENDPOINT, { company: payload })
        dispatch('initialFetch')
        commit('setCompanyRequest', 'success')
        dispatch('setCompany', { keeper_token: state.user.gid })
      } catch (err) {
        commit('setCompanyRequest', 'failed')
      }
    } else {
      try {
        const response = await this.$axios.$post(endpoints.EDIT_COMPANY_ENDPOINT, { company: payload })
        commit('setCompanyEditRequest', 'success')
        await commit('setCompany', response.result)
        dispatch('initialFetch')
      } catch (err) {
        commit('setCompanyEditRequest', 'failed')
      }
    }
  }
}
