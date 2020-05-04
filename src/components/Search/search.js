import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { fetchMovies,  searchMovie} from '../../actions/moviesAction';
import { Input, Col, Row, Button } from 'antd';
import './search.css';

let gblSearchValue = ' ';

class search extends Component {
  
  componentWillMount() {
    this.props.fetchMovies();
  }

  handleChange = (e) => {
    this.props.searchMovie(e.target.value);
    gblSearchValue = e.target.value;
  }

  handleSubmit = (e) => {
    e.preventDefault()    
    this.props.searchMovie(gblSearchValue);
  }

  render () {    
    return (
      <Row>
        <Col span={14} offset={5}>
          <form onSubmit={this.handleSubmit}>
            <Input className='input' placeholder='Search movies by title...' onChange={this.handleChange} />
            <Button type="primary" onClick={this.handleSubmit}>Search</Button>
          </form>
        </Col>
      </Row>
    )
  }
}


searchMovie.propTypes = {
  fetchMovies: PropTypes.func.isRequired,
  searchMovie: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  movies: state.movies.items
})


export default connect(mapStateToProps, { fetchMovies , searchMovie })(search);