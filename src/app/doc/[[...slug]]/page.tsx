import React from "react";

const Docs = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  if (slug?.length === 2) {
    return (
      <h1>
        Viewing docs for feature {slug[0]} and concept {slug[1]}
        {/* // http://localhost:3000/doc/routing/catch  -> Viewing docs for feature routing and concept catch */}
      </h1>
    );
  } else if (slug?.length === 1) {
    return <h1>Viewing docs for feature {slug[0]}</h1>;
    // http://localhost:3000/doc/routing ->Viewing docs for feature routing
  }
  return <div>Docs home page</div>;
  // http://localhost:3000/doc -> Docs home page
};

export default Docs;
