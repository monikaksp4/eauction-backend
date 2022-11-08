import axios from 'axios';
const baseUrl = 'http://localhost:8081/e-auction/api/v1';

class ProductServices
{
    addProduct=(product)=> {
		
		return axios.post(baseUrl + '/seller/add-product', product);
	}
    getAllProducts() {
		return axios.get(baseUrl + '/all');
	}
    showBids(id) {
		return axios.get(`${baseUrl}/seller/show-bids/${id}`)
	}
    deleteProduct(id) {
		
		return axios.delete(baseUrl + '/seller/delete/' + id);
	}
    placeBids(bids,id) {
		return axios.post(`${baseUrl}/buyer/place-bid1/${id}`, bids);
	}
    updateBidAmount(id, newBidAmount, username) {
		return axios.put(`${baseUrl}/buyer/update-bid/${id}/${username}/${newBidAmount}`)
	}
}
export default  new ProductServices();