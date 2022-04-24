<template>
  <div>
    <img :src="imageSrc" style="height:100px;width:100px;">
    <input type="file" v-on:change="test()" ref="fileInput">
  </div>
</template>
<script>
export default {
  name:'Test',
  data() {
    return {
      imageSrc:''
    }
  },
  methods:{
    test:function() {
      const file = this.$refs.fileInput.files[0]
      const fileReader = new FileReader()
      fileReader.onload = (temp) => {
        this.imageSrc = temp.target.result
      }
      fileReader.readAsDataURL(file)
    }
  }
}
</script>

<style scoped>

</style>