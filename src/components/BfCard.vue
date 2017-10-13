<template>
  <div class="card-container">
    <div class="card-img"></div>
    <div class="card-frame"></div>
    <div class="card-name"> {{ cardName }}</div>
    <div class="card-cost"> <span>{{ cardCost }}</span></div>
    <div class="card-attack-dmg"></div>
    <div class="card-health"></div>
  </div>
</template>

<script>
export default {
  name: 'bfCard',
  data () {
    return {
      cardCost: 420,
      cardName: 'Blunt Obama'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-container{
  width: 296px;
  height: 408px;

  /*
  width: 370px;
  height: 510px;
  */
  background: blue;
  margin: auto;
  position: relative;
}

.card-img {
  position: absolute;
  width: 256px;
  height: 236px;
  background: url('../assets/obamablunt.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  top: 36px;
  left: 20px;
}

.card-frame{
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('../assets/frames/nature.png');
  background-size: contain;
  background-repeat: no-repeat;
}

.card-name {
  color: white;
  position: absolute;
  top: 17px;
  left: 38px;
  max-height: 20px;
  max-width: 190px;
  overflow: hidden;
  word-break: break-all;
}

.card-cost {
  color: white;
  position: absolute;
  top: 19px;
  right: 19px;
  width: 36px;
}
</style>
