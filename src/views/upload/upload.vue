<template>
  <div>
    <nav-bar class="upload-navBar"><div slot="center">商品发布</div></nav-bar>
    <div>
      <img :src="imageSrc" style="height:100px;width:100px;">
      <input type="file" v-on:change="test()" ref="fileInput">
    </div>
    <div class="uploadInfo">
      <el-input placeholder="请输入商品名称" v-model="input1">
        <template slot="prepend">商品名称</template>
      </el-input>
      <el-input placeholder="请输入商品价格" v-model="input2">
        <template slot="prepend">商品价格</template>
      </el-input>
      <el-input
          type="textarea"
          :rows="2"
          placeholder="请输入商品描述"
          v-model="textareaDesc">
      </el-input>
      <el-input placeholder="请输入商铺名称" v-model="textareaShop">
        <template slot="prepend">商店名称</template>
      </el-input>
      <el-button @click="push">点击发布</el-button>
    </div>
  </div>
</template>

<script>
import uploadImg from "@/views/upload/uploadImg";
import NavBar from "@/components/common/navigationBar/NavBar";
import axios from "axios";

export default {
  name: "upload",
  components: {
    uploadImg,
    NavBar,
  },
  data() {
    return {
      textareaDesc: '',
      textareaShop: '',
      input1: '',
      input2: '',
      imageSrc:''
    }
  },
  methods: {
    //TODO: 这里的url需要修改
    push() {
      axios({
        url: '/upload',
        methods: "post",
        contentType: "application/json",
        data: {
          imgURL: this.imageSrc,
          desc: this.textareaDesc,
          shopInfo: this.shopInfo,
          goodName: this.input1,
          goodPrice: this.input2,
        },
      })
    },
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