import React from 'react';

export default function Board({ params }: { params: { id: string } }) {
  // Grab all posts under this board (Sorted by recent first)

  return (
    <div>
      <h1>Board {params.id}</h1>
    </div>
  );
}
