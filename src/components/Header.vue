<template>
  <header>
    <Logo />
    <div class="nav nav-pills">
      <div
        v-for="page in pages"
        :key="page.name"
        class="nav-item">
        <router-link
          :to="page.href"
          class="nav-link"
          active-class="active"
          :class="{active:isMatch(page.path)}">
          {{ page.name }}
        </router-link>
      </div>
    </div>
    <div
      class="profile"
      @click="toAbout">
      <img
        :src="image"
        :alt="name" />
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
import Logo from '~/components/Logo'

export default {
  components :{
    Logo
  },
  data() {
    return {
      pages : [
        {
          name : 'Home',
          href : '/'
        },
        {
          name : 'ImageDetail',
          href : '/imagedetail/GSFC_20171208_Archive_e000608',
          path : /^\/imagedetail/
        },
        {
          name : "Day of Picture" ,
          href : '/daily'
        },
        {
          name:"About",
          href : '/about'
        }
      ]
    }
  },
  computed :{
    ...mapState('about' , [
      'image' , 
      'name'
    ])
  },
  methods : {
    isMatch(path) {
      if (!path) return false 
      return path.test(this.$route.fullPath)
    },
    toAbout () {
      this.$router.push('/about')
    }
  }
  
}
</script>

<style lang="scss" scoped>
header {
  position: relative;
  display: flex;
  align-items: center;
  height: 70px;
  padding: 20px;
  .logo {
    margin-right: 20px;
  }
  nav{
    display: flex;
    
  }
  .nav-link{
    color: white;
  }
  .profile {
    width: 40px;
    height: 40px;
    padding: 6px;
    border-radius: 50%;
    box-sizing: border-box;
    // background-color: $gray-200;
    cursor: pointer;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 40px;
    margin: auto;
    transition: .4s;
    &:hover{
      background-color: darken($gray-200,10%);
    }
    img {
      width: 100%;
      border-radius: 70%;
    }
  }
}
</style>