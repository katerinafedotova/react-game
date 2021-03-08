import React from 'react';
import languageConst from '../../assets/languageConst';
import './bestResultsTable.css';

type Props={
  language:string,
};
const BestResultsTable:React.FC<Props>=({language}:Props) => {
  const bestResultsArray=JSON.parse(localStorage.getItem('bestResultsStats') || '[]');
  const compareTurns=(a:any, b:any) => {
    if (a.turns < b.turns) {
      return -1;
    }
    if (a.turns > b.turns) {
      return 1;
    }
    return 0;
  };
  bestResultsArray.sort((a:any, b:any) => (compareTurns(a, b)));
  if (bestResultsArray.length===11) {
    bestResultsArray.pop();
  }
  const generateKey = (index: string) => `${index}_${new Date().getMilliseconds()}`;

  return (
    <div className="best-results-container">
      <h2 className="best-results-container__title">{languageConst[language].bestResults}</h2>
      <div className="best-results-container__table-container">
        <table className="table-container__table">
          <thead>
            <tr>
              <th>{languageConst[language].date}</th>
              <th>{languageConst[language].turn}</th>
              <th>{languageConst[language].cards}</th>
            </tr>
          </thead>
          <tbody>
            {bestResultsArray.sort((a:any, b:any) => (compareTurns(a, b)))
              .map((bestResultsElem:any, index:number) => (
                <tr key={generateKey(String(index))}>
                  <td>{bestResultsElem.date.replace(/-/g, '.').replace(/T/gi, ' ').slice(0, 16)}
                  </td>
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
