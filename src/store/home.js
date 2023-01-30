import axios from 'axios'


const default_msg = "Search for the Space";

export default {
  namespaced :true,

  state : () => ({
    message : default_msg,
    loading : false,
    images : [],
    theImage : {}
  }),

  getters : {} ,

  mutations : {

    updateState(state, payload) {
      Object.keys(payload).forEach(key=>{
        state[key] = payload[key]
      })
    },
    resetState(state) {
      state.message = default_msg
      state.loading = false 
      state.images = []
    }

  },
  actions : {
    async searchImages({commit ,state}, payload) {
      if (state.loading)
        return 

      commit('updateState' , {
        message : '',
        loading : true
      })

      try {
        const res = await fetchImages({
          ...payload
        })
        const data = res.data.collection.items
        const filterData = data.filter((el) => {
          return el.data[0].media_type === "image"
        })

                
        commit('updateState' , {
          images : filterData
        })
        
        


      }catch ({message}) {
        commit('updateState', {
          message,
          images : []
        })
      } finally {
        commit('updateState' , {
          loading : false
        })
      }

    },

    async searchImageWithId({commit,state} , payload) {
      if (state.loading) return 
      commit ('updateState' , {
        loading : true,
        theImage : {}
      })
      try{
        const res = await fetchImages(payload)
        const data = await res.data.collection.items[0]
        
        commit('updateState' , {
          theImage : data
        })
      } catch(error) {
        commit('updateState' , {
          theImage : {}
        })
      } finally {
        commit('updateState', {
          loading : false
        })
      }

    }
  }
}

function fetchImages(payload) {
  
  const url = payload.name ? 
    `https://images-api.nasa.gov/search?q=${payload.name}` 
    :`https://images-api.nasa.gov/search?q=${payload.id}`
    

  return new Promise((resolve,reject) => {
    axios.get(url)
      .then((res) => {
        resolve(res)
      })
      .catch((error) => {
        reject(error.message)
      })
  })
}




// async function fetchImage({commit, state} , payload) {
//   // // const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`
//   // const NASA_API_KEY ="TCnrui4jI9tUITJfXTZzWTFPrdiVz0vssKfeDJVO";
//   // const url = `https://images-api.nasa.gov/search?q=${payload.name}`;
//   // const res = await axios.get(url)
//   // console.log(res)
//   console.log(payload)
// }
