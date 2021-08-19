
function CreateStream() {

    
    return (
        <div className="container">
            <div className="form-box">
                <form>
                    <label htmlFor="name">Stream Name</label>
                    <input 
                            className="" 
                            id="name" 
                            name="name" 
                            type="text"
                            placeholder="Stream Name" />
                </form>
        </div>
       </div>
    )
}

export default CreateStream;