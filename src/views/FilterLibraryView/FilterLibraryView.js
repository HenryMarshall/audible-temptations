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
  toggleHostage,
}) => {
  return (
    <List>
      {books.map(book => (
        <Book 
          book={book}
          key={book.asin}

          toggleHostage={toggleHostage}
        />
      ))}
    </List>
  );
}

const mapStateToProps = (state) => {
  return {
    books: state.books
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleHostage(asin) {
      dispatch({
        type: "TOGGLE_HOSTAGE",
        payload: { asin }
      });
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FilterLibrary);


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
