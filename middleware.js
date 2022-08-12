import { NextResponse } from 'next/server'


export function middleware(request) {


  if (request.nextUrl.pathname.startsWith('/myaccount')) {
    console.log('hello');

    //so basically for protected routes like my account we can make a condition where we receive a email or a jwt token and retrive the email from it and query our database to see if the user is eligble to visit the page if he is than we can let him through with NextResponse.next() or we can redirect him if he is not a admin or eligble.


    return NextResponse.redirect(new URL('/login', request.url));


  }

  
}