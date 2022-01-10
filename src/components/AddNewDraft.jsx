import React from 'react'
import GoogleMapsApi from '../apicomponents/GoogleMapsApi'

export default function AddNewDraft() {
    return (
        // <></>
            <div className='addNewDraft' >

                <div className="row mb-3">
                    <div className="col-lg-12">
                        <div class="card">
                            <div class="card-header bg-secondary text-white text-center">
                                Incident Headers
                            </div>
                            <form action="">
                                <div class="card-body">
                                    <div className="row">

                                        <div className="col-lg-6">
                                            <div className='mb-3'>
                                                <p className='m-1'>Incident Details Checked</p>
                                                <select class="form-select" aria-label="Default select example">
                                                    <option selected>Select One...</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                            <div className='mb-3'>
                                                <p className='m-1'>Aligment Flash</p>
                                                <select class="form-select" aria-label="Default select example">
                                                    <option selected>Select One...</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                            <div className='mb-3'>
                                                <p className='m-1'>Date :</p>
                                                <input type="date" class="form-control"/>
                                            </div>
                                            <div className='mb-3'>
                                                <p className='m-1'>Time :</p>
                                                <input type="time" class="form-control"/>
                                            </div>
                                            <div className='mb-3'>
                                                <p className='m-1'>Type of Incident :</p>
                                                <select class="form-select" aria-label="Default select example">
                                                    <option selected>Select One...</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                            <div className='mb-3'>
                                                <p className='m-1'>No. of Occurences</p>
                                                <input type="number" class="form-control" defaultValue={0}/>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                        <div className='mb-3'>
                                            <p className='m-1'>Party 1 :</p>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>Select One...</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className='mb-3'>
                                            <p className='m-1'>Party 2 :</p>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>Select One...</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className='mb-3'>
                                            <p className='m-1'>Party 3 :</p>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>Select One...</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className='mb-3'>
                                            <p className='m-1'>Party 4 :</p>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>Select One...</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className='mb-3'>
                                            <p className='m-1'>Type of Target :</p>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>Select One...</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className='mb-3'>
                                            <p className='m-1'>Material Damages :</p>
                                            <input type="text" class="form-control"/>
                                        </div>
                                        </div>

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* row 2 */}
                <div className="row mb-3">
                    <div className="col-lg-4">
                        <div class="card">
                            <div class="card-header bg-secondary text-white text-center">
                                Ordinary Civilian
                            </div>
                            <div class="card-body">
                                <div className='mb-3'>
                                    <p className='m-1'>Killed</p>
                                    <input type="number" class="form-control" defaultValue={0}/>
                                </div>
                                <div className='mb-3'>
                                    <p className='m-1'>Injured</p>
                                    <input type="number" class="form-control" defaultValue={0}/>
                                </div>
                                <div className='mb-3'>
                                    <p className='m-1'>Arrested/Missing</p>
                                    <input type="number" class="form-control" defaultValue={0}/>
                                </div>
                                <div className='mb-3'>
                                    <p className='m-1'>Civil Admin Resignations: </p>
                                    <input type="number" class="form-control" defaultValue={0}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div class="card">
                            <div class="card-header bg-secondary text-white text-center">
                                Pro-SAC Civilian
                            </div>
                            <div class="card-body">
                                <div className='mb-3'>
                                    <p className='m-1'>Killed</p>
                                    <input type="number" class="form-control" defaultValue={0}/>
                                </div>
                                <div className='mb-3'>
                                    <p className='m-1'>Injured</p>
                                    <input type="number" class="form-control" defaultValue={0}/>
                                </div>
                                <div className='mb-3'>
                                    <p className='m-1'>Arrested/Abducted</p>
                                    <input type="number" class="form-control" defaultValue={0}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div class="card">
                            <div class="card-header bg-secondary text-white text-center">
                                Civilian by Civilian Pro-SAC Group
                            </div>
                            <div class="card-body">
                                <div className='mb-3'>
                                    <p className='m-1'>Killed</p>
                                    <input type="number" class="form-control" defaultValue={0}/>
                                </div>
                                <div className='mb-3'>
                                    <p className='m-1'>Injured</p>
                                    <input type="number" class="form-control" defaultValue={0}/>
                                </div>
                                <div className='mb-3'>
                                    <p className='m-1'>Arrested/Abducted</p>
                                    <input type="number" class="form-control" defaultValue={0}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end row 2 */}
                {/* row 3 */}
                <div className="row mb-3">
                    <div className="col-lg-3">
                        <div class="card">
                            <div class="card-header bg-secondary text-white text-center">
                                Deserter SF
                            </div>
                            <div class="card-body">
                                <div className='mb-3'>
                                    <p className='m-1'>Deserted</p>
                                    <input type="number" class="form-control" defaultValue={0}/>
                                </div>
                                <div className='mb-3'>
                                    <p className='m-1'>Killed</p>
                                    <input type="number" class="form-control" defaultValue={0}/>
                                </div>
                                <div className='mb-3'>
                                    <p className='m-1'>Injured</p>
                                    <input type="number" class="form-control" defaultValue={0}/>
                                </div>
                                <div className='mb-3'>
                                    <p className='m-1'>Arrested</p>
                                    <input type="number" class="form-control" defaultValue={0}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div class="card">
                            <div class="card-header bg-secondary text-white text-center">
                                Deserter SF
                            </div>
                            <div class="card-body">
                                <div className='mb-3'>
                                    <p className='m-1'>Killed</p>
                                    <input type="number" class="form-control" defaultValue={0}/>
                                </div>
                                <div className='mb-3'>
                                    <p className='m-1'>Injured</p>
                                    <input type="number" class="form-control" defaultValue={0}/>
                                </div>
                                <div className='mb-3'>
                                    <p className='m-1'>Arrested</p>
                                    <input type="number" class="form-control" defaultValue={0}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div class="card">
                            <div class="card-header bg-secondary text-white text-center">
                                EAO Fighters
                            </div>
                            <div class="card-body">
                                <div className='mb-3'>
                                    <p className='m-1'>Killed</p>
                                    <input type="number" class="form-control" defaultValue={0}/>
                                </div>
                                <div className='mb-3'>
                                    <p className='m-1'>Injured</p>
                                    <input type="number" class="form-control" defaultValue={0}/>
                                </div>
                                <div className='mb-3'>
                                    <p className='m-1'>Arrested</p>
                                    <input type="number" class="form-control" defaultValue={0}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div class="card">
                            <div class="card-header bg-secondary text-white text-center">
                                Others/Unknown
                            </div>
                            <div class="card-body">
                                <div className='mb-3'>
                                    <p className='m-1'>Killed</p>
                                    <input type="number" class="form-control" defaultValue={0}/>
                                </div>
                                <div className='mb-3'>
                                    <p className='m-1'>Injured</p>
                                    <input type="number" class="form-control" defaultValue={0}/>
                                </div>
                                <div className='mb-3'>
                                    <p className='m-1'>Arrested</p>
                                    <input type="number" class="form-control" defaultValue={0}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end row 2 */}
                {/* row 3 */}
                <div className="row mb-3">
                    <div className="col-lg-12">
                        <div className='mb-3'>
                            <p className='m-1'>Details:</p>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className='mb-3'>
                            <p className='m-1'>Source URL:</p>
                            <input type="text" class="form-control"/>
                        </div>
                    </div>
                </div>
                {/* end row 3 */}
                {/* row 4 */}
                <div className="row mb-3">
                    <div className="col-lg-6">
                        <GoogleMapsApi/>
                    </div>
                    <div className="col-lg-6">
                        <div className='mb-3'>
                            <p className='m-1'>Latitude: </p>
                            <input type="text" class="form-control"/>
                        </div>
                        <div className='mb-3'>
                            <p className='m-1'>Longitude: </p>
                            <input type="text" class="form-control"/>
                        </div>
                        <div className='mb-3'>
                            <p className='m-1'>Street: </p>
                            <input type="text" class="form-control"/>
                        </div>
                        <div className='mb-3'>
                            <p className='m-1'>Quarter/Village: </p>
                            <input type="text" class="form-control"/>
                        </div>
                        <div className='mb-3'>
                            <p className='m-1'>Town: </p>
                            <input type="text" class="form-control"/>
                        </div>
                        <div className='mb-3'>
                            <p className='m-1'>Township: </p>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Select One...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className='mb-3'>
                            <p className='m-1'>State/Region: </p>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Select One...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className='mb-3'>
                            <p className='m-1'>Geo-Precision: </p>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Select One...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/* end row 4 */}
            </div>
    )
}
