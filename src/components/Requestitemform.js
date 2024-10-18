function Requestitemform(){
 return (
    <div class="row">
                    <div class="col-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Raise Item Request</h4>
                  <form class="forms-sample">
                    <div class="form-group">
                    <label class="col-form-label">Select Item</label>
                          <div class="col-xs-12">
                            <select class="form-control">
                              <option>Monitor</option>
                              <option>Mouse</option>
                              <option>Keyboard</option>
                              <option>Head Phone</option>
                            </select>
                          </div>
                    </div> 
                    <div class="form-group">
                      <label for="exampleTextarea1">Reason</label>
                      <textarea class="form-control" id="exampleTextarea1" rows="4"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary mr-2">Submit</button>
                    <button class="btn btn-light">Cancel</button>
                  </form>
                </div>
              </div>
            </div>
    </div>
 );
}
export default Requestitemform;