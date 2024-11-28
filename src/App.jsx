
import axios from 'axios';
import './App.css'
import { useState } from 'react'
import { useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis,Tooltip } from 'recharts';
import { Comment } from 'react-loader-spinner'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

function App() {


 const [phones,setPhones] = useState([]);
 const [loading,setLoading] = useState(true);


 useEffect(()=> {


  axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
  .then(data=> {
    const phoneData = data.data.data;
    const makeFakeData = phoneData.map((phone)=> {
      const obj = {
        name: phone.phone_name,
        price: parseInt(phone.slug.split('-')[1])
      }
      return obj
    })
    setPhones(makeFakeData);
    setLoading(false);
  })


 },[])

  
  

  return (
    <>
    <div>
    <BarChart width={1200} height={250} data={phones}>
    <Bar dataKey="price" fill="#82ca9d" />
    <XAxis dataKey="name"/>
    <YAxis />
    <Tooltip />
    </BarChart>
    </div>

  
    {
      loading && <Comment
      visible={true}
      height="80"
      width="80"
      ariaLabel="comment-loading"
      wrapperStyle={{}}
      wrapperClass="comment-wrapper"
      color="#fff"
      backgroundColor="#F4442E"
      />
    }

    <div>
      <AwesomeSlider>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      </AwesomeSlider>
    </div>

    </>
  )
}

export default App
