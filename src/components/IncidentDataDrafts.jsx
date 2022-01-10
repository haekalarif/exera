import React,{useState} from 'react'
import { useRouteMatch, Link, useHistory} from 'react-router-dom'
import { Table, Tag, Space } from 'antd';
import DataTable from 'react-data-table-component';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function IncidentDataDrafts() {
    const {url, path} = useRouteMatch();
    console.log(useRouteMatch());
    // const columns = [
    //     {
    //         name: 'Status',
    //         selector: row => row.status,
    //         sortable : true,
    //     },
    //     {
    //         name: 'Action',
    //         selector: row => row.action,
    //         sortable : true
    //     },
    //     {
    //         name: 'Date Incident',
    //         selector: row => row.dateincident,
    //         sortable : true
    //     },
    //     {
    //         name: 'Time Incident',
    //         selector: row => row.timeincident,
    //         sortable : true
    //     },
    //     {
    //         name: 'Type of incident',
    //         selector: row => row.typeofincident,
    //         sortable : true
    //     },
    //     {
    //         name: 'Party 1',
    //         selector: row => row.party1,
    //         sortable : true
    //     },
    //     {
    //         name: 'Party 2',
    //         selector: row => row.party2,
    //         sortable : true
    //     },
    //     {
    //         name: 'Type of Target',
    //         selector: row => row.typeoftarget,
    //         sortable : true
    //     },
    //     {
    //         name: 'State/Region',
    //         selector: row => row.stateregion,
    //         sortable : true
    //     },
    //     {
    //         name: 'Towns',
    //         selector: row => row.towns,
    //         sortable : true
    //     },
        
    // ];
    
    // const data = [
    //     {
    //         id: 1,
    //         status: <p className="p-1 m-0 bg-danger text-white text-bold rounded">
    //                     <strong>Rejected <i class="bi bi-x-circle-fill"></i></strong>
    //                 </p>,
    //         action : (  <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
    //                         <button type="button" class="btn btn-primary"><i class="bi bi-clipboard-plus"></i></button>
    //                         <button type="button" class="btn btn-primary"><i class="bi bi-trash-fill"></i></button>
    //                         <button type="button" class="btn btn-primary"><i class="bi bi-card-checklist"></i></button>
    //                     </div>
    //                 ),
    //         dateincident : '08/21/2021',
    //         timeincident : '19.00',
    //         typeofincident : 'Ambing',
    //         party1 : 'Security forces',
    //         party2 : 'EAO - KIA',
    //         typeoftarget : 'Army Facality',
    //         stateregion : 'Mon',
    //         towns : 'Paung'
    //     },
    //     {
    //         id: 2,
    //         status: (<p className="p-1 m-0 bg-warning text-dark text-bold rounded">
    //                     <strong>Draft <i class="bi bi-file-bar-graph-fill"></i></strong>
    //                 </p>),
    //         action : (  <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
    //                         <button type="button" class="btn btn-primary"><i class="bi bi-clipboard-plus"></i></button>
    //                         <button type="button" class="btn btn-primary"><i class="bi bi-trash-fill"></i></button>
    //                         <button type="button" class="btn btn-primary"><i class="bi bi-card-checklist"></i></button>
    //                     </div>
    //                 ),
    //         dateincident : '08/21/2021',
    //         timeincident : '19.00',
    //         typeofincident : 'Bombing',
    //         party1 : 'Security forces',
    //         party2 : 'EAO - KIA',
    //         typeoftarget : 'Army Facality',
    //         stateregion : 'Mon',
    //         towns : 'Paung'
    //     },
    //     {
    //         id: 3,
    //         status: (<p className="p-1 m-0 bg-success text-white text-bold rounded">
    //                     <strong>Submitted <i class="bi bi-check-circle-fill"></i></strong>
    //                 </p>),
    //         action : (  <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
    //                         <button type="button" class="btn btn-primary"><i class="bi bi-clipboard-plus"></i></button>
    //                         <button type="button" class="btn btn-primary"><i class="bi bi-trash-fill"></i></button>
    //                         <button type="button" class="btn btn-primary"><i class="bi bi-card-checklist"></i></button>
    //                     </div>
    //                 ),
    //         dateincident : '08/21/2021',
    //         timeincident : '19.00',
    //         typeofincident : 'Combing',
    //         party1 : 'Security forces',
    //         party2 : 'EAO - KIA',
    //         typeoftarget : 'Army Facality',
    //         stateregion : 'Mon',
    //         towns : 'Paung'
    //     }
        
    // ]
    const data = [
        {
          status: 'Rejected',
          action: '',
          dataincident : '08/21/2021',
          timeincident : '19.00',
          typeofincident : 'Bombing',
          party1 : 'Security forces',
          party2 : 'EAO - KIA',
          typeoftarget : 'Army Facality',
          stateregion : 'Mon',
          towns : 'Paung',
        },
      ];

      const columns = [
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
          responsive: ['sm','md','lg','xs'],
          render: text => (
            <p className="p-1 m-0 bg-danger text-white text-bold rounded">
                <strong>{text} <i class="bi bi-x-circle-fill"></i></strong>
            </p>
          ) ,
        },
        {
          title: 'Action',
          dataIndex: 'action',
          key: 'action',
          responsive: ['sm','md','lg','xs'],
          sorter: (a, b) => a.age - b.age,
          render: text =>(  <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                                <button type="button" class="btn btn-primary"><i class="bi bi-clipboard-plus"></i></button>
                                <button type="button" class="btn btn-primary"><i class="bi bi-trash-fill"></i></button>
                                <button type="button" class="btn btn-primary"><i class="bi bi-card-checklist"></i></button>
                            </div>
          )
        },
        {
          title: 'Data Incident',
          dataIndex: 'dataincident',
          key: 'dataincident',
          responsive: ['sm','md','lg','xs'],
        },
        {
          title: 'Time Incident',
          dataIndex: 'timeincident',
          key: 'timeincident',
          responsive: ['sm','md','lg','xs'],
        },
        {
          title: 'Type of Incident',
          dataIndex: 'typeofincident',
          key: 'typeofincident',
          responsive: ['sm','md','lg','xs'],
        },
        {
          title: 'Party 1',
          dataIndex: 'party1',
          key: 'party1',
          responsive: ['sm','md','lg','xs'],
        },
        {
          title: 'Party 2',
          dataIndex: 'party2',
          key: 'party2',
          responsive: ['sm','md','lg','xs'],
        },
        {
          title: 'Type of Targer',
          dataIndex: 'typeoftarget',
          key: 'typeoftarget',
          responsive: ['sm','md','lg','xs'],
        },
        {
          title: 'State/Region',
          dataIndex: 'stateregion',
          key: 'stateregion',
          responsive: ['sm','md','lg','xs'],
        },
        {
          title : 'Towns',
          dataIndex : 'towns',
          key : 'towns'  ,
          responsive: ['sm','md','lg','xs'],
        }
      ];

    return (
    <div className="incidentDataDraft">
        <div className='row align-items-center'>
            <div className="col-lg-2">
               <Link to="/Index/AddNewDraft"><button type="button" class="btn btn-primary btn-sm"><i class="bi bi-plus-circle-fill"></i> Add New Draft</button></Link>
            </div>
            {/* <div className="col-lg-2">
                <div className='d-flex align-items-center'>
                    <div className="d-inline-block mx-2" >
                        <label for="search" class="col-form-label">Search: </label>
                    </div>
                    <div className="d-inline-block">
                        <input type="text" id="search" class="form-control form-control-sm" />
                    </div>   
                </div>
            </div> */}
            {/* <div className="col-lg-2">
                <div className="d-flex">
                    <div className="input-group input-group-sm">
                        <span className="input-group-text" id="date">Date From:</span>
                        <input type="date" className="form-control form-control-sm" aria-describedby="date" id="dateto"/>
                    </div>
                </div>
            </div> */}
            {/* <div className="col-lg-2">
                <div className="d-flex">
                    <div className="input-group input-group-sm">
                        <span className="input-group-text" id="dateto">Date To:</span>
                        <input type="date" className="form-control form-control-sm" aria-describedby="dateto" id="dateto"/>
                    </div>
                </div>
            </div> */}
            {/* <div className="col-lg-2">
                <div className="d-flex">
                    <div className="input-group input-group-sm">
                        <span className="input-group-text" id="selectone">Status</span>
                        <select class="form-select form-select-sm" aria-label="form-select-sm example">
                            <option selected>Select One...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <input type="date" className="form-control form-control-sm" aria-describedby="date"/>
                    </div>
                </div>
            </div> */}
            {/* <div className="col-lg-2 align-items-center">
                <button type="button" class="btn btn-primary btn-sm"><i class="bi bi-funnel-fill text-white"></i> Apply Filter</button>
            </div> */}
        </div>
        
        {/* //table  */}
        {/* <div className="row">
            <div className="col-lg-12"> */}
                {/* <DataTable
                    columns={columns}
                    data={data}
                    highlightOnHover
                    pointerOnHover
                    pagination 
                /> */}
                {/* <Table 
                columns={columns}
                dataSource={data}
                pagination={{ position: ['bottomCenter'] }}
                scroll={{ x: 100 }}
                /> */}
            {/* </div>
        </div> */}
    </div>
    )
}
