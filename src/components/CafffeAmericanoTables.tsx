import React from 'react';

interface TableData {
  ingredients: string[];
  nutrition: { [key: string]: string | number };
}

const data: TableData = {
  ingredients: ['Water', 'Brewed Espresso'],
  nutrition: {
    'Calories': 15,
    'Total Fat': '0 g',
    'Saturated Fat': '0 g',
    'Trans Fat': '0 g',
    'Cholesterol': '0 mg',
    'Sodium': '10 mg',
    'Total Carbohydrates': '2 g',
    'Dietary Fiber': '0 g',
    'Sugars': '0 g',
    'Protein': '1 g',
    'Caffeine': '225 mg'
  }
};

export const CaffeAmericanoTables: React.FC = () => {
  return (
    <div className="tables-container">
      <div className="table-wrapper">
        <table>
          <thead>
            <tr><th>Ingredients</th></tr>
          </thead>
          <tbody>
            {data.ingredients.map((ingredient, index) => (
              <tr key={index}><td>{ingredient}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr><th>Nutrition</th><th></th></tr>
          </thead>
          <tbody>
            {Object.entries(data.nutrition).map(([key, value], index) => (
              <tr key={index}>
                <td>{key}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <style jsx>{`
        .tables-container {
          display: flex;
          flex-direction: row;
          gap: 30px;
        }
        .table-wrapper {
          width: 500px;
        }
        @media (max-width: 768px) {
          .tables-container {
            flex-direction: column;
            gap: 0px;
          }
          .table-wrapper {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};