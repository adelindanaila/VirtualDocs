import axios from 'axios'
import config from '../config.json'

const user = async ( { next, store, router } ) => {

    const token = localStorage.getItem('token')

    if( !token ) router.push(config.not_logged_page)

    try {

        const params = new URLSearchParams({
    
            token
    
        }).toString()
    
        const response = await axios.get(`/user?${params}`)
        store.dispatch('user', response.data)
    
    }
    
    catch ( error ) {
    
        console.error(error)
        router.push(config.not_logged_page)
    
    }
    
    return next( )

}

export default user