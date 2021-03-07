# food-client

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 可以优化的地方与日记
date1
tabbarContain文件中的
      :class="{ selected: current === index }"
可以改成
      :class="{ selected: itemRouter === $router.path }"
好处：可以省略watch监听

date2
数据库 in 语句的使用
      let selectQuery = "select * from shopmainmsg where shop_id in ("+[1,2,3].toString()+")"

date3
星星评价
      利用俩个星星叠在一起---通过overflow hidden的方式 + 数据库传过来的数字进行控制有颜色的星星显示多宽的内容

date5
1.通过判断一个值在当前索引和下一个索引之间，最后都会由于n+1造成数组溢出，可以通过给数组最后添加一个无求大的值，这样就可以避免循环到最后一个tag出现数组溢出的问题
2.使用vuex 相同shop_id && food_id 使用计算属性来获取可以让 多个相同id的menuitem组件的数据同步更新

data7
注意：this.$bus.$on("showTips",(info)=>{
         console.log(info)
         this.msg = info
     })
以上类型的函数，回调函数最好使用箭头函数，否则内部的this不会指向当前的vue组件，导致一系列操作不能进行响应