import { createStore } from 'vuex'

export default createStore({

	state: {

		loading: true,
		token: localStorage.getItem('token'),
		user: null,
		admin: false

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

		},

		admin: ( state ) => {

			return state.admin

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

		},

		admin( state, admin ) {

			state.admin = admin

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

		},

		admin( context, admin ) {

			context.commit('admin', admin)

		}

	}

})
