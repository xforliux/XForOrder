/**
 * 账号订单项
 */
function AccountOrderEntry() {
  
  this.sid = null;  //唯一标识
  this.accountSID = null;  //账号标识
  this.accountObj = null;  //账号对象
  this.productOrderEntries = new ProductOrderEntryMap();  //商品订单项集合
  this.orderSID = null;  //订单标识
  this.orderObj = null;  //订单对象

  //获取总价
  this.getTotalPrice = function() {
    var totalPrice = 0;
    this.productOrderEntries.forEach(
      function (element, index) {
        var tp = element.getTotalPrice();
        if (tp >= 0) {
          totalPrice += tp;
        }
      }
    );
    return totalPrice;
  }
 
  //获取总数量
  this.getTotalCount = function() {
    var totalCount = 0;
    this.productOrderEntries.forEach(
      function (element, index) {
        totalCount += element.getTotalCount();
      }
    );
    return totalCount;
  }

}


/**
 * 账号订单项集合
 */
function AccountOrderEntryMap() {

  this.map = new Map();

  //添加账号订单项
  this.addAccountOrderEntry = function (accountOrderEntry) {
    this.map.set(accountOrderEntry.accountSID, accountOrderEntry);
  }

  //根据账号SID获取账号订单项
  this.getAccountOrderEntryByAccountSID = function (accountSID) {
    return this.map.get(accountSID);
  }

  //获取全部账号订单项
  this.getAccountOrderEntriesByAll = function () {
    var accountOrderEntries = new Array();
    this.map.forEach(
      function (value, key, map) {
        accountOrderEntries.push(value);
      }
    );
    return accountOrderEntries;
  }

  //根据账号SID从集合中移除账号订单项
  this.removeAccountOrderEntryByAccountSID = function (accountSID) {
    this.map.delete(accountSID);
  }

  //清空账号订单项
  this.clearAccountOrderEntries = function () {
    this.map.clear();
  }

}
