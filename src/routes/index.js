import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  Login, Foods, Drinks, FoodsInProgress,
  DrinksInProgress, Explore, ExploreFood, ExploreDrinks,
  ExploreFoodsIngredients, ExploreDrinksIngredients,
  Nationalities, Profile, DoneRecipes, FavoriteRecipes,
} from '../pages';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/foods:id" component={ Foods } />
        <Route exact path="/foods" component={ Foods } />
        <Route exact path="/drinks:id" component={ Drinks } />
        <Route exact path="/foods:id/in-progress" component={ FoodsInProgress } />
        <Route exact path="/drinks:id/in-progress" component={ DrinksInProgress } />
        <Route exact path="/explore" component={ Explore } />
        <Route exact path="/explore/foods" component={ ExploreFood } />
        <Route exact path="/explore/drinks" component={ ExploreDrinks } />
        <Route
          exact
          path="/explore/foods/ingredients"
          component={ ExploreFoodsIngredients }
        />
        <Route
          exact
          path="/explore/drinks/ingredients"
          component={ ExploreDrinksIngredients }
        />
        <Route exact path="/explore/foods/nationalities" component={ Nationalities } />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/done-recipes" component={ DoneRecipes } />
        <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
