import React from 'react';
import {Button, Container} from 'reactstrap'

const Start101 = () => {
    return (
        <div className="mt-4">
            <Container>
                <Button className="w-100 mt-2" color="light">พฤติกรรมด้านการยับยั้ง</Button>
                <Button disabled className="w-100 mt-2" color="light">พัฒนาการด้านการเปลี่ยน/ความยืดหยุ่นในการคิด</Button>
                <Button disabled className="w-100 mt-2" color="light">พัฒนาการด้านการควบคุมอารมณ์</Button>
                <Button disabled className="w-100 mt-2" color="light">พัฒนาการด้านความจำขณะทำงาน</Button>
                <Button disabled className="w-100 mt-2" color="light">พัฒนาการด้านการวางแผนจัดการ</Button>                
            </Container>
        </div>
    );
}

export default Start101;
