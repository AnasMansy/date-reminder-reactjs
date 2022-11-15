import React from 'react'
import { Accordion, Row } from 'react-bootstrap'
import { qustions } from '../data'

const QList = ({data,deleteOne}) => { 

    
  const storageData=JSON.parse(localStorage.getItem("items")) 
    const onDelete=(e)=>{
        const index=qustions.findIndex((item)=>item.id===e) 
    qustions.splice(index,1)
        deleteOne()
    }
    return (
        <Row>
            <Accordion>
            { localStorage.getItem("items")?( 
                storageData.map((e)=>{
                    return <Accordion.Item key={e.id} eventKey={e.id}>
                    <Accordion.Header>{e.q}        </Accordion.Header>
                    <Accordion.Body className='d-flex justify-content-between'>
                        <div>
                            {e.a}
                        </div>
                        <button className='btn btn-danger' onClick={()=>onDelete(e.id)}>delete</button>
                    </Accordion.Body>
                </Accordion.Item>
                })  ): <h1>no qustions</h1>}
               
            </Accordion>
        </Row>
    )
}

export default QList
