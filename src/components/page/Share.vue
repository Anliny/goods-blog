<template>
    <article>
        <div class="picbox">
          <ul v-for='itemRow in shareList'>
            <li data-scroll-reveal="enter bottom over 1s" v-for='itemCol in itemRow'>
              <a href="/"><i><img :src="itemCol.img"></i>
                <div class="picinfo">
                  <h3>{{itemCol.title}}</h3>
                  <span>{{itemCol.content}}</span> 
                </div>
              </a>
            </li>
            <!--<li data-scroll-reveal="enter bottom over 1s" ><a href="/"><i><img src="images/2.jpg"></i>
              <div class="picinfo">
                <h3>个人博客模板《simple》</h3>
                <span>好咖啡要和朋友一起品尝，好“模板”也要和同样喜欢它的人一起分享。</span> </div>
              </a></li>-->
          </ul>
          <!--<ul>
              <li data-scroll-reveal="enter bottom over 1s" ><a href="/"><i><img src="images/3.jpg"></i>
              <div class="picinfo">
                <h3>个人博客模板《simple》</h3>
                <span>好咖啡要和朋友一起品尝，好“模板”也要和同样喜欢它的人一起分享。</span> </div>
              </a></li>
                <li data-scroll-reveal="enter bottom over 1s" ><a href="/"><i><img src="images/5.jpg"></i>
              <div class="picinfo">
                <h3>个人博客模板《simple》</h3>
                <span>好咖啡要和朋友一起品尝，好“模板”也要和同样喜欢它的人一起分享。</span> </div>
              </a></li>
          </ul>
          <ul>
                <li data-scroll-reveal="enter bottom over 1s" ><a href="/"><i><img src="images/7.jpg"></i>
              <div class="picinfo">
                <h3>个人博客模板《simple》</h3>
                <span>好咖啡要和朋友一起品尝，好“模板”也要和同样喜欢它的人一起分享。</span> </div>
              </a></li>
                <li data-scroll-reveal="enter bottom over 1s" ><a href="/"><i><img src="images/8.jpg"></i>
              <div class="picinfo">
                <h3>个人博客模板《simple》</h3>
                <span>好咖啡要和朋友一起品尝，好“模板”也要和同样喜欢它的人一起分享。</span> </div>
              </a></li> 
          </ul>
          <ul>
            <li data-scroll-reveal="enter bottom over 1s" ><a href="/"><i><img src="images/4.jpg"></i>
              <div class="picinfo">
                <h3>个人博客模板《simple》</h3>
                <span>好咖啡要和朋友一起品尝，好“模板”也要和同样喜欢它的人一起分享。</span> </div>
              </a></li>
                <li data-scroll-reveal="enter bottom over 1s" ><a href="/"><i><img src="images/6.jpg"></i>
              <div class="picinfo">
                <h3>个人博客模板《simple》</h3>
                <span>好咖啡要和朋友一起品尝，好“模板”也要和同样喜欢它的人一起分享。</span> </div>
              </a></li>
          </ul>-->
      </div>
  </article>
</template>

<script>
export default {
  name:'share',
  data() {
    return {
      shareList:[
        [
            {
              img:require('@/assets/images/6.jpg'),
              title:'个人博客模板',
              content:'好咖啡要和朋友一起品尝，好“模板”也要和同样喜欢它的人一起分享。'
            },{
              img:require('@/assets/images/6.jpg'),
              title:'个人博客模板',
              content:'好咖啡要和朋友一起品尝，好“模板”也要和同样喜欢它的人一起分享。'
            }
        ],[
            {
              img:require('@/assets/images/6.jpg'),
              title:'个人博客模板',
              content:'好咖啡要和朋友一起品尝，好“模板”也要和同样喜欢它的人一起分享。'
            },{
              img:require('@/assets/images/6.jpg'),
              title:'个人博客模板',
              content:'好咖啡要和朋友一起品尝，好“模板”也要和同样喜欢它的人一起分享。'
            }
        ],[
            {
              img:require('@/assets/images/6.jpg'),
              title:'个人博客模板',
              content:'好咖啡要和朋友一起品尝，好“模板”也要和同样喜欢它的人一起分享。'
            },{
              img:require('@/assets/images/6.jpg'),
              title:'个人博客模板',
              content:'好咖啡要和朋友一起品尝，好“模板”也要和同样喜欢它的人一起分享。'
            }
        ],[
            {
              img:require('@/assets/images/6.jpg'),
              title:'个人博客模板',
              content:'好咖啡要和朋友一起品尝，好“模板”也要和同样喜欢它的人一起分享。'
            },{
              img:require('@/assets/images/6.jpg'),
              title:'个人博客模板',
              content:'好咖啡要和朋友一起品尝，好“模板”也要和同样喜欢它的人一起分享。'
            }
        ]
      ]
    }
  },
}
</script>

<style scoped >
</style>
