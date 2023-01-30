<template>
  <div class="about">
    <div class="photo">
      <Loader
        v-if="imageLoading"
        absolute />
      <img
        :src="image"
        :alt="name" />
    </div>
    <div class="name">
      {{ name }} ({{ age }})
    </div>
   
    <div>{{ email }}</div>
    <div>{{ github }}</div>
  </div>
</template>


<script>
import { mapState } from 'vuex'
import Loader from "~/components/Loader"

export default {
  components :{Loader},
  data() {
    return {
      imageLoading : true
    }
  },
  computed : {
    ...mapState('about', [
      'image',
      'name',
      'age',
      'github',
      'email'
    ])
  },
  mounted() {
    this.init()
  },
  methods : {
    async init() {
      await this.$loadImage(this.image)
      this.imageLoading = false
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  > *{
    margin-top: 15px;
    color: white;
  }
  .photo {
    img{
      width: 300px;
      height: 300px;
      border-radius: 50%;
      border: 10px solid white;
    }
  }
}

</style>