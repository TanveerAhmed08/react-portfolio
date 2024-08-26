import React from 'react'
import { CONTACT } from '../constants'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className="border-b border-neutral-800 pb-20">
      <h1 className="my-10 text-center text-4xl">Get in Touch</h1>
      <div className="text-center tracking-tighter">
        <p className='my-4'>{CONTACT.address}</p>
        <Link to={"https://wa.me/message/ZB25H454XQG5M1"} target='_blank'>
        <p className='my-4'>{CONTACT.phoneNo}</p>
        </Link>
        <Link to={"https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlFCjWnTQdxpQrPksKBjlrFjwJlpTvVxtRkmPBWrqdJcDCLkpVCFQwbVNmdHvshnScbJwg"} target='_blank'>
        <p>{CONTACT.email}</p>
        </Link>
      </div>
    </div>
  )
}

export default Contact
