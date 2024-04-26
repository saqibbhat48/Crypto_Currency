import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-6 text-center">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Saqib Bhat Cryptocurrency Web App</p>
      </div>
    </footer>
    </div>
  )
}

export default Footer
