import React from 'react'
import { connect } from 'react-redux';
import { 
  //AUDIBLE_RECOMMENDATIONS_URL, 
  //AUDIBLE_CLIENT_ID,
  SAMPLE_BOOKS,
} from '../../constants';

import List from 'material-ui/lib/lists/list';

import Book from '../../components/Book/Book';

type Props = {

};

const FilterLibrary = ({
  books,
  addHostage,
  removeHostage
}) => {
  return (
    <List>
      {books.products.map(book => (
        <Book 
          book={book}
          key={book.asin}

          addHostage={addHostage}
          removeHostage={removeHostage}
        />
      ))}
    </List>
  );
}

const mapStateToProps = (state) => {
  return {
    books: SAMPLE_BOOKS
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addHostages(book) {
      dispatch({
        type: "ADD_HOSTAGES",
        payload: { book }
      });
    },

    removeHostage(book) {
      dispatch({
        type: "REMOVE_HOSTAGE",
        payload: { book }
      });
    },
  }
}
export default connect(mapStateToProps)(FilterLibrary);


// export class FilterLibrary extends React.Component {
//   props: Props;

//   fetchUserData(url) {
//     const options = {
//       headers: new Headers({
//         "Authorization": this.props.accessToken,
//         "Client-ID": AUDIBLE_CLIENT_ID,
//       }),
//       mode: "cors"
//     };
//     const request = new Request(url, options);
//     return fetch(request, options).then(response => console.log(response));
//     // return fetch(request, options).then(response => JSON.parse(response));
//   }

//   fetchCategories() {
//     fetch("https://api.audible.com/1.0/catalog/categories")
//     .then(response => {
//       console.log(response);
//       return JSON.parse(response);
//     })
//   }

//   render () {
//     this.fetchCategories();
//     // const books = this.fetchUserData(AUDIBLE_RECOMMENDATIONS_URL)
//     //   .then(recommendations => (
//     //     console.log("recommendations: ", recommendations)
//     //     // recommendations.recommendations.map(recommendation => (
//     //     //   console.log(recommendation)
//     //     //   // <span key={recommendation.asin}>{recommendation.title}</span>
//     //     // ))
//     //   ));

//     return (
//       <div>
//         Your Books!
//         Are fine
//       </div>
//     )
//   }
// }
