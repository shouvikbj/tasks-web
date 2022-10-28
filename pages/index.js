import React from "react"
import axios, * as others from "axios"
// import Link from "next/link"
import {useRouter} from "next/router"

import {MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBtn, MDBIcon} from "mdb-react-ui-kit"

const Home = ({data}) => {
  const router = useRouter()
  
  const changeStatus = async (categoryId, taskId) => {
    try {
      const res = await axios(`${process.env.API}/api/mark/done`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        data: JSON.stringify({categoryId: categoryId, taskId: taskId})
      })
      console.log(res.data);
      router.push("/")
    } catch (error) {
      console.log(error);
    }
  }

  const deleteDone = async (categoryId) => {
    const choice = confirm("Delete all completed tasks in current category?");
    if(choice){
      try {
        const res = await axios(`${process.env.API}/api/delete/done`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          data: JSON.stringify({categoryId: categoryId})
        })
        console.log(res.data);
        router.push("/")
      } catch (error) {
        console.log(error);
      }
    }
    else{
      console.log("Request canceled!");
    }
  }

  return (
    <div className='container' style={{"paddingBottom": "400px","backgroundColor": "#0D0D0D"}}>
      <h1 className="mt-2 mb-4" style={{"color": "whitesmoke"}}>{data.categoryName}</h1>
      <MDBContainer>
        <MDBBtn outline floating size="lg" color="danger" style={{"float": "right"}} onClick={() => {deleteDone(data.categoryId)}}>
          <MDBIcon fas icon='trash' size="lg" />
        </MDBBtn>
      </MDBContainer>
      <br/><br/><br/>
      <MDBContainer>
          <MDBRow className='mb-3'>
            <MDBCol lg='4'></MDBCol>
            {data.task_list.length === 0 ? (
              <MDBCol lg='4'>
                <MDBCard 
                  className="m-4"
                  style={{
                    "borderRadius": "90px",
                    "position": "absolute", 
                    "top": "40%", 
                    "right": "0", 
                    "left": "0",
                    "boxShadow": "0px 0px 0px 0px white",
                    "backgroundColor": "#0D0D0D"
                  }}
                >
                  <MDBCardBody className="text-center text-white">
                    Nothing here yet!
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            ) : (
              <MDBCol lg='4'>
                {data.task_list.map((task) => {
                  if(task.done === "false") {
                    return (
                      <MDBCard key={task.id} className="mb-2" style={{
                        "borderRadius": "90px",
                        "backgroundColor": "#6A1B4D"
                      }}
                      onClick={() => {changeStatus(data.categoryId, task.id)}}
                      >
                        <MDBCardBody className="text-white">
                          {task.taskName}
                        </MDBCardBody>
                      </MDBCard>
                    )
                  }
                  else{
                    return (
                      <MDBCard key={task.id} className="mb-2" style={{
                        "borderRadius": "90px",
                        "backgroundColor": "#8D3DAF"
                      }}
                      onClick={() => {changeStatus(data.categoryId, task.id)}}
                      >
                        <MDBCardBody className="text-white">
                          <s>{task.taskName}</s>
                        </MDBCardBody>
                      </MDBCard>
                    )
                  }
                })}
              </MDBCol>
            )}
            <MDBCol sm='4'></MDBCol>
          </MDBRow>
        </MDBContainer>
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await axios(`${process.env.API}/api/get`, {
    method: "GET"
  })
  const data = res.data
  // console.log(data);
  return {
    props: {data}
  }
}

export default Home