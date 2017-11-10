<template>
  <div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
       
            <el-form-item label="商品图片" prop="goods_imgs">
                 <!-- action="http://localhost:3003/sudo/upload/goods_imgs" -->
                 <!-- :http-request="submitUpload" -->
                <el-upload
                    class="upload-demo"
                    ref="upload"
                    list-type="picture"
                    :limit="limit"
                    :with-credentials="credentials"
                    drag
                    action="/files_info/sudo/upload/goods_imgs"
                    :file-list="file_list"
                    multiple :auto-upload="autoUpload" :on-success="uploadSuccess" :on-error="uploadError" :on-change="changeFile" name="ruleForm.goods_imgs">
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    <div class="el-upload__tip" slot="tip">只能上传{{limit}}张jpg/png文件，且不超过500kb</div>
                </el-upload>
            </el-form-item>
            <el-form-item label="商品名称" prop="goods_name">
                <el-input v-model="ruleForm.goods_name"></el-input>
            </el-form-item>
            <el-form-item label="商品编码" prop="goods_number">
                <el-input v-model="ruleForm.goods_number"></el-input>
            </el-form-item>
             <el-form-item label="分类和样式" prop="goods_kind">
                <el-select v-model="ruleForm.goods_kind" placeholder="请选择家具分类">
                  <el-option label="整体家居" value="kind_1"></el-option>
                  <el-option label="家具产品" value="kind_2"></el-option>
                  <el-option label="家居用品" value="kind_3"></el-option>
                  <el-option label="家居饰品" value="kind_4"></el-option>
                </el-select>
                <el-select v-model="ruleForm.goods_position" placeholder="请选择家具位置">
                  <el-option label="整体" value="position_1"></el-option>
                  <el-option label="客厅" value="position_2"></el-option>
                  <el-option label="餐厅" value="position_3"></el-option>
                  <el-option label="卧室" value="position_4"></el-option>
                </el-select>
                <el-select v-model="ruleForm.goods_style" placeholder="请选择家具风格">
                  <el-option label="现代风格" value="style_1"></el-option>
                  <el-option label="中式风格" value="style_2"></el-option>
                  <el-option label="欧式风格" value="style_3"></el-option>
                  <el-option label="田园风格" value="style_4"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="库存量" prop="goods_count">
                <el-input v-model="ruleForm.goods_count"></el-input>
            </el-form-item>
           
            <el-form-item label="商品原价" prop="goods_price_invalide">
                <el-input v-model="ruleForm.goods_price_invalide"></el-input>
            </el-form-item>
            <el-form-item label="活动价格" prop="goods_price">
                <el-input v-model="ruleForm.goods_price"></el-input>
            </el-form-item>
           
            <!-- <el-form-item label="活动时间" required>
            <el-col :span="11">
            <el-form-item prop="date1">
                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
            </el-form-item>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
            <el-form-item prop="date2">
                <el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
            </el-form-item>
            </el-col>
        </el-form-item> -->
        <el-form-item label="即时配送" prop="delivery">
            <el-switch v-model="ruleForm.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="活动性质" prop="type">
            <el-checkbox-group v-model="ruleForm.type">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
            </el-checkbox-group>
        </el-form-item>
        <el-form-item label="特殊资源" prop="resource">
            <el-radio-group v-model="ruleForm.resource">
            <el-radio label="线上品牌商赞助"></el-radio>
            <el-radio label="线下场地免费"></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="商品描述" prop="goods_desc">
            <el-input type="textarea" v-model="ruleForm.goods_desc"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交商品</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>


<script>
import axios from 'axios'
  export default {
    data() {
      return {
        autoUpload:false,
        action:"",
        credentials:true,
        limit:6,
        file_list:[],
        ruleForm: {
          goods_name: 'test',
          goods_number: 'NO.001',
          goods_kind:"",
          goods_position:"",
          goods_style:"",
          goods_count:"10",
          goods_imgs:"",
          goods_price_invalide:"12500",
          goods_price:"9500",
          date1: '2017-11-03',
          date2: '12:20:10',
          delivery: false,
          type: [],
          resource: '',
          goods_desc: '这只是一个测试,谁认真就输了'
        },
        rules: {
         
          goods_name: [
            { required: true, message: '请输入商品名称', trigger: 'blur' },
            { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
          ],
          goods_kind:[
            { required: true, message: '请选择家具类型', trigger: 'blur' }
          ],
           goods_position:[
            { required: true, message: '请选择家具位置', trigger: 'blur' }
          ],
           goods_style:[
            { required: true, message: '请选择家具风格', trigger: 'blur' }
          ],
          goods_number: [
            { required: true, message: '请输入商品编号', trigger: 'blur' }
          ],
          goods_count: [
            { required: true, message: '请输入商品个数', trigger: 'change' }
          ],
          goods_price_invalid:[
            { required: true, message: '请输入商品原价', trigger: 'change' }
          ],
         goods_price:[
            { required: true, message: '请输入商品当前价格', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          goods_desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        const self = this;
        //提交文本
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(self.ruleForm)
            axios.put('/goods_info/sudo/upload/goods_info',self.ruleForm).then((response)=>{
              var code = response.data.code
              if(code){
                
                  //self.action = `/files_info/sudo/upload/goods_imgs/:${response.data.goods_id}`
                  document.cookie = `goods_id=${response.data.goods_id}`
                  self.ruleForm.goods_imgs = response.data.goods_id
                 
                  //提交图片 
                 self.submitUpload()
              }
                
            }).catch(()=>{
               this.$notify.error({
                  title: "提交失败",
                  message: "请稍后重试"
                });
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
     submitUpload() {
       console.log(this.action)
        this.$refs.upload.submit();
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      uploadSuccess(){
           this.$notify({
              title: "提交成功",
              message: "商品已经提交",
              type:"success"
            });
      },
      uploadError(){

         this.$notify.error({
              title: "图片提交失败",
              message: "请稍后重试"
          });
      },
      changeFile(){
          //alert('????')
      },
    }
  }
</script>