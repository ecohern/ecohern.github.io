const { algoliasearch, instantsearch } = window;

const searchClient = algoliasearch(
  'XMCZELLQFZ',
  '5dda5420750f72579cfdfad2e718cf3e'
);

const search = instantsearch({
  indexName: 'museum2',
  searchClient,
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
    placeholder: 'Search for artworks and artists displayed in the Cleveland Museum of Art',
    showReset: true
  }),
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
        <article onclick="clickExpand(this)">
            <div class="hit-image"><img src="{{images.web.url }}"/></div>
            <div class="hit-info">
                <h3 id="hit-title" > {{title}} </h3>
                <div class="hit-artist"> {{creators}} </div>

                <div class="hit-expanded">
                    <div class="hit-description"> {{digital_description}} </div>
                    <a href="{{url}}" target="_blank"> More info </a>
                </div>
            </div>
        </article>
`,
      empty: '<div>No results have been found for {{ query }}</div>.'
    },
  }),
  instantsearch.widgets.configure({
    facets: ['*'],
    maxValuesPerFacet: 20,
  }),
  instantsearch.widgets.refinementList({
      container: '#refinement-list',
      attribute: 'type'
  }),
  instantsearch.widgets.pagination({
    container: '#pagination',
})

]);

search.start();
