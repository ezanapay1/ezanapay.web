import { NavBar, Hero, Features, Services, Footer } from '../../../components'
import React from 'react'

const Landing = () => {
  return (
    <>
        <NavBar />
        <Hero />
        <Features />
        <Services />
        <Footer
          data={[
						{
							title: 'EzanaPay',
							links: [
								{ label: 'Home', link: '/' },
								{ label: 'About', link: '/about' },
								{ label: 'Contact', link: '/contact' },
							],
						},
					]}
        />
    </>
  )
}

export default Landing