import axios from 'axios';
import SHA256 from 'sha256';
import configs from './variables';

axios.defaults.baseURL = configs.COWPAY_API_ALIAS; // or: https://staging.cowpay.me/api/v1/

class CowpayService {

    constructor(merchantCode, merchantHash, token) {
        this.merchant_code = merchantCode;
        this.merchant_hash = merchantHash;
        this.token = token;
    }

    creditCardChargeRequest(params) {
        return axios.post('charge/card', {
            merchant_reference_id: params.merchant_reference_id,
            payment_method: params.payment_method,
            customer_merchant_profile_id: params.customer_merchant_profile_id,
            card_number: params.card_number,
            expiry_year: params.expiry_year,
            expiry_month: params.expiry_month,
            cvv: params.cvv,
            customer_name: params.customer_name,
            customer_mobile: params.customer_mobile,
            customer_email: params.customer_email,
            amount: params.amount,
            description: params.description,
            signature: SHA256([
                this.merchant_code,
                params.merchant_reference_id,
                params.customer_merchant_profile_id,
                params.amount,
                this.merchant_hash
            ].join('')),
            
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${this.token}`
            }
        })
    }

    fawryChargeRequest(params) {
        return axios.post('charge/fawry',
            {
                merchant_reference_id: params.merchant_reference_id,
                customer_merchant_profile_id: params.customer_merchant_profile_id,
                customer_name: params.customer_name,
                customer_mobile: params.customer_mobile,
                customer_email: params.customer_email,
                amount: params.amount,
                signature: SHA256([
                    this.merchant_code,
                    params.merchant_reference_id,
                    params.customer_merchant_profile_id,
                    params.amount,
                    this.merchant_hash
                ].join('')),
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${this.token}`
                }
            })
    }

    getPaymentStatus(merchant_reference_id) {
        return axios.get('charge/status', {
            params: {
                merchant_reference_id: merchant_reference_id,
                signature: SHA256(this.merchant_code + merchant_reference_id + this.merchant_hash)
            },
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${this.token}`
            }
        })
    }

    requestIFrame(params){
        console.log("hash params",{
            merchantCode:this.merchant_code,
            merchant_ref:params.merchant_reference_id,
            customer_profile: params.customer_merchant_profile_id,
            amount: params.amount,
            hash: this.merchant_hash
        })
        return axios.post('iframe/token', {
            merchant_reference_id: params.merchant_reference_id,
            customer_merchant_profile_id: params.customer_merchant_profile_id,
            customer_name: params.customer_name,
            customer_mobile: params.customer_mobile,
            customer_email: params.customer_email,
            amount: params.amount,
            currency_code: "EGP",
            description: params.description,
            signature: SHA256([
                this.merchant_code,
                params.merchant_reference_id,
                params.customer_merchant_profile_id,
                params.amount,
                this.merchant_hash
            ].join('')),
            
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${this.token}`
            }
        })

    }

    async initializeIFrame(params){
        let timestamp = Date.now()
        let param =  {
            merchant_reference_id: `NY${params.customer_mobile}T${timestamp}`,
            customer_merchant_profile_id: `NY${params.customer_mobile}`,
            customer_name: params.customer_name,
            customer_mobile: params.customer_mobile,
            customer_email: params.customer_email,
            amount: params.amount,
            description: params.description
            }
        try{

            let response = await this.requestIFrame(param);
            console.log("testing results from initializeiframe", response);
            let referenceId = response.data.cowpay_reference_id;
            let tokenValue = response.data.token;
            // return {error:false,message:response}

            // set eventListener
            window.COWPAYIFRAMEDIALOG.init()
            window.COWPAYIFRAMEDIALOG.load(tokenValue) // token value from the previous response
            return {error:false,message:{referenceId,merchant_reference_id:param.merchant_reference_id}} 

        }catch(e){
            console.log("Error message occurred while requesting payment card",e);
            return {error:true,message:e}
        }
    }
}

let merchantCode = "V02VyLcfG2Fb"
let merchantHash = "$2y$10$r/j7PFijgHhI0NWRbb0z.O/RFhfqe0QFZfcsJeFz.TRAmozEQRP5i"
let merchantToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiODUyZGFiMzZjMDQzYTI0YzczNzhmMGVmNDg3YThkOWQyZmUzNDI3YzA3NTkyNDcyMzRkODAyMjE3OTJiNjM2NjM3ZGE3MjQ3NjQwM2UzMWMiLCJpYXQiOiIxNjMyNzUzMDA5LjMzNDEwMCIsIm5iZiI6IjE2MzI3NTMwMDkuMzM0MTA2IiwiZXhwIjoiNDc4ODQyNjYwOS4yNDgyODMiLCJzdWIiOiI2NzEiLCJzY29wZXMiOltdfQ.jVjjo0YQ1ytGj9XpBDKFwLb771vnr-RAJVIueA39P5CkS438F_FCTYPrbRR6FDlAC7mbl6MfJ57pCepUe_LcNA"

const CowPayInstance = new CowpayService(merchantCode,merchantHash,merchantToken);

export default CowPayInstance;
