import React from 'react'
import MainLayout from '../layout/MainLayout'
import { notFoundPage } from '../locales/strings'

export default function NotFoundPage({ data, pageContext: { locale }, location }) {
  const LOCAL = notFoundPage[locale];

  return (
    <MainLayout language={locale} location={{ ...location }}>
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
    </MainLayout>
  )
}
