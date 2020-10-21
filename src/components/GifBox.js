import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ParallaxLayer } from 'react-spring/renderprops-addons';


export default function GifBox() {
  const [gifUrl, setGifUrl] = useState('')
  const gifSearchLimit = 10;

  function handleSubmit(event) {
    event.preventDefault();
    if (event.target[0].value !== '') {
      let searchGif = event.target[0].value
      axios.get("https://api.giphy.com/v1/gifs/search?api_key=KMJCyLbjOMWXTaQOvNjFdBssv831R8Md&q=" + searchGif + "&limit=" + gifSearchLimit + "&offset=0&rating=g&lang=en").then(data => {
        let randGif = Math.floor(Math.random() * gifSearchLimit)
        try {
          setGifUrl(data.data.data[randGif].images.original.url)
        }
        catch (TypeError) {
          setGifUrl("NONE")
        }
      })
    } else {
      setGifUrl('')
    }
  }


  let gifImg;
  if (gifUrl === 'NONE') {
    gifImg = <h1>No image found, try again!</h1>
  }
  else if (gifUrl !== '') {
    console.log(gifUrl)
    gifImg = <img src={gifUrl} className='gif-img'/>
  } 
  else {
    gifImg = <> </>
  }


  return (
  <ParallaxLayer offset={0} speed={1}>

    <div className='container text-box'>
      {gifImg}
      <Form  onSubmit={handleSubmit}>
        <Form.Group controlId="gif-search">
          <Form.Control id='gif-form' type="text" placeholder="Enter a search term" />
        </Form.Group>
        <Button type='submit' className='gif-btn' >Gif Search</Button>
      </Form>
    </div>
    </ParallaxLayer>
  )
}
