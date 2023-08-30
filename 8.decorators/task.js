
function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = md5(args); 
    let objectInCache = cache.find((item) => item.hash === hash); 
    let index = cache.findIndex((arr) => arr.hash === hash);
    if (objectInCache) {
      
      console.log(`Из кэша: ${cache[index].result}`); 
      return `Из кэша: ${cache[index].result}`;
    }


    let result = func(...args); 
    cache.push({ hash, result }); 
    if (cache.length > 5) {
      cache.shift(); 
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }
  return wrapper;
}

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
    
  }
  wrapper.count = 0;
  wrapper.allCount = 0;
  return wrapper;
}