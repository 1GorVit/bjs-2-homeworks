//Задача № 1
function cachingDecoratorNew(func) {
  let cache = [];
  function wrapper(...args) {
    const hash = md5(args);
    let objectInCache = cache.find( item => item.hash === hash);
    if (objectInCache) {
      return `Из кэша: ${objectInCache.value}`;
    }
    let result = func(...args);
    cache.push({"hash": hash, "value": result});
    if (cache.length > 5) {
      cache.shift();
    }
    return `Вычисляем: ${result}`;
  }
  return wrapper;
}
//Задача № 2
function debounceDecoratorNew(func, delay) {
  //let args = [];
  let timeoutId = null;
  function wrapper(...args) {
    if (timeoutId === null) {
      console.log(func.call(this, ...args));
      console.log("вызвали first колбек");
      wrapper.count++;
    }
    if (timeoutId) {
      console.log("удалили текущий таймаут");
      clearTimeout(timeoutId);
    }
    console.log("создаем новый таймаут");
    timeoutId = setTimeout(
      () => {
        timeoutId = true;
        console.log(func(...args));
        wrapper.count++;
        console.log("вызвали колбек");
      },
      delay,
      wrapper.allCount++
    );
    // return function (...args) {
    // }
  }
  wrapper.count = 0;
  wrapper.allCount = 0;
  return wrapper;
}