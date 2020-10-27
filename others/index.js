var car = {
  model:"honda",
  wheels:4,
  honkSound:"beerp",
  registeredDrivers:['jane','john'],
  hasHadAccident:false,
  honk: function () {
    console.log(this.honkSound)
  }
}

// console.log(car.model)
// console.log(car["wheels"]);
car.honk()


// 厳密等価 === 
// 等価 ==  
// 厳密不等価 !==
// 不等価  != 
//  >大なり演算子　
//  >= 大なりイコール　
//  < 小なり演算子
//  <=　小なりイコール

