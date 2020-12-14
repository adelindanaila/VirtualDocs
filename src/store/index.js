import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({

	state: {

		user: null

	},

	getters: {

		user: ( state ) => {

			return state.user

		}

	},

	mutations: {

		async user( state, user ) {

			try {

				const params = new URLSearchParams({

					id: user

				}).toString()

				const response = await axios.get(`/user?${params}`)
				state.user = response.data

			}

			catch ( error ) {

				console.error(error)

			}

		}

	},

	actions: {

		user( context, user ) {

			context.commit('user', user)

		}

	}

})
