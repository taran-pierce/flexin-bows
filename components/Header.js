import Head from 'next/head'
import Link from 'next/link'

const Header = (props) => {
  
  return (
    <header>
      <Head>
        <title>{props.title ? props.title : `Flexin Bows`}</title>
        <meta name="viewport" content="width=device-width, initial-scale: 1" />
      </Head>
      <nav>
        <style jsx>{`
          ul {
            background-color: rgba(0,0,0,.3);
            border-bottom: 1px solid rgba(0,0,0,.4);
            list-style-type: none;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
          }
          
          li {
            grow: 1;
            padding: .5rem 1rem;
            width: 50%;
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
          <li className={`search-box`}>
            <form>
              <label>Search:
                <input
                  type={`text`}
                  onChange={props.onChange}
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