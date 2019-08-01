<template>
  <div>
    <!-- <image class="login-user-image" src="{{logged ? userInfo.avatarUrl : 'static/images/default-avatar.png'}}"/> -->
    <button open-type="getUserInfo" @getuserinfo="bindGetUserInfo">
      授权登录
    </button>
    <!-- <text wx:else>{{userInfo.nickName}}</text> -->
  </div>
</template>

<script>
import { $init, $digest } from '../../utils/page.data'
import { $login, $request, Session } from '../../utils/page.auth'
// import config from '../../config'

// const { regeneratorRuntime } = global
console.log('login', $login)
export default {
  data: {
    logged: false,
    userInfo: {}
  },

  methods: {
    bindGetUserInfo (e) {
      if (this.data.logged) return

      try {
        $login().then(userInfo => {
          this.data.logged = true
          this.data.userInfo = userInfo

          $request({ url: 'config.url.profile' }).then(res => {
            console.log('>>>1>>> remote user:', res)

            $digest(this)
          })
        })
      } catch (err) {
        console.log('+++1+++ error:', err)
      }
    },

    onLoad (options) {
      $init(this)

      try {
        const session = Session.get()

        if (session) {
          this.data.logged = true
          this.data.userInfo = session.userInfo

          $request({ url: 'config.url.profile' }).then(res => {
            console.log('>>>2>>> remote user:', res)

            $digest(this)
          })
        }
      } catch (err) {
        console.log('+++2+++ error:', err)
      }
    }
  }
}
</script>

<style scoped>
.login-user-image {
  width: 80px;
  height: 80px;
}
</style>
