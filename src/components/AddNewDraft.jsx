import React from 'react'

export default function AddNewDraft() {
    return (
            <div className='addNewDraft' >
                <div className="row">
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
            </div>
    )
}
