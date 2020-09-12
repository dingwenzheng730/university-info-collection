import React from "react";
import {connect} from 'react-redux'
import {getEvents, deleteEvent} from '../Redux/actions.js'
import {Card, Row, Col, message } from 'antd';
import { EditOutlined, EllipsisOutlined, DeleteOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";


class ListEvents extends React.Component {

    componentDidMount() {
        this.props.getEvents();
    }

    deleteEvent = (id) => {
        this.props.deleteEvent(id, this.info);
    }

    info() {
        message.info('Event Deleted');
    };

    render() {
        const events = this.props.events
        console.log(events)

        return (
                    <Col span={12} offset={6}>
                        {events.map(p => (
                            <Row gutter={[48, 48]}>
                                <Col span={24}>
                                    <Card
                                        key={p.id}
                                        title={p.title}
                                        style={{width: '100%'}}
                                        actions={[
                                            <DeleteOutlined key="delete" onClick={()=>this.deleteEvent(p.id)}/>,
                                        ]}
                                    >
                                        <p>{p.content}</p>
                                    </Card>
                                </Col>
                            </Row>
                        ))}
                    </Col>
        );
    }
}

const mapStateToProps = (state) => ({
    events: state.events
})

const mapDispatchToProps = {
    getEvents, deleteEvent
}

export default connect(mapStateToProps, mapDispatchToProps)(ListEvents)
