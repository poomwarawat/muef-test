import React from 'react';
import {Button, Container} from 'reactstrap'
import {Link} from 'react-router-dom'

const Start101 = (props) => {    
    const codeId = props.std.codeId
    return (
        <div className="mt-4">
            <Container>
                <Link to={`/MUEF-TEST-101/${codeId}/INH`}>
                    <Button className="w-100 mt-2" color="light">พฤติกรรมด้านการยับยั้ง</Button>
                </Link>
                <Link to={`/MUEF-TEST-101/${codeId}/SHF`}>
                    <Button disabled className="w-100 mt-2" color="light">พัฒนาการด้านการเปลี่ยน/ความยืดหยุ่นในการคิด</Button>
                </Link>
                <Link to={`/MUEF-TEST-101/${codeId}/EC`}>
                    <Button disabled className="w-100 mt-2" color="light">พัฒนาการด้านการควบคุมอารมณ์</Button>                    
                </Link>
                <Link to={`/MUEF-TEST-101/${codeId}/WM`}>
                    <Button disabled className="w-100 mt-2" color="light">พัฒนาการด้านความจำขณะทำงาน</Button>                    
                </Link>
                <Link to={`/MUEF-TEST-101/${codeId}/PO`}>
                    <Button disabled className="w-100 mt-2" color="light">พัฒนาการด้านการวางแผนจัดการ</Button>                                    
                </Link>                
            </Container>
        </div>
    );
}

export default Start101;
