<template>
  <div class="tm-bg" style="height: 100%; width: 100%;">
    <div class="login-contianer">
      <div class="login-form">
        <span>帐号登陆</span>
        <div class="form-user">
          <div class="item">
            <div class="f-text">
              <label>
                <Icon type="ios-people" :size="20" />用户名：
              </label>
            </div>
            <div class="f-input">
              <input type="text"  placeholder="输入用户" />
            </div>
            <div class="f-remove" >
              <Icon type="ios-close-circle" />
            </div>
          </div>
          <div class="item">
            <div class="f-text">
              <label>
                <Icon type="ios-lock" :size="20" />密&nbsp;&nbsp;&nbsp;码：
              </label>
            </div>
            <div class="f-input">
              <input type="password"  placeholder="输入密码" />
            </div>
            <div class="f-remove" >
              <Icon type="ios-close-circle" />
            </div>
          </div>
        </div>
        <div style="loging-btn">
          <Button size="large" type="info" @click="login" long>登陆</Button>
        </div>
        <div class="action">
          <a @click="()=>{}">注册</a>
          <a @click="()=>{}">忘记密码</a>
        </div>
      </div>
    </div>
    <div class="login-footer">
      1
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    toGitHub() {
    },
    login() {

    }
  }
};
</script>
<style lang="less" scoped>
.tm-bg {
  min-width: 700px;
  background-color: #330000;
  background: url("../assets/img/bg.jpg");
  background-attachment: fixed;
  background-size: cover;
}
.f-remove {
  display: none;
  cursor: pointer;
}

// .log-bg {
//   width: 100%;
//   height: 100%;
//   background-image: url(xxxxx.jpg);
//   background-repeat: no-repeat;
//   background-size: 100% 100%;
//   -moz-background-size: 100% 100%;
// }
.form-user {
  margin: 40px 0;
  .item:hover .f-remove {
    display: block;
  }
  .item {
    display: flex;
    padding-bottom: 5px;
    border-bottom: 1px solid #eee;
    margin-bottom: 30px;
    display: flex;
    .f-text {
      color: #868484;
      font-weight: 400;
      width: 90px;
      font-size: 16px;
      i {
        position: relative;
        top: -2px;
        right: 5px;
      }
    }
    .f-input {
      border: 0px;
      flex: 1;
      input {
        padding-left: 15px;
        font-size: 16px;
        font-weight: 400;
        color: #807f7f;
        width: 100%;
        outline: none;
        border: none;
      }
    }
    input:focus {
      outline: none;
      background-color: transparent;
    }
    input::selection {
      background: transparent;
    }
    input::-moz-selection {
      background: transparent;
    }
  }
}
input:-webkit-autofill {
  box-shadow: 0 0 0px 1000px white inset;
}
.login-contianer {
  transform: translateY(-50%);
  top: 50%;
  position: absolute;
  margin: 0 auto;
  left: 0;
  width: 500px;
  height: 560px;
  right: 0;
  text-align: center;
  .login-form {
    margin-top: 25px;
    border-radius: 5px;
    padding: 10px 30px 20px 30px;
    right: 0;
    left: 0;
    margin: 0 auto;
    position: absolute;
    width: 400px;
    min-height: 340px;
    background: white;
    box-shadow: 0px 4px 21px #d6d6d6;
  }
}
.login-project {
  line-height: 70px;
  img {
    height: 80px;
  }
  .project-name {
    font-size: 50px;
    position: relative;
    color: white;
    font-weight: 600;
    margin-left: 9px;
  }
  .desc {
    color: wheat;
    font-size: 15px;
  }
}
.loging-btn {
  margin-top: 40px;
}
.action {
  text-align: right;
  margin-top: 20px;
  a {
    margin-left: 20px;
  }
}
.login-footer {
  padding: 10px;
  background: #4c4b4b;
  text-align: center;
  font-size: 16px;
  position: absolute;
  /* margin-bottom: 0px; */
  /* margin-top: 20px; */
  width: 100%;
  bottom: 0px;
  border-top: 1px solid #969393;
  i {
    position: relative;
    top: -2px;
    margin-right: 5px;
  }
  a {
    margin-left: 30px;
    color: #f9ebd0;
  }
}
</style>
<style scoped>
.login-contianer >>> .ivu-form .ivu-form-item-content {
  margin-left: 0px !important;
}
</style>
<style>
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0px 1000px white inset !important;
  box-shadow: 0 0 0 60px #eee inset;
  -webkit-text-fill-color: #878787;
}
</style>
