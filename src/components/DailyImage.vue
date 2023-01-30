<template>
  <div class="container">
    <div class="picture">
      <div
        class="poster"
        :style="{backgroundImage:`url(${picture.hdurl})`}">
        <Loader
          v-if="loading"
          absolute />
      </div>
      
      <div class="contents">
        <div class="title">
          {{ picture.title }}
        </div>
        <div class="date">
          {{ picture.date }}
        </div>
        <div class="explanation">
          {{ picture.explanation }}
        </div>
        <div class="copyright">
          @copyright : {{ picture.copyright }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from '~/components/Loader'

export default {
  components:{
    Loader
  },

  props: {
    picture :{
      type : Object,
      default: () => ({})
    },
    loading : {
      type: Boolean,
      default : true
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 30px;
  .picture{
    display: flex;
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
    .contents{
      height: 500px * 3 / 2;
      font-size: 20px;
      color: whitesmoke;
      > *{
        padding-bottom: 30px;
      }
      .title{
        font-size: 35px;
        color: $primary;
        font-weight: 700;

      }
      .date{
        font-size: 25px;
        color: $gray-600;
      }
      .explanation {
        height: 90%;
        line-height: 1.4;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}

@include media-breakpoint-down(xl) {
  .picture{
    position :relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    .poster{
      left: 0;
      right: 0;
      margin: auto;
    }
    .contents{
      margin-top: 30px;
      display: flex;
      flex-direction: column;
    }
  }
}

</style>