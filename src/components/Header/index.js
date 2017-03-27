import React, { PropTypes } from "react"

import { Link } from "phenomic"
import Svg from "react-svg-inline"

import twitterSvg from "../icons/iconmonstr-twitter-1.svg"
import gitHubSvg from "../icons/iconmonstr-github-1.svg"

import styles from "./index.css"

const ListaPaginas = (props, { collection }) =>{
  const listaPaginas = collection.filter(x=>x.linkName)
    return (
      <nav className={ styles.nav}>
        <div className={ styles.navPart1}>
          {listaPaginas.map(x=>(
            <Link className={ styles.link }
              key={x.linkName}
              to={x.nav}>
              { x.linkName }
            </Link>
          )
          )}
        </div>
      </nav>
    )
}
ListaPaginas.contextTypes ={
  collection: PropTypes.array.isRequired,
}
const Header = (props, { metadata: { pkg } }) => (
  <header className={ styles.header }>
    <nav className={ styles.nav }>
      <div className={ styles.navPart1 }>
        <ListaPaginas />
      </div>
      <div className={ styles.navPart2 }>
        {
          pkg.twitter &&
          <a
            href={ `https://twitter.com/${pkg.twitter}` }
            className={ styles.link }
          >
            <Svg svg={ twitterSvg } cleanup />
            { "Twitter" }
          </a>
        }
        {
          pkg.repository &&
          <a
            href={ pkg.repository }
            className={ styles.link }
          >
            <Svg svg={ gitHubSvg } cleanup />
            { "GitHub" }
          </a>
        }
      </div>
    </nav>
  </header>
)

Header.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Header
