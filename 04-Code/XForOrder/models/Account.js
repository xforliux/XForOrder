/**
 * 账号
 */
function Account() {
  
  this.sid = null;  //唯一标识，微信ID
  this.name = null;  //名称
  this.photoUri = null;  //头像Uri
  
}


/**
 * 账号集合
 */
function AccountMap() {

  this.map = new Map();

  //添加账号
  this.addAccount = function (account) {
    this.map.set(account.sid, account);
  }

  //根据SID获取账号
  this.getAccountBySID = function (sid) {
    return this.map.get(sid);
  }

  //获取全部账号
  this.getAccountsByAll = function () {
    var accounts = new Array();
    this.map.forEach(
      function (value, key, map) {
        accounts.push(value);
      }
    );
    return accounts;
  }

  //根据SID从集合中移除账号
  this.removeAccountBySID = function (sid) {
    this.map.delete(sid);
  }

  //清空账号
  this.clearAccounts = function () {
    this.map.clear();
  }

  //获取全部账号标识
  this.getAccountSIDsByAll = function() {
    var accountSIDs = new Array();
    this.map.forEach(
      function (value, key, map) {
        accountSIDs.push(key);
      }
    );
    return accountSIDs;
  }

}