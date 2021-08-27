import React from 'react';
import { PrismCode } from '../../../../components/prsimjs/Prismjs';
import { Link } from 'react-scroll';

const Breadcrumb = () => {
    return (
        <div id="breadcrumb" className="spacer m-top-md">
            <h3>Breadcrumb</h3>
            <p>Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS.</p>

            <div id="breadcrumb-overview">
                <h4>Overview</h4>
                <p>Separators are automatically added in CSS through <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::before" rel="noreferrer noopener"><code>::before</code></a> and <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/content" rel="noreferrer noopener"><code>content</code></a>.</p>

                <div className="bd-example">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active" aria-current="page">Home</li>
                        </ol>
                    </nav>

                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="breadcrumb-overview">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Library</li>
                        </ol>
                    </nav>

                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="breadcrumb-overview">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="breadcrumb-overview">Library</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Data</li>
                        </ol>
                    </nav>
                </div>

                <PrismCode
                code={
                    '<nav aria-label="breadcrumb">\n' +
                    '  <ol class="breadcrumb">\n' +
                    '    <li class="breadcrumb-item active" aria-current="page">Home</li>\n' +
                    '  </ol>\n' +
                    '</nav>\n' +
                    '\n' +
                    '<nav aria-label="breadcrumb">\n' +
                    '  <ol class="breadcrumb">\n' +
                    '    <li class="breadcrumb-item"><a href="#">Home</a></li>\n' +
                    '    <li class="breadcrumb-item active" aria-current="page">Library</li>\n' +
                    '  </ol>\n' +
                    '</nav>\n' +
                    '\n' +
                    '<nav aria-label="breadcrumb">\n' +
                    '  <ol class="breadcrumb">\n' +
                    '    <li class="breadcrumb-item"><a href="#">Home</a></li>\n' +
                    '    <li class="breadcrumb-item"><a href="#">Library</a></li>\n' +
                    '    <li class="breadcrumb-item active" aria-current="page">Data</li>\n' +
                    '  </ol>\n' +
                    '</nav><nav aria-label="breadcrumb">\n' +
                    '  <ol class="breadcrumb">\n' +
                    '    <li class="breadcrumb-item active" aria-current="page">Home</li>\n' +
                    '  </ol>\n' +
                    '</nav>\n' +
                    '\n' +
                    '<nav aria-label="breadcrumb">\n' +
                    '  <ol class="breadcrumb">\n' +
                    '    <li class="breadcrumb-item"><a href="#">Home</a></li>\n' +
                    '    <li class="breadcrumb-item active" aria-current="page">Library</li>\n' +
                    '  </ol>\n' +
                    '</nav>\n' +
                    '\n' +
                    '<nav aria-label="breadcrumb">\n' +
                    '  <ol class="breadcrumb">\n' +
                    '    <li class="breadcrumb-item"><a href="#">Home</a></li>\n' +
                    '    <li class="breadcrumb-item"><a href="#">Library</a></li>\n' +
                    '    <li class="breadcrumb-item active" aria-current="page">Data</li>\n' +
                    '  </ol>\n' +
                    '</nav>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />
            </div>

            <div id="breadcrumb-accessibility">
                <h4>Accessibility</h4>
                <p>Since breadcrumbs provide a navigation, it’s a good idea to add a meaningful label such as <code>aria-label="breadcrumb"</code> to describe the type of navigation provided in the <code>&lt;nav&gt;</code> element, as well as applying an <code>aria-current="page"</code> to the last item of the set to indicate that it represents the current page.</p>
                <p>For more information, see the <a target="_blank" href="https://www.w3.org/TR/wai-aria-practices/#breadcrumb" rel="noreferrer noopener">WAI-ARIA Authoring Practices for the breadcrumb pattern</a>.</p>
            </div>
        </div>
    );
};

export default Breadcrumb;
