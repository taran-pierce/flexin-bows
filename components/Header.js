import Head from 'next/head'
import Link from 'next/link'

const Header = (props) => {
  
  return (
    <header>
      <Head>
        <title>{props.title ? props.title : `Flexin Bows`}</title>
        <meta name="viewport" content="width=device-width, initial-scale: 1" />
        <link rel="shortcut icon" href="/static/images/favicon.ico" type="image/x-icon"></link>
        <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:300,400,700" rel="stylesheet"></link>
      </Head>
      <nav>
        <style jsx>{`
          ul {
            background-color: rgba(0,0,0,.2);
            border-bottom: 1px solid rgba(0,0,0,.1);
            box-shadow: 0 1px 0 rgba(255,255,255,.8);
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
            color: #fff;
            text-decoration: none;
            text-shadow: -1px -1px 0 rgba(0,0,0,.6);
            letter-spacing: 3px;
          }
          
          .search-box {
            text-align: right;
          }
        `}</style>
        <ul>
          <li>
            <Link href={`/`}>
              <a>Flexin Bows with Terry</a>
            </Link>
          </li>
          <li className={`search-box hidden`}>
            <form>
              <label>Search:
                <input
                  type={`text`}
                />
              </label>
            </form>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header