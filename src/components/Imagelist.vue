<template>
  <div class="container">
    <div
      :class="{'no-result':!images.length}"
      class="inner">
      <Loader v-if="loading" />
      <div
        v-if="message"
        class="message">
        {{ message }}
      </div>
      <div
        v-else
        class="images">
        <Imageitem
          v-for="image in images"
          :key="image.data[0].nasa_id"
          :image="image" />
      </div>
    </div>
  </div>
</template>


<script>
import Loader from "~/components/Loader"
import Imageitem from "~/components/Imageitem"
import {mapState} from 'vuex'

export default {
  components:{
    Loader,
    Imageitem
  },
  computed :{
    ...mapState('home', [
      'message',
      'loading',
      'images'
    ])
  }  
}
</script>


<style lang="scss" scoped>
.container {
  margin-top : 40px ;
  .inner {
    background-color: $gray-600;
    padding: 10px 0;
    border-radius: 4px;
    text-align: center;
    &.no-result {
      padding: 70px 0;
    }
  }

  .message {
    color: $gray-400;
    font-size: 20px;
  }

  .images {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>