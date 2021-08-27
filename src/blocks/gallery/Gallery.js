import React, { Component } from 'react';
import Isotope from 'isotope-layout';
import ImagesLoaded from 'imagesloaded';

import GalleryMenuData from '../../data/gallery/galleryMenu';
import GalleryItemsData from '../../data/gallery/galleryItems';

class Gallery extends Component {
    constructor( props ) {
        super( props );
        this.onFilterChange = this.onFilterChange.bind( this );

        this.state = {
            selected: 0,
            list: GalleryMenuData
        };
    };

    handleClick( i, e ) {
        e.preventDefault();

        this.setState( {
            selected: i
        } );

        return false;
    };

    onFilterChange = ( newFilter ) => {
        var gallery_items_name = this.grid;
        var gallery_item_name  = '.gallery-item';

        if ( this.iso === undefined ) {
            this.iso = new Isotope( gallery_items_name, {
                itemSelector: gallery_item_name,
                masonry: {
                    horizontalOrder: true
                }
            } );
        }

        if ( newFilter === '*' ) {
            this.iso.arrange( { filter: `*` } );

        } else {
            this.iso.arrange( { filter: `.${ newFilter }` } );
        }
    };

    componentDidMount() {
        var gallery_items_name = this.grid;
        var gallery_item_name  = '.gallery-item';

        var iso = new Isotope( gallery_items_name, {
            itemSelector: gallery_item_name,
            masonry: {
                horizontalOrder: true
            }
        } );

        var imgLoad = new ImagesLoaded( gallery_items_name );

        imgLoad.on( 'progress', function( instance, image ) {
            iso.layout();
        } );
    };

    render() {
        const listCount = this.state.list.length - 1;

        return (
            <div className="gallery">
                <ul className="gallery-filter">
                    { this.state.list.map( ( item, key ) => (
                        <React.Fragment key={ key }>
                            <li>
                                <a href="#portfolio"
                                    title={ item.title }
                                    className={ "btn btn-link text-uppercase click" + ( key === this.state.selected ? ' active' : '' ) }
                                    data-filter={ item.filter }
                                    onClick={ ( event ) => {
                                        this.onFilterChange( item.filter );
                                        this.handleClick( key, event )
                                    } }>
                                    { item.title }
                                </a>
                            </li>

                            { key !== listCount ?
                                <li>
                                    <span className="btn btn-link text-uppercase">-</span>
                                </li>
                                : ""
                            }
                        </React.Fragment>
                    ) ) }
                </ul>

                <div className="gallery-item-wrapper">
                    <div className="gallery-items" ref={ ( c ) => this.grid = c }>
                        { GalleryItemsData && GalleryItemsData.map( ( item, key ) => {
                            return (
                                <div key={ key } className={ "gallery-item active " + item.category }>
                                    <a title={ item.title } className="gallery-item-content" href={ process.env.PUBLIC_URL + item.link }>
                                        <div className="img object-fit">
                                            <div className="object-fit-cover">
                                                <img src={ item.imgSrc } alt={ item.title } />
                                            </div>
                                        </div>
            
                                        <div className="gallery-hover">
                                            <h5 className="gallery-item-title">{ item.title }</h5>
            
                                            <p className="gallery-item-description">{ item.description }</p>
            
                                            <div className="gallery-item-btn no-space">
                                                <span className="btn btn-link btn-line p-0 border-0 min-w-auto text-uppercase">More</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            );
                        } ) }
                    </div>
                </div>

                <div className="spacer m-top-lg text-center">
                    <a title="See more" className="btn btn-outline-primary text-uppercase" href={ process.env.PUBLIC_URL + "/portfolio" }>See more</a>
                </div>
            </div>
        );
    };
};

export default Gallery;
