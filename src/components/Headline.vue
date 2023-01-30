<template>
  <div class="back">
    <div class="container">
      <h1> NASA APIs </h1>
      <p>Welcome to the NASA API portal. <br /> The objective of this site is to make NASA data, <br />including imagery, eminently accessible to application developers. <br /> This catalog focuses on broadly useful and user friendly APIs and does not hold every NASA API.</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~/scss/main';

.back{
  background-image: url("https://astro.kasi.re.kr/file/astro_page/496178332328606.jpg");
}

.container {
  padding-top: 40px;
  h1 {
    font-family: 'Oswald' , sans-serif;
    font-size: 80px;
    color: white;
  }
  p{
    font-family: 'Oswald' , sans-serif;
    padding: 30px;
    line-height: 1.7;
    font-size: 20px;
    color : gray
  }
}
</style>