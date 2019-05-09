import React, { Component } from 'react';
import { Column } from 'rbx';

import Restaurant from "./restaurant.js";

class ListRestaurants extends Component {

    constructor(props) {
        super(props);
        this.state = {
            restaurants: [{
                'name': 'example 1',
                'delivery_tax': '5',
                'image_url': 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                'category_title': 'Cozinha Japonesa',
                'review': '4.9'
            }, {
                'name': 'example 2',
                'delivery_tax': '10',
                'image_url': 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                'category_title': 'Cozinha Japonesa',
                'review': '4.9'
            }, {
                'name': 'example 3',
                'delivery_tax': '5',
                'image_url': 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                'category_title': 'Cozinha Japonesa',
                'review': '4.9'
            }]
        }
    }


    render() {
        return (
            <div className="restaurants-list">
                <h2 className="title is-size-4">Restaurantes</h2>

                <Column.Group multiline gapSize={2}>
                    {
                        this.state.restaurants.map(restaurant => {
                            return <Restaurant {...restaurant} />
                        })
                    }
                </Column.Group>
            </div>
        );
    }
}

export default ListRestaurants;