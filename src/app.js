/* global algoliasearch instantsearch */

const searchClient = algoliasearch(
  'DRXSFP8SPV',
  '2dffd682f3a6dbe878afd7cba20ebaea'
);

const search = instantsearch({
  indexName: 'dev_TED_TALKS',
  searchClient,
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
    placeholder: 'Search for TED talks',
    autofocus: true,
  }),
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      empty: 'No results',
      item: `
        <talk>
          <img src="{{image_url}}" align="left" alt="{{name}}" />
          <h2>{{ event_name }}</h2>
          <p>{{#helpers.highlight}}{ "attribute": "description" }{{/helpers.highlight}}</p>
        </talk>
      `,
    },
  }),
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
]);

search.start();
