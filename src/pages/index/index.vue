<template>
  <!-- 首页 -->
  <view class="page index">
    <!-- banner -->
    <view class="page-section swiper-container">
      <swiper
        class="swiper"
        indicator-dots
        autoplay
        circular
        indicator-color="rgba(255,255,255,0.47)"
        indicator-active-color="rgba(255,255,255,1)"
      >
        <swiper-item v-for="item of bannerList" :key="item.id">
          <view class="swiper-item">
            <image :src="item.src" class="banner-img" mode="aspectFit" />
          </view>
        </swiper-item>
      </swiper>
    </view>
    <!-- 快速入口 -->
    <view class="page-section quick-entry">
      <uni-grid :column="4" :show-border="false">
        <uni-grid-item v-for="(item, index) of quickEntrySetting" :key="index">
          <img :src="item.img" class="quick-img" />
          <text class="text">{{ item.text }}</text>
        </uni-grid-item>
      </uni-grid>
    </view>
    <!-- 信息卡片 -->
    <view class="page-section sys-info-container box-shadow">
      <view class="sys-info-container__item sys-count">
        <view class="sys-count__item">
          <view class="number">{{ sysCount.totalVisits }}</view>
          <view class="text">总访问量</view>
        </view>
        <view class="sys-count__item">
          <view class="number">{{ sysCount.totalDemands }}</view>
          <view class="text">总需求量</view>
        </view>
        <view class="sys-count__item">
          <view class="number">{{ sysCount.totalHighSupply }}</view>
          <view class="text">优质供应商</view>
        </view>
      </view>
      <view class="sys-info-container__item goods-market"></view>
      <view class="sys-info-container__item order-deal"></view>
    </view>
  </view>
</template>

<script lang="ts">
  import { Vue, Component } from "vue-property-decorator"
  import uniGrid from "@dcloudio/uni-ui/lib/uni-grid/uni-grid.vue"
  import uniGridItem from "@dcloudio/uni-ui/lib/uni-grid-item/uni-grid-item.vue"
  import { WxBusinessService } from "@/services/wx.business.service"
  import { RequestParams } from "@/core/http"
  import { SysCount, BannerProps } from "../../config/types/business.type"
  import CommonService from "@/utils/common"

  @Component({
    components: {
      uniGrid,
      uniGridItem,
    },
  })
  export default class Index extends Vue {
    private title = "hello"
    private sysCount: SysCount = {
      totalVisits: 0,
      totalHighSupply: 0,
      totalDemands: 0,
    }

    /** 快捷入口配置 */
    private quickEntrySetting = [
      {
        text: "我的发布",
        img: require("@/static/images/quick-entry/my-publish.png"),
      },
      {
        text: "行业百科",
        img: require("@/static/images/quick-entry/knows.png"),
      },
      {
        text: "行业动态",
        img: require("@/static/images/quick-entry/new-info.png"),
      },
      {
        text: "企业快查",
        img: require("@/static/images/quick-entry/query.png"),
      },
    ]

    private bannerList: BannerProps[] = []

    private wxBusinessService = new WxBusinessService()

    public mounted() {
      this.wxBusinessService.getHomeStatistics(new RequestParams()).subscribe((data) => (this.sysCount = data))
      this.wxBusinessService.getHomeBannerList(new RequestParams()).subscribe((data) => {
        const result = data.result
        result.forEach((item) => (item.src = CommonService.getAttachUrl(item.picturePath)))
        this.bannerList = result
      })
    }
  }
</script>

<style lang="scss" scoped>
  .page.index {
    .swiper-container {
      margin-top: 20px;

      $img-height: 345px;
      .swiper {
        height: $img-height;
      }
      .swiper-item {
        .banner-img {
          width: 100%;
          height: $img-height;
        }
      }
    }
    .quick-entry {
      margin-top: 20px;
      .quick-img {
        height: 88px;
        width: 88px;
      }
      .text {
        color: #555555;
        font-size: 26px;
        margin-top: 16px;
      }
    }

    .sys-info-container {
      height: 380px;
      background: #ffffff;
      margin: 20px;
      padding: 32px;

      border-radius: 16px;
      display: flex;
      flex-flow: column nowrap;
      &__item {
        flex: 1;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        overflow: hidden;
      }
      .sys-count {
        justify-content: space-around;
        border-bottom: solid 1px $uni-border-color;
        &__item {
          text-align: center;
          .number {
            color: $uni-color-primary;
            font-size: 36px;
            font-weight: bold;
          }
          .text {
            color: $uni-text-color-grey;
            font-size: 24px;
          }
        }
      }
    }
  }
</style>
