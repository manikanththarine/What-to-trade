import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import icon from '../../accects/icon.jpeg'
import { Button, Col, Row, Table } from 'react-bootstrap'

const AdminPage = () => {

  let data = JSON.parse(localStorage.getItem("stock"))
  let admindetails = JSON.parse(localStorage.getItem("details"))

  const [details, setDetails] = useState(admindetails)
  const [stockdetails, setStockdetails] = useState([])

  const dataset = () => {
    let setdata = []
    data && data.map((data, i) => {
      details.map((value) => {
        if (value.name == data.Createdby) {
          setdata.push(data)
        }
      })
    })
    setStockdetails(setdata)
  }

  useEffect(() => {
    dataset()
  }, [])


  return (

    <div>
      <Navbar />
      <div>

        <div className='admincontainer'>
          <span>
            {details && details.map((data) => {
              return <>
                <div>
                  <Row className="justify-content-md-center">
                    <Col xs lg="2">
                      <img src={icon} >
                      </img>
                    </Col>
                    <Col md="auto" style={{ marginTop: '2%', fontSize: "19px" }}>
                      {data.name}
                      <p>{data.position}</p>
                      <p>Manikanththarine31@gmail.com</p>
                      <p>Total Blogs: {stockdetails.length}</p>
                    </Col>

                  </Row>
                </div>
              </>
            })}
          </span>
        </div>
        <Button style={{marginTop:"-4%"}}> Create Blog</Button>

        <div className='blogcontainer'>
          <Table>
            <thead>
              <tr>
                <th>
                  S.No
                </th>
                <th>
                  Tumbline
                </th>
                <th>
                  Title
                </th>
                <th>
                  Date
                </th>
                <th>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {stockdetails.map((data, i) => {
                return <>
                  <tr>
                    <td>
                      {i + 1}
                    </td>
                    <td>
                      <img style={{ width: "45px" }} src={data.image}></img>
                    </td>
                    <td>
                      {data.title}
                    </td>
                    <td>
                      {data.date}
                    </td>
                    <td>
                      <Button variant='success'> Update </Button> &nbsp;
                      <Button variant='danger'> Delete </Button>
                    </td>
                  </tr>

                </>
              })}

            </tbody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default AdminPage
