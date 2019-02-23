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
            list-style-type: none;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-evenly;
          }
          
          li {
            grow: 1;
            text-align: center;
          }
        `}</style>
        <ul>
          {props.links.map( (link) => (
            <li>
              <Link href={link.href}>
                <a>{link.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header