import { createStore } from 'vuex'
import home from './home'
import about from './about'
import daypicture from './daypicture'

export default createStore({
  modules: {
    home,
    about,
    daypicture
  }
})
