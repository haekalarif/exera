import React,{useState} from 'react'
import { useRouteMatch, Link} from 'react-router-dom'
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import DataTable from 'react-data-table-component';

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function IncidentDataDrafts() {
    const { url } = useRouteMatch();
    
    const columns = [
        {
            name: 'Status',
            selector: row => row.title,
            sortable : true,
        },
        {
            name: 'Action',
            selector: row => row.year,
            sortable : true
        },
        {
            name: 'Date Incident',
            sortable : true
        },
        {
            name: 'Time Incident',
            sortable : true
        },
        {
            name: 'Type of incident',
            sortable : true
        },
        {
            name: 'Party 1',
            sortable : true
        },
        {
            name: 'Party 2',
            sortable : true
        },
        {
            name: 'Type of Target',
            sortable : true
        },
        {
            name: 'State/Region',
            sortable : true
        },
        {
            name: 'Towns',
            sortable : true
        },
        
    ];
    
    const data = [
        {
            id: 1,
            title: <b>123</b>,
            year: '1988',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
        {
            id: 3,
            title: 'Ghostbusters',
            year: '1984',
        },
        {
            id: 4,
            title: 'Ghostbusters',
            year: '1984',
        },
        {
            id: 5,
            title: 'Ghostbusters',
            year: '1984',
        },
        {
            id: 6,
            title: 'Ghostbusters',
            year: '1984',
        },
        {
            id: 7,
            title: 'Ghostbusters',
            year: '1984',
        },
        {
            id: 8,
            title: 'Ghostbusters',
            year: '1984',
        },
        {
            id: 9,
            title: 'Ghostbusters',
            year: '1984',
        },
        {
            id: 10,
            title: 'Ghostbusters',
            year: '1984',
        },
        {
            id: 11,
            title: 'Ghostbusters',
            year: '1984',
        },
        {
            id: 12,
            title: 'Ghostbusters',
            year: '1984',
        },
        {
            id: 13,
            title: 'Ghostbusters',
            year: '1984',
        },
        {
            id: 14,
            title: 'Ghostbusters',
            year: '1984',
        },
        {
            id: 15,
            title: 'Ghostbusters',
            year: '1984',
        },
        {
            id: 16,
            title: 'Ghostbusters',
            year: '1984',
        },
        {
            id: 17,
            title: 'Ghostbusters',
            year: '1984',
        },
    ]

    return (
    <div className="incidentDataDraft">
        <div className='row align-items-center'>
            <div className="col-lg-2">
                <button type="button" class="btn btn-primary btn-sm"><i class="bi bi-plus-circle-fill"></i> Add New Draft</button>
            </div>
            <div className="col-lg-2">
                <div className='d-flex align-items-center'>
                    <div className="d-inline-block mx-2" >
                        <label for="search" class="col-form-label">Search: </label>
                    </div>
                    <div className="d-inline-block">
                        <input type="text" id="search" class="form-control form-control-sm" />
                    </div>   
                </div>
            </div>
            <div className="col-lg-2">
                <div className="d-flex">
                    <div className="input-group input-group-sm">
                        <span className="input-group-text" id="date">Date From:</span>
                        <input type="date" className="form-control form-control-sm" aria-describedby="date" id="dateto"/>
                    </div>
                </div>
            </div>
            <div className="col-lg-2">
                <div className="d-flex">
                    <div className="input-group input-group-sm">
                        <span className="input-group-text" id="dateto">Date To:</span>
                        <input type="date" className="form-control form-control-sm" aria-describedby="dateto" id="dateto"/>
                    </div>
                </div>
            </div>
            <div className="col-lg-2">
                <div className="d-flex">
                    <div className="input-group input-group-sm">
                        <span className="input-group-text" id="selectone">Status</span>
                        <select class="form-select form-select-sm" aria-label="form-select-sm example">
                            <option selected>Select One...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        {/* <input type="date" className="form-control form-control-sm" aria-describedby="date"/> */}
                    </div>
                </div>
            </div>
            <div className="col-lg-2 align-items-center">
                <button type="button" class="btn btn-primary btn-sm"><i class="bi bi-funnel-fill text-white"></i> Apply Filter</button>
            </div>
        </div>
        
        {/* //table  */}
        <div className="row">
            <div className="col-lg-12">
                <DataTable
                    columns={columns}
                    data={data}
                    highlightOnHover
                    pointerOnHover
                    pagination 
                />
            </div>
        </div>
    </div>
    )
}

export default IncidentDataDrafts
