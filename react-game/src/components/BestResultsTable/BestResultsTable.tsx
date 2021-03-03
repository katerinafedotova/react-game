import React from 'react';
import './bestResultsTable.css';

const BestResultsTable:React.FC=() => {
  const bestResultsArray=JSON.parse(localStorage.getItem('bestResultsStats') || '[]');
  const generateKey = (index: string) => `${index}_${new Date().getMilliseconds()}`;
  return (
    <div className="best-results-container">
      <h2 className="best-results-container__title">Best results</h2>
      <div className="best-results-container__table-container">
        <table className="table-container__table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Number of turns</th>
              <th>Number of cards</th>
            </tr>
          </thead>
          <tbody>
            {bestResultsArray.map((bestResultsElem:any, index:number) => (
              <tr key={generateKey(String(index))}>
                <td>{bestResultsElem.date.replace(/-/g, '.').replace(/T/gi, ' ').slice(0, 16)}</td>
                <td>{bestResultsElem.turns}</td>
                <td>{bestResultsElem.cards}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default BestResultsTable;
