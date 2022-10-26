import React, {useState} from 'react'
import axios, * as others from "axios"
import {MDBCard, MDBCardBody, MDBBtn, MDBInput, MDBContainer, MDBRow, MDBCol} from "mdb-react-ui-kit"
import { useRouter } from 'next/router'

const Add = ({data}) => {
  const router = useRouter()
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value)
  }

  const addNewTask = async (e) => {
    e.preventDefault()
    if(newTask !== ""){
      try {
        const res = await axios(`${process.env.API}/api/add`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          data: JSON.stringify({newTaskName: newTask, categoryId: data.categoryId})
        })
        console.log(res.data);
        router.push("/")
      } catch (error) {
        console.log(error);
      }
    }
    else{
      alert("Task name cannot be blank!")
    }
  }

  return (
    <div className='container' style={{"paddingBottom": "400px"}}>
      <h1 className="mt-2 mb-4" style={{"color": "whitesmoke"}}>Add New Task In</h1>
      <h2 style={{"color": "gray"}}>{data.categoryName}</h2>
      <MDBContainer>
        <MDBRow className='mb-3'>
          <MDBCol lg='4'></MDBCol>
          <MDBCol lg='4'>
            <MDBCard className="mt-4" background='dark'>
              <MDBCardBody className="text-center">
                <form onSubmit={addNewTask}>
                  <MDBInput
                    label='New task name'
                    id='new-task-name'
                    name='newTask'
                    type='text'
                    size='lg'
                    className='text-white'
                    labelStyle={{"color": "white"}}
                    autoComplete="off"
                    onChange={handleChange} />
                  <MDBBtn
                    outline
                    rounded
                    color='light'
                    className='mt-4' 
                    style={{"float": "right"}}
                    type="submit"
                  >
                    Add Task
                  </MDBBtn>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg='4'></MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  )
}

export const getServerSideProps = async () => {
  // const res = await

  const res = await axios(`${process.env.API}/api/getCurrentCategory`, {
    method: "GET"
  })
  const data = res.data
  // console.log(data);
  return {
    props: {data}
  }
}

export default Add