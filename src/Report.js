import React from 'react';

export function Report(props) {
  const purchase = props.purchase;
  const country = props.country;

  return (
    <div>
      <h1>{country.c_name}</h1>
      <h2>Units: </h2>
      <p></p>
    </div>
  );
}