import { createStore } from 'vuex'

export default createStore({

	state: {

		loading: true,
		user: null

	},

	getters: {

		loading: ( state ) => {

			return state.loading

		},

		user: ( state ) => {

			return state.user

		}

	},

	mutations: {

		loading( state, loading ) {

			state.loading = loading

		},

		user( state, user ) {

			state.user = user

		}

	},

	actions: {

		loading( context, loading ) {

			context.commit('loading', loading)

		},

		user( context, user ) {

			context.commit('user', user)

		}

	}

})
