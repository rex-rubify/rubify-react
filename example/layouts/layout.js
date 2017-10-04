import React from 'react'
import stylesheet from 'styles/dist.scss'
import Head from 'next/head';

export default (ChildComponent) => (
  class Layout extends React.Component {
    render() {
      return (
        <div>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          </Head>
          <div className='layout-admin-login'>
            <ChildComponent {...this.props}/>
          </div>
        </div>
      );
    }
  }
)
