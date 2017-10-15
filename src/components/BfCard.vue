<template>
  <div>
    <div class="card-container">
      <div class="card-background"></div>
      <div class="card-img" :style="{ 'background-image': 'url(' + cardImage + ')' }"></div>
      <div class="card-frame" :class="[orbType1, orbType2, orbType3, orbType4]"></div>
      <div class="card-entity-description"><span v-if="cardCharge">{{cardCharge}}</span><span v-if="cardEntityCount > 1">x{{cardEntityCount}}</span> {{cardEntityName}}</div>
      <div class="card-affinity-tokenslot" :class="affinity"></div>
      <div class="card-affinity-orb" :class="affinity"></div>
      <div class="card-orb-1" :class="orbType1"></div>
      <div class="card-orb-2" :class="orbType2"></div>
      <div class="card-orb-3" :class="orbType3"></div>
      <div class="card-orb-4" :class="orbType4"></div>
      <div class="card-icon-damage" :class="[orbType1, orbType2, orbType3, orbType4, cardDamageType]"></div>
      <div class="card-icon-health" :class="[orbType1, orbType2, orbType3, orbType4, cardHealthType]"></div>
      <div class="card-name">{{ cardName }}</div>
      <div class="card-cost"><span v-if="cardCost">{{ cardCost }}</span></div>
      <div class="card-attack-dmg"><span v-if="cardDamage">{{ cardDamage }}</span></div>
      <div class="card-health"><span v-if="cardHealth">{{ cardHealth }}</span></div>
      <div class="card-edition-symbol" :class="editionSymbol"></div>
      <div class="card-spells">
        <div class="card-spell">
          <div class="card-spell-icon-1" :class="cardSpellIcon1"></div>
          <div class="card-spell-name">{{ cardSpellName1 }}</div>
        </div>
        <div class="card-spell">
          <div class="card-spell-icon-2" :class="cardSpellIcon2"></div>
          <div class="card-spell-name">{{ cardSpellName2 }}</div>
        </div>
        <div class="card-spell">
          <div class="card-spell-icon-3" :class="cardSpellIcon3"></div>
          <div class="card-spell-name">{{ cardSpellName3 }}</div>
        </div>
        <div class="card-spell">
          <div class="card-spell-icon-4" :class="cardSpellIcon4"></div>
          <div class="card-spell-name">{{ cardSpellName4 }}</div>
        </div>
      </div>
    </div>
      <div class="card-settings">
        <el-input placeholder="Card Name" v-model="cardName"></el-input>
        <el-input-number v-model="cardCharge" :min="0" :max="99"></el-input-number>
        <el-input-number v-model="cardEntityCount" :min="1" :max="99"></el-input-number>
        <el-input placeholder="Entity Name" v-model="cardEntityName"></el-input>
        <el-input-number v-model="cardCost" :min="0" :max="9999"></el-input-number>
        <el-upload
          class="upload-demo"
          ref="upload"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :file-list="fileList"
          :multiple="false"
          :on-change="fileOnChange"
          :auto-upload="false">
          <el-button slot="trigger" size="small" type="primary">select file</el-button>
          <div class="el-upload__tip" slot="tip">jpg/png files with a size less than 500kb</div>
        </el-upload>
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
        <el-select v-model="orbType1" clearable placeholder="Select">
          <el-option
            v-for="item in orbTypes"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="orbType2" clearable placeholder="Select">
          <el-option
            v-for="item in orbTypes"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="orbType3" clearable placeholder="Select">
          <el-option
            v-for="item in orbTypes"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="orbType4" clearable placeholder="Select">
          <el-option
            v-for="item in orbTypes"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="affinity" clearable placeholder="Select">
          <el-option
            v-for="item in affinities"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>

        <el-select v-model="cardSpellIcon1" clearable placeholder="Select">
          <el-option
            v-for="item in spells"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-input placeholder="Card Spell 1" v-model="cardSpellName1"></el-input>
        <el-select v-model="cardSpellIcon2" clearable placeholder="Select">
          <el-option
            v-for="item in spells"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-input placeholder="Card Spell 2" v-model="cardSpellName2"></el-input>
        <el-select v-model="cardSpellIcon3" clearable placeholder="Select">
          <el-option
            v-for="item in spells"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-input placeholder="Card Spell 3" v-model="cardSpellName3"></el-input>
        <el-select v-model="cardSpellIcon4" clearable placeholder="Select">
          <el-option
            v-for="item in spells"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-input placeholder="Card Spell 4" v-model="cardSpellName4"></el-input>
      </div>
  </div>
</template>

<script>
var orbTypes = [
  {
    value: 'neutral',
    label: 'Neutral'
  }, {
    value: 'fire',
    label: 'Fire'
  }, {
    value: 'frost',
    label: 'Frost'
  }, {
    value: 'nature',
    label: 'Nature'
  }, {
    value: 'shadow',
    label: 'Shadow'
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

var affinities = [
  {
    value: 'fire',
    label: 'Fire'
  }, {
    value: 'frost',
    label: 'Frost'
  }, {
    value: 'nature',
    label: 'Nature'
  }, {
    value: 'shadow',
    label: 'Shadow'
  }
]

var spells = [
  {
    value: 'active-special',
    label: 'Active Special'
  }, {
    value: 'autocast',
    label: 'Autocast'
  }, {
    value: 'godspell',
    label: 'Godspell'
  }, {
    value: 'mode-change',
    label: 'Mode Change'
  }, {
    value: 'passive-special',
    label: 'Passive Special'
  }
]

export default {
  name: 'bfCard',
  data () {
    return {
      orbTypes: orbTypes,
      orbType1: '',
      orbType2: '',
      orbType3: '',
      orbType4: '',
      cardName: '',
      cardImage: '',
      cardCost: 0,
      cardCharge: 0,
      cardEntityCount: 1,
      cardEntityName: '',
      cardDamageTypes: cardDamageTypes,
      cardDamageType: '',
      cardDamage: 0,
      cardHealthTypes: cardHealthTypes,
      cardHealthType: '',
      cardHealth: 0,
      editionSymbols: editionSymbols,
      editionSymbol: '',
      affinities: affinities,
      affinity: '',
      fileList: [],
      spells: spells,
      cardSpellIcon1: '',
      cardSpellIcon2: '',
      cardSpellIcon3: '',
      cardSpellIcon4: '',
      cardSpellName1: '',
      cardSpellName2: '',
      cardSpellName3: '',
      cardSpellName4: ''
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    fileOnChange(file, fileList) {
      console.log(file, fileList);
      console.log(this.cardImage)
      this.cardImage = file.url;
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

.card-container, .card-settings {
  margin-top: 15px;
  margin-bottom: 15px;
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
  border-radius: 10px;
  background-image: url('../assets/frames/blank.png');
}
.card-frame.neutral {
  background-image: url('../assets/frames/legendary.png');
}
.card-frame.fire {
  background-image: url('../assets/frames/fire.png');
}
.card-frame.frost {
  background-image: url('../assets/frames/frost.png');
}
.card-frame.nature {
  background-image: url('../assets/frames/nature.png');
}
.card-frame.shadow {
  background-image: url('../assets/frames/shadow.png');
}
.card-frame.fire.frost {
  background-image: url('../assets/frames/fireFrost.png');
}
.card-frame.fire.nature {
  background-image: url('../assets/frames/fireNature.png');
}
.card-frame.fire.shadow {
  background-image: url('../assets/frames/fireShadow.png');
}
.card-frame.nature.frost {
  background-image: url('../assets/frames/natureFrost.png');
}
.card-frame.shadow.frost {
  background-image: url('../assets/frames/shadowFrost.png');
}
.card-frame.shadow.nature {
  background-image: url('../assets/frames/shadowNature.png');
}
.card-frame.fire.nature.frost {
  background-image: url('../assets/frames/fireNatureFrost.png');
}
.card-frame.fire.shadow.frost {
  background-image: url('../assets/frames/fireShadowFrost.png');
}
.card-frame.fire.shadow.nature {
  background-image: url('../assets/frames/fireShadowNature.png');
}
.card-frame.shadow.nature.frost {
  background-image: url('../assets/frames/shadowNatureFrost.png');
}
.card-frame.fire.frost.nature.shadow {
  background-image: url('../assets/frames/allColour.png');
}

.card-entity-description {
  color: white;
  top: 237px;
  left: 23px;
  font-size: 19px;
  letter-spacing: 1px;
  text-align: left;
  position: absolute;
  max-width: 224px;
  word-break: break-all;
  max-height: 19px;
  overflow: hidden;
  text-shadow: 0px 0px 3px rgba(0, 0, 0, 1);
}

.card-affinity-tokenslot {
  top: 4px;
  right: 1px;
  position: absolute;
  width: 71px;
  height: 65px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.card-affinity-tokenslot.fire {
  background-image: url('../assets/affinity/tokenslot_fire.png');
}
.card-affinity-tokenslot.frost {
  background-image: url('../assets/affinity/tokenslot_frost.png');
}
.card-affinity-tokenslot.nature {
  background-image: url('../assets/affinity/tokenslot_nature.png');
}
.card-affinity-tokenslot.shadow {
  background-image: url('../assets/affinity/tokenslot_shadow.png');
}

.card-affinity-orb {
  bottom: 134px;
  right: 10px;
  position: absolute;
  width: 40px;
  height: 40px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.card-affinity-orb.fire {
  background-image: url('../assets/affinity/ui_card_l_affinity_orb_fire.png');
}
.card-affinity-orb.frost {
  background-image: url('../assets/affinity/ui_card_l_affinity_orb_frost.png');
}
.card-affinity-orb.nature {
  background-image: url('../assets/affinity/ui_card_l_affinity_orb_nature.png');
}
.card-affinity-orb.shadow {
  background-image: url('../assets/affinity/ui_card_l_affinity_orb_shadow.png');
}

.card-orb-1, .card-orb-2, .card-orb-3, .card-orb-4 {
  position: absolute;
  width: 14px;
  height: 14px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.card-orb-1.neutral, .card-orb-2.neutral, .card-orb-3.neutral, .card-orb-4.neutral {
  background-image: url('../assets/orbs/ui_card_250_token_hole.png');
}
.card-orb-1.fire, .card-orb-2.fire, .card-orb-3.fire, .card-orb-4.fire {
  background-image: url('../assets/orbs/ui_card_250_token_fire.png');
}
.card-orb-1.frost, .card-orb-2.frost, .card-orb-3.frost, .card-orb-4.frost {
  background-image: url('../assets/orbs/ui_card_250_token_frost.png');
}
.card-orb-1.nature, .card-orb-2.nature, .card-orb-3.nature, .card-orb-4.nature {
  background-image: url('../assets/orbs/ui_card_250_token_nature.png');
}
.card-orb-1.shadow, .card-orb-2.shadow, .card-orb-3.shadow, .card-orb-4.shadow {
  background-image: url('../assets/orbs/ui_card_250_token_shadow.png');
}
.card-orb-1 {
  top: 44px;
  right: 8px;
}
.card-orb-2 {
  top: 47.5px;
  right: 22px;
}
.card-orb-3 {
  top: 47.5px;
  right: 37px;
}
.card-orb-4 {
  top: 44px;
  right: 51px;
}

/* Diffrent Damage icons */
.card-icon-damage {
  bottom: 0;
  left: 0;
  position: absolute;
  width: 109.5px;
  height: 58.5px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  border-bottom-left-radius: 10px;
  text-shadow: 0px 0px 3px rgba(0, 0, 0, 1);
}
/* legendary Damage */
.card-icon-damage.neutral.ml {
  background-image: url('../assets/icon-damage/legendary/ml.png');
}
.card-icon-damage.neutral.mm {
  background-image: url('../assets/icon-damage/legendary/mm.png');
}
.card-icon-damage.neutral.ms {
  background-image: url('../assets/icon-damage/legendary/ms.png');
}
.card-icon-damage.neutral.mxl {
  background-image: url('../assets/icon-damage/legendary/mxl.png');
}
.card-icon-damage.neutral.rl {
  background-image: url('../assets/icon-damage/legendary/rl.png');
}
.card-icon-damage.neutral.rm {
  background-image: url('../assets/icon-damage/legendary/rm.png');
}
.card-icon-damage.neutral.rs {
  background-image: url('../assets/icon-damage/legendary/rs.png');
}
.card-icon-damage.neutral.rxl {
  background-image: url('../assets/icon-damage/legendary/rxl.png');
}
.card-icon-damage.neutral.spec {
  background-image: url('../assets/icon-damage/legendary/spec.png');
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
/* fireFrost Damage */
.card-icon-damage.fire.frost.ml {
  background-image: url('../assets/icon-damage/fireFrost/ml.png');
}
.card-icon-damage.fire.frost.mm {
  background-image: url('../assets/icon-damage/fireFrost/mm.png');
}
.card-icon-damage.fire.frost.ms {
  background-image: url('../assets/icon-damage/fireFrost/ms.png');
}
.card-icon-damage.fire.frost.mxl {
  background-image: url('../assets/icon-damage/fireFrost/mxl.png');
}
.card-icon-damage.fire.frost.rl {
  background-image: url('../assets/icon-damage/fireFrost/rl.png');
}
.card-icon-damage.fire.frost.rm {
  background-image: url('../assets/icon-damage/fireFrost/rm.png');
}
.card-icon-damage.fire.frost.rs {
  background-image: url('../assets/icon-damage/fireFrost/rs.png');
}
.card-icon-damage.fire.frost.rxl {
  background-image: url('../assets/icon-damage/fireFrost/rxl.png');
}
.card-icon-damage.fire.frost.spec {
  background-image: url('../assets/icon-damage/fireFrost/spec.png');
}
/* fireNature Damage */
.card-icon-damage.fire.nature.ml {
  background-image: url('../assets/icon-damage/fireNature/ml.png');
}
.card-icon-damage.fire.nature.mm {
  background-image: url('../assets/icon-damage/fireNature/mm.png');
}
.card-icon-damage.fire.nature.ms {
  background-image: url('../assets/icon-damage/fireNature/ms.png');
}
.card-icon-damage.fire.nature.mxl {
  background-image: url('../assets/icon-damage/fireNature/mxl.png');
}
.card-icon-damage.fire.nature.rl {
  background-image: url('../assets/icon-damage/fireNature/rl.png');
}
.card-icon-damage.fire.nature.rm {
  background-image: url('../assets/icon-damage/fireNature/rm.png');
}
.card-icon-damage.fire.nature.rs {
  background-image: url('../assets/icon-damage/fireNature/rs.png');
}
.card-icon-damage.fire.nature.rxl {
  background-image: url('../assets/icon-damage/fireNature/rxl.png');
}
.card-icon-damage.fire.nature.spec {
  background-image: url('../assets/icon-damage/fireNature/spec.png');
}
/* fireShadow Damage */
.card-icon-damage.fire.shadow.ml {
  background-image: url('../assets/icon-damage/fireShadow/ml.png');
}
.card-icon-damage.fire.shadow.mm {
  background-image: url('../assets/icon-damage/fireShadow/mm.png');
}
.card-icon-damage.fire.shadow.ms {
  background-image: url('../assets/icon-damage/fireShadow/ms.png');
}
.card-icon-damage.fire.shadow.mxl {
  background-image: url('../assets/icon-damage/fireShadow/mxl.png');
}
.card-icon-damage.fire.shadow.rl {
  background-image: url('../assets/icon-damage/fireShadow/rl.png');
}
.card-icon-damage.fire.shadow.rm {
  background-image: url('../assets/icon-damage/fireShadow/rm.png');
}
.card-icon-damage.fire.shadow.rs {
  background-image: url('../assets/icon-damage/fireShadow/rs.png');
}
.card-icon-damage.fire.shadow.rxl {
  background-image: url('../assets/icon-damage/fireShadow/rxl.png');
}
.card-icon-damage.fire.shadow.spec {
  background-image: url('../assets/icon-damage/fireShadow/spec.png');
}
/* natureFrost Damage */
.card-icon-damage.nature.frost.ml {
  background-image: url('../assets/icon-damage/natureFrost/ml.png');
}
.card-icon-damage.nature.frost.mm {
  background-image: url('../assets/icon-damage/natureFrost/mm.png');
}
.card-icon-damage.nature.frost.ms {
  background-image: url('../assets/icon-damage/natureFrost/ms.png');
}
.card-icon-damage.nature.frost.mxl {
  background-image: url('../assets/icon-damage/natureFrost/mxl.png');
}
.card-icon-damage.nature.frost.rl {
  background-image: url('../assets/icon-damage/natureFrost/rl.png');
}
.card-icon-damage.nature.frost.rm {
  background-image: url('../assets/icon-damage/natureFrost/rm.png');
}
.card-icon-damage.nature.frost.rs {
  background-image: url('../assets/icon-damage/natureFrost/rs.png');
}
.card-icon-damage.nature.frost.rxl {
  background-image: url('../assets/icon-damage/natureFrost/rxl.png');
}
.card-icon-damage.nature.frost.spec {
  background-image: url('../assets/icon-damage/natureFrost/spec.png');
}
/* shadowFrost Damage */
.card-icon-damage.shadow.frost.ml {
  background-image: url('../assets/icon-damage/shadowFrost/ml.png');
}
.card-icon-damage.shadow.frost.mm {
  background-image: url('../assets/icon-damage/shadowFrost/mm.png');
}
.card-icon-damage.shadow.frost.ms {
  background-image: url('../assets/icon-damage/shadowFrost/ms.png');
}
.card-icon-damage.shadow.frost.mxl {
  background-image: url('../assets/icon-damage/shadowFrost/mxl.png');
}
.card-icon-damage.shadow.frost.rl {
  background-image: url('../assets/icon-damage/shadowFrost/rl.png');
}
.card-icon-damage.shadow.frost.rm {
  background-image: url('../assets/icon-damage/shadowFrost/rm.png');
}
.card-icon-damage.shadow.frost.rs {
  background-image: url('../assets/icon-damage/shadowFrost/rs.png');
}
.card-icon-damage.shadow.frost.rxl {
  background-image: url('../assets/icon-damage/shadowFrost/rxl.png');
}
.card-icon-damage.shadow.frost.spec {
  background-image: url('../assets/icon-damage/shadowFrost/spec.png');
}
/* shadowNature Damage */
.card-icon-damage.shadow.nature.ml {
  background-image: url('../assets/icon-damage/shadowNature/ml.png');
}
.card-icon-damage.shadow.nature.mm {
  background-image: url('../assets/icon-damage/shadowNature/mm.png');
}
.card-icon-damage.shadow.nature.ms {
  background-image: url('../assets/icon-damage/shadowNature/ms.png');
}
.card-icon-damage.shadow.nature.mxl {
  background-image: url('../assets/icon-damage/shadowNature/mxl.png');
}
.card-icon-damage.shadow.nature.rl {
  background-image: url('../assets/icon-damage/shadowNature/rl.png');
}
.card-icon-damage.shadow.nature.rm {
  background-image: url('../assets/icon-damage/shadowNature/rm.png');
}
.card-icon-damage.shadow.nature.rs {
  background-image: url('../assets/icon-damage/shadowNature/rs.png');
}
.card-icon-damage.shadow.nature.rxl {
  background-image: url('../assets/icon-damage/shadowNature/rxl.png');
}
.card-icon-damage.shadow.nature.spec {
  background-image: url('../assets/icon-damage/shadowNature/spec.png');
}
/* fireNatureFrost Damage */
.card-icon-damage.fire.nature.frost.ml {
  background-image: url('../assets/icon-damage/fireNatureFrost/ml.png');
}
.card-icon-damage.fire.nature.frost.mm {
  background-image: url('../assets/icon-damage/fireNatureFrost/mm.png');
}
.card-icon-damage.fire.nature.frost.ms {
  background-image: url('../assets/icon-damage/fireNatureFrost/ms.png');
}
.card-icon-damage.fire.nature.frost.mxl {
  background-image: url('../assets/icon-damage/fireNatureFrost/mxl.png');
}
.card-icon-damage.fire.nature.frost.rl {
  background-image: url('../assets/icon-damage/fireNatureFrost/rl.png');
}
.card-icon-damage.fire.nature.frost.rm {
  background-image: url('../assets/icon-damage/fireNatureFrost/rm.png');
}
.card-icon-damage.fire.nature.frost.rs {
  background-image: url('../assets/icon-damage/fireNatureFrost/rs.png');
}
.card-icon-damage.fire.nature.frost.rxl {
  background-image: url('../assets/icon-damage/fireNatureFrost/rxl.png');
}
.card-icon-damage.fire.nature.frost.spec {
  background-image: url('../assets/icon-damage/fireNatureFrost/spec.png');
}
/* fireShadowFrost Damage */
.card-icon-damage.fire.shadow.frost.ml {
  background-image: url('../assets/icon-damage/fireShadowFrost/ml.png');
}
.card-icon-damage.fire.shadow.frost.mm {
  background-image: url('../assets/icon-damage/fireShadowFrost/mm.png');
}
.card-icon-damage.fire.shadow.frost.ms {
  background-image: url('../assets/icon-damage/fireShadowFrost/ms.png');
}
.card-icon-damage.fire.shadow.frost.mxl {
  background-image: url('../assets/icon-damage/fireShadowFrost/mxl.png');
}
.card-icon-damage.fire.shadow.frost.rl {
  background-image: url('../assets/icon-damage/fireShadowFrost/rl.png');
}
.card-icon-damage.fire.shadow.frost.rm {
  background-image: url('../assets/icon-damage/fireShadowFrost/rm.png');
}
.card-icon-damage.fire.shadow.frost.rs {
  background-image: url('../assets/icon-damage/fireShadowFrost/rs.png');
}
.card-icon-damage.fire.shadow.frost.rxl {
  background-image: url('../assets/icon-damage/fireShadowFrost/rxl.png');
}
.card-icon-damage.fire.shadow.frost.spec {
  background-image: url('../assets/icon-damage/fireShadowFrost/spec.png');
}
/* fireShadowNature Damage */
.card-icon-damage.fire.shadow.nature.ml {
  background-image: url('../assets/icon-damage/fireShadowNature/ml.png');
}
.card-icon-damage.fire.shadow.nature.mm {
  background-image: url('../assets/icon-damage/fireShadowNature/mm.png');
}
.card-icon-damage.fire.shadow.nature.ms {
  background-image: url('../assets/icon-damage/fireShadowNature/ms.png');
}
.card-icon-damage.fire.shadow.nature.mxl {
  background-image: url('../assets/icon-damage/fireShadowNature/mxl.png');
}
.card-icon-damage.fire.shadow.nature.rl {
  background-image: url('../assets/icon-damage/fireShadowNature/rl.png');
}
.card-icon-damage.fire.shadow.nature.rm {
  background-image: url('../assets/icon-damage/fireShadowNature/rm.png');
}
.card-icon-damage.fire.shadow.nature.rs {
  background-image: url('../assets/icon-damage/fireShadowNature/rs.png');
}
.card-icon-damage.fire.shadow.nature.rxl {
  background-image: url('../assets/icon-damage/fireShadowNature/rxl.png');
}
.card-icon-damage.fire.shadow.nature.spec {
  background-image: url('../assets/icon-damage/fireShadowNature/spec.png');
}
/* shadowNatureFrost Damage */
.card-icon-damage.shadow.nature.frost {
  bottom: 3.5px;
}
.card-icon-damage.shadow.nature.frost.ml {
  background-image: url('../assets/icon-damage/shadowNatureFrost/ml.png');
}
.card-icon-damage.shadow.nature.frost.mm {
  background-image: url('../assets/icon-damage/shadowNatureFrost/mm.png');
}
.card-icon-damage.shadow.nature.frost.ms {
  background-image: url('../assets/icon-damage/shadowNatureFrost/ms.png');
}
.card-icon-damage.shadow.nature.frost.mxl {
  background-image: url('../assets/icon-damage/shadowNatureFrost/mxl.png');
}
.card-icon-damage.shadow.nature.frost.rl {
  background-image: url('../assets/icon-damage/shadowNatureFrost/rl.png');
}
.card-icon-damage.shadow.nature.frost.rm {
  background-image: url('../assets/icon-damage/shadowNatureFrost/rm.png');
}
.card-icon-damage.shadow.nature.frost.rs {
  background-image: url('../assets/icon-damage/shadowNatureFrost/rs.png');
}
.card-icon-damage.shadow.nature.frost.rxl {
  background-image: url('../assets/icon-damage/shadowNatureFrost/rxl.png');
}
.card-icon-damage.shadow.nature.frost.spec {
  background-image: url('../assets/icon-damage/shadowNatureFrost/spec.png');
}
/* All Colour Damage */
.card-icon-damage.fire.frost.nature.shadow {
    /* becuase she shadowNatureFrost pictures are a little off */
    bottom: 0;
}
.card-icon-damage.fire.frost.nature.shadow.ml {
  background-image: url('../assets/icon-damage/allColour/ml.png');
}
.card-icon-damage.fire.frost.nature.shadow.mm {
  background-image: url('../assets/icon-damage/allColour/mm.png');
}
.card-icon-damage.fire.frost.nature.shadow.ms {
  background-image: url('../assets/icon-damage/allColour/ms.png');
}
.card-icon-damage.fire.frost.nature.shadow.mxl {
  background-image: url('../assets/icon-damage/allColour/mxl.png');
}
.card-icon-damage.fire.frost.nature.shadow.rl {
  background-image: url('../assets/icon-damage/allColour/rl.png');
}
.card-icon-damage.fire.frost.nature.shadow.rm {
  background-image: url('../assets/icon-damage/allColour/rm.png');
}
.card-icon-damage.fire.frost.nature.shadow.rs {
  background-image: url('../assets/icon-damage/allColour/rs.png');
}
.card-icon-damage.fire.frost.nature.shadow.rxl {
  background-image: url('../assets/icon-damage/allColour/rxl.png');
}
.card-icon-damage.fire.frost.nature.shadow.spec {
  background-image: url('../assets/icon-damage/allColour/spec.png');
}


/* Diffrent Health icons */
.card-icon-health {
  bottom: 0;
  right: 0;
  position: absolute;
  width: 181.5px;
  height: 58.5px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  border-bottom-right-radius: 10px;
}


/* legendary Health */
.card-icon-health.neutral.hpBuilding {
  background-image: url('../assets/icon-health/legendary/hpBuilding.png');
}
.card-icon-health.neutral.hpl {
  background-image: url('../assets/icon-health/legendary/hpl.png');
}
.card-icon-health.neutral.hpm {
  background-image: url('../assets/icon-health/legendary/hpm.png');
}
.card-icon-health.neutral.hps {
  background-image: url('../assets/icon-health/legendary/hps.png');
}
.card-icon-health.neutral.hpxl {
  background-image: url('../assets/icon-health/legendary/hpxl.png');
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

/* fireFrost Health */
.card-icon-health.fire.frost.hpBuilding {
  background-image: url('../assets/icon-health/fireFrost/hpBuilding.png');
}
.card-icon-health.fire.frost.hpl {
  background-image: url('../assets/icon-health/fireFrost/hpl.png');
}
.card-icon-health.fire.frost.hpm {
  background-image: url('../assets/icon-health/fireFrost/hpm.png');
}
.card-icon-health.fire.frost.hps {
  background-image: url('../assets/icon-health/fireFrost/hps.png');
}
.card-icon-health.fire.frost.hpxl {
  background-image: url('../assets/icon-health/fireFrost/hpxl.png');
}

/* fireNature Health */
.card-icon-health.fire.nature.hpBuilding {
  background-image: url('../assets/icon-health/fireNature/hpBuilding.png');
}
.card-icon-health.fire.nature.hpl {
  background-image: url('../assets/icon-health/fireNature/hpl.png');
}
.card-icon-health.fire.nature.hpm {
  background-image: url('../assets/icon-health/fireNature/hpm.png');
}
.card-icon-health.fire.nature.hps {
  background-image: url('../assets/icon-health/fireNature/hps.png');
}
.card-icon-health.fire.nature.hpxl {
  background-image: url('../assets/icon-health/fireNature/hpxl.png');
}

/* fireShadow Health */
.card-icon-health.fire.shadow.hpBuilding {
  background-image: url('../assets/icon-health/fireShadow/hpBuilding.png');
}
.card-icon-health.fire.shadow.hpl {
  background-image: url('../assets/icon-health/fireShadow/hpl.png');
}
.card-icon-health.fire.shadow.hpm {
  background-image: url('../assets/icon-health/fireShadow/hpm.png');
}
.card-icon-health.fire.shadow.hps {
  background-image: url('../assets/icon-health/fireShadow/hps.png');
}
.card-icon-health.fire.shadow.hpxl {
  background-image: url('../assets/icon-health/fireShadow/hpxl.png');
}

/* natureFrost Health */
.card-icon-health.nature.frost.hpBuilding {
  background-image: url('../assets/icon-health/natureFrost/hpBuilding.png');
}
.card-icon-health.nature.frost.hpl {
  background-image: url('../assets/icon-health/natureFrost/hpl.png');
}
.card-icon-health.nature.frost.hpm {
  background-image: url('../assets/icon-health/natureFrost/hpm.png');
}
.card-icon-health.nature.frost.hps {
  background-image: url('../assets/icon-health/natureFrost/hps.png');
}
.card-icon-health.nature.frost.hpxl {
  background-image: url('../assets/icon-health/natureFrost/hpxl.png');
}

/* shadowFrost Health */
.card-icon-health.shadow.frost.hpBuilding {
  background-image: url('../assets/icon-health/shadowFrost/hpBuilding.png');
}
.card-icon-health.shadow.frost.hpl {
  background-image: url('../assets/icon-health/shadowFrost/hpl.png');
}
.card-icon-health.shadow.frost.hpm {
  background-image: url('../assets/icon-health/shadowFrost/hpm.png');
}
.card-icon-health.shadow.frost.hps {
  background-image: url('../assets/icon-health/shadowFrost/hps.png');
}
.card-icon-health.shadow.frost.hpxl {
  background-image: url('../assets/icon-health/shadowFrost/hpxl.png');
}

/* shadowNature Health */
.card-icon-health.shadow.nature.hpBuilding {
  background-image: url('../assets/icon-health/shadowNature/hpBuilding.png');
}
.card-icon-health.shadow.nature.hpl {
  background-image: url('../assets/icon-health/shadowNature/hpl.png');
}
.card-icon-health.shadow.nature.hpm {
  background-image: url('../assets/icon-health/shadowNature/hpm.png');
}
.card-icon-health.shadow.nature.hps {
  background-image: url('../assets/icon-health/shadowNature/hps.png');
}
.card-icon-health.shadow.nature.hpxl {
  background-image: url('../assets/icon-health/shadowNature/hpxl.png');
}

/* fireNatureFrost Health */
.card-icon-health.fire.nature.frost.hpBuilding {
  background-image: url('../assets/icon-health/fireNatureFrost/hpBuilding.png');
}
.card-icon-health.fire.nature.frost.hpl {
  background-image: url('../assets/icon-health/fireNatureFrost/hpl.png');
}
.card-icon-health.fire.nature.frost.hpm {
  background-image: url('../assets/icon-health/fireNatureFrost/hpm.png');
}
.card-icon-health.fire.nature.frost.hps {
  background-image: url('../assets/icon-health/fireNatureFrost/hps.png');
}
.card-icon-health.fire.nature.frost.hpxl {
  background-image: url('../assets/icon-health/fireNatureFrost/hpxl.png');
}

/* fireShadowFrost Health */
.card-icon-health.fire.shadow.frost.hpBuilding {
  background-image: url('../assets/icon-health/fireShadowFrost/hpBuilding.png');
}
.card-icon-health.fire.shadow.frost.hpl {
  background-image: url('../assets/icon-health/fireShadowFrost/hpl.png');
}
.card-icon-health.fire.shadow.frost.hpm {
  background-image: url('../assets/icon-health/fireShadowFrost/hpm.png');
}
.card-icon-health.fire.shadow.frost.hps {
  background-image: url('../assets/icon-health/fireShadowFrost/hps.png');
}
.card-icon-health.fire.shadow.frost.hpxl {
  background-image: url('../assets/icon-health/fireShadowFrost/hpxl.png');
}

/* fireShadowNature Health */
.card-icon-health.fire.shadow.nature.hpBuilding {
  background-image: url('../assets/icon-health/fireShadowNature/hpBuilding.png');
}
.card-icon-health.fire.shadow.nature.hpl {
  background-image: url('../assets/icon-health/fireShadowNature/hpl.png');
}
.card-icon-health.fire.shadow.nature.hpm {
  background-image: url('../assets/icon-health/fireShadowNature/hpm.png');
}
.card-icon-health.fire.shadow.nature.hps {
  background-image: url('../assets/icon-health/fireShadowNature/hps.png');
}
.card-icon-health.fire.shadow.nature.hpxl {
  background-image: url('../assets/icon-health/fireShadowNature/hpxl.png');
}

/* shadowNatureFrost Health */
.card-icon-health.shadow.nature.frost.hpBuilding {
  background-image: url('../assets/icon-health/shadowNatureFrost/hpBuilding.png');
}
.card-icon-health.shadow.nature.frost.hpl {
  background-image: url('../assets/icon-health/shadowNatureFrost/hpl.png');
}
.card-icon-health.shadow.nature.frost.hpm {
  background-image: url('../assets/icon-health/shadowNatureFrost/hpm.png');
}
.card-icon-health.shadow.nature.frost.hps {
  background-image: url('../assets/icon-health/shadowNatureFrost/hps.png');
}
.card-icon-health.shadow.nature.frost.hpxl {
  background-image: url('../assets/icon-health/shadowNatureFrost/hpxl.png');
}
/* All Colour Health */
.card-icon-health.fire.frost.nature.shadow.hpBuilding {
  background-image: url('../assets/icon-health/allColour/hpBuilding.png');
}
.card-icon-health.fire.frost.nature.shadow.hpl {
  background-image: url('../assets/icon-health/allColour/hpl.png');
}
.card-icon-health.fire.frost.nature.shadow.hpm {
  background-image: url('../assets/icon-health/allColour/hpm.png');
}
.card-icon-health.fire.frost.nature.shadow.hps {
  background-image: url('../assets/icon-health/allColour/hps.png');
}
.card-icon-health.fire.frost.nature.shadow.hpxl {
  background-image: url('../assets/icon-health/allColour/hpxl.png');
}

.card-name {
  color: white;
  position: absolute;
  top: 14px;
  left: 36px;
  font-size: 19px;
  letter-spacing: 1px;
  max-height: 23px;
  max-width: 190px;
  overflow: hidden;
  word-break: break-all;
  text-shadow: 0px 0px 3px rgba(0, 0, 0, 1);
}

.card-cost {
  color: white;
  position: absolute;
  top: 17px;
  right: 19px;
  width: 36px;
  font-size: 15px;
  text-shadow: 0px 0px 3px rgba(0, 0, 0, 1);
}

.card-attack-dmg {
  color: white;
  position: absolute;
  bottom: 14px;
  left: 53px;
  font-size: 20px;
  letter-spacing: 1px;
  text-shadow: 0px 0px 3px rgba(0, 0, 0, 1);
}

.card-health {
  color: white;
  position: absolute;
  bottom: 14px;
  left: 170px;
  font-size: 20px;
  letter-spacing: 1px;
  text-shadow: 0px 0px 3px rgba(0, 0, 0, 1);
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

.card-spells {
  top: 269px;
  left: 18px;
  position: absolute;
  width: 260px;
  height: 96px;
  overflow: hidden;
}
.card-spell {
  color: white;
  text-align: left;
  line-height: 24px;
  word-break: break-all;
  max-height: 24px;
  overflow: hidden;
  height: 24px;
  width: 100%;
}
.card-spell-icon-1, .card-spell-icon-2, .card-spell-icon-3, .card-spell-icon-4 {
  height: 23px;
  width: 23px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  float: left;
}

.card-spell-icon-1.active-special,
.card-spell-icon-2.active-special,
.card-spell-icon-3.active-special,
.card-spell-icon-4.active-special {
  background-image: url('../assets/icons/ui_card_500_icon_active_special.png');
}

.card-spell-icon-1.autocast,
.card-spell-icon-2.autocast,
.card-spell-icon-3.autocast,
.card-spell-icon-4.autocast {
  background-image: url('../assets/icons/ui_card_500_icon_autocast.png');
}

.card-spell-icon-1.godspell,
.card-spell-icon-2.godspell,
.card-spell-icon-3.godspell,
.card-spell-icon-4.godspell {
  background-image: url('../assets/icons/ui_card_500_icon_godspell.png');
}

.card-spell-icon-1.mode-change,
.card-spell-icon-2.mode-change,
.card-spell-icon-3.mode-change,
.card-spell-icon-4.mode-change {
  background-image: url('../assets/icons/ui_card_500_icon_mode_change.png');
}

.card-spell-icon-1.passive-special,
.card-spell-icon-2.passive-special,
.card-spell-icon-3.passive-special,
.card-spell-icon-4.passive-special {
  background-image: url('../assets/icons/ui_card_500_icon_passive_special.png');
}
.card-spell-name {
  padding-left: 27px;
}
</style>
