import React from 'react'
import '../styles/css/footer.css'
const Footer = () => {
  return (
    <footer className='footer-section'>
      <div className='footer-centre'>
        <section className='rights-section'>
          <p className='rights-sentence'>
            all rights reserved to me <br /> please don't touch &#169;
            <span>{new Date().getFullYear()}</span>{' '}
          </p>
        </section>
        <section className='address-section'>
          <address className='address'>
            You can contact author at
            {/* <a href='http://www.somedomain.com/contact'> www.somedomain.com</a>. */}
            <br />
            If you see any bugs, please
            <a href='mailto:samiomar994@gmail.com'> contact webmaster</a>.
            <br />
            You may also want to visit us:
            <br />
            Istanbul
            <br />
            Beşiktaş
            <br />
            14 SK , 55 CAD
            <br />
            Türkiye
          </address>
        </section>
      </div>
    </footer>
  )
}

export default Footer
