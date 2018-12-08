/**
 * 商店
 */
function Shop() {

  this.sid = null;  //唯一标识
  this.name = null;  //名称
  this.createTime = null;  //创建时间
  this.createAccountSID = null;  //创建账号标识
  this.createAccountObj = null;  //创建账号对象
  this.manageAccounts = new AccountMap();  //管理账号集合
  this.products = new ProductMap();  //商品集合
  this.orders = new OrderMap();  //订单集合

}


/**
 * 商店集合
 */
function ShopMap() {

  this.map = new Map();

  //添加商店
  this.addShop = function (shop) {
    this.map.set(shop.sid, shop);
  }

  //根据SID获取商店
  this.getShopBySID = function (sid) {
    return this.map.get(sid);
  }

  //获取全部商店
  this.getShopsByAll = function () {
    var shops = new Array();
    this.map.forEach(
      function (value, key, map) {
        shops.push(value);
      }
    );
    return shops;
  }

  //根据SID从集合中移除商店
  this.removeShopBySID = function (sid) {
    this.map.delete(sid);
  }

  //清空商店
  this.clearShops = function () {
    this.map.clear();
  }

  //获取全部商店标识
  this.getShopSIDsByAll = function () {
    var shopSIDs = new Array();
    this.map.forEach(
      function (value, key, map) {
        shopSIDs.push(key);
      }
    );
    return shopSIDs;
  }

}