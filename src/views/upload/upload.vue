<template>
  <div>
    <nav-bar class="upload-navBar">
      <div slot="center">商品发布</div>
    </nav-bar>
    <div>
      <img :src="imageSrc" style="height:100px;width:100px;">
      <input class="file" name="file" type="file" accept="image/png,image/gif,image/jpeg" @change="update"/>
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
      <el-button @click="push">点击发布</el-button>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/common/navigationBar/NavBar";
import axios from "@/network/axios";
import App from "@/App";

export default {
  name: "upload",
  components: {
    NavBar,
  },
  data() {
    return {
      textareaDesc: '',
      textareaShop: '',
      input1: '',
      input2: '',
      imageSrc:'',
      uid: App.globalData.uid
    }
  },
  methods: {
    push() {
      axios.post('/item/upload',{
        desc: this.textareaDesc,
        shopInfo: this.shopInfo,
        goodName: this.input1,
        goodPrice: this.input2,
        uid: this.uid
      })
    },
    update(e){
      let file = e.target.files[0];
      let param = new FormData(); //创建form对象
      param.append('file',file);//通过append向form对象添加数据
      //console.log(param.get('file')); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
      let config = {
        headers:{'Content-Type':'multipart/form-data'}
      }; //添加请求头
      this.$http.post('http://localhost:9090/uploadImage',param,config)
          .then(response=>{
            this.imageSrc = response.data.url
          })
    }
  }
}
</script>

<style scoped>

</style>