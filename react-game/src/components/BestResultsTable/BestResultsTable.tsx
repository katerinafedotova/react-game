import React from 'react';
import './bestResultsTable.css';
import languageConst from '../../assets/languageConst';

type Props={
  language:string,
};
const BestResultsTable:React.FC<Props>=({language}:Props) => {
  const bestResultsArray=JSON.parse(localStorage.getItem('bestResultsStats') || '[]');
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
