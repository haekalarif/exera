import React,{useState} from 'react'
import { useRouteMatch, Link} from 'react-router-dom'
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function IncidentDataDrafts() {
    const { url } = useRouteMatch();
    let [commentWall, setCommentWall]=useState();
    return (
        <div className='row'>
            <div className="col-lg-2">
                <button type="button" class="btn btn-primary"><i class="bi bi-plus-circle"></i> Add New Draft</button>
            </div>
            <div className="col-lg-2">
                {/* <div className='d-inline-block'> */}
                    <label for="search" class="col-form-label d-inline-block">Search</label>
                    <input type="text" id="search" class="form-control form-control-sm d-inline-block" />
                {/* </div> */}
            </div>
        </div>
    )
}

export default IncidentDataDrafts
