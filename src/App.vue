<script lang="ts">
  import { Vue, Component } from "vue-property-decorator"

  export default class App extends Vue {
    static mpType = "app"
    onLaunch() {
      console.log("App Launch")
    }
    onShow() {
      console.log("App Show")
    }
    onHide() {
      console.log("App Hide")
    }
  }
</script>

<style lang="scss">
  /*每个页面公共css */
</style>

<style lang="scss">
  /* 首页 */
  .page.index {
    .quick-entry {
      .uni-grid-wrap {
        .uni-grid-item {
          .uni-grid-item__box {
            justify-content: center;
            align-items: center;
          }
        }
      }
    }
  }
</style>
