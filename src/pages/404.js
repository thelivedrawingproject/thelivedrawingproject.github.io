import React from 'react'
import MainLayout from '../layout/MainLayout'

const NotFoundPage = () => (
  <MainLayout>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: '4rem',
    }}>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist...</p>
    </div>
  </MainLayout>
)

export default NotFoundPage
