import React from 'react'

const Footer = (props) => {
  return (
    <div className="bg-dark text-light mt-5">
      <p className="text-center p-3">Copyright &copy; {props.title} 2023. All right reserved</p>
    </div>
  )
}

export default Footer;
