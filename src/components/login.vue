<template>
    <div id="login">
        <div class="bg">
            <img src="../assets/images/bg_login.jpg" alt="">
        </div>
        <div class="center">
            <div class="left">
                <div class="imgs">
                    <img src="../assets/images/big_logo.png" alt="">                    
                </div>
                <!-- <div class="login_logo">
                    <img src="../assets/images/login_logo.png" alt="">
                </div> -->
            </div>
            <div class="right">
                <div>
                    <h4>欢迎登录</h4>
                    <input type="text" placeholder="请输入用户名" onkeyup="this.value=this.value.replace(/\s+/g,'')" v-model="login.input_user"   @keyup.enter="toPass()">
                    <input type="password" placeholder="请输入密码" onkeyup="this.value=this.value.replace(/\s+/g,'')" v-model="login.input_password" class="password" @keyup.enter="toSub()">
                    <input class="submit" type="button" value="登录" @click="toSub()">
                </div>
            </div>
        </div>
    </div>

</template>
<script>
export default {
    name: "login",
    data(){
        return {
            login: {
                userinfo: {},
                input_user: "",
                input_password:"",
            }
            
        }
    },
    mounted: function(){
        let _this = this;
    },
    methods:{
        toPass(){
            let _this = this;
            $(".password").focus();
        },
        M_List(){
            let _this = this;
            
        },
        toSub(){
            let _this = this;
            let json = { 'u' : _this.login.input_user , 'p' : _this.login.input_password }
            let formdata = _this.$config.formData(json); 
            if( _this.login.input_user != "" && _this.login.input_password != ""){
                _this.$axios.post( _this.$url.login , formdata).then((res)=>{
                    if( res.data.code == 1 ){
                        let data = res.data.data ;
                        sessionStorage.setItem("userinfo", JSON.stringify(data) );
                        _this.$router.push({path: "overview" });
                    }else {
                        _this.$message.error(res.data.msg);
                    }
                }).catch((err)=>{
                    _this.$message.error("服务器繁忙请稍后再试！");
                });
            }else {
                _this.$message.error("请输入正确的用户名和密码！");
            }
        },
        
    }
}
</script>
<style scoped>
    #login {
        width: 100%;
        height: 100%;
        position: relative;
    }
    .bg {
        width: 100%;
        height: 100%;
        position: absolute;
        font-size: 0;
    }
    .bg img {
        width: 100%;
        height: 100%;
    }
    .center {
        width: 700px;
        height: 400px;
        background-color: rgba(95,69,255, 0.1);
        box-shadow: 0px 13px 9px 0px 
            rgba(4, 0, 0, 0.26);
        border-radius: 10px;
        position: absolute;
        left: 50%;
        top: 47%;
        transform: translate(-50%,-50%);
        font-size: 0;
    }
    .center>div {
        display: inline-block;
        vertical-align: bottom;
        width: 50%;
        font-size: 14px; 
        height: 100%;
        position: relative;
    }
    .imgs img{
        width: 100%;
    }
    .imgs {
        width: 112px;
        position: absolute;
        top: 50%;
        transform: translate(-50%,-50%);
        left: 50%;
    }
    .right>div {
        /* margin: 0px 40px 0px 20px; */
        position: absolute;
        width: 80%;
        top: 45%;
        transform: translate(-50%,-50%);
        left: 45%;
    }
    .right input {
        width: 100%;
        height: 40px;
        border: 0;
        outline: none;
        background: rgba(0,0,0,0);
        border-bottom: 1px solid #4b5377;
        color: #98a1c9;
        margin-top: 20px;
        font-size: 16px;
        padding-left: 10px;
    }
    .right input[type='button'] {
        border: 0;
        color: #fff;
        background-color: #6477c8;
	    border-radius: 6px;
    }
    h4 {
        font-size: 20px;
        font-weight: 400;
	    letter-spacing: 2px;
	    color: #e7ecff;
        text-align: center;
        margin-bottom: 20px;
        margin-top: 0;
    }
    ::-webkit-input-placeholder { /* WebKit browsers */
        color:   #98a1c9;
    }
    :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
        color:   #98a1c9;
    }
    ::-moz-placeholder { /* Mozilla Firefox 19+ */
        color:   #98a1c9;
    }
    :-ms-input-placeholder { /* Internet Explorer 10+ */
        color:   #98a1c9;
    }
    .forget {
        font-size: 12px;
        text-align: right;
        margin-top: 10px;
        color: #d3d5df;
        cursor: pointer;
    }
    .forget:active {
        opacity: 0.8;
    }
    .right .submit {
        letter-spacing: 2px;
        margin-top: 30px;
    }
    .submit:active {
        opacity: 0.8;
        cursor: pointer;
    }
    .login_logo {
        position: absolute;
        left: 17%;
        transform: translateX(-50%);
        top: 9%;
    }

</style>

