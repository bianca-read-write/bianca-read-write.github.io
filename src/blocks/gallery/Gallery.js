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
        return (
            <div className="gallery">
                <div className="gallery-item-wrapper">
                    <div className="gallery-items" ref={ ( c ) => this.grid = c }>
                        { GalleryItemsData && GalleryItemsData.map( ( item, key ) => {
                            return (
                                <div key={ key } className={ "gallery-item active " + item.category }>
                                    <a title={ item.title } onClick={() => this.props.onExpandClick(item.id)}className="gallery-item-content" href="/#">
                                        <div className="img object-fit">
                                            <div className="object-fit-cover">
                                                <img src={ item.imgSrc } alt={ item.title } />
                                            </div>
                                        </div>
            
                                        {/* <div className="gallery-hover">
                                            <h5 className="gallery-item-title">Fun Fact</h5>
            
                                            <p className="gallery-item-description">Bianca's highlight of the day is espresso!</p>
                                        </div> */}
                                    </a>
                                </div>
                            );
                        } ) }
                    </div>
                </div>
            </div>
        );
    };
};

export default Gallery;
