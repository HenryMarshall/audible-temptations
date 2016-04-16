import React from 'react'
import { connect } from 'react-redux';
import CLAudioPlayer from 'react-cl-audio-player';

import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';
import GridBooks from '../../components/GridBooks';
import { SAMPLE_BOOKS } from '../../constants.js';

// This view should include both GridBooks and AudioPlayer
class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = { itemPlaying: null };
  }

  playSample(book) {
    console.log("in playSample");
    this.setState({ itemPlaying: null })
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

    const hostages = this.props.books.filter(book => book.isHostage);
    const nonHostages = this.props.books.filter(book => !book.isHostage);

    const beingNaughty = () => this.props.history.push("/override");

    const conditionalHostageHeader = (hostages.length === 0)
      ? <div></div>
      : <Toolbar><ToolbarTitle text="Hostages"/></Toolbar>;

    return (
      <div>
        <Toolbar><ToolbarTitle text="Always Available"/></Toolbar>
        <GridBooks
          onClick={boundPlaySample}
          books={nonHostages}
        />

        {conditionalHostageHeader}
        <GridBooks
          onClick={beingNaughty}
          books={hostages}
        />
        {ConditionalPlayer}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books,
  }
};

export default connect(mapStateToProps)(Library);
