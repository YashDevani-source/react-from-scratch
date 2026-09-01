// singleton pattern (web-socket:wss, STUN server)

class Router{
    private static _route:Router | null;
    public name:string;
    private constructor(){
        this.name = "";
    }

    static getInstance() {
        if(!this._route){
            this._route = new Router();
        }
        return this._route;
    }
}

const router1 = Router.getInstance();
router1.name = "router1";

const router2 = Router.getInstance();
console.log(router2.name);