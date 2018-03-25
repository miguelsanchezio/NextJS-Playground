import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

const errorPage = () => (
  <div>
    <h1>Oops, this page doesn't exist.</h1>
    <p>Go <Link href="/"><a>back</a></Link></p>
  </div>
);

export default errorPage;