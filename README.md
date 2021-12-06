# museum_search

_This project was generated with [create-instantsearch-app](https://github.com/algolia/create-instantsearch-app) by [Algolia](https://algolia.com)._

## Get started

To run this project locally, install the dependencies and run the local server:

```sh
npm install
npm start
```

Alternatively, you may use [Yarn](https://http://yarnpkg.com/):

```sh
yarn
yarn start
```

Open http://localhost:3000 to see your app.

About the app:

I made a basic interface for searching through the collection at the Cleveland Museum of Art. Finding an interesting searchable dataset was a hurdle for sure - I wanted to go through the process of formatting the data to work with Algolia's requirements so I didn't want to use one of the default datasets. It was a bit challenging to find a good dataset to work with but once I found this one I was satisfied!

I went through the quick start onboarding tutorial which was great, and I got an app up and running with InstantSearch.js in just a few minutes. Then I just had to update the code to point at my index and use my own auth keys. I wanted the app to be semi-usable as a real thing so I added some very basic click-to-expand functionality for the hit results that expand the image, show the description, and include a link to the Cleveland Museum of Art website. I decided on the following searchable attributes: title, artist, collection, and description. This way, users can search for a particular work or artist, or they can search more generally by collection. The only custom ranking I added was descending by image URL - since this is an art gallery search tool, I want results with no image to appear last.

I got caught up on a few things in particular along the way, which I'll outline here:
- When I was configuring my relevancy settings, I didn't fully understand what a "facet" was, so I didn't add any attributes for faceting initially. Then when I went to add a refinement list, I had trouble figuring out why it wans't populating. Luckily I found the same question [on the forum](https://discourse.algolia.com/t/refinementlist-not-returning-results/10014). Looking back, this is noted [in the documentation](https://www.algolia.com/doc/api-reference/widgets/refinement-list/js/#requirements), but I missed it.
- The dataset originally had artist information stored in an array of objects (some works have multiple artists), with a "description" attribute on each object storing the artist's name. I had trouble figuring out how to access the artist's name since it was an attribute of an object in an array - sometimes the artists array was empty, etc. After a little while of trying different ways to get this data to populate in the UI, I decided it would be easier to just modify the original dataset to pull the artists' names out of the objects and create an array of strings instead. It was really easy to modify the original dataset and load it back into Algolia, though.
- I was following along with a few of the tutorial videos, but found that some examples in the code weren't working for me (I think they are no longer supported?) - one example is [here](https://academy.algolia.com/guides/1d3f4370-e77b-11ea-aeed-067360dfb065/tasks/63e7ee4c-e77d-11ea-9542-063e41907789) at 1:30. The header template wasn't working for me, and it looks like it is [no longer supported](https://www.algolia.com/doc/api-reference/widgets/refinement-list/js/#templates) (or maybe I'm missing something).
- I wanted to turn off the automatic re-ordering of the refinement list widget (where selected items move to the top of the list) but I couldn't figure out how to do this. 
