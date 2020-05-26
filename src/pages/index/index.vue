<template>
  <view class="page index">
    <view class="page-section swiper">
      <view class="page-section-spacing">
        <swiper class="swiper" indicator-dots :autoplay="false">
          <swiper-item>
            <view class="swiper-item">
              <image src="@/static/images/banner/banner_1.png" class="banner-img" mode="aspectFit" />
            </view>
          </swiper-item>
          <swiper-item>
            <view class="swiper-item">
              <image src="@/static/images/banner/banner_2.png" class="banner-img" mode="aspectFit" />
            </view>
          </swiper-item>
          <swiper-item>
            <view class="swiper-item">
              <image src="@/static/images/banner/banner_3.png" class="banner-img" mode="aspectFit" />
            </view>
          </swiper-item>
        </swiper>
      </view>
    </view>
    <view class="page-section quick-entry">
      <uni-grid :column="4">
        <uni-grid-item>
          <text class="text">文本</text>
        </uni-grid-item>
        <uni-grid-item>
          <text class="text">文本</text>
        </uni-grid-item>
        <uni-grid-item>
          <text class="text">文本</text>
        </uni-grid-item>
        <uni-grid-item>
          <text class="text">文本</text>
        </uni-grid-item>
      </uni-grid>
    </view>
  </view>
</template>

<script lang="ts">
  import { Vue, Component } from "vue-property-decorator"
  import uniGrid from "@dcloudio/uni-ui/lib/uni-grid/uni-grid.vue"
  import uniGridItem from "@dcloudio/uni-ui/lib/uni-grid-item/uni-grid-item.vue"

  @Component({
    components: {
      uniGrid,
      uniGridItem,
    },
  })
  export default class Index extends Vue {
    private title = "hello"

    public mounted() {}
  }
</script>

<style lang="scss" scoped>
  .page.index {
    .swiper {
      margin-top: 20upx;
      $img-height: 345upx;
      height: $img-height;
      .swiper-item {
        .banner-img {
          width: 100%;
          height: $img-height;
        }
      }
    }
    .quick-entry {
      margin-top: 20upx;
      padding: 0 20upx;
    }
  }
</style>
