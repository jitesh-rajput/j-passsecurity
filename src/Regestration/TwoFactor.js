import { Link } from "react-router-dom";
import Header from "../Home/Header";
const TwoFactor=()=>{
    return(
        <div>
            <Header/>
            <div className="bg text-center py-5 text-white">
            <h1>Two Factor Auhentication</h1>
            <div className="col-10 col-sm-6 col-lg-4 m-auto">
            <div className="mb-3 py-3">
                  <label for="num" className="form-label">Enter OTP send Send on jiturajput025@gmail.com</label>
                  <input type="number" className="form-control my-3" id="num"/>
                  <div id="num" className="form-text">Enter 6 Digite Code</div>
                </div>
            </div>
            <div className="text-center">
                <button type="submit" className="btn btn-primary  mx-5">Confirm</button>
                </div>
            </div>
        </div>
    )
}

export default TwoFactor;