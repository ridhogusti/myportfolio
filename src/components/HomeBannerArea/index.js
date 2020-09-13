import React from 'react'
import { Card, Row, Col, List, Button } from 'antd'
import myAvatar from '../../my_avatar.jpg';
import './style.css'
import {
  CalendarTwoTone,
  PhoneTwoTone,
  HomeTwoTone,
  MailTwoTone,
  FacebookFilled,
  TwitterCircleFilled,
  LinkedinFilled
} from '@ant-design/icons';


const data = [
  {
    icon: <CalendarTwoTone style={{ fontSize: 20 }} twoToneColor="#766dff" />,
    title: '13 st June, 1996',
  },
  {
    icon: <PhoneTwoTone style={{ fontSize: 20 }} twoToneColor="#766dff" />,
    title: '082165160655',
  },
  {
    icon: <HomeTwoTone style={{ fontSize: 20 }} twoToneColor="#766dff" />,
    title: 'Jl.Bersama Gg.Musyawarah No. Medan',
  },
  {
    icon: <MailTwoTone style={{ fontSize: 20 }} twoToneColor="#766dff" />,
    title: 'ridhogusti0@gmail.com',
  }
];
const index = () => {
  return (
    <section className="home_banner_area">
      <Row justify="center">
        <Card
          hoverable
          className="container box_1620"
        >
          <Row justify="space-between">
            <Col span={13}>
              <Row >
                <img src={myAvatar} alt="myavatar" style={{ borderRadius: 6, width: '-webkit-fill-available' }} />
              </Row>
            </Col>
            <Col span={8} className="personal_text">
              <h6>HELLO EVERBODY, I AM</h6>
              <h3>AR-RIDHO GUSTI</h3>
              <h4>FRONTEND DEVELOPER AND MOBILE DEVELOPER</h4>
              <p>You will begin to realise why this exercise is called the Dickens Pattern (with reference to the ghost showing Scrooge some different futures)</p>

              <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                  <Row align="middle" style={{ marginBottom: 15 }}>
                    {item.icon}
                    <p className="basic_info">{item.title}</p>
                  </Row>

                )}
              />

              <Row style={{ marginTop: 20 }}>
                <Button href="https://www.facebook.com/ridho.tsquard/" style={{ marginRight: 12 }} type="default" shape="round" icon={<FacebookFilled twoToneColor="#0268e2" size={40} />} />
                <Button style={{ marginRight: 12 }} type="default" shape="round" href='https://twitter.com/ridhogusti5' icon={<TwitterCircleFilled twoToneColor="#0268e2" size={40} />} />
                <Button style={{ marginRight: 12 }} type="default" shape="round" href='https://www.linkedin.com/in/ar-ridho-g-aa794798/' icon={<LinkedinFilled twoToneColor="#0268e2" size={40} />} />
              </Row>
            </Col>
          </Row>
        </Card>
      </Row>
    </section>
  )
}

export default index
