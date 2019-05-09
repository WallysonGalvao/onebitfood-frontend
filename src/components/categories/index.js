import React, { Fragment, Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "rbx";
import { Link } from 'react-router-dom';

import "../../styles/categories.scss";
import slickSettings from "./slick_settings";
/*
import api from "../../services/api";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadRestaurants } from '../../actions/restaurant';
*/

class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [{
                'title': 'japonesa',
                'image_url': 'https://cdn2.lamag.com/wp-content/uploads/sites/6/2017/08/MAIN-2-1.jpg'
            }, {
                'title': 'japonesa',
                'image_url': 'https://cdn2.lamag.com/wp-content/uploads/sites/6/2017/08/MAIN-2-1.jpg'
            }, {
                'title': 'japonesa',
                'image_url': 'https://cdn2.lamag.com/wp-content/uploads/sites/6/2017/08/MAIN-2-1.jpg'
            }, {
                'title': 'japonesa',
                'image_url': 'https://cdn2.lamag.com/wp-content/uploads/sites/6/2017/08/MAIN-2-1.jpg'
            }, {
                'title': 'japonesa',
                'image_url': 'https://cdn2.lamag.com/wp-content/uploads/sites/6/2017/08/MAIN-2-1.jpg'
            }, {
                'title': 'japonesa',
                'image_url': 'https://cdn2.lamag.com/wp-content/uploads/sites/6/2017/08/MAIN-2-1.jpg'
            }]
        }
    }

    render() {
        return (
            <Fragment>
                <h3 className="title is-size-4">Categorias</h3>
                <Box>
                    <Slider {...slickSettings}>
                        {this.state.categories.map((category, i) => {
                            return (
                                < Link to={`/restaurants?category=${category.title}`}>
                                    <div className="slider-item" key={i}>
                                        <img src={category.image_url} alt="new" />
                                        <span>{category.title}</span>
                                    </div>
                                </Link>
                            )
                        })}
                    </Slider>
                </Box>
            </Fragment>
        )
    }
}


export default Categories;