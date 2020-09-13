import React from 'react'
import { Col, Row, Tabs, Image, Card } from 'antd'

import landingPage from '../../landing_page.png'
import dashboardKotakmakan from '../../dashboard_kotakmakan.png'
import dashboardFastrata from '../../dashboard_fastrata.png'
import flutix from '../../ssflutix.jpg'
import './style.css'

const { TabPane } = Tabs;

const dataReact = [
  {
    img: landingPage,
    description: 'This is landing page for kotakmakan',
    linkDemo: false
  },
  {
    img: dashboardKotakmakan,
    description: 'Dashboard Kotakmakan is a master data for kotakmakan as school, student, canteen, etc',
    linkDemo: false
  },
]
const dataVue = [
  {
    img: dashboardFastrata,
    description: 'Dashboard Fastmart is a master data for kotakmakan as customer, product, promo, etc',
    linkDemo: false
  },
]
const dataFlutter = [
  {
    img: flutix,
    description: 'Flutix is an application that can make it easier for you to order movie tickets',
    linkDemo: 'https://drive.google.com/file/d/1vmiXDLgwa6icQ_UIS-hizYa3F9VdMiQa/view?usp=sharing',
    username: 'test1@gmail.com',
    password: 'test123'
  }
]


const index = () => {
  return (
    <Row className="home_gallery_area" align="middle" style={{ flexDirection: 'column' }}>
      <h2>Our Latest Featured Projects</h2>
      <p>Who are in extremely love with eco friendly system.</p>
      <Col span={20}>
        <Tabs defaultActiveKey="1" centered style={{ paddingLeft: '5%', paddingRight: '5%', paddingBottom: '40px' }}>
          <TabPane tab="React" key="1">
            {
              dataReact.map((item, index) => {
                const gridStyle = {
                  width: '32%',
                  textAlign: 'center',
                  margin: ((index+1) % 2 === 0) &&  '0% 2%',
                  cursor: 'pointer'
                };
                return (
                  <Card.Grid style={gridStyle} key={index}>
                    <Image src={item.img} alt="" style={{ borderRadius: 5 }}/>
                    <p style={{ textAlign: 'left', fontSize: '16px', marginTop: '20px'}}>{item.description}</p>
                    <p style={{ textAlign: 'left', fontSize: '16px', marginTop: '20px'}}>{item.linkDemo ? <a href={item.linkDemo}>Demo link</a> : 'Demo: Internal'}</p>
                  </Card.Grid>
                )
              })
            }
          </TabPane>
          <TabPane tab="Vue" key="2">
            {
              dataVue.map((item, index) => {
                const gridStyle = {
                  width: '30%',
                  textAlign: 'center',
                  margin: ((index+1) % 2 === 0) &&  '0% 5%',
                  cursor: 'pointer'
                };
                return (
                  <Card.Grid style={gridStyle} key={index}>
                    <Image src={item.img} alt="" style={{ borderRadius: 5 }}/>
                    <p style={{ textAlign: 'left', fontSize: '16px', marginTop: '20px'}}>{item.description}</p>
                    <p style={{ textAlign: 'left', fontSize: '16px', marginTop: '20px'}}>{item.linkDemo ? <a href={item.linkDemo}>Demo link</a> : 'Demo: Internal'}</p>
                  </Card.Grid>
                )
              })
            }
          </TabPane>
          <TabPane tab="Flutter" key="3">
            {
              dataFlutter.map((item, index) => {
                const gridStyle = {
                  width: '30%',
                  textAlign: 'center',
                  margin: ((index+1) % 2 === 0) &&  '0% 5%',
                  cursor: 'pointer'
                };
                return (
                  <Card.Grid style={gridStyle} key={index}>
                    <Image src={item.img} alt="" style={{ borderRadius: 5 }}/>
                    <p style={{ textAlign: 'left', fontSize: '16px', marginTop: '20px'}}>{item.description}</p>
                    <p style={{ textAlign: 'left', fontSize: '16px', marginTop: '20px'}}>{item.linkDemo ? <a href={item.linkDemo}>Demo link</a> : 'Demo: Internal'}</p>
                    <p style={{ textAlign: 'left', fontSize: '16px', marginTop: '20px'}}>{item.username && `Username: ${item.username} `}</p>
                    <p style={{ textAlign: 'left', fontSize: '16px', marginTop: '20px'}}>{item.password && `Password: ${item.password} `}</p>
                  </Card.Grid>
                )
              })
            }
          </TabPane>
        </Tabs>
      </Col>
    </Row>
  )
}

export default index
