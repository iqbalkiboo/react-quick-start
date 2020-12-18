import React from 'react';
import indexStyle from '../../assets/css/index.module.css'
import { Row, Button } from 'reactstrap';

export default function Header() {
    return (
        <div className={indexStyle.Header}>
            <Row>
                <span className={indexStyle.circleLogo}></span>
                <span className={indexStyle.txtLogo}>Kitabisa</span>
                <Button className={indexStyle.btnSort}>Sorting By Donation Goal</Button>
            </Row>
            {/* <hr className={indexStyle.PathRow} /> */}
        </div>
    )
}
