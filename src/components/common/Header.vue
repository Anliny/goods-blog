<template>
		<header class="header-navigation" id="header">
        <nav><div class="logo"><a href="/">代丰个人博客</a></div>
            <h2 id="mnavh"><span class="navicon"></span></h2>
            <ul id="starlist">
              <li><router-link to='/'>网站首页</router-link></li>
              <li><router-link to="share">我的相册</router-link></li>
              <li><a href="list.html">我的日记</a></li>
              <li><a href="about.html">关于我</a></li>
              <li><router-link to="gbook">留言</router-link></li>
              <li><a href="info.html">内容页</a></li>
              <li><a href="infopic.html">内容页</a></li>
            </ul>
        </nav>
      </header>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {

    }
  }
}
</script>

<style scoped >
</style>
