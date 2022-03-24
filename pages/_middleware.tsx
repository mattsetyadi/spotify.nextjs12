import { NextRequest, NextResponse } from 'next/server'

import { getToken } from 'next-auth/jwt'

/**
 * Middleware still beta version
 * if we simply redirect with NextResponse.redirect('/login') we'll got the error
 * because for now nwe need to use only absolute URLs only (IN TS)
 */

export async function middleware(req: NextRequest) {
  const token = await getToken({
    // @ts-ignore
    req: req,
    secret: process.env.JWT_SECRET,
  })
  // const { pathname } = req.nextUrl.clone()
  const url = req.nextUrl.clone()
  const { pathname } = url || {}
  // console.log('TOKEN MID === ', token)
  // console.log('PATHNAME MID === ', url)
  // console.log('URL MID === ', url)
  // console.log('REQ URL MID === ', req.nextUrl)
  if (pathname.includes('/api/auth') || token) {
    return NextResponse.next()
  }

  // if (pathname.includes('/api/auth') && token) {
  //   console.log('EXEC IN LOGIN PAGE')
  //   url.pathname = '/'
  //   return NextResponse.redirect(url)
  // }
  if (!token && pathname !== '/login') {
    url.pathname = '/login'
    // rewrite : if we redirected to login page but url still at home '/'
    // return NextResponse.rewrite(url)
    return NextResponse.redirect(url)
  }
}
