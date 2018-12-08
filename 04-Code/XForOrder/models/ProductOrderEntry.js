/**
 * 商品订单项
 */
function ProductOrderEntry() {

  this.productSID = null;  //商品标识
  this.productObj = null;  //商品对象
  this.orderUnitPrice = 0;  //订单单价（实际单价）
  this.count = 0;  //数量
  this.accountOrderEntrySID = null;  //账号订单项标识
  this.accountOrderEntryObj = null;  //账号订单项对象

  //获取总价
  this.getTotalPrice = function() {
    if (this.productObj == null) {
      return -1;
    }
    return this.productObj.unitPrice * this.count;
  }

  //获取总数量
  this.getTotalCount = function() {
    return this.count;
  }
  
}


/**
 * 商品订单项集合
 */
function ProductOrderEntryMap() {
    
  this.map = new Map();

  //添加商品订单项
  this.addProductOrderEntry = function (productOrderEntry) {
    this.map.set(productOrderEntry.productSID, productOrderEntry);
  }

  //根据商品SID获取商品订单项
  this.getProductOrderEntryByProductSID = function (productSID) {
    return this.map.get(productSID);
  }

  //获取全部商品订单项
  this.getProductOrderEntriesByAll = function () {
    var productOrderEntries = new Array();
    this.map.forEach(
      function (value, key, map) {
        productOrderEntries.push(value);
      }
    );
    return productOrderEntries;
  }

  //根据商品SID从集合中移除商品订单项
  this.removeProductOrderEntryByProductSID = function (productSID) {
    this.map.delete(productSID);
  }

  //清空商品订单项
  this.clearProductOrderEntries = function () {
    this.map.clear();
  }

}


