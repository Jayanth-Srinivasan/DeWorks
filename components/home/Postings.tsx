import React from 'react'

function Postings() {
  return (
    <section className="" id="postings">
      <div className="mx-auto max-w-screen-xl px-4 py-8 md:py-12 md:px-6 lg:py-16 lg:px-8">
        <div className="mx-auto  text-left">
          <h2 className="text-3xl font-bold md:text-4xl">
            Popular job vacancy
          </h2>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"></div>
      </div>
    </section>
  );
}

export default Postings