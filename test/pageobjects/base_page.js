const Application = require('spectron').Application;

class BasePage {
   
    constructor(){
        this.app = new Application({
            path:
                'C:/Users/jozsef.szalai/AppData/Local/Programs/etcd-manager/etcd-manager.exe',
        });
    }

}

module.exports = BasePage;