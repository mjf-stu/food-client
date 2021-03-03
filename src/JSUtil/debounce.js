export default function debounce(fn,dely) {
    let timer = null
    return function () {
      if(timer) clearTimeout(timer)
      timer = setTimeout(() => {
        fn()
      }, dely);
    }
}