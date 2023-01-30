<template>
  <Headline />
  <Search />
  <Imagelist />
</template>


<script>
import Headline from '~/components/Headline'
import Search from '~/components/Search'
import Imagelist from '~/components/Imagelist'


export default {
  components : {
    Headline,
    Search,
    Imagelist
  }
}
</script>