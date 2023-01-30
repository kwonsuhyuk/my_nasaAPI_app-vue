<template>
  <div class="container">
    <input
      type="text"
      placeholder="Search for Space " 
      class="form-control"
      v-model="name"
      @keyup.enter="apply" />
    <button
      class="btn btn-primary"
      @click="apply">
      Apply
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name : '',
    }
  },
  methods : {
    async apply() {
      this.$store.dispatch('home/searchImages',{
        name : this.name,
      })
    }
  }
}
</script>


<style lang="scss" scoped>
@import "~/scss/main";

.container {
  padding: 10px;
  display: flex;
  align-items: center;
  input {
    border: 1px solid skyblue;
    &:focus {
      color:white
    }
  }
  > *{
    color: $gray-400;
    margin-right: 10px;
    font-size: 15px;
    & :last-child{
      margin-right: 0;
    }
  }
  .selects {
    display: flex;
    align-items: center;
    
    select {
      width: 120px;
      margin-right: 10px;
      border: 1px solid $primary;
    }
  }
  .btn {
    background-color: $primary;
    color: white;
  }
}
</style>