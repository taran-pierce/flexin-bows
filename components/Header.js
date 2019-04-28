import Head from 'next/head'
import Link from 'next/link'
import PropTypes from 'prop-types'

const Header = ( props ) => {
  
  return (
    <header>
      <Head>
        <title>{props.title}</title>
        <meta name='viewport' content='width=device-width, initial-scale: 1' />
        <link rel='shortcut icon' href='/static/images/favicon.ico' type='image/x-icon'></link>
        <link href='https://fonts.googleapis.com/css?family=Noto+Sans+JP:300,400,700' rel='stylesheet'></link>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
      </Head>
      <nav>
        <style jsx>{`
          ul {
            background-color: rgba(0,0,0,.4);
            border-bottom: 1px solid rgba(0,0,0,.1);
            box-shadow: inset 0 1px 3px rgba(0,0,0,.6);
            list-style-type: none;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
          }
          
          li {
            grow: 1;
            font-weight: 700;
            padding: .5rem 1rem;
            width: 50%;
          }

          a {
            color: #fafafa;
            text-decoration: none;
            letter-spacing: 3px;
            transition: all .5s ease-in-out;
          }
          a:hover {
            color: #111;
            text-decoration: underline;
          }
        `}</style>
        <ul>
          <li>
            <Link href={'/'}>
              <a>Flexin Bows with Terry</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.any.isRequired
}

export default Header