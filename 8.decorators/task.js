//Задача № 1
function cachingDecoratorNew(func) {
    let cache = [];
  
    function wrapper(...args) {
      const hash = (JSON.stringify(args)); // вычисляем хеш аргументов
      let objectInCache = cache.find((item) => item.hash === hash); // ищем элемент в кеше по хешу
  
      if (objectInCache) { // если элемент найден в кеше
        console.log("Из кэша: " + objectInCache.value);
        return "Из кэша: " + objectInCache.value;
      }
  
      let result = func(...args); // вызываем функцию и получаем результат
      cache.push({ hash, value: result }); // добавляем новый элемент в кеш
  
      if (cache.length > 5) { // если количество элементов в кеше больше пяти
        cache.shift(); // удаляем первый элемент из кеша
      }
  
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;
    }
  
    return wrapper;
  }
  
  const addAndMultiply = (a, b, c) => (a + b) * c;
  const upgraded = cachingDecoratorNew(addAndMultiply);
  console.log(upgraded(1, 2, 3)); // вычисляем: 9
  console.log(upgraded(1, 2, 3)); // из кэша: 9
  console.log(upgraded(2, 2, 3)); // вычисляем: 12
  console.log(upgraded(3, 2, 3)); // вычисляем: 15
  console.log(upgraded(4, 2, 3)); // вычисляем: 18
  console.log(upgraded(5, 2, 3)); // вычисляем: 21
  console.log(upgraded(6, 2, 3)); // вычисляем: 18 (при этом кеш для 1, 2, 3 уничтожается)
  console.log(upgraded(1, 2, 3)); // вычисляем: 9 (снова вычисляем, кеша нет)
  
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