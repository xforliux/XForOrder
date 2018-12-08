/**
 * 订单
 */
function Order() {

  this.sid = null;  //订单标识
  this.name = null;  //名称
  this.createTime = null;  //创建时间
  this.accountOrderEntries = new AccountOrderEntryMap();  //账号订单项集合
  this.shopSID = null;  //商店标识
  this.shopObj = null;  //商店对象

  //获取总价
  this.getTotalPrice = function() {
    var totalPrice = 0;
    this.accountOrderEntries.forEach(
      function (element, index) {
        totalPrice = element.getTotalPrice();
      }
    );
    return totalPrice;
  }

  //获取总数量
  this.getTotalCount = function () {
    var totalCount = 0;
    this.accountOrderEntries.forEach(
      function (element, index) {
        totalCount += element.getTotalCount();
      }
    );
    return totalCount;
  }

}


/**
 * 订单集合
 */
function OrderMap() {

  this.map = new Map();

  //添加订单
  this.addOrder = function (order) {
    this.map.set(order.sid, order);
  }

  //根据SID获取订单
  this.getOrderBySID = function (sid) {
    return this.map.get(sid);
  }

  //获取全部订单
  this.getOrdersByAll = function () {
    var orders = new Array();
    this.map.forEach(
      function (value, key, map) {
        orders.push(value);
      }
    );
    return orders;
  }

  //根据SID从集合中移除订单
  this.removeOrderBySID = function (sid) {
    this.map.delete(sid);
  }

  //清空订单
  this.clearOrders = function () {
    this.map.clear();
  }

  //获取全部订单标识
  this.getOrderSIDsByAll = function () {
    var orderSIDs = new Array();
    this.map.forEach(
      function (value, key, map) {
        orderSIDs.push(key);
      }
    );
    return orderSIDs;
  }

}