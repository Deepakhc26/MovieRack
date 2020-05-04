import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { fetchMovies, deleteMovie } from '../../actions/moviesAction';
import { Table, Col, Row, Popconfirm } from 'antd';
import './table.css';


 class moviesTable extends Component {

     componentWillMount() {
         this.props.fetchMovies();
     }

     handleDelete = (key) => {
        const dataSource = [...this.props.movies];
        const filterData = dataSource.filter(item => item.imdbID !== key);
        this.props.deleteMovie(filterData)
      }
    
    render() {     
      const columns = [{
        title: 'Title',
        dataIndex: 'Title',
        onFilter: (value, record) => record.name.indexOf(value) === 0,
        sorter: (a, b) =>  a.Title.localeCompare(b.Title)
      }, {
        title: 'Year',
        dataIndex: 'Year',
        onFilter: (value, record) => record.name.indexOf(value) === 0,
        sorter: (a, b) => b.Year - a.Year
      }, {
        title: 'imdbID',
        dataIndex: 'imdbID',
        onFilter: (value, record) => record.name.indexOf(value) === 0,
        sorter: (a, b) => a.imdbID.localeCompare(b.imdbID)
      },{
        title: '',
        dataIndex: 'imdbID',
        render: (text, record) => (
          this.props.movies.length >= 1
            ? (
              <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.imdbID)}>
                <a href='#'><span role="img" aria-label="trash">🗑️</span></a>
              </Popconfirm>
            ) : null
        ),
      }];

        return (
            <Row>
            <Col span={13} offset={5}>            
              <Table columns={columns} dataSource={this.props.movies} rowKey={record => record.imdbID} />
            </Col>
          </Row>
        )
    }
}

moviesTable.propTypes = {
    fetchMovies: PropTypes.func.isRequired,
    deleteMovie: PropTypes.func.isRequired,
    movies: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    movies: state.movies.items
})



export default connect(mapStateToProps, { fetchMovies , deleteMovie })(moviesTable);