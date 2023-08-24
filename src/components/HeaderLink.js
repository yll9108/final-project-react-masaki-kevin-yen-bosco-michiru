import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styled from 'styled-components'

const LinkStyle = styled.a`
  text-decoration: none;
  color: inherit;

  &.active {
    text-decoration: underline;
    font-weight: bold;
  }
`

const HeaderLink = ({ href, children }) => {
  const router = useRouter()

  return (
    <Link
      href={href}
      passHref
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <LinkStyle className={router.pathname === href ? 'active' : ''}>
        {children}
      </LinkStyle>
    </Link>
  )
}

export default HeaderLink
