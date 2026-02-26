export class CartAPI{
    constructor(request){
        this.request = request;
    }

    async getCart(){
        const response = await this.request.get('/api/cart');
        return response.json();
    }

}
