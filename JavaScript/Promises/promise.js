// Just an example from codecademy

const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};


const myExecutor = (resolve, reject) => {
  const { sunglasses, pants, bags } = inventory;

  if (sunglasses > 0) {
    resolve('Sunglasses order processed.')
  } else reject('That item is sold out.')
}

const orderSunglasses = () => { 
  return new Promise(myExecutor)
  }

  const orderPromise = orderSunglasses()
  console.log(orderPromise)
