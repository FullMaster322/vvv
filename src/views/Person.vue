<script>
export default {
 data() {
  return {
    staffId: null,
  };
},

mounted() {
  this.staffId = this.$route.params.idPerson;
},
}

</script>

<template>
<h1 style="margin-top: 100px">{{ this.staffId }}</h1>

</template>