<template>
  <div class="demo-block">
    <slot name="source"></slot>
    <div class="meta"
         ref="meta">
      <div class="description"
           v-if="$slots.default">
        <slot></slot>
      </div>
      <slot name="highlight"></slot>
    </div>
    <div class="demo-block-control"
         ref="control"
         @click="handleExpanded">
      <transition name="text-slide">
        <span>{{ controlText }}</span>
      </transition>
    </div>

  </div>
</template>


<script type="text/babel">
export default {
  data() {
    return {
      code: false,
      isExpanded: false,
      fixedControl: false,
      scrollParent: null
    };
  },
  props: {
    default() {
      return {};
    }
  },
  methods: {
    handleExpanded() {
      const code = this.$route.meta.code;
      if (code === true) {
        this.code = false;
        this.$nextTick(() => {
          this.$refs.logins.handleOpen();
        })
      } else {
        this.code = true;
      }
      if (this.code) {
        this.isExpanded = !this.isExpanded
      }

    },
    scrollHandler() {
      // const { top, bottom, left } = this.$refs.meta.getBoundingClientRect();
      // this.fixedControl =
      //   bottom > document.documentElement.clientHeight &&
      //   top + 44 <= document.documentElement.clientHeight;
      // this.$refs.control.style.left = this.fixedControl ? `${left}px` : "0";
    },

    removeScrollHandler() {
      this.scrollParent &&
        this.scrollParent.removeEventListener("scroll", this.scrollHandler);
    }
  },

  computed: {
    lang() {
      return this.$route.path.split("/")[1];
    },

    langConfig() {
      return {
        "hide-text": "隐藏代码",
        "show-text": "显示代码"
      };
    },

    blockClass() {
      return `demo-${this.lang} demo-${this.$router.currentRoute.path
        .split("/")
        .pop()}`;
    },

    iconClass() {
      return this.isExpanded ? "el-icon-caret-top" : "el-icon-caret-bottom";
    },

    controlText() {
      return this.isExpanded
        ? this.langConfig["hide-text"]
        : this.langConfig["show-text"];
    },

    codeArea() {
      return this.$el.getElementsByClassName("meta")[0];
    },

    codeAreaHeight() {
      if (this.$el.getElementsByClassName("description").length > 0) {
        return (
          this.$el.getElementsByClassName("description")[0].clientHeight +
          this.$el.getElementsByClassName("highlight")[0].clientHeight +
          20
        );
      }
      return this.$el.getElementsByClassName("highlight")[0].clientHeight;
    }
  },

  watch: {
    isExpanded(val) {
      this.codeArea.style.height = val ? `${this.codeAreaHeight + 1}px` : "0";
      if (!val) {
        this.fixedControl = false;
        this.$refs.control.style.left = "0";
        this.removeScrollHandler();
        return;
      }
      setTimeout(() => {
        this.scrollParent = document.querySelector(
          ".page-component__scroll > .el-scrollbar__wrap"
        );
        this.scrollParent &&
          this.scrollParent.addEventListener("scroll", this.scrollHandler);
        this.scrollHandler();
      }, 200);
    }
  },

  mounted() {
    this.$nextTick(() => {
      let highlight = this.$el.getElementsByClassName("highlight")[0];
      if (this.$el.getElementsByClassName("description").length === 0) {
        highlight.style.width = "100%";
        highlight.borderRight = "none";
      }
    });
  },

  beforeDestroy() {
    this.removeScrollHandler();
  }
};
</script>

<style lang="scss">
.demo-block {
  margin-top: 20px;
  border: solid 1px #ebebeb;
  border-radius: 3px;
  transition: 0.2s;

  &.hover {
    box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6), 0 2px 4px 0 rgba(232, 237, 250, 0.5);
  }

  code {
    font-family: Menlo, Monaco, Consolas, Courier, monospace;
  }

  .demo-button {
    float: right;
  }

  .source {
    padding: 24px;
  }

  .meta {
    background-color: #fafafa;
    border-top: solid 1px #eaeefb;
    overflow: hidden;
    height: 0;
    transition: height 0.2s;
  }

  .description {
    padding: 20px;
    box-sizing: border-box;
    border: solid 1px #ebebeb;
    border-radius: 3px;
    font-size: 14px;
    line-height: 22px;
    color: #666;
    word-break: break-word;
    margin: 10px;
    background-color: #fff;

    p {
      margin: 0;
      line-height: 26px;
    }

    code {
      color: #5e6d82;
      background-color: #e6effb;
      margin: 0 4px;
      display: inline-block;
      padding: 1px 5px;
      //font-size: 12px;
      border-radius: 3px;
      height: 18px;
      line-height: 18px;
    }
  }

  .highlight {
    pre {
      margin: 0;
    }

    code.hljs {
      margin: 0;
      border: none;
      max-height: none;
      border-radius: 0;

      &::before {
        content: none;
      }
    }
  }
  .avue-ueditor__dialog {
    z-index: 1024;
  }
  .demo-block-control {
    border-top: solid 1px #eaeefb;
    height: 44px;
    box-sizing: border-box;
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    text-align: center;
    margin-top: -1px;
    color: #d3dce6;
    cursor: pointer;
    position: relative;

    &.is-fixed {
      position: fixed;
      bottom: 0;
      width: 868px;
    }

    i {
      font-size: 16px;
      line-height: 44px;
      transition: 0.3s;
    }

    > span {
      position: absolute;
      transform: translateX(-30px);
      font-size: 14px;
      line-height: 44px;
      transition: 0.3s;
      display: inline-block;
    }

    &:hover {
      color: #409eff;
      background-color: #f9fafc;
    }

    & .text-slide-enter,
    & .text-slide-leave-active {
      opacity: 0;
      transform: translateX(10px);
    }

    .control-button {
      line-height: 26px;
      position: absolute;
      top: 0;
      right: 0;
      font-size: 14px;
      padding-left: 5px;
      padding-right: 25px;
    }
  }
}
</style>
