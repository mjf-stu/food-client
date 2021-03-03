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

### 可以优化的地方
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