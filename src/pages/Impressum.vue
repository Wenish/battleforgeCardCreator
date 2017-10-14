<template>
  <div class="page-container">
    <h1>Impressum</h1>
    <p>Battleforge Card Creator is a fan made Website</p>
    <p>We dont own any of the stuff</p>
    <p>If u the owner of the copyright and dont want your stuff on this site. Contact us on this site: https://github.com/Wenish/battleforgeCardCreator/issues</p>
    <h2>Privacy Policy</h2>
    <p>This site uses Google Analytics to collect your user behavior</p>
    <p>If you dont agree with this, you are not allowed to use this site.</p>
    <h2>Liability note</h2>
    <p>We are not in control of the servers, which are used to serve this site.</p>
    <p>Use this site at ur own risk. We dont take any responsibility for anything on this site.</p>
    <p>If you dont agree with this, you are not allowed to use this site.</p>
  </div>
</template>

<script>
ga('set', 'page', '/Impressum');
ga('send', 'pageview');

export default {
  name: 'home',
  components: {
    CardSettings,
    BfCard
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-container{
  max-width: 500px;
  margin: auto;
}
</style>
