import React from 'react'
import { Route, IndexRoute } from 'react-router'

// NOTE: here we're making use of the `resolve.root` configuration
// option in webpack, which allows us to specify import paths as if
// they were from the root of the ~/src directory. This makes it
// very easy to navigate to files regardless of how deeply nested
// your current file is.
import CoreLayout from 'layouts/CoreLayout/CoreLayout'
import HomeView from 'views/HomeView/HomeView'
import Auth from 'views/AuthView/';
import ManageLocations from 'views/ManageLocationsView';
import Blackmail from 'views/BlackmailView';
import FilterLibrary from 'views/FilterLibraryView';
import Library from 'views/LibraryView';

export default (store) => (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={Library} />
    <Route path='/auth' component={Auth} />
    <Route path='/manageLocations' component={ManageLocations} />
    <Route path='/blackmail' component={Blackmail} />
    <Route path='/filterLibrary' component={FilterLibrary} />

    <Route path='/intro'>
      <IndexRoute component={HomeView} />

    </Route>
  </Route>
)
