Question 1: Hello,

I'm new to search engines, and there are a lot of concepts I'm not educated on. To make my onboarding smoother, it'd help if you could provide me with some definitions of the following concepts:

Records
Indexing
I'm also struggling with understanding what types of metrics would be useful to include in the "Custom Ranking."

Cheers, George

Hi George,

Erin here with Algolia - thanks for reaching out! Happy to help provide more information to ease your onboarding experience. Since you're new to the product, I also recommend checking out [our FAQ](https://support.algolia.com/hc/en-us/sections/360005535398-FAQ) which has answers to several common questions.

Records are simply items to be searched - for Google, this would be webpages. For an online bookstore, this would be books. With Algolia, your records can have any number of attributes. Here' an example record, in JSON:
```
{
  "name": "Iphone 6 64Gb",
  "brand": "Apple",
  "color": "Gold",
  "categories": ["smartphone", "phone", "electronics"],
  "price": 789
}
```

When using Algolia, your data will be stored on our servers. Indexing refers to the process of sending your data to an index (a collection of records) that will be stored in Algolia. You can use the Algolia dashboard or API to index your data - more information on that process can be found [here](https://www.algolia.com/doc/guides/getting-started/how-algolia-works/in-depth/implementation-process/#indexing-data)!

[Custom ranking](https://www.algolia.com/doc/guides/managing-results/must-do/custom-ranking/#custom-ranking) allows you to define your own attributes for ranking results - any numeric or boolean value will work here! Common examples include markers of popularity, e.g. likes on a blog post, sales on a product, or views on a video.

I hope this is a helpful starting point! If you have additional questions during the onboarding process, our [Support Center](https://support.algolia.com/hc/en-us) is a great starting point, and our team is available as well.

Best,
Erin

<br><br><br>


Question 2: Hello,

Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.

Regards, Matt

Hi Matt,

Thanks for reaching out! We really value this feedback, and I'm really sorry that the most recent update to our dashboard has introduced friction in your workflow.

One reason the index deletion option is behind a few clicks is to prevent accidental deletion of a production index. If you're frequently using test indices that need deleting, you can use our API to delete one or multiple indices easily. More information can be found [here](https://www.algolia.com/doc/guides/sending-and-managing-data/manage-your-indices/how-to/delete-multiple-indices/#delete-an-index-using-the-api).

I hope that helps! Let me know if you have any other questions or concerns about the new dashboard design. We're all ears!

Best,
Erin

<br><br><br>


Question 3: Hi,

I'm looking to integrate Algolia in my website. Will this be a lot of development work for me? What's the high level process look like?

Regards, Leo

Hi Leo,

Thanks for reaching out! We're excited to hear that you're looking into using Algolia on your site.

One of the many reasons our customers love Algolia is its ease of implementation. I recommend following our [Quick Start guide](https://www.algolia.com/doc/guides/getting-started/quick-start/) which will get you running a live demo in just a few minutes!

There are three main steps to the implementation process:
- Formatting your data and sending it to Algolia
- Configuring relevance and searchable attributes
- Implementing the UI
and that's it!

Our [Support Center](https://support.algolia.com/hc/en-us) is a great resources as you are getting started, and if you have any other questions we are here to help!

Best,
Erin
