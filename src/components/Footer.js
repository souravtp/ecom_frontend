import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="bg-secondary py-3">
        <div className="container text-center">
          <div className="mb-2">Ecom</div>
          <div className="mb-2">Contact us: contact@example.com</div>
          <div>
            <a href="https://www.facebook.com" className="text-dark me-3">Facebook</a>
            <a href="https://www.twitter.com" className="text-dark me-3">Twitter</a>
            <a href="https://www.instagram.com" className="text-dark me-3">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
