import React from 'react';

export default function BrandHeader() {
  return (
    <header className="topline">
      <div className="brand"><span className="brand-mark" aria-hidden="true">✳</span> daylist</div>
      <span className="today">A little progress, every day</span>
    </header>
  );
}
