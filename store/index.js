export const state = () => ({
  location: {
    coords: {
      latitude: 50.73743,
      longitude: 7.0982068
    }
  },
  loading: false,
  companies: [
    // {
    //   id: 1,
    //   headline: 'Cafe123',
    //   category: 'bar',
    //   coordinates: {
    //     latitude: 50.751802,
    //     longitude: 7.090266
    //   }
    // },
    // {
    //   id: 9,
    //   headline: 'Schnittchen',
    //   category: 'coiffeur',
    //   coordinates: {
    //     latitude: 50.7413,
    //     longitude: 7.090226
    //   }
    // },
    // {
    //   id: 8,
    //   headline: 'Café Frida',
    //   category: 'cafe',
    //   coordinates: {
    //     latitude: 50.7413,
    //     longitude: 7.020226
    //   }
    // },
    // {
    //   id: 4,
    //   headline: 'Kio',
    //   category: 'kiosk',
    //   coordinates: {
    //     latitude: 50.151802,
    //     longitude: 7.00266
    //   }
    // },
    // {
    //   id: 2,
    //   headline: 'Frittebud',
    //   category: 'food',
    //   coordinates: {
    //     latitude: 50.651802,
    //     longitude: 6.990266
    //   }
    // },
    // {
    //   id: 3,
    //   headline: 'Vapiano',
    //   category: 'food',
    //   coordinates: {
    //     latitude: 50.751805,
    //     longitude: 7.123296
    //   }
    // }
  ]
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
  }
}
