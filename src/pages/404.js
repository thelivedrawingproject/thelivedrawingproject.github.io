import React from 'react'
import MainLayout from '../layout/MainLayout'
import { notFoundPage } from '../locales/strings'
import { Navbar } from '../components/Navbar'
import { NavbarData } from '../layout/NavbarData'
import Footer from '../components/Footer'

// TODO: dirty copy paste of MainLayout to avoid crazy language switcher (because URL doesnt exist)

export default function NotFoundPage({ data, pageContext: { locale } }) {
  const LOCAL = notFoundPage[locale];

  return (
    <>
      <div className="CssGridNavContentFooter">
        <nav className="gridNavBar">
          <Navbar links={NavbarData[locale].links}/>
        </nav>
        <div className="gridContent styleContent">
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '4rem',
          }}>
            <h1>{LOCAL.title}</h1>
            <p>{LOCAL.subtext}</p>
          </div>
        </div>
        <div className="gridFooter">
          <Footer/>
        </div>
      </div>
    </>
  )
}
