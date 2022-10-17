import React, {useState} from 'react'
import axios, * as others from "axios"
import {MDBCard, MDBCardBody, MDBBtn, MDBInput, MDBBadge, MDBContainer, MDBRow, MDBCol} from "mdb-react-ui-kit"
import { useRouter } from 'next/router'
import Link from 'next/link'

const Categories = ({data}) => {
  const router = useRouter()
  const [newCategory, setNewCategory] = useState("");

  const handleChange = (e) => {
    setNewCategory(e.target.value)
  }

  const addNewCategory = async (e) => {
    e.preventDefault()
    if(newCategory !== ""){
      try {
        const res = await axios(`${process.env.API}/api/add/category`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          data: JSON.stringify({newCategoryName: newCategory})
        })
        console.log(res.data);
        router.push("/")
      } catch (error) {
        console.log(error);
      }
    }
    else{
      alert("Category name cannot be blank!")
    }
  }

  const changeCategory = async (categoryId) => {
    try {
      const res = await axios(`${process.env.API}/api/change/current/category`, {
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

  return (
    <div className='container' style={{"paddingBottom": "400px"}}>
      <h1 className="mt-2 mb-4" style={{"color": "whitesmoke"}}>Categories</h1>
      <MDBContainer>
        <MDBRow className='mb-3'>
          <MDBCol sm='4'></MDBCol>
          <MDBCol sm='4'>
            <MDBCard
            className="mt-2 mb-4"
            background='dark'
            style={{
              "borderRadius": "10px",
            }}>
              <MDBCardBody className="text-center">
                <form onSubmit={addNewCategory}>
                  <MDBInput
                    label='New category name' 
                    id='new-category-name' 
                    name='newCategory' 
                    type='text' 
                    size='lg' 
                    className='text-white'
                    labelStyle={{"color": "white"}}
                    onChange={handleChange} />
                  <MDBBtn outline rounded color='light' className='mt-4' style={{"float": "right"}} type="submit">
                    Add Category
                  </MDBBtn>
                </form>
              </MDBCardBody>
            </MDBCard>
            <div>
              <div className="container">
                {data.category_list.map((category) => {
                  return (
                    <MDBBtn 
                      key={category.categoryId} 
                      rounded 
                      outline 
                      color='info' 
                      size='lg'
                      block
                      onClick={() => {changeCategory(category.categoryId)}}
                    >
                      <MDBBadge color='secondary' className='ms-2' style={{"float": "left"}}>
                        {category.not_done}
                      </MDBBadge>
                      {category.categoryName}
                      <MDBBadge color='success' className='ms-2' style={{"float": "right"}}>
                      {category.done}
                      </MDBBadge>
                    </MDBBtn>
                  )
                })}
              </div>
            </div>
          </MDBCol>
          <MDBCol sm='4'></MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await axios(`${process.env.API}/api/get/categories`, {
    method: "GET"
  })
  const data = res.data
  // console.log(data);
  return {
    props: {data}
  }
}

export default Categories