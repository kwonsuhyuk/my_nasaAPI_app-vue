<template>
  <RouterLink
    :to="`/imagedetail/${image.data[0].nasa_id}`"
    :style="{backgroundImage:`url(${image.links[0].href})`}"
    class="image">
    <Loader
      v-if="imageLoading"
      :size="1.5" 
      absolute />
    <div class="info">
      <div class="title">
        {{ image.data[0].title }}
      </div>
    </div>
  </RouterLink>
</template>

<script>
import Loader from '~/components/Loader'
  export default {
  components:{
    Loader
  },
  props:{
    image : {
      type : Object,
      default : () => ({})
    }
  },
  data() {
    return {
      imageLoading : true
    }
  },
  mounted() {
    this.init()
  },
  methods :{
    async init() {
      const poster = this.image.links[0].href
      if(!poster || poster === 'N/A' || poster === undefined) {
        this.imageLoading = false
      } else {
        await this.$loadImage(poster)
        this.imageLoading = false
      }
    },

  }

  }
</script>

<style lang="scss" scoped>
@import '~/scss/main';

.image {
  position :relative;
  width : 230px;
  height: 230px * 3/ 2;
  margin: 10px;
  border-radius: 4px;
  background-color: $gray-400;
  background-size: cover;
  overflow: hidden;

  &:hover::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border: 6px solid $primary;

  }

  .info {
    background-color: rgba(black ,.3);
    width: 100%;
    height: 20%;
    padding: 20px;
    font-size: 14px;
    text-align: center;
    position: absolute;
    left: 0;
    bottom: 0;
    backdrop-filter: blur(10px);
    .title {
      color :white;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

}
</style>