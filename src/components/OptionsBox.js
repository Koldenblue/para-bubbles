import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ParallaxLayer } from 'react-spring/renderprops-addons';

function OptionsBox(props) {

  return (<>
  <ParallaxLayer offset={1} speed={1}>
    <div className='options-box container box-bg'>
      <Form onSubmit={props.handleOptionsSubmit}>
        <Form.Group controlId="options-box">
          <Form.Label>Number of Bubbles - enter a number between 0 and 300. Higher bubble counts may slow down on older computers!</Form.Label>
          <Form.Control type="text" placeholder="200" />
        </Form.Group>
        <Form.Group controlId='grayscale'>
          <Form.Check type='checkbox' label='Grayscale' className='grayscale-radio'/>
        </Form.Group>
        <Button type='submit' className='options-btn'>Generate Background with Selected Options</Button>
      </Form>
    </div>
    </ParallaxLayer>
  </>)
}

export default OptionsBox;