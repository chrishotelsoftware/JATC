import React from 'react'
import "./Homecont.css";
import {Row,Col} from "react-bootstrap";

const Homecont = () => {
  return (
    <div className='hcont'>
        <h1 className='hct1'>Contact us</h1>
        <h4 className='hct2'>Have a question, need assistance, or want to drop your CV. Reach out to us below.</h4>
        <div>
            <Row>
                <Col>
                <div className='imganmi'>
                    <img src='logo.png'></img>

                </div>

                </Col>
                <Col>
                <div className='formcont'>
                <h1 className='conth'>Contact Us</h1>
      <form >
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            
            required
          />
        </div>
        <div>
          <label htmlFor="cv">Upload CV:</label>
          <input
            type="file"
            id="cv"
            accept=".pdf,.doc,.docx"
           
            required
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

                </div>

                </Col>
            </Row>
        </div>

    </div>
  )
}

export default Homecont