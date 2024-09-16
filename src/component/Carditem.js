import React, { Component } from 'react';

class NewsCardItem extends Component {
    articles = [
        {
          "source": {
            "id": "wired",
            "name": "Wired"
          },
          "author": "Makena Kelly",
          "title": "Silicon Valley Hasn’t Embraced Trump. But It’s Wavering on Biden",
          "description": "Venture capitalists on both sides of the aisle suggest Silicon Valley is more anti-Biden than it is pro-Trump.",
          "url": "https://www.wired.com/story/silicon-valley-crypto-trump-biden-debate/",
          "urlToImage": "https://media.wired.com/photos/668d715c9004df7e67a59acd/191:100/w_1280,c_limit/Silicon-Valley-Trump-Biden-Politics.jpg",
          "publishedAt": "2024-07-11T09:30:00Z",
          "content": "The June fundraiser set off alarm bells suggesting that a new political movement needed to be accounted for, but little in the records of its organizers suggests deep fealty to MAGA doctrine. Palihap… [+3700 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "ReadWrite"
          },
          "author": "Radek Zielinski",
          "title": "Mt. Gox to repay investors in Bitcoin",
          "description": "Mt. Gox, once the world’s leading Bitcoin (BTC) exchange, is set to begin repaying investors using Bitcoin and Bitcoin Cash (BCH).… Continue reading Mt. Gox to repay investors in Bitcoin\nThe post Mt. Gox to repay investors in Bitcoin appeared first on ReadWri…",
          "url": "https://readwrite.com/mt-gox-to-repay-investors-in-bitcoin/",
          "urlToImage": "https://readwrite.com/wp-content/uploads/2024/07/97b8c89d-4828-4803-b037-04d74e631a19.webp",
          "publishedAt": "2024-07-08T16:29:11Z",
          "content": "Mt. Gox, once the world’s leading Bitcoin (BTC) exchange, is set to begin repaying investors using Bitcoin and Bitcoin Cash (BCH).\r\nThe repayment was announced on July 5 over a decade after Mt. Gox’s… [+2101 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "ReadWrite"
          },
          "author": "Radek Zielinski",
          "title": "Mt Gox Begins Creditor Repayments in Bitcoin and Bitcoin Cash",
          "description": "The rehabilitation trustee of Mt. Gox, the defunct cryptocurrency exchange, announced on Friday that it has initiated repayments to some… Continue reading Mt Gox Begins Creditor Repayments in Bitcoin and Bitcoin Cash\nThe post Mt Gox Begins Creditor Repayments…",
          "url": "https://readwrite.com/mt-gox-begins-creditor-repayments-in-bitcoin-and-bitcoin-cash/",
          "urlToImage": "https://readwrite.com/wp-content/uploads/2024/07/f7241310-8110-4543-8b45-18d74cf08d80.webp",
          "publishedAt": "2024-07-05T11:01:57Z",
          "content": "The rehabilitation trustee of Mt. Gox, the defunct cryptocurrency exchange, announced on Friday that it has initiated repayments to some creditors in Bitcoin (BTC) and Bitcoin Cash (BCH). These repay… [+2235 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "ReadWrite"
          },
          "author": "Radek Zielinski",
          "title": "Bitcoin transaction cost hits four-year low",
          "description": "On July 7, the average cost per Bitcoin (BTC) transaction fell to its lowest level in four years, reaching $38.69,… Continue reading Bitcoin transaction cost hits four-year low\nThe post Bitcoin transaction cost hits four-year low appeared first on ReadWrite.",
          "url": "https://readwrite.com/bitcoin-transaction-cost-hits-four-year-low/",
          "urlToImage": "https://readwrite.com/wp-content/uploads/2024/07/c60cdffa-11df-4958-9ab7-799e5704104f.webp",
          "publishedAt": "2024-07-10T11:21:16Z",
          "content": "On July 7, the average cost per Bitcoin (BTC) transaction fell to its lowest level in four years, reaching $38.69, according to Blockchain.com.\r\nThis figure was last seen during the peak of the COVID… [+2079 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "ReadWrite"
          },
          "author": "Radek Zielinski",
          "title": "Bitcoin slumps below $59,000 amid market uncertainty",
          "description": "Bitcoin’s (BTC) value dropped below $59,000 on Thursday, trading at $58,827. Market data shows that Bitcoin has fallen 3.38% in… Continue reading Bitcoin slumps below $59,000 amid market uncertainty\nThe post Bitcoin slumps below $59,000 amid market uncertaint…",
          "url": "https://readwrite.com/bitcoin-slumps-below-59000-amid-market-uncertainty/",
          "urlToImage": "https://readwrite.com/wp-content/uploads/2024/07/ac64595c-37b6-452e-a1b5-541f05c92c0a.webp",
          "publishedAt": "2024-07-04T12:50:07Z",
          "content": "Bitcoin’s (BTC) value dropped below $59,000 on Thursday, trading at $58,827.\r\nMarket data shows that Bitcoin has fallen 3.38% in the past day, reaching its lowest point since early May despite expect… [+1999 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "ReadWrite"
          },
          "author": "Radek Zielinski",
          "title": "German government continues Bitcoin transfers to exchanges",
          "description": "On Tuesday (July 9), the German government transferred $339.2 million worth of Bitcoin (BTC) to various centralized crypto exchanges and… Continue reading German government continues Bitcoin transfers to exchanges\nThe post German government continues Bitcoin …",
          "url": "https://readwrite.com/german-government-continues-bitcoin-transfers-to-exchanges/",
          "urlToImage": "https://readwrite.com/wp-content/uploads/2024/07/7bb172ea-9e63-4949-8eb9-bf3760dbda31.webp",
          "publishedAt": "2024-07-10T10:50:02Z",
          "content": "On Tuesday (July 9), the German government transferred $339.2 million worth of Bitcoin (BTC) to various centralized crypto exchanges and market makers, following significant transfers the previous da… [+1883 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "ReadWrite"
          },
          "author": "Radek Zielinski",
          "title": "Bitcoin 2024 announces Donald Trump as speaker",
          "description": "The upcoming Bitcoin 2024 conference in Nashville, Tennessee, has added former U.S. President Donald Trump to its roster of speakers.… Continue reading Bitcoin 2024 announces Donald Trump as speaker\nThe post Bitcoin 2024 announces Donald Trump as speaker appe…",
          "url": "https://readwrite.com/bitcoin-2024-announces-donald-trump-as-speaker/",
          "urlToImage": "https://readwrite.com/wp-content/uploads/2024/07/b5c05c2f-24d0-46fb-bbc1-9f7f96fe7e38.webp",
          "publishedAt": "2024-07-11T16:19:23Z",
          "content": "The upcoming Bitcoin 2024 conference in Nashville, Tennessee, has added former U.S. President Donald Trump to its roster of speakers.\r\nScheduled for July 25-27, this event is among the largest global… [+1535 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "ReadWrite"
          },
          "author": "Radek Zielinski",
          "title": "VanEck Set to Launch Spot Bitcoin ETF on Australia’s ASX",
          "description": "Prominent investment management firm VanEck announced that it is about to list Australia’s first spot Bitcoin (BTC) exchange-traded fund (ETF)… Continue reading VanEck Set to Launch Spot Bitcoin ETF on Australia’s ASX\nThe post VanEck Set to Launch Spot Bitcoi…",
          "url": "https://readwrite.com/vaneck-set-to-launch-spot-bitcoin-etf-on-australias-asx/",
          "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/ea85a934-c8fc-4d65-9279-ff85bb79fbae.webp",
          "publishedAt": "2024-06-17T15:43:51Z",
          "content": "Prominent investment management firm VanEck announced that it is about to list\r\n Australia’s first spot Bitcoin (BTC) exchange-traded fund (ETF) listed on the domestic Australian Securities Exchange … [+1968 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "ReadWrite"
          },
          "author": "Ali Rees",
          "title": "Japanese investment firm Metaplanet to sell $6m of bonds to buy Bitcoin",
          "description": "Japanese investment firm Metaplanet is planning to sell one billion yen in bonds to buy Bitcoin, as part of its… Continue reading Japanese investment firm Metaplanet to sell $6m of bonds to buy Bitcoin\nThe post Japanese investment firm Metaplanet to sell $6m …",
          "url": "https://readwrite.com/investment-firm-metaplanet-to-sell-bonds-to-buy-bitcoin/",
          "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/buying-bitcoin-EOjGRyFSSt2kLr3TzvPf4A-yRhAHjLMRUO9G2dq9yUp4g.jpeg",
          "publishedAt": "2024-06-24T13:47:08Z",
          "content": "Japanese investment firm Metaplanet is planning to sell one billion yen in bonds to buy Bitcoin, as part of its long-term strategy.\r\nThe move, which was approved by the company’s board of directors t… [+1764 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "ReadWrite"
          },
          "author": "Radek Zielinski",
          "title": "Winklevoss twins donate $1M in Bitcoin to Trump’s campaign",
          "description": "Gemini CEO Tyler Winklevoss and his twin brother Cameron donated $1 million worth of Bitcoin (BTC) each to Donald Trump’s… Continue reading Winklevoss twins donate $1M in Bitcoin to Trump’s campaign\nThe post Winklevoss twins donate $1M in Bitcoin to Trump’s c…",
          "url": "https://readwrite.com/winklevoss-twins-donate-1m-in-bitcoin-to-trumps-campaign/",
          "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/GQij8RdakAU8Vor-min-scaled.jpeg",
          "publishedAt": "2024-06-21T16:32:19Z",
          "content": "Gemini CEO Tyler Winklevoss and his twin brother Cameron donated $1 million worth of Bitcoin (BTC) each to Donald Trump’s 2024 presidential campaign.\r\nThe presumptive Republican nominee’s campaign re… [+3507 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "ReadWrite"
          },
          "author": "Olaleye Komolafe",
          "title": "Bitcoin and Ethereum Traders Flee Short-Term Bearish Trends, Rotating Funds To Alternative Cryptocurrencies",
          "description": "TLDR   Bitcoin (BTC) bears expect a prolonged negative trend for the leading cryptocurrency. Market experts believe Ethereum (ETH) could dip… Continue reading Bitcoin and Ethereum Traders Flee Short-Term Bearish Trends, Rotating Funds To Alternative Cryptocur…",
          "url": "https://readwrite.com/bitcoin-and-ethereum-traders-flee-short-term-bearish-trends-rotating-funds-to-alternative-cryptocurrencies/",
          "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/Featured-Image-for-Rebel-Satoshi.jpg",
          "publishedAt": "2024-06-20T03:37:47Z",
          "content": "TLDR  \r\n<ul><li>Bitcoin (BTC) bears expect a prolonged negative trend for the leading cryptocurrency.</li><li>Market experts believe Ethereum (ETH) could dip below the $2,900 price mark.</li><li>Rebe… [+3670 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "ReadWrite"
          },
          "author": "Alvin Hemedez",
          "title": "Why Should You Invest in This Learn-to-Earn Bitcoin Alternative? – Cilinix Crypto Presale Update",
          "description": "While Bitcoin is still struggling to reach the $70,000 level, retail investors are flocking to this Learn-to-Earn crypto presale, boosting… Continue reading Why Should You Invest in This Learn-to-Earn Bitcoin Alternative? – Cilinix Crypto Presale Update\nThe p…",
          "url": "https://readwrite.com/why-should-you-invest-in-this-learn-to-earn-bitcoin-alternative-cilinix-crypto-presale-update/",
          "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/cilinix-crypto-99btc-presale-update.jpg",
          "publishedAt": "2024-06-15T15:43:59Z",
          "content": "While Bitcoin is still struggling to reach the $70,000 level, retail investors are flocking to this Learn-to-Earn crypto presale, boosting it to $2 million.\r\nThe new 99Bitcoins (99BTC) token is perfo… [+4730 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "ReadWrite"
          },
          "author": "Radek Zielinski",
          "title": "Louisiana passes pro-Bitcoin, anti-CBDC crypto bill",
          "description": "On June 19, Louisiana quietly enacted House Bill 488, a crypto bill known as the “Blockchain Basics Act” or “Bitcoin… Continue reading Louisiana passes pro-Bitcoin, anti-CBDC crypto bill\nThe post Louisiana passes pro-Bitcoin, anti-CBDC crypto bill appeared fi…",
          "url": "https://readwrite.com/louisiana-passes-pro-bitcoin-anti-cbdc-crypto-bill/",
          "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/6f67013b-b8ea-44cb-a656-b32460a85347.webp",
          "publishedAt": "2024-06-26T13:29:43Z",
          "content": "On June 19, Louisiana quietly enacted House Bill 488, a crypto bill known as the “Blockchain Basics Act” or “Bitcoin Rights” bill.\r\nThe legislation, set to take effect on August 1, 2024, marks a sign… [+2341 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "ReadWrite"
          },
          "author": "Radek Zielinski",
          "title": "Bitcoin ETF outflows reach $1.3B as price falls",
          "description": "Over the past two weeks, United States spot Bitcoin (BTC) exchange-traded funds (ETFs) have experienced outflows totaling $1.3 billion as… Continue reading Bitcoin ETF outflows reach $1.3B as price falls\nThe post Bitcoin ETF outflows reach $1.3B as price fall…",
          "url": "https://readwrite.com/bitcoin-etf-outflows-reach-1-3b-as-price-falls/",
          "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/304c4991-be59-40e6-8e3c-bed299286dbc.webp",
          "publishedAt": "2024-06-25T16:32:14Z",
          "content": "Over the past two weeks, United States spot Bitcoin (BTC) exchange-traded funds (ETFs) have experienced outflows totaling $1.3 billion as Bitcoin’s price continues to fall.\r\nFarside Investors reports… [+2047 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Slashdot.org"
          },
          "author": "EditorDavid",
          "title": "$170 Billion Selloff in Cryptocurrencies Friday as Mt. Gox Payout Looms",
          "description": "At one point on Friday the entire cryptocurrency market shed more than $170 billion in capitalization within 24 hours, CNBC reported (citing data from CoinGecko). \n\n\"Cryptocurrencies plunged... as investors focused on the payout of nearly $9 billion to users …",
          "url": "https://slashdot.org/story/24/07/07/1546226/170-billion-selloff-in-cryptocurrencies-friday-as-mt-gox-payout-looms",
          "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
          "publishedAt": "2024-07-07T16:34:00Z",
          "content": "At one point on Friday the entire cryptocurrency market shed more than $170 billion in capitalization within 24 hours, CNBC reported (citing data from CoinGecko).\"Cryptocurrencies plunged... as inves… [+1630 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "ReadWrite"
          },
          "author": "Radek Zielinski",
          "title": "Cryptocurrency market tumbles: $665M liquidated as Bitcoin falls",
          "description": "The crypto market experienced a significant downturn in the past 24 hours, with over $665 million in liquidations according to… Continue reading Cryptocurrency market tumbles: $665M liquidated as Bitcoin falls\nThe post Cryptocurrency market tumbles: $665M liq…",
          "url": "https://readwrite.com/cryptocurrency-market-tumbles-665m-liquidated-as-bitcoin-falls/",
          "urlToImage": "https://readwrite.com/wp-content/uploads/2024/07/6f6012c4-52ea-40f3-be2e-519a78109378.webp",
          "publishedAt": "2024-07-05T10:49:55Z",
          "content": "The crypto market experienced a significant downturn in the past 24 hours, with over $665 million in liquidations according to CoinGlass data.\r\nCoinMarketCap data shows that world’s top cryptocurrenc… [+2276 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Slashdot.org"
          },
          "author": "BeauHD",
          "title": "Julian Assange Received $500,000 Bitcoin Donation To Cover Travel Costs",
          "description": "Earlier this week, WikiLeaks co-founder Julian Assange received a donation of 8.07 bitcoin (worth roughly $500,000) from an anonymous bitcoin whale, \"helping to cover the cost of a private jet that flew him out of the U.K. and ultimately to freedom in Austral…",
          "url": "https://slashdot.org/story/24/06/27/209220/julian-assange-received-500000-bitcoin-donation-to-cover-travel-costs",
          "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
          "publishedAt": "2024-06-27T21:30:00Z",
          "content": "Initially, Assange's wife Stella made an \"emergency appeal\" to raise 520,000 British pounds to pay for the transport, setting up a crowdfunding page that allowed people to donate in fiat currency via… [+922 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "ReadWrite"
          },
          "author": "Radek Zielinski",
          "title": "Bitcoin plunge below $63k triggers wave of liquidations",
          "description": "The cryptocurrency market faced significant turbulence as Bitcoin’s (BTC) value fell below $63,000, leading to a surge in long position… Continue reading Bitcoin plunge below $63k triggers wave of liquidations\nThe post Bitcoin plunge below $63k triggers wave …",
          "url": "https://readwrite.com/bitcoin-plunge-below-63k-triggers-wave-of-liquidations/",
          "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/65e6f8d5-ef84-4b5c-84b6-e3ac21cedb77.webp",
          "publishedAt": "2024-06-24T16:38:30Z",
          "content": "The cryptocurrency market faced significant turbulence as Bitcoin’s (BTC) value fell below $63,000, leading to a surge in long position liquidations.\r\nCoinGlass data shows\r\n that over the past 24 hou… [+2379 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Yahoo Entertainment"
          },
          "author": "Yashwardhan Jain",
          "title": "Is a $500K Bitcoin Rally Possible? Crypto ETFs to Consider",
          "description": "Is it time to consider Bitcoin ETFs with optimistic price forecasts for the cryptocurrency on the horizon? Look into ETFs to capitalize on the positive...",
          "url": "https://finance.yahoo.com/news/500k-bitcoin-rally-possible-crypto-211400691.html",
          "urlToImage": "https://media.zenfs.com/en/zacks.com/2677d4ba68204c51d83bcea4db6ae8b8",
          "publishedAt": "2024-07-02T21:14:00Z",
          "content": "Ever since getting the approval for spot ETFs in early January, Bitcoin has been a little volatile, a trend that may worry some investors. The cryptocurrency surged 70% following the approval, experi… [+3856 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "ReadWrite"
          },
          "author": "Radek Zielinski",
          "title": "Tether launches USDT for Filipino social security contributions",
          "description": "Tether (USDT) has launched a new payment option in the Philippines, enabling citizens to pay their Social Security System (SSS)… Continue reading Tether launches USDT for Filipino social security contributions\nThe post Tether launches USDT for Filipino social…",
          "url": "https://readwrite.com/tether-launches-usdt-for-filipino-social-security-contributions/",
          "urlToImage": "https://readwrite.com/wp-content/uploads/2024/07/046560f0-c2ba-4d37-b34f-14009a2779cb.webp",
          "publishedAt": "2024-07-02T18:24:17Z",
          "content": "Tether (USDT) has launched a new payment option in the Philippines, enabling citizens to pay their Social Security System (SSS) contributions using USDT, Tether’s stablecoin.\r\nThe SSS, a state-run so… [+2184 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Fort Worth Star-Telegram"
          },
          "author": "Jaida Joyner",
          "title": "Elderly Texas woman withdrew $40K from bank for Bitcoin scam. Citizen, police intervened",
          "description": "A concerned bystander saw the woman depositing large amounts of money into a Bitcoin ATM. Here’s what the scammer did.",
          "url": "https://www.star-telegram.com/news/local/crime/article289280835.html",
          "urlToImage": "https://media.zenfs.com/en/fort_worth_star_telegram_mcclatchy_952/5c230a028d640b6d1938bc3cc8478e85",
          "publishedAt": "2024-06-14T18:50:11Z",
          "content": "A sharp-eyed citizens quick thinking saved an elderly North Texas woman from losing thousands of dollars in a Bitcoin scam, according to police.\r\nOfficers in White Settlement received a call from a c… [+1789 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "ReadWrite"
          },
          "author": "James Spillane",
          "title": "Did Altcoin Hunters Miss Meme Coin Season? KAI Cat Says Not Even Close.",
          "description": "Meme coins were absolutely soaring earlier this year, but are down in the dumps in June. Altcoins like Shiba Inu,… Continue reading Did Altcoin Hunters Miss Meme Coin Season? KAI Cat Says Not Even Close.\nThe post Did Altcoin Hunters Miss Meme Coin Season? KAI…",
          "url": "https://readwrite.com/did-altcoin-hunters-miss-meme-coin-season-kai-cat-says-not-even-close/",
          "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/KAI-Cat-Says-Not-Even-Close.jpg",
          "publishedAt": "2024-06-17T03:24:24Z",
          "content": "Meme coins were absolutely soaring earlier this year, but are down in the dumps in June. Altcoins like Shiba Inu, Dogwifhat, Bonk, Pepe, and PopCat were on top of the cryptocurrency leaderboards for … [+3105 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Yahoo Entertainment"
          },
          "author": null,
          "title": "U.S. and German Government's Bitcoin Movements Raise Market Concerns",
          "description": null,
          "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_3b5ecbd9-e9a7-42c4-a0b8-6f74e1a0116a",
          "urlToImage": null,
          "publishedAt": "2024-07-02T04:57:10Z",
          "content": "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Yahoo Entertainment"
          },
          "author": null,
          "title": "MicroStrategy raises its bond sale to buy even more bitcoin",
          "description": null,
          "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_de419e95-ff2a-4ff9-98d8-6a6c716414a1",
          "urlToImage": null,
          "publishedAt": "2024-06-14T19:47:21Z",
          "content": "If you click 'Accept all', we and our partners, including 238 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Xataka.com"
          },
          "author": "Enrique Pérez",
          "title": "La dificultad de la minería Bitcoin se ha hundido: no se afrontaba una situación así desde el colapso de FTX",
          "description": "El pasado abril el sector Bitcoin vivió un momento trascendental con el halving. La minería de bloques se vio directamente afectada, pero en los últimos meses se está observando un cambio de tendencia importante que está suponiendo un gran alivio para los peq…",
          "url": "https://www.xataka.com/criptomonedas/dificultad-mineria-bitcoin-se-ha-hundido-no-se-tenia-situacion-asi-colapso-ftx",
          "urlToImage": "https://i.blogs.es/30e78c/kanchanara-bitcoin-mining/840_560.jpeg",
          "publishedAt": "2024-07-11T13:01:40Z",
          "content": "El pasado abril el sector Bitcoin vivió un momento trascendental con el halving. La minería de bloques se vio directamente afectada, pero en los últimos meses se está observando un cambio de tendenci… [+2516 chars]"
        }
      ];

    constructor() {
        super();
        // Initialize state or bind methods here if needed
        this.state = {
            articles: this.articles
        };
    }

    render() {
        return (
            <>
                {this.state.articles.map((article, index) => {
                //console.log(article); // This will log each article object to the console
                return (
                    <div key={index} className="card-content">
                        <div className="img">
                            <img src={article.urlToImage} alt={article.title} />
                        </div>
                        <div className="text-content">
                            <h5>{article.title}</h5>
                            <p>{article.description}</p>
                        </div>
                    </div>
                );
            })}

            </>
        );
    }
}

export default NewsCardItem;