const AddPass=()=>{
    return(
<div className="bg">
      <div className="row py-4">
          <div className="text-center py-2">
            <h2 className="text-white">Add Password</h2>
          </div>
          <div className="col-10 col-sm-6 col-lg-4 m-auto">
          <div className="form-group py-3">
            <input
            type="website"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter Website Name"
            />
        </div>
        <div className="form-group py-3">
            <input
            type="password"
            className="form-control"
            id="Password1"
            placeholder="Password"
            />
        </div>
        <div className="form-group py-3">
            <input
            type="password2"
            className="form-control"
            id="Password2"
            placeholder="Re-Enter-Password"
            />
        </div>   
        <button type="submit" className="btn btn-primary">
            Save
        </button>

          </div>
      </div>
</div>
        
    )
    }
    
export default AddPass;