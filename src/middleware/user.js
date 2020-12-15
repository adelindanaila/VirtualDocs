import axios from 'axios'
import config from '../config.json'

const user = async ( { next, store, router, authenticated } ) => {

    const token = localStorage.getItem('token')

    if( !token && authenticated ) router.push(config.not_logged_page)

    try {

        const response = await axios.get('/user')
        
        store.dispatch('user', response.data)
        store.dispatch('loading', false)
    
    }
    
    catch ( error ) {
    
        if( authenticated ) router.push(config.not_logged_page)

        store.dispatch('loading', false)
    
    }
    
    return next( )

}

export default user