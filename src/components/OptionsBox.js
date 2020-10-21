import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ParallaxLayer } from 'react-spring/renderprops-addons';

function OptionsBox() {

  let handleSubmit = () => {

  }

  return (<>
  <ParallaxLayer offset={1.} speed={1}>
    <div className='options-box container'>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="options-box">
          <Form.Label>number of bubbles</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>
        <Form.Group controlId='grayscale'>
          <Form.Check>Grayscale</Form.Check>
        </Form.Group>
        <Button type='submit'>Get Gif</Button>
      </Form>
    </div>
    </ParallaxLayer>
  </>)
}

export default OptionsBox;