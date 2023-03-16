import { Routes, Route } from 'react-router-dom';
import { React } from 'react';
// import css from './App.module.css';
import Characters from 'pages/Characters/Characters';
import CharacterDetails from 'pages/CharacterDetails/CharacterDetails';
// const Characters = lazy(() => import('pages/Characters/Characters'));
// const CharacterDetails = lazy(() =>
//   import('pages/CharacterDetails/CharacterDetails')
// );

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/character/:idCharacter" element={<CharacterDetails />} />

        <Route
          path="*"
          element={
            <img
              src="https://www.impactplus.com/hubfs/404-error-page-examples-best.jpg"
              alt="not found"
            />
          }
        />
      </Routes>
    </div>
  );
};
