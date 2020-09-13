import React from "react";
import {connect} from 'react-redux'
import {getEvents,deleteEvent} from '../Redux/actions.js'
import {Card, Row, Col, Input, message } from 'antd';
import { PlusOutlined, EllipsisOutlined} from '@ant-design/icons';
import "antd/dist/antd.css";

class CreateNewEvent extends React.Component {
    info() {
        message.info('Event Created');
    }
    render() {
        return (
            <Row gutter={[48, 48]}>
                <Col span={24}>
                    <Card
                        key='10000'
                        title = <Input type='text' />
                        style={{width: '100%'}}
                        actions={[
                            <PlusOutlined key="create" />,
                        ]}
                    >
                </Card>
            </Col>
          </Row>
          );

    }
}

export default CreateNewEvent
