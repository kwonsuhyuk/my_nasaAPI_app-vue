<template>
  <div class="container">
    <template v-if="loading">
      <div class="skeletons">
        <div
          class="skeleton poster"></div>
        <div class="specs">
          <div class="skeleton title"></div>
          <div class="skeleton keywords"></div>
          <div class="skeleton date_created"></div>
          <div class="skeleton description"></div>      
        </div>
      </div>
      <Loader
        :size="3"
        :z-index:="9" 
        fixed />
    </template>
    <div
      v-else
      class="image-details">
      <div
        :style="{backgroundImage:`url(${requestDiffSizeImage(theImage.links[0].href)})`}"
        class="poster">
        <Loader
          v-if="imageLoading"
          absolute />
      </div>
      <div class="specs">
        <div class="title">
          {{ theImage.data[0].title }}
        </div>
        <div class="keywords">
          <span
            v-for="word in theImage.data[0].keywords"
            :key="word"
            class="word">{{ word }}   
          </span>
        </div>
        <div class="date_created">
          <span class="name">Date: </span> {{ theImage.data[0].date_created }}
        </div>
        <div class="description">
          <span class="name">Description: </span>
          {{ theImage.data[0].description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Loader from "~/components/Loader"

export default {
  components : {
    Loader
  },
  data() {
    return {
      imageLoading : true
    }
  },
  computed :{
    ...mapState('home',[
      "theImage",
      'loading'
    ])
  },
  created() {
    this.$store.dispatch('home/searchImageWithId', {
      id : this.$route.params.id
    })
  },
  methods:{
    requestDiffSizeImage(url, size = 700) {
      if (!url || url === 'N/A'){
        this.imageLoading = false
        return ''
      }
      const src = url.replace('SX300' , `SX${size}`)
      this.$loadImage(src)
        .then(() => {
          this.imageLoading = false
        })
      return src    
    },

  }


}
</script>



<style lang="scss" scoped>
@import '~/scss/main';

.container {
  margin-top: 30px;
}

.skeletons {
  display: flex;
  .poster {
    flex-shrink: 0;
    width: 500px;
    height: 500px * 3 / 2;
    margin-right: 70px;
  }
  .specs{
    flex-grow: 1;
  }
  .skeleton {
    border-radius: 10px;
    background-color: $gray-400;
    &.title{
      width: 80%;
      height: 70px;
    }
    &.keywords{
      width: 60%;
      height: 30px;
      margin-top: 20px;
    }
    &.date_created{
      width: 100%;
      height: 250px;
      margin-top: 20px;
    }
    &.description {
      width: 100%;
      height: 250px;
      margin-top: 20px;
      // overflow: hidden;
      // text-overflow: ellipsis;
    }
  }
}


.image-details{
  display: flex;
  color: $gray-600;


  .poster{
    flex-shrink: 0;
    width: 500px;
    height: 500px * 3 / 2;
    margin-right: 70px;
    border-radius: 10px;
    background-color: $gray-200;
    background-size: cover;
    background-position: center;
    position :relative
  }
  .specs {
    flex-grow: 1;
    margin-bottom: 10px;
    .name {
      font-family: 'Oswald', sans-serif;
      color: $primary;
      font-size: 20px;
    }
    .title{
      color: $white;
      font-family: 'Oswald', sans-serif;
      font-size: 70px;
      line-height: 1;
      margin-bottom: 30px;
    }
    .description{
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 1.4;
    }
    .date_created{
      margin-bottom: 20px;
    }
    .keywords{
      margin-bottom: 50px;
      .word{
        font-family: 'Oswald', sans-serif;
        color: tomato;
        &::after{
          content: "\00b7"; //numeric order 사용해 특수기호 추가
          margin: 0 6px;
        }
        &:last-child::after{
          display: none;
        }
      }
    }

  }
}

@include media-breakpoint-down(lg) {
  .image-details{
    display: block;
    .poster{
      left: 0;
      right: 0;
      margin: 30px auto;
      
    }
  }
}

</style>