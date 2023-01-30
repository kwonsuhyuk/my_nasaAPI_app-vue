<template>
  <div class="container">
    <div class="header">
      <h1>
        <span>Astronomy Picture</span> of the Day 
      </h1>
      <div class="selects">
        <select
          v-for="f in filters"
          v-model="$data[f.name]"
          :key="f.name"
          class="form-select">
          <option
            v-for="item in f.items"
            :key="item">
            {{ item }}
          </option>
        </select>
      </div>
      <button
        class="btn btn-primary"
        @click="apply">
        Apply
      </button>
    </div>
    <div class="contents">
      <div
        v-if="message"
        class="message">
        {{ message }}
      </div>
      <DailyImage
        v-else
        :picture="picture"
        :loading="loading" />
    </div>
  </div>
</template>


<script>
import { mapState } from 'vuex'
import DailyImage from '~/components/DailyImage';

export default {
  components:{
    DailyImage
  },
  data() {
    return {
      year : new Date().getFullYear(),
      month : new Date().getMonth()+1,
      day : new Date().getDate(),
      filters : [
        {
          name : 'year' ,
          items : (()=>{
            const years =[]
            const thisYear = new Date().getFullYear()
            for (let i=thisYear; i >= 1985 ; i--){
              years.push(i)
            }
            return years
          })()
        },
        {
          name : 'month',
          items : (() => {
            const months = []
            for (let i=1; i <= 12 ; i++){
              months.push(i)
            }
            return months
          })()
        },
        {
          name : 'day', 
          items : (()=> {
            const days = []
            for (let i=1; i<=31 ; i++) {
              days.push(i)
            }
            return days
          })()
        }
      ]
    }
  },
  computed : {
    ...mapState('daypicture',[
      'picture',
      'loading',
      'message'
    ])
  },
  created() {
    this.apply()
  },
  methods : {
    apply() {
      this.$store.dispatch('daypicture/searchTodayData',{
        year : this.year,
        month : this.month,
        day : this.day
      })
    }
  }
  
}
</script>


<style lang="scss" scoped>

.container {
  .contents{
    display: flex;
    justify-content: center;
    align-items: center;
    .message{
      font-family: 'Oswald', sans-serif;
      font-weight: 700;
      font-size: 50px;
      color: $primary;
    }
  }

  .header{
    display: flex;
    align-items: center;
    border-bottom: 1px solid $white;
    padding-bottom: 20px;
    h1{
      span{
        color: darkcyan;
        font-size: 50px;
        font-family: 'Oswald', sans-serif;
      }
      padding-left: 10px;
      font-family: 'Roboto',sans-serif;
      font-size: 35px;
      color:white;
      margin-right: 50px;
    }
    .selects {
      display: flex;
      select {
        color: white;
        width: 120px;
        height: 50px;
        margin-right: 10px;
        border: 2px solid $primary;
      }
    }
    button{
      height: 50px;
    }
  }

}

</style>