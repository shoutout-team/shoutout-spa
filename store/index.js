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
    const response = await this.$axios.$get(endpoints.COMPANY_FETCH_ENDPOINT, { params: payload })
    commit('setCompany', response.result)
  },
  async initialFetch ({ commit, dispatch }) {
    const response = await this.$axios.$get(endpoints.INITIAL_ENDPOINT)
    commit('setCompanies', response.companies)
    commit('setCategories', response.categories)
    commit('setKeepers', response.keepers)
  },
  async login ({ commit, dispatch }, payload) {
    commit('setLoginRequest', 'pending')
    try {
      const response = await this.$axios.$post(endpoints.LOGIN_ENDPOINT, { user: payload })
      commit('setUser', response.user)
      commit('setLoginRequest', 'success')
      dispatch('setCompany', { keeper_token: response.user.gid })
    } catch (err) {
      commit('setLoginRequest', 'failed')
    }
  },
  async postCompany ({ commit, state, dispatch }, payload) {
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
        await this.$axios.$post(endpoints.EDIT_COMPANY_ENDPOINT, { company: payload })
        dispatch('initialFetch')
        commit('setCompanyEditRequest', 'success')
        dispatch('setCompany', { keeper_token: state.user.gid })
      } catch (err) {
        commit('setCompanyEditRequest', 'failed')
      }
    }
  }
}
