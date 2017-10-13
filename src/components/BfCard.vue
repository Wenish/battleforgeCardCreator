<template>
  <div>
    <div class="card-settings">
      <el-select v-model="cardColor" placeholder="Select">
        <el-option
          v-for="item in cardColors"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-input placeholder="Card Name" v-model="cardName"></el-input>
      <el-input-number v-model="cardCost" :min="0" :max="9999"></el-input-number>
      <el-select v-model="cardDamageType" clearable placeholder="Select">
        <el-option
          v-for="item in cardDamageTypes"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-input-number v-model="cardDamage" :min="0" :max="9999"></el-input-number>
      <el-select v-model="cardHealthType" clearable placeholder="Select">
        <el-option
          v-for="item in cardHealthTypes"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-input-number v-model="cardHealth" :min="0" :max="9999"></el-input-number>
      <el-select v-model="editionSymbol" clearable placeholder="Select">
        <el-option
          v-for="item in editionSymbols"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="card-container">
      <div class="card-background"></div>
      <div class="card-img"></div>
      <div class="card-frame" :class="cardColor"></div>
      <div class="card-icon-damage" :class="[cardColor, cardDamageType]"></div>
      <div class="card-icon-health" :class="[cardColor, cardHealthType]"></div>
      <div class="card-name">{{ cardName }}</div>
      <div class="card-cost"><span v-if="cardCost">{{ cardCost }}</span></div>
      <div class="card-attack-dmg"><span v-if="cardDamage">{{ cardDamage }}</span></div>
      <div class="card-health"><span v-if="cardHealth">{{ cardHealth }}</span></div>
      <div class="card-edition-symbol" :class="editionSymbol"></div>
    </div>
  </div>
</template>

<script>
var cardColors = [
  {
    value: 'blank',
    label: 'blank'
  }, {
    value: 'allColour',
    label: 'all colour'
  }, {
    value: 'fire',
    label: 'fire'
  }, {
    value: 'fireFrost',
    label: 'fireFrost'
  }, {
    value: 'fireNature',
    label: 'fireNature'
  }, {
    value: 'fireNatureFrost',
    label: 'fireNatureFrost'
  }, {
    value: 'fireShadow',
    label: 'fireShadow'
  }, {
    value: 'fireShadowFrost',
    label: 'fireShadowFrost'
  }, {
    value: 'fireShadowNature',
    label: 'fireShadowNature'
  }, {
    value: 'frost',
    label: 'frost'
  }, {
    value: 'legendary',
    label: 'legendary'
  }, {
    value: 'nature',
    label: 'nature'
  }, {
    value: 'natureFrost',
    label: 'natureFrost'
  }, {
    value: 'shadow',
    label: 'shadow'
  }, {
    value: 'shadowFrost',
    label: 'shadowFrost'
  }, {
    value: 'shadowNature',
    label: 'shadowNature'
  }, {
    value: 'shadowNatureFrost',
    label: 'shadowNatureFrost'
  }
]

var cardDamageTypes = [
  {
   value: 'ms',
   label: 'Melee S'
  }, {
    value: 'mm',
    label: 'Melee M'
  }, {
    value: 'ml',
    label: 'Melee L'
  }, {
    value: 'mxl',
    label: 'Melee XL'
  }, {
    value: 'rs',
    label: 'Range S'
  }, {
    value: 'rm',
    label: 'Range M'
  }, {
    value: 'rl',
    label: 'Range L'
  }, {
    value: 'rxl',
    label: 'Range XL'
  }, {
    value: 'spec',
    label: 'Spec'
  }
]

var cardHealthTypes = [
  {
    value: 'hpBuilding',
    label: 'HP building'
  }, {
    value: 'hps',
    label: 'HP S'
  }, {
    value: 'hpm',
    label: 'HP M'
  }, {
    value: 'hpl',
    label: 'HP L'
  }, {
    value: 'hpxl',
    label: 'HP XL'
  }
]

var editionSymbols = [
  {
    value: 'amii_common',
    label: 'Amii Common'
  }, {
    value: 'amii_uncommon',
    label: 'Amii Uncommon'
  }, {
    value: 'amii_rare',
    label: 'Amii Rare'
  }, {
    value: 'amii_ultra_rare',
    label: 'Amii ultra Rare'
  }, {
    value: 'lostsouls_common',
    label: 'Lostsouls Common'
  }, {
    value: 'lostsouls_uncommon',
    label: 'Lostsouls Uncommon'
  }, {
    value: 'lostsouls_rare',
    label: 'Lostsouls Rare'
  }, {
    value: 'lostsouls_ultra_rare',
    label: 'Lostsouls ultra Rare'
  }, {
    value: 'renegade_common',
    label: 'Renegade Common'
  }, {
    value: 'renegade_uncommon',
    label: 'Renegade Uncommon'
  }, {
    value: 'renegade_rare',
    label: 'Renegade Rare'
  }, {
    value: 'renegade_ultra_rare',
    label: 'Renegade ultra Rare'
  }, {
    value: 'twilight_common',
    label: 'Twilight Common'
  }, {
    value: 'twilight_uncommon',
    label: 'Twilight Uncommon'
  }, {
    value: 'twilight_rare',
    label: 'Twilight Rare'
  }, {
    value: 'twilight_ultra_rare',
    label: 'Twilight ultra Rare'
  }
]

export default {
  name: 'bfCard',
  data () {
    return {
      cardColors: cardColors,
      cardColor: 'blank',
      cardName: '',
      cardCost: 0,
      cardDamageTypes: cardDamageTypes,
      cardDamageType: '',
      cardDamage: 0,
      cardHealthTypes: cardHealthTypes,
      cardHealthType: '',
      cardHealth: 0,
      editionSymbols: editionSymbols,
      editionSymbol: ''
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
  /*
  background: url('../assets/obamablunt.jpg');
  */
  background-repeat: no-repeat;
  background-size: 100% 100%;
  top: 36px;
  left: 20px;
}

/* Diffrent Frames */
.card-frame{
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
}
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

/* Diffrent Damage icons */
.card-icon-damage {
  bottom: 0;
  left: 0;
  position: absolute;
  width: 110px;
  height: 58px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
/* All Colour Damage */
.card-icon-damage.allColour.ml {
  background-image: url('../assets/icon-damage/allColour/ml.png');
}
.card-icon-damage.allColour.mm {
  background-image: url('../assets/icon-damage/allColour/mm.png');
}
.card-icon-damage.allColour.ms {
  background-image: url('../assets/icon-damage/allColour/ms.png');
}
.card-icon-damage.allColour.mxl {
  background-image: url('../assets/icon-damage/allColour/mxl.png');
}
.card-icon-damage.allColour.rl {
  background-image: url('../assets/icon-damage/allColour/rl.png');
}
.card-icon-damage.allColour.rm {
  background-image: url('../assets/icon-damage/allColour/rm.png');
}
.card-icon-damage.allColour.rs {
  background-image: url('../assets/icon-damage/allColour/rs.png');
}
.card-icon-damage.allColour.rxl {
  background-image: url('../assets/icon-damage/allColour/rxl.png');
}
.card-icon-damage.allColour.spec {
  background-image: url('../assets/icon-damage/allColour/spec.png');
}
/* fire Damage */
.card-icon-damage.fire.ml {
  background-image: url('../assets/icon-damage/fire/ml.png');
}
.card-icon-damage.fire.mm {
  background-image: url('../assets/icon-damage/fire/mm.png');
}
.card-icon-damage.fire.ms {
  background-image: url('../assets/icon-damage/fire/ms.png');
}
.card-icon-damage.fire.mxl {
  background-image: url('../assets/icon-damage/fire/mxl.png');
}
.card-icon-damage.fire.rl {
  background-image: url('../assets/icon-damage/fire/rl.png');
}
.card-icon-damage.fire.rm {
  background-image: url('../assets/icon-damage/fire/rm.png');
}
.card-icon-damage.fire.rs {
  background-image: url('../assets/icon-damage/fire/rs.png');
}
.card-icon-damage.fire.rxl {
  background-image: url('../assets/icon-damage/fire/rxl.png');
}
.card-icon-damage.fire.spec {
  background-image: url('../assets/icon-damage/fire/spec.png');
}
/* fireFrost Damage */
.card-icon-damage.fireFrost.ml {
  background-image: url('../assets/icon-damage/fireFrost/ml.png');
}
.card-icon-damage.fireFrost.mm {
  background-image: url('../assets/icon-damage/fireFrost/mm.png');
}
.card-icon-damage.fireFrost.ms {
  background-image: url('../assets/icon-damage/fireFrost/ms.png');
}
.card-icon-damage.fireFrost.mxl {
  background-image: url('../assets/icon-damage/fireFrost/mxl.png');
}
.card-icon-damage.fireFrost.rl {
  background-image: url('../assets/icon-damage/fireFrost/rl.png');
}
.card-icon-damage.fireFrost.rm {
  background-image: url('../assets/icon-damage/fireFrost/rm.png');
}
.card-icon-damage.fireFrost.rs {
  background-image: url('../assets/icon-damage/fireFrost/rs.png');
}
.card-icon-damage.fireFrost.rxl {
  background-image: url('../assets/icon-damage/fireFrost/rxl.png');
}
.card-icon-damage.fireFrost.spec {
  background-image: url('../assets/icon-damage/fireFrost/spec.png');
}
/* fireFrost Damage */
.card-icon-damage.fireFrost.ml {
  background-image: url('../assets/icon-damage/fireFrost/ml.png');
}
.card-icon-damage.fireFrost.mm {
  background-image: url('../assets/icon-damage/fireFrost/mm.png');
}
.card-icon-damage.fireFrost.ms {
  background-image: url('../assets/icon-damage/fireFrost/ms.png');
}
.card-icon-damage.fireFrost.mxl {
  background-image: url('../assets/icon-damage/fireFrost/mxl.png');
}
.card-icon-damage.fireFrost.rl {
  background-image: url('../assets/icon-damage/fireFrost/rl.png');
}
.card-icon-damage.fireFrost.rm {
  background-image: url('../assets/icon-damage/fireFrost/rm.png');
}
.card-icon-damage.fireFrost.rs {
  background-image: url('../assets/icon-damage/fireFrost/rs.png');
}
.card-icon-damage.fireFrost.rxl {
  background-image: url('../assets/icon-damage/fireFrost/rxl.png');
}
.card-icon-damage.fireFrost.spec {
  background-image: url('../assets/icon-damage/fireFrost/spec.png');
}
/* fireNature Damage */
.card-icon-damage.fireNature.ml {
  background-image: url('../assets/icon-damage/fireNature/ml.png');
}
.card-icon-damage.fireNature.mm {
  background-image: url('../assets/icon-damage/fireNature/mm.png');
}
.card-icon-damage.fireNature.ms {
  background-image: url('../assets/icon-damage/fireNature/ms.png');
}
.card-icon-damage.fireNature.mxl {
  background-image: url('../assets/icon-damage/fireNature/mxl.png');
}
.card-icon-damage.fireNature.rl {
  background-image: url('../assets/icon-damage/fireNature/rl.png');
}
.card-icon-damage.fireNature.rm {
  background-image: url('../assets/icon-damage/fireNature/rm.png');
}
.card-icon-damage.fireNature.rs {
  background-image: url('../assets/icon-damage/fireNature/rs.png');
}
.card-icon-damage.fireNature.rxl {
  background-image: url('../assets/icon-damage/fireNature/rxl.png');
}
.card-icon-damage.fireNature.spec {
  background-image: url('../assets/icon-damage/fireNature/spec.png');
}
/* fireNatureFrost Damage */
.card-icon-damage.fireNatureFrost.ml {
  background-image: url('../assets/icon-damage/fireNatureFrost/ml.png');
}
.card-icon-damage.fireNatureFrost.mm {
  background-image: url('../assets/icon-damage/fireNatureFrost/mm.png');
}
.card-icon-damage.fireNatureFrost.ms {
  background-image: url('../assets/icon-damage/fireNatureFrost/ms.png');
}
.card-icon-damage.fireNatureFrost.mxl {
  background-image: url('../assets/icon-damage/fireNatureFrost/mxl.png');
}
.card-icon-damage.fireNatureFrost.rl {
  background-image: url('../assets/icon-damage/fireNatureFrost/rl.png');
}
.card-icon-damage.fireNatureFrost.rm {
  background-image: url('../assets/icon-damage/fireNatureFrost/rm.png');
}
.card-icon-damage.fireNatureFrost.rs {
  background-image: url('../assets/icon-damage/fireNatureFrost/rs.png');
}
.card-icon-damage.fireNatureFrost.rxl {
  background-image: url('../assets/icon-damage/fireNatureFrost/rxl.png');
}
.card-icon-damage.fireNatureFrost.spec {
  background-image: url('../assets/icon-damage/fireNatureFrost/spec.png');
}
/* fireShadow Damage */
.card-icon-damage.fireShadow.ml {
  background-image: url('../assets/icon-damage/fireShadow/ml.png');
}
.card-icon-damage.fireShadow.mm {
  background-image: url('../assets/icon-damage/fireShadow/mm.png');
}
.card-icon-damage.fireShadow.ms {
  background-image: url('../assets/icon-damage/fireShadow/ms.png');
}
.card-icon-damage.fireShadow.mxl {
  background-image: url('../assets/icon-damage/fireShadow/mxl.png');
}
.card-icon-damage.fireShadow.rl {
  background-image: url('../assets/icon-damage/fireShadow/rl.png');
}
.card-icon-damage.fireShadow.rm {
  background-image: url('../assets/icon-damage/fireShadow/rm.png');
}
.card-icon-damage.fireShadow.rs {
  background-image: url('../assets/icon-damage/fireShadow/rs.png');
}
.card-icon-damage.fireShadow.rxl {
  background-image: url('../assets/icon-damage/fireShadow/rxl.png');
}
.card-icon-damage.fireShadow.spec {
  background-image: url('../assets/icon-damage/fireShadow/spec.png');
}
/* fireShadowFrost Damage */
.card-icon-damage.fireShadowFrost.ml {
  background-image: url('../assets/icon-damage/fireShadowFrost/ml.png');
}
.card-icon-damage.fireShadowFrost.mm {
  background-image: url('../assets/icon-damage/fireShadowFrost/mm.png');
}
.card-icon-damage.fireShadowFrost.ms {
  background-image: url('../assets/icon-damage/fireShadowFrost/ms.png');
}
.card-icon-damage.fireShadowFrost.mxl {
  background-image: url('../assets/icon-damage/fireShadowFrost/mxl.png');
}
.card-icon-damage.fireShadowFrost.rl {
  background-image: url('../assets/icon-damage/fireShadowFrost/rl.png');
}
.card-icon-damage.fireShadowFrost.rm {
  background-image: url('../assets/icon-damage/fireShadowFrost/rm.png');
}
.card-icon-damage.fireShadowFrost.rs {
  background-image: url('../assets/icon-damage/fireShadowFrost/rs.png');
}
.card-icon-damage.fireShadowFrost.rxl {
  background-image: url('../assets/icon-damage/fireShadowFrost/rxl.png');
}
.card-icon-damage.fireShadowFrost.spec {
  background-image: url('../assets/icon-damage/fireShadowFrost/spec.png');
}
/* fireShadowNature Damage */
.card-icon-damage.fireShadowNature.ml {
  background-image: url('../assets/icon-damage/fireShadowNature/ml.png');
}
.card-icon-damage.fireShadowNature.mm {
  background-image: url('../assets/icon-damage/fireShadowNature/mm.png');
}
.card-icon-damage.fireShadowNature.ms {
  background-image: url('../assets/icon-damage/fireShadowNature/ms.png');
}
.card-icon-damage.fireShadowNature.mxl {
  background-image: url('../assets/icon-damage/fireShadowNature/mxl.png');
}
.card-icon-damage.fireShadowNature.rl {
  background-image: url('../assets/icon-damage/fireShadowNature/rl.png');
}
.card-icon-damage.fireShadowNature.rm {
  background-image: url('../assets/icon-damage/fireShadowNature/rm.png');
}
.card-icon-damage.fireShadowNature.rs {
  background-image: url('../assets/icon-damage/fireShadowNature/rs.png');
}
.card-icon-damage.fireShadowNature.rxl {
  background-image: url('../assets/icon-damage/fireShadowNature/rxl.png');
}
.card-icon-damage.fireShadowNature.spec {
  background-image: url('../assets/icon-damage/fireShadowNature/spec.png');
}
/* frost Damage */
.card-icon-damage.frost.ml {
  background-image: url('../assets/icon-damage/frost/ml.png');
}
.card-icon-damage.frost.mm {
  background-image: url('../assets/icon-damage/frost/mm.png');
}
.card-icon-damage.frost.ms {
  background-image: url('../assets/icon-damage/frost/ms.png');
}
.card-icon-damage.frost.mxl {
  background-image: url('../assets/icon-damage/frost/mxl.png');
}
.card-icon-damage.frost.rl {
  background-image: url('../assets/icon-damage/frost/rl.png');
}
.card-icon-damage.frost.rm {
  background-image: url('../assets/icon-damage/frost/rm.png');
}
.card-icon-damage.frost.rs {
  background-image: url('../assets/icon-damage/frost/rs.png');
}
.card-icon-damage.frost.rxl {
  background-image: url('../assets/icon-damage/frost/rxl.png');
}
.card-icon-damage.frost.spec {
  background-image: url('../assets/icon-damage/frost/spec.png');
}
/* legendary Damage */
.card-icon-damage.legendary.ml {
  background-image: url('../assets/icon-damage/legendary/ml.png');
}
.card-icon-damage.legendary.mm {
  background-image: url('../assets/icon-damage/legendary/mm.png');
}
.card-icon-damage.legendary.ms {
  background-image: url('../assets/icon-damage/legendary/ms.png');
}
.card-icon-damage.legendary.mxl {
  background-image: url('../assets/icon-damage/legendary/mxl.png');
}
.card-icon-damage.legendary.rl {
  background-image: url('../assets/icon-damage/legendary/rl.png');
}
.card-icon-damage.legendary.rm {
  background-image: url('../assets/icon-damage/legendary/rm.png');
}
.card-icon-damage.legendary.rs {
  background-image: url('../assets/icon-damage/legendary/rs.png');
}
.card-icon-damage.legendary.rxl {
  background-image: url('../assets/icon-damage/legendary/rxl.png');
}
.card-icon-damage.legendary.spec {
  background-image: url('../assets/icon-damage/legendary/spec.png');
}
/* nature Damage */
.card-icon-damage.nature.ml {
  background-image: url('../assets/icon-damage/nature/ml.png');
}
.card-icon-damage.nature.mm {
  background-image: url('../assets/icon-damage/nature/mm.png');
}
.card-icon-damage.nature.ms {
  background-image: url('../assets/icon-damage/nature/ms.png');
}
.card-icon-damage.nature.mxl {
  background-image: url('../assets/icon-damage/nature/mxl.png');
}
.card-icon-damage.nature.rl {
  background-image: url('../assets/icon-damage/nature/rl.png');
}
.card-icon-damage.nature.rm {
  background-image: url('../assets/icon-damage/nature/rm.png');
}
.card-icon-damage.nature.rs {
  background-image: url('../assets/icon-damage/nature/rs.png');
}
.card-icon-damage.nature.rxl {
  background-image: url('../assets/icon-damage/nature/rxl.png');
}
.card-icon-damage.nature.spec {
  background-image: url('../assets/icon-damage/nature/spec.png');
}
/* natureFrost Damage */
.card-icon-damage.natureFrost.ml {
  background-image: url('../assets/icon-damage/natureFrost/ml.png');
}
.card-icon-damage.natureFrost.mm {
  background-image: url('../assets/icon-damage/natureFrost/mm.png');
}
.card-icon-damage.natureFrost.ms {
  background-image: url('../assets/icon-damage/natureFrost/ms.png');
}
.card-icon-damage.natureFrost.mxl {
  background-image: url('../assets/icon-damage/natureFrost/mxl.png');
}
.card-icon-damage.natureFrost.rl {
  background-image: url('../assets/icon-damage/natureFrost/rl.png');
}
.card-icon-damage.natureFrost.rm {
  background-image: url('../assets/icon-damage/natureFrost/rm.png');
}
.card-icon-damage.natureFrost.rs {
  background-image: url('../assets/icon-damage/natureFrost/rs.png');
}
.card-icon-damage.natureFrost.rxl {
  background-image: url('../assets/icon-damage/natureFrost/rxl.png');
}
.card-icon-damage.natureFrost.spec {
  background-image: url('../assets/icon-damage/natureFrost/spec.png');
}
/* shadow Damage */
.card-icon-damage.shadow.ml {
  background-image: url('../assets/icon-damage/shadow/ml.png');
}
.card-icon-damage.shadow.mm {
  background-image: url('../assets/icon-damage/shadow/mm.png');
}
.card-icon-damage.shadow.ms {
  background-image: url('../assets/icon-damage/shadow/ms.png');
}
.card-icon-damage.shadow.mxl {
  background-image: url('../assets/icon-damage/shadow/mxl.png');
}
.card-icon-damage.shadow.rl {
  background-image: url('../assets/icon-damage/shadow/rl.png');
}
.card-icon-damage.shadow.rm {
  background-image: url('../assets/icon-damage/shadow/rm.png');
}
.card-icon-damage.shadow.rs {
  background-image: url('../assets/icon-damage/shadow/rs.png');
}
.card-icon-damage.shadow.rxl {
  background-image: url('../assets/icon-damage/shadow/rxl.png');
}
.card-icon-damage.shadow.spec {
  background-image: url('../assets/icon-damage/shadow/spec.png');
}
/* shadowFrost Damage */
.card-icon-damage.shadowFrost.ml {
  background-image: url('../assets/icon-damage/shadowFrost/ml.png');
}
.card-icon-damage.shadowFrost.mm {
  background-image: url('../assets/icon-damage/shadowFrost/mm.png');
}
.card-icon-damage.shadowFrost.ms {
  background-image: url('../assets/icon-damage/shadowFrost/ms.png');
}
.card-icon-damage.shadowFrost.mxl {
  background-image: url('../assets/icon-damage/shadowFrost/mxl.png');
}
.card-icon-damage.shadowFrost.rl {
  background-image: url('../assets/icon-damage/shadowFrost/rl.png');
}
.card-icon-damage.shadowFrost.rm {
  background-image: url('../assets/icon-damage/shadowFrost/rm.png');
}
.card-icon-damage.shadowFrost.rs {
  background-image: url('../assets/icon-damage/shadowFrost/rs.png');
}
.card-icon-damage.shadowFrost.rxl {
  background-image: url('../assets/icon-damage/shadowFrost/rxl.png');
}
.card-icon-damage.shadowFrost.spec {
  background-image: url('../assets/icon-damage/shadowFrost/spec.png');
}
/* shadowNature Damage */
.card-icon-damage.shadowNature.ml {
  background-image: url('../assets/icon-damage/shadowNature/ml.png');
}
.card-icon-damage.shadowNature.mm {
  background-image: url('../assets/icon-damage/shadowNature/mm.png');
}
.card-icon-damage.shadowNature.ms {
  background-image: url('../assets/icon-damage/shadowNature/ms.png');
}
.card-icon-damage.shadowNature.mxl {
  background-image: url('../assets/icon-damage/shadowNature/mxl.png');
}
.card-icon-damage.shadowNature.rl {
  background-image: url('../assets/icon-damage/shadowNature/rl.png');
}
.card-icon-damage.shadowNature.rm {
  background-image: url('../assets/icon-damage/shadowNature/rm.png');
}
.card-icon-damage.shadowNature.rs {
  background-image: url('../assets/icon-damage/shadowNature/rs.png');
}
.card-icon-damage.shadowNature.rxl {
  background-image: url('../assets/icon-damage/shadowNature/rxl.png');
}
.card-icon-damage.shadowNature.spec {
  background-image: url('../assets/icon-damage/shadowNature/spec.png');
}
/* shadowNatureFrost Damage */
.card-icon-damage.shadowNatureFrost {
  bottom: 3.5px;
}
.card-icon-damage.shadowNatureFrost.ml {
  background-image: url('../assets/icon-damage/shadowNatureFrost/ml.png');
}
.card-icon-damage.shadowNatureFrost.mm {
  background-image: url('../assets/icon-damage/shadowNatureFrost/mm.png');
}
.card-icon-damage.shadowNatureFrost.ms {
  background-image: url('../assets/icon-damage/shadowNatureFrost/ms.png');
}
.card-icon-damage.shadowNatureFrost.mxl {
  background-image: url('../assets/icon-damage/shadowNatureFrost/mxl.png');
}
.card-icon-damage.shadowNatureFrost.rl {
  background-image: url('../assets/icon-damage/shadowNatureFrost/rl.png');
}
.card-icon-damage.shadowNatureFrost.rm {
  background-image: url('../assets/icon-damage/shadowNatureFrost/rm.png');
}
.card-icon-damage.shadowNatureFrost.rs {
  background-image: url('../assets/icon-damage/shadowNatureFrost/rs.png');
}
.card-icon-damage.shadowNatureFrost.rxl {
  background-image: url('../assets/icon-damage/shadowNatureFrost/rxl.png');
}
.card-icon-damage.shadowNatureFrost.spec {
  background-image: url('../assets/icon-damage/shadowNatureFrost/spec.png');
}


/* Diffrent Health icons */
.card-icon-health {
  bottom: 0;
  right: 0;
  position: absolute;
  width: 182px;
  height: 58px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
/* All Colour Health */
.card-icon-health.allColour.hpBuilding {
  background-image: url('../assets/icon-health/allColour/hpBuilding.png');
}
.card-icon-health.allColour.hpl {
  background-image: url('../assets/icon-health/allColour/hpl.png');
}
.card-icon-health.allColour.hpm {
  background-image: url('../assets/icon-health/allColour/hpm.png');
}
.card-icon-health.allColour.hps {
  background-image: url('../assets/icon-health/allColour/hps.png');
}
.card-icon-health.allColour.hpxl {
  background-image: url('../assets/icon-health/allColour/hpxl.png');
}

/* Fire Health */
.card-icon-health.fire.hpBuilding {
  background-image: url('../assets/icon-health/fire/hpBuilding.png');
}
.card-icon-health.fire.hpl {
  background-image: url('../assets/icon-health/fire/hpl.png');
}
.card-icon-health.fire.hpm {
  background-image: url('../assets/icon-health/fire/hpm.png');
}
.card-icon-health.fire.hps {
  background-image: url('../assets/icon-health/fire/hps.png');
}
.card-icon-health.fire.hpxl {
  background-image: url('../assets/icon-health/fire/hpxl.png');
}

/* fireFrost Health */
.card-icon-health.fireFrost.hpBuilding {
  background-image: url('../assets/icon-health/fireFrost/hpBuilding.png');
}
.card-icon-health.fireFrost.hpl {
  background-image: url('../assets/icon-health/fireFrost/hpl.png');
}
.card-icon-health.fireFrost.hpm {
  background-image: url('../assets/icon-health/fireFrost/hpm.png');
}
.card-icon-health.fireFrost.hps {
  background-image: url('../assets/icon-health/fireFrost/hps.png');
}
.card-icon-health.fireFrost.hpxl {
  background-image: url('../assets/icon-health/fireFrost/hpxl.png');
}

/* fireNature Health */
.card-icon-health.fireNature.hpBuilding {
  background-image: url('../assets/icon-health/fireNature/hpBuilding.png');
}
.card-icon-health.fireNature.hpl {
  background-image: url('../assets/icon-health/fireNature/hpl.png');
}
.card-icon-health.fireNature.hpm {
  background-image: url('../assets/icon-health/fireNature/hpm.png');
}
.card-icon-health.fireNature.hps {
  background-image: url('../assets/icon-health/fireNature/hps.png');
}
.card-icon-health.fireNature.hpxl {
  background-image: url('../assets/icon-health/fireNature/hpxl.png');
}

/* fireNatureFrost Health */
.card-icon-health.fireNatureFrost.hpBuilding {
  background-image: url('../assets/icon-health/fireNatureFrost/hpBuilding.png');
}
.card-icon-health.fireNatureFrost.hpl {
  background-image: url('../assets/icon-health/fireNatureFrost/hpl.png');
}
.card-icon-health.fireNatureFrost.hpm {
  background-image: url('../assets/icon-health/fireNatureFrost/hpm.png');
}
.card-icon-health.fireNatureFrost.hps {
  background-image: url('../assets/icon-health/fireNatureFrost/hps.png');
}
.card-icon-health.fireNatureFrost.hpxl {
  background-image: url('../assets/icon-health/fireNatureFrost/hpxl.png');
}

/* fireShadow Health */
.card-icon-health.fireShadow.hpBuilding {
  background-image: url('../assets/icon-health/fireShadow/hpBuilding.png');
}
.card-icon-health.fireShadow.hpl {
  background-image: url('../assets/icon-health/fireShadow/hpl.png');
}
.card-icon-health.fireShadow.hpm {
  background-image: url('../assets/icon-health/fireShadow/hpm.png');
}
.card-icon-health.fireShadow.hps {
  background-image: url('../assets/icon-health/fireShadow/hps.png');
}
.card-icon-health.fireShadow.hpxl {
  background-image: url('../assets/icon-health/fireShadow/hpxl.png');
}

/* fireShadowFrost Health */
.card-icon-health.fireShadowFrost.hpBuilding {
  background-image: url('../assets/icon-health/fireShadowFrost/hpBuilding.png');
}
.card-icon-health.fireShadowFrost.hpl {
  background-image: url('../assets/icon-health/fireShadowFrost/hpl.png');
}
.card-icon-health.fireShadowFrost.hpm {
  background-image: url('../assets/icon-health/fireShadowFrost/hpm.png');
}
.card-icon-health.fireShadowFrost.hps {
  background-image: url('../assets/icon-health/fireShadowFrost/hps.png');
}
.card-icon-health.fireShadowFrost.hpxl {
  background-image: url('../assets/icon-health/fireShadowFrost/hpxl.png');
}

/* fireShadowNature Health */
.card-icon-health.fireShadowNature.hpBuilding {
  background-image: url('../assets/icon-health/fireShadowNature/hpBuilding.png');
}
.card-icon-health.fireShadowNature.hpl {
  background-image: url('../assets/icon-health/fireShadowNature/hpl.png');
}
.card-icon-health.fireShadowNature.hpm {
  background-image: url('../assets/icon-health/fireShadowNature/hpm.png');
}
.card-icon-health.fireShadowNature.hps {
  background-image: url('../assets/icon-health/fireShadowNature/hps.png');
}
.card-icon-health.fireShadowNature.hpxl {
  background-image: url('../assets/icon-health/fireShadowNature/hpxl.png');
}

/* frost Health */
.card-icon-health.frost.hpBuilding {
  background-image: url('../assets/icon-health/frost/hpBuilding.png');
}
.card-icon-health.frost.hpl {
  background-image: url('../assets/icon-health/frost/hpl.png');
}
.card-icon-health.frost.hpm {
  background-image: url('../assets/icon-health/frost/hpm.png');
}
.card-icon-health.frost.hps {
  background-image: url('../assets/icon-health/frost/hps.png');
}
.card-icon-health.frost.hpxl {
  background-image: url('../assets/icon-health/frost/hpxl.png');
}

/* legendary Health */
.card-icon-health.legendary.hpBuilding {
  background-image: url('../assets/icon-health/legendary/hpBuilding.png');
}
.card-icon-health.legendary.hpl {
  background-image: url('../assets/icon-health/legendary/hpl.png');
}
.card-icon-health.legendary.hpm {
  background-image: url('../assets/icon-health/legendary/hpm.png');
}
.card-icon-health.legendary.hps {
  background-image: url('../assets/icon-health/legendary/hps.png');
}
.card-icon-health.legendary.hpxl {
  background-image: url('../assets/icon-health/legendary/hpxl.png');
}

/* nature Health */
.card-icon-health.nature.hpBuilding {
  background-image: url('../assets/icon-health/nature/hpBuilding.png');
}
.card-icon-health.nature.hpl {
  background-image: url('../assets/icon-health/nature/hpl.png');
}
.card-icon-health.nature.hpm {
  background-image: url('../assets/icon-health/nature/hpm.png');
}
.card-icon-health.nature.hps {
  background-image: url('../assets/icon-health/nature/hps.png');
}
.card-icon-health.nature.hpxl {
  background-image: url('../assets/icon-health/nature/hpxl.png');
}

/* natureFrost Health */
.card-icon-health.natureFrost.hpBuilding {
  background-image: url('../assets/icon-health/natureFrost/hpBuilding.png');
}
.card-icon-health.natureFrost.hpl {
  background-image: url('../assets/icon-health/natureFrost/hpl.png');
}
.card-icon-health.natureFrost.hpm {
  background-image: url('../assets/icon-health/natureFrost/hpm.png');
}
.card-icon-health.natureFrost.hps {
  background-image: url('../assets/icon-health/natureFrost/hps.png');
}
.card-icon-health.natureFrost.hpxl {
  background-image: url('../assets/icon-health/natureFrost/hpxl.png');
}

/* shadow Health */
.card-icon-health.shadow.hpBuilding {
  background-image: url('../assets/icon-health/shadow/hpBuilding.png');
}
.card-icon-health.shadow.hpl {
  background-image: url('../assets/icon-health/shadow/hpl.png');
}
.card-icon-health.shadow.hpm {
  background-image: url('../assets/icon-health/shadow/hpm.png');
}
.card-icon-health.shadow.hps {
  background-image: url('../assets/icon-health/shadow/hps.png');
}
.card-icon-health.shadow.hpxl {
  background-image: url('../assets/icon-health/shadow/hpxl.png');
}

/* shadowFrost Health */
.card-icon-health.shadowFrost.hpBuilding {
  background-image: url('../assets/icon-health/shadowFrost/hpBuilding.png');
}
.card-icon-health.shadowFrost.hpl {
  background-image: url('../assets/icon-health/shadowFrost/hpl.png');
}
.card-icon-health.shadowFrost.hpm {
  background-image: url('../assets/icon-health/shadowFrost/hpm.png');
}
.card-icon-health.shadowFrost.hps {
  background-image: url('../assets/icon-health/shadowFrost/hps.png');
}
.card-icon-health.shadowFrost.hpxl {
  background-image: url('../assets/icon-health/shadowFrost/hpxl.png');
}

/* shadowNature Health */
.card-icon-health.shadowNature.hpBuilding {
  background-image: url('../assets/icon-health/shadowNature/hpBuilding.png');
}
.card-icon-health.shadowNature.hpl {
  background-image: url('../assets/icon-health/shadowNature/hpl.png');
}
.card-icon-health.shadowNature.hpm {
  background-image: url('../assets/icon-health/shadowNature/hpm.png');
}
.card-icon-health.shadowNature.hps {
  background-image: url('../assets/icon-health/shadowNature/hps.png');
}
.card-icon-health.shadowNature.hpxl {
  background-image: url('../assets/icon-health/shadowNature/hpxl.png');
}

/* shadowNatureFrost Health */
.card-icon-health.shadowNatureFrost.hpBuilding {
  background-image: url('../assets/icon-health/shadowNatureFrost/hpBuilding.png');
}
.card-icon-health.shadowNatureFrost.hpl {
  background-image: url('../assets/icon-health/shadowNatureFrost/hpl.png');
}
.card-icon-health.shadowNatureFrost.hpm {
  background-image: url('../assets/icon-health/shadowNatureFrost/hpm.png');
}
.card-icon-health.shadowNatureFrost.hps {
  background-image: url('../assets/icon-health/shadowNatureFrost/hps.png');
}
.card-icon-health.shadowNatureFrost.hpxl {
  background-image: url('../assets/icon-health/shadowNatureFrost/hpxl.png');
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
    bottom: 12px;
    left: 62px;
    font-size: 20px;
}

.card-health {
  color: white;
  position: absolute;
  bottom: 12px;
  right: 76px;
  font-size: 20px;
}

.card-edition-symbol {
  bottom: 4px;
  right: 6px;
  position: absolute;
  width: 48px;
  height: 48px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.card-edition-symbol.amii_common {
  background-image: url('../assets/edition-symbols/amii_common.png');
}
.card-edition-symbol.amii_rare {
  background-image: url('../assets/edition-symbols/amii_rare.png');
}
.card-edition-symbol.amii_ultra_rare {
  background-image: url('../assets/edition-symbols/amii_ultra_rare.png');
}
.card-edition-symbol.amii_uncommon {
  background-image: url('../assets/edition-symbols/amii_uncommon.png');
}

.card-edition-symbol.lostsouls_common {
  background-image: url('../assets/edition-symbols/lostsouls_common.png');
}
.card-edition-symbol.lostsouls_rare {
  background-image: url('../assets/edition-symbols/lostsouls_rare.png');
}
.card-edition-symbol.lostsouls_ultra_rare {
  background-image: url('../assets/edition-symbols/lostsouls_ultra_rare.png');
}
.card-edition-symbol.lostsouls_uncommon {
  background-image: url('../assets/edition-symbols/lostsouls_uncommon.png');
}

.card-edition-symbol.renegade_common {
  background-image: url('../assets/edition-symbols/renegade_common.png');
}
.card-edition-symbol.renegade_rare {
  background-image: url('../assets/edition-symbols/renegade_rare.png');
}
.card-edition-symbol.renegade_ultra_rare {
  background-image: url('../assets/edition-symbols/renegade_ultra_rare.png');
}
.card-edition-symbol.renegade_uncommon {
  background-image: url('../assets/edition-symbols/renegade_uncommon.png');
}

.card-edition-symbol.twilight_common {
  background-image: url('../assets/edition-symbols/twilight_common.png');
}
.card-edition-symbol.twilight_rare {
  background-image: url('../assets/edition-symbols/twilight_rare.png');
}
.card-edition-symbol.twilight_ultra_rare {
  background-image: url('../assets/edition-symbols/twilight_ultra_rare.png');
}
.card-edition-symbol.twilight_uncommon {
  background-image: url('../assets/edition-symbols/twilight_uncommon.png');
}
</style>
