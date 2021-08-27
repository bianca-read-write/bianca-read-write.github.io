import React from 'react';

import WidgetSearch from '../widget/WidgetSearch';
import WidgetCategories from '../widget/WidgetCategories';
import WidgetPosts from '../widget/WidgetPosts';
import WidgetComments from '../widget/WidgetComments';
import WidgetTagCloud from '../widget/WidgetTagCloud';

const Widget = () => {
    return (
        <aside id="aside" className="widget-area">
            <WidgetSearch />

            <WidgetCategories />

            <WidgetPosts />

            <WidgetComments />

            <WidgetTagCloud />
        </aside>
    );
};

export default Widget;
