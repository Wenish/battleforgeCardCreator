<template>
  <div class="card-container" :style="'--cardColor:' + cardColor">
    <div class="card-background"></div>
    <div class="card-img"></div>
    <div class="card-frame" :class="cardColor"></div>
    <div class=""></div>
    <div class="card-name">{{ cardName }}</div>
    <div class="card-cost"><span>{{ cardCost }}</span></div>
    <div class="card-attack-dmg"><span>{{ cardAttackDmg }}</span></div>
    <div class="card-health"><span>{{ cardHealth }}</span></div>
  </div>
</template>

<script>
export default {
  name: 'bfCard',
  data () {
    return {
      cardColor: 'nature',
      cardCost: 420,
      cardName: 'Blunt Obama',
      cardAttackDmg: 2000,
      cardHealth: 4000
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
  margin: auto;
  position: relative;
}

@media screen and (min-width : 768px) {
  .card-background{
    position: absolute;
    background: url('../assets/splatter-watercolor.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 696px;
    height: 408px;
    left: -200px;
    overflow: hidden;
  }
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
  background-size: contain;
  background-repeat: no-repeat;
}

/* Diffrent Frames */
.card-frame.allColour {
  background-image: url('../assets/frames/allColour.png');
}
.card-frame.blank {
  background-image: url('../assets/frames/blank.png');
}
.card-frame.fire {
  background-image: url('../assets/frames/fire.png');
}
.card-frame.fireFrost {
  background-image: url('../assets/frames/fireFrost.png');
}
.card-frame.fireNature {
  background-image: url('../assets/frames/fireNature.png');
}
.card-frame.fireNatureFrost {
  background-image: url('../assets/frames/fireNatureFrost.png');
}
.card-frame.fireShadow {
  background-image: url('../assets/frames/fireShadow.png');
}
.card-frame.fireShadowFrost {
  background-image: url('../assets/frames/fireShadowFrost.png');
}
.card-frame.fireShadowNature {
  background-image: url('../assets/frames/fireShadowNature.png');
}
.card-frame.frost {
  background-image: url('../assets/frames/frost.png');
}
.card-frame.legendary {
  background-image: url('../assets/frames/legendary.png');
}
.card-frame.nature {
  background-image: url('../assets/frames/nature.png');
}
.card-frame.natureFrost {
  background-image: url('../assets/frames/natureFrost.png');
}
.card-frame.shadow {
  background-image: url('../assets/frames/shadow.png');
}
.card-frame.shadowFrost {
  background-image: url('../assets/frames/shadowFrost.png');
}
.card-frame.shadowNature {
  background-image: url('../assets/frames/shadowNature.png');
}
.card-frame.shadowNatureFrost {
  background-image: url('../assets/frames/shadowNatureFrost.png');
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

.card-attack-dmg {
    color: white;
    position: absolute;
    bottom: 15px;
    left: 62px;
}

.card-health {
  color: white;
  position: absolute;
  bottom: 15px;
  right: 62px;
}
</style>
