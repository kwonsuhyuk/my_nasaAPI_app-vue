<template>
  <footer>
    <Logo />
    <a
      href="https://github.com/kwonsuhyuk"
      target="_blank">
      (c){{ new Date().getFullYear() }} SUHYUK  
    </a>
  </footer>
</template>

<script>
import Logo from '~/components/Logo'
export default {
  components :{
    Logo
  }
}
</script>

<style lang="scss" scoped>
@import '~/scss/main';


footer {
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
  padding: 100px 0;
  opacity: .5;
}
</style>

