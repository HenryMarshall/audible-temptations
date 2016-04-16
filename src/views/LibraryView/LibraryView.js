import React from 'react'
import { connect } from 'react-redux';
import CLAudioPlayer from 'react-cl-audio-player';

import GridBooks from '../../components/GridBooks';
import { SAMPLE_BOOKS } from '../../constants.js';

// This view should include both GridBooks and AudioPlayer
class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = { itemPlaying: null };

    // const firstBook = this.props.books.products[0];
    // const defaultItemPlaying = [{
    //   url: firstBook.sample_url,
    //   artist: {
    //     song: firstBook.subtitle,
    //     name: firstBook.title,
    //   }
    // }];
    // this.state = { itemPlaying: defaultItemPlaying };
  }

  playSample(book) {
    console.log("in playSample");
    const itemPlaying = [{
      url: book.sample_url,
      artist: {
        song: book.subtitle,
        name: book.title,
      }
    }];
    this.setState({ itemPlaying });
  }

  render() {
    const ConditionalPlayer = this.state.itemPlaying
    ? <CLAudioPlayer songs={this.state.itemPlaying} autoplay />
    : <div></div>


    const boundPlaySample = this.playSample.bind(this);

    //const ConditionalPlayer = <CLAudioPlayer songs={this.state.itemPlaying} autoplay />
    
    return (
      <div>
        <GridBooks
          onClick={boundPlaySample}
          books={this.props.books}
        />
        {ConditionalPlayer}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: SAMPLE_BOOKS,
    neio: "neio"
  }
};

export default connect(mapStateToProps)(Library);
