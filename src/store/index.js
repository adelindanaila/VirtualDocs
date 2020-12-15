import { createStore } from 'vuex'

export default createStore({

	state: {

		loading: true,
		token: localStorage.getItem('token'),
		user: null

	},

	getters: {

		loading: ( state ) => {

			return state.loading

		},

		token: ( state ) => {

			return state.token

		},

		user: ( state ) => {

			return state.user

		}

	},

	mutations: {

		loading( state, loading ) {

			state.loading = loading

		},

		token( state, token ) {

			state.token = token

		},

		user( state, user ) {

			state.user = user

		}

	},

	actions: {

		loading( context, loading ) {

			context.commit('loading', loading)

		},

		token( context, token ) {

			context.commit('token', token)

		},

		user( context, user ) {

			context.commit('user', user)

		}

	}

})
