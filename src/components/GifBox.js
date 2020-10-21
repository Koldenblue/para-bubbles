import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ParallaxLayer } from 'react-spring/renderprops-addons';


export default function GifBox() {
  const [gifUrl, setGifUrl] = useState('')


  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target[0].value)
    console.log("clicked")
    if (event.target[0].value !== '') {
      let searchGif = event.target[0].value
      axios.get("https://api.giphy.com/v1/gifs/search?api_key=KMJCyLbjOMWXTaQOvNjFdBssv831R8Md&q=" + searchGif + "&limit=25&offset=0&rating=g&lang=en").then(data => {
      let randGif = Math.floor(Math.random() * 25)
      setGifUrl(data.data.data[randGif].images.original.url)
      })
    } else {
      console.log('empty')
    }
  }

  let gifImg;
  if (gifUrl !== '') {
    console.log(gifUrl)
    gifImg = <img src={gifUrl} className='gif-img'/>
  }

  return (
  <ParallaxLayer offset={0} speed={1}>

    <div className='container text-box'>
      {gifImg}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="gif-search">
          <Form.Label>GIF search</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>
        <Button type='submit'>Get Gif</Button>
      </Form>
    </div>
    </ParallaxLayer>
  )
}
