import { Server } from "miragejs";
 

export function makeServer({ environment = 'text' } = {}) {


    let server = new Server({
        environment,
        routes(){
            this.namespace="api";
            this.get("updatecounter",()=>{
                return 34;
            })
        }

    });


};