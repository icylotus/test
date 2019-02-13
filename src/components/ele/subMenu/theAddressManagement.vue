<template>
  <div class="address">
    <ul class="title">
      <span>地址管理</span>
      <hr/>
    </ul>
    <div class="addressList">
      <floatAddress v-for="(list,index) in addressData" :key="index" :name="list.name"
                    :tel="list.tel" :sex="list.sex" :position="list.position"
                    :address="list.address" :indexNum="index" @modify="updateAddress(index)" @delete="deleteAddress(index)">
      </floatAddress>
      <ul class="newAddress" @click="openDialog">
        <li><span class="el-icon-plus"></span>添加新地址</li>
      </ul>
      <el-dialog :title="dialogTitle" :visible.sync="dialogFormVisible" :lock-scroll="isLockScroll">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
          <el-form-item label="姓名" prop="name">
            <el-input placeholder="请输入你的姓名" v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="sex">
            <el-radio v-model="ruleForm.sex" label="男">男</el-radio>
            <el-radio v-model="ruleForm.sex" label="女">女</el-radio>
          </el-form-item>
          <el-form-item label="位置" prop="position">
            <el-autocomplete
              prefix-icon="el-icon-location-outline"
              v-model="ruleForm.position"
              :fetch-suggestions="querySearch"
              placeholder="请输入小区，大厦或学校"
              value-key="title"
              style="width:300px;"
            >
              <template slot-scope="{ item }">
                <div class="name">{{ item.title }}</div>
                <span class="addr">{{ item.address }}</span>
              </template>
            </el-autocomplete>
          </el-form-item>
          <el-form-item label="详细地址" prop="address">
            <el-input placeholder="单位，门牌号" v-model="ruleForm.address"></el-input>
          </el-form-item>
          <el-form-item label="手机号" prop="tel">
            <el-input placeholder="请输入你的手机号" v-model="ruleForm.tel"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="save" type="primary" @click="submitForm('ruleForm')">保存</el-button>
            <el-button class="cancel" @click="resetForm('ruleForm')">取消</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  import floatAddress from '@/components/ele/subMenu/floatAddress'
    export default {
        name: "theAddressManagement",
      components:{
        floatAddress:floatAddress,
      },
      methods:{
        querySearch(queryString,cb){
          let result=this.SuggestAddress.filter(function (item) {
            if(item.title.indexOf(queryString)!==-1){
              return item;
            }
          });
          cb(result);
        },
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
             this.saveAddress();
            } else {
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
          this.dialogFormVisible=!this.dialogFormVisible;
        },
        updateAddress(index){
          this.dialogFormVisible=true;
          this.ruleForm.name=this.addressData[index].name;
          this.ruleForm.tel=this.addressData[index].tel;
          this.ruleForm.sex=this.addressData[index].sex;
          this.ruleForm.position=this.addressData[index].position;
          this.ruleForm.address=this.addressData[index].address;
          this.ruleForm.addressIndex=index;
        },
        openDialog(){
          this.dialogFormVisible=true;
          this.ruleForm.name='';
          this.ruleForm.tel='';
          this.ruleForm.sex='';
          this.ruleForm.position='';
          this.ruleForm.address='';
          this.ruleForm.addressIndex=-1;
        },
        saveAddress(){
          if(this.ruleForm.addressIndex!=-1){
            this.addressData[this.ruleForm.addressIndex].name=this.ruleForm.name;
            this.addressData[this.ruleForm.addressIndex].sex=this.ruleForm.sex;
            this.addressData[this.ruleForm.addressIndex].tel=this.ruleForm.tel;
            this.addressData[this.ruleForm.addressIndex].position=this.ruleForm.position;
            this.addressData[this.ruleForm.addressIndex].address=this.ruleForm.address;
          }
          else {
            this.addressData.push({
              'name': this.ruleForm.name,
              'sex': this.ruleForm.sex,
              'tel': this.ruleForm.tel,
              'position': this.ruleForm.position,
              'address': this.ruleForm.address
            });
          }
          this.dialogFormVisible=false;
        },
        deleteAddress(item){
          this.addressData.splice(item,1);
        }
      },
      data(){
        let tel = (rule, value, callback) => {
          if (!(/^1[34578]\d{9}$/.test(value))) {
            callback(new Error('请输入正确手机号码'));
          } else {
            callback();
          }
        };
          return{
            isLockScroll:false,
            ruleForm: {
              name: '',
              sex: '',
              tel:'',
              position: '',
              address: '',
              addressIndex:-1
            },
            dialogFormVisible:false,
            dialogTitle:'添加新地址',
            rules: {
              name: [
                { required: true, message: '请输入你的姓名', trigger: 'blur' },
                { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
              ],
              address:[
                { required: true, message: '请输入你的详细地址', trigger: 'blur' },
              ],
              position:[
                { required: true, message: '请输入你的位置', trigger: 'submit' },
              ],
              tel: {
                validator: tel, trigger: 'blur'
              },
            },
            SuggestAddress:[
              {
                title:'天虹商场',
                address:'天虹商场就是天虹商场'
              },
              {
                title:'南昌大学',
                address:'南昌大学当然在南昌咯'
              },
              {
                title:'北京大学',
                address:'北京大学在北京呀'
              },
              {
                title:'南京大学',
                address:'江苏南京'
              },
              {
                title:'清华大学',
                address:'清华大学在北京呀'
              },
              {
                title:'上交',
                address:'上海交通大学或上海交易所'
              }
            ],
            addressData:[
              {
                name:'周公瑾',
                sex:'男',
                tel:'13518181118',
                position:'南昌大学共青学院-学生公寓',
                address:'宿舍20栋737'
              },
              {
                name:'周公瑾',
                sex:'男',
                tel:'13518181118',
                position:'南昌大学共青学院-学生公寓',
                address:'宿舍东侧左边20栋737的厕所'
              },
              {
                name: '周公瑾',
                sex: '男',
                tel: '13518181118',
                position: '南昌大学共青学院-学生公寓',
                address: '宿舍东侧左边20栋737的厕所'
              }
            ],
          }
      }
    }
</script>

<style scoped>
.address{
  display: inline-block;
  float:left;
  text-align: left;
  width:100%;
}
.title{
  list-style: none;
  display: inline-block;
  text-align: left;
  width:980px;
}
.title span{
  font-size:20px;
  font-weight: bold;
  color:#303133;
  margin:30px auto 20px 30px;
  display: inline-block;
}
.title hr{
  margin:0px 20px 10px 20px;
  background-color:#E4E7ED;
}
  .newAddress{
    list-style: none;
    display: inline-block;
    float: left;
    width: 294px;
    margin:10px 15px;
    border: 1px #C0C4CC solid;
    border-radius: 1px;
    height:100px;
    text-align: center;
    line-height: 100px;
    cursor:pointer;
  }
  .newAddress span{
    margin: auto 10px;
    font-size:15px;
    color:#606266;
  }
  .newAddress li{
    font-size:15px;
    color:#606266;
  }
  .newAddress:hover{
    border-color: #2597BA;
  }
.newAddress:hover  li,
.newAddress:hover span{
  color:#2597BA;
}
.el-autocomplete-suggestion li{
  line-height: normal;
  padding:3px auto;
}
.el-form .el-form-item .el-input{
  width:300px;
}
.name{
  margin:0px;
  padding:0px;
  color:#303133;
}
  .addr{
    font-size:10px;
    color:#606266;
    margin:0px;
    padding:0px;
  }
.el-dialog__wrapper{
  overflow: hidden;
}
</style>
