/**
 * 商品
 */
function Product() {
    
  this.sid = null;  //唯一标识
  this.name = null;  //名称
  this.desc = null;  //描述
  this.imageUri = null;  //图像Uri
  this.imageObj = null;  //图像对象
  this.unit = null;  //单位
  this.unitPrice = 0;  //单位价格（单价）
  this.shopSID = null;  //商店标识
  this.shopObj = null;  //商店对象

}


/**
 * 商品集合
 */
function ProductMap() {

  this.map = new Map();

  //添加商品
  this.addProduct = function (product) {
    this.map.set(product.sid, product);
  }

  //根据SID获取商品
  this.getProductBySID = function (sid) {
    return this.map.get(sid);
  }

  //获取全部商品
  this.getProductsByAll = function () {
    var products = new Array();
    this.map.forEach(
      function (value, key, map) {
        products.push(value);
      }
    );
    return products;
  }

  //根据SID从集合中移除商品
  this.removeProductBySID = function (sid) {
    this.map.delete(sid);
  }

  //清空商品
  this.clearProducts = function () {
    this.map.clear();
  }
  
}