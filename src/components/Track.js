import React from 'react';
import { connect } from 'react-redux';

const Track = ({ track }) => <div>{track.name}</div>;

const mapStateToProps = (state, ownProps) => ({
  track: state.tracks.find(track => track.id === Number(ownProps.params.id))
})

export default connect(mapStateToProps)(Track);