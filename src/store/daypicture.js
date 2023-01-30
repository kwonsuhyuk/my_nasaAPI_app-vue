import axios from 'axios'
const {NASA_API_KEY} = process.env

export default {
  namespaced : true,
  state : () => ({
    picture : {}, 
    loading : false,
    message : ''
  }),

  getter : {},

  mutations :{
    updateState(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    }
  },

  actions : {
    async searchTodayData({state, commit} ,payload) {
      if (state.loading) return

      commit('updateState', {
        loading : true,
        message : ''
      })
      try {
        const res = await fetchImage(payload)
    
        commit('updateState' , {
          picture : res.data
        })
      } catch({message}) {
        commit('updateState', {
          message ,
          picture : {}
        })
      } finally {
        commit('updateState' , {
          loading : false
        })
      }

    }
  }
}



function fetchImage({year, month, day}) {

  const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}&date=${year}-${month}-${day}`
 
  return new Promise((resolve, reject) => {
    axios.get(url)
    .then((res) => resolve(res))
    .catch((error) => reject(error))
  })



    
}
