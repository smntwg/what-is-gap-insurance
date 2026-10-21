import { S } from "./sources.mjs";

export const pages1 = [
  {
    slug: "is-gap-insurance-worth-it",
    title: "Is GAP insurance worth it? | UK guide",
    h1: "Is GAP insurance worth it?",
    card: "When a shortfall is worth insuring, and when you can reasonably keep the risk yourself.",
    description: "GAP insurance is worth it when a write-off or theft would leave a shortfall you could not comfortably pay. See a worked UK example and the FCA's published value figures.",
    lede: "It is worth buying when a write-off or theft would leave a bill you could not comfortably pay. It is a poor buy when that shortfall is small, you already have the savings, or your motor policy already replaces the car. GAP insurance is optional. It does not replace comprehensive cover.",
    related: ["how-much-is-gap-insurance", "gap-insurance-for-pcp", "gap-insurance-for-cash-buyers", "dealer-vs-online-gap-insurance", "what-gap-insurance-does-not-cover"],
    sources: [S.fcaPause, S.cp1429, S.abi, S.moneyPcp],
    faqs: [
      {
        q: "Is GAP insurance required by law?",
        a: "No. Motor insurance that covers your liability to other people is compulsory. GAP insurance is optional, and a firm selling it with a car has to tell you whether that contract is optional or compulsory."
      },
      {
        q: "Does a low premium mean the policy is good value?",
        a: "No. A low price only helps if the policy would pay the shortfall you actually face. In its 2022 value measures data the FCA found that, across the GAP market, only 6% of premiums were paid out in claims. That is a warning about the product's market-wide value, not a prediction of your own claim."
      },
      {
        q: "Should I buy it if I can afford the shortfall?",
        a: "Often no. If you have money set aside and a write-off would not push you into debt, keeping the risk yourself is a reasonable choice. Insurance is for a loss you do not want to fund from savings."
      },
      {
        q: "Does worth it mean I am likely to claim?",
        a: "No. It means the cover matches a loss you would struggle to pay. Most policies are never claimed on. The FCA's market figures show claims were a small share of premiums, which is part of why the regulator challenged the value of the product."
      }
    ],
    blocks: [
      { type: "h2", text: "Judge the shortfall, not the badge on the car" },
      { type: "p", html: "A comprehensive motor policy usually pays the car's market value at the time of a write-off or theft. The <a href='https://www.abi.org.uk/policy-and-guidance/general-insurance/personal-insurance/motor-insurance'>Association of British Insurers</a> describes that payout, and describes GAP insurance as cover for the difference between the price you paid and that market value. If you have finance or a lease, the figure that matters may instead be what you still owe. <a href='/gap-insurance-vs-comprehensive-insurance'>GAP does not replace the motor policy</a>. It can only top up a settlement the motor insurer has already agreed." },
      { type: "p", html: "So the useful question is simple. If this car were written off next month, what would I still have to find, and could I find it without borrowing again?" },
      { type: "h2", text: "When it is usually worth looking at" },
      { type: "ul", items: [
        "You bought a new or nearly new car and it is losing value faster than you are paying the finance down.",
        "You are on a <a href='/gap-insurance-for-pcp'>PCP</a> and the settlement figure still includes a large optional final payment.",
        "Your deposit was small, so you have little equity if the market value falls.",
        "Your comprehensive policy has no new-car replacement benefit, or that benefit has already ended.",
        "A bill of a few thousand pounds would mean more debt, not a dip into savings you already hold for this."
      ]},
      { type: "h2", text: "When it is usually not" },
      { type: "ul", items: [
        "You <a href='/gap-insurance-for-cash-buyers'>paid cash</a> for an older car at a price close to what similar cars sell for.",
        "You are well into a hire purchase agreement and the balance is already below a cautious market value.",
        "You have savings earmarked for the difference and you would still have an emergency fund afterwards.",
        "The claim limit is lower than the shortfall you are trying to cover. The policy cannot pay more than that limit.",
        "You are being asked to buy finance GAP and you do not have finance. There is no finance balance for it to clear."
      ]},
      { type: "h2", text: "A worked example" },
      {
        type: "example",
        title: "A PCP shortfall of £4,650 against an example premium of £265",
        paragraphs: [
          "Maya buys a new hatchback in Birmingham for £26,490 on a PCP. She puts down £2,000. Sixteen months later the car is written off after a flood. Her motor insurer offers the market value, £17,800, and pays it to the finance company. The settlement figure that day is £22,450. The shortfall is £4,650.",
          "In this illustration a three-year policy that covers the finance settlement costs £265, paid once. The example shortfall is much larger than the example premium. That does not mean Maya is likely to claim, and it does not mean £265 is a current market price. It shows why the cover can be rational for her, and pointless for someone who could pay £4,650 from savings without difficulty."
        ]
      },
      { type: "h2", text: "Price is part of the answer" },
      { type: "p", html: "The Financial Conduct Authority's evidence is that where you buy can change the price sharply. In its competition work it said add-on GAP sold with a car could be <a href='https://www.fca.org.uk/publication/consultation/cp14-29.pdf'>twice as expensive as broadly equivalent standalone cover</a>. In February 2024 it went further on value: its data showed that only <a href='https://www.fca.org.uk/news/press-releases/gap-insurers-agree-suspend-sales-following-fca-concerns-over-fair-value'>6% of the amount customers paid in GAP premiums was paid out in claims</a>, and it had seen firms paying out 70% of premium value in commission. Several insurers then paused sales until they could show a fairer deal." },
      { type: "p", html: "Those figures are a reason to compare policies and to refuse a rushed sale. They are not a forecast that you personally have a 6% chance of claiming. Read the <a href='/dealer-vs-online-gap-insurance'>dealer and online comparison</a> and the <a href='/fca-rules-on-dealer-gap-insurance'>FCA rules on dealer GAP</a> before you decide." },
      { type: "h2", text: "A sensible order of checks" },
      { type: "ol", items: [
        "Ask the finance or lease company how a settlement figure would be built, including any balloon or early termination charge.",
        "Read your motor schedule for new-car replacement, agreed value, and the excess.",
        "Decide which figure you actually need covered: the invoice, the finance balance, the lease charge, or a new replacement.",
        "Compare at least one policy that is not sold in the same appointment as the car.",
        "Check the claim limit, the exclusions, and whether the car's age and mileage are allowed."
      ]}
    ]
  },
  {
    slug: "dealer-vs-online-gap-insurance",
    title: "Dealer vs online GAP insurance | UK guide",
    h1: "Dealer vs online GAP insurance",
    card: "The same shortfall can be insured in the showroom or later online. The sale, and often the price, is different.",
    description: "Dealer GAP is sold with the car. Online GAP is a separate purchase. The FCA found add-on prices could be twice standalone prices, and set a deferral so you can compare.",
    lede: "A dealer policy and an online policy can insure the same shortfall. They are not sold in the same way. Dealer GAP is an add-on at the vehicle sale, and FCA rules slow that sale down. Online GAP is a standalone purchase you make yourself. The FCA found that add-on prices could be twice the price of broadly equivalent standalone cover.",
    related: ["how-much-is-gap-insurance", "best-gap-insurance-uk", "fca-rules-on-dealer-gap-insurance", "gap-insurance-mis-selling", "can-i-buy-gap-insurance-after-buying-the-car", "is-gap-insurance-worth-it"],
    sources: [S.cp1429, S.icobsGap, S.eval2018, S.fcaPause, S.register],
    faqs: [
      {
        q: "Is dealer GAP illegal?",
        a: "No. Dealers and finance firms can still sell it if they follow the FCA's information, deferral and fair value rules. The 2024 pause was agreed with firms that could not show fair value. It was not a ban on the product."
      },
      {
        q: "Do I have to buy the dealer's policy to get the finance?",
        a: "No. A firm selling GAP with a vehicle must tell you whether the contract is optional or compulsory, and must tell you that other distributors sell GAP. If someone says the finance will not go ahead unless you take their policy, ask them to put that in the paperwork."
      },
      {
        q: "Can I buy online on the day I collect the car?",
        a: "The deferral binds the firm selling GAP in connection with the vehicle sale. It does not stop you approaching a separate provider. You still cannot buy cover for a crash or theft that has already happened."
      },
      {
        q: "Will a dealer policy and an online policy pay the same amount?",
        a: "Only if the wording matches. Compare the basis of settlement, the claim limit, the term, what happens to the motor excess, and any exclusion for negative equity brought over from a previous car. The marketing name is not enough."
      }
    ],
    blocks: [
      { type: "h2", text: "Same job, different shop" },
      { type: "p", html: "Dealer GAP is introduced while you are buying the car, often by the seller or a firm connected to the seller. Online, or any other standalone purchase, is a policy you go and find. The FCA's market study found a point-of-sale advantage: in the evidence set out in <a href='https://www.fca.org.uk/publication/consultation/cp14-29.pdf'>CP14/29</a>, 83% of people who bought add-on GAP did not consider another policy, compared with 9% of people who bought standalone GAP." },
      { type: "p", html: "That is why the price gap mattered. The same consultation said add-on GAP prices could be significantly higher than standalone prices, and could be twice as expensive for broadly equivalent cover. A later <a href='https://www.fca.org.uk/publication/corporate/gap-insurance-intervention-evaluation-paper.pdf'>FCA evaluation in July 2018</a> found that shopping around had more than doubled after the new rules, but that the move from add-on to standalone sales was smaller than the FCA had expected." },
      { type: "h2", text: "What the dealer is required to do" },
      { type: "p", html: "Where <a href='https://www.handbook.fca.org.uk/handbook/ICOBS/6A/1.html'>ICOBS 6A.1</a> applies, the firm has to give you set information on paper or another durable medium before the GAP contract is concluded. That includes the total premium on its own, the main features and unusual exclusions, the fact that other distributors sell GAP, how long the policy lasts, and whether it is optional. The firm then has to wait at least two clear days, unless you yourself ask to go ahead from the next day and confirm that you understand the usual wait." },
      { type: "p", html: "The full mechanics, including a dated example, are in the <a href='/fca-rules-on-dealer-gap-insurance'>FCA rules guide</a>. Use the wait. It exists so the decision is not made in the same conversation as the car." },
      { type: "h2", text: "What changes when you buy later, online" },
      { type: "p", html: "A separate insurer you contact yourself is not concluding the dealer's add-on sale, so the two-clear-day rule is not what slows that purchase down. The provider will still set its own conditions: how recently you bought the car, the car's age and mileage, and that it has not already been damaged or stolen. There is no single legal number of days. See <a href='/can-i-buy-gap-insurance-after-buying-the-car'>whether you can buy GAP after the car</a>." },
      { type: "p", html: "Online is not automatically the better policy. A cheaper premium with a claim limit below your finance balance, or a wording that excludes your type of agreement, is not a saving. Check the firm on the <a href='https://register.fca.org.uk/'>Financial Services Register</a>." },
      { type: "h2", text: "An example of the price difference" },
      {
        type: "example",
        title: "£610 in the showroom and £290 from a standalone provider",
        paragraphs: [
          "A dealer offers return-to-invoice cover with a £25,000 claim limit for £610, to be added to the car invoice. The next week a standalone provider quotes £290 for a three-year policy with the same claim limit and the same basis of settlement.",
          "The £320 gap is an illustration, not a survey of prices this year. It is in the direction of the FCA's finding that add-on cover could cost about twice as much as broadly equivalent standalone cover. If the online policy had a £10,000 claim limit, or excluded cars over three years old, the two quotes would not be equivalent and the cheaper one could be the wrong one."
        ]
      },
      { type: "h2", text: "Compare these lines, not the logo" },
      { type: "ul", items: [
        "Basis of settlement: invoice, finance balance, lease termination charge, or a new replacement.",
        "Claim limit, and whether it is enough for your own arithmetic.",
        "Term, matched to the finance or lease rather than to a round number of years.",
        "Motor excess: included up to a cap, or left with you.",
        "Negative equity rolled in from a previous car, dealer-fitted extras, and the vehicle's age and mileage.",
        "Who is paid: you, the finance company, or the leasing company."
      ]}
    ]
  },
  {
    slug: "return-to-invoice-vs-vehicle-replacement-vs-agreed-value",
    title: "Return to invoice vs vehicle replacement vs agreed value",
    h1: "Return to invoice vs vehicle replacement vs agreed value",
    card: "Two are types of GAP. Agreed value is a motor policy figure. They do not all pay at once.",
    description: "Return to invoice and vehicle replacement are GAP options. Agreed value is set on the motor policy. One worked example shows how the payouts differ.",
    lede: "Return to invoice and vehicle replacement are types of GAP insurance. Agreed value is a way of setting the payout on your motor policy, not a GAP product. All three react to depreciation, but they use different figures, and the motor settlement is calculated first. You do not add the three payouts together.",
    related: ["best-gap-insurance-uk", "ala-gap-insurance", "gap-insurance-vs-comprehensive-insurance", "gap-insurance-for-cash-buyers", "gap-insurance-for-pcp", "gap-insurance-when-your-car-is-stolen-or-written-off"],
    sources: [S.abi, S.cab, S.moneyPcp],
    faqs: [
      {
        q: "Is agreed value a type of GAP insurance?",
        a: "No. Agreed value is an agreement with your motor insurer about what the vehicle is worth. If that policy pays, it pays instead of a market-value assessment. GAP, if you have it, is a separate contract that looks at what is left after the motor payout."
      },
      {
        q: "Can I buy return to invoice and vehicle replacement together?",
        a: "You buy one GAP policy. The wording chooses the basis. Stacking two GAP policies on the same car usually fails a double-insurance condition. Read the proposal before you assume a second policy will pay."
      },
      {
        q: "What if a new equivalent now costs less than I paid?",
        a: "A vehicle replacement policy that follows today's price of a new equivalent can pay less than return to invoice in that case. If you need the original invoice back, return to invoice is the closer match. If you need enough to order today's equivalent, look at the replacement definition in the wording."
      },
      {
        q: "Does comprehensive insurance already include new-car replacement?",
        a: "Many policies do, for a limited period, often the first 12 months, and often only if you are the first registered keeper and under a mileage cap. That can overlap with vehicle replacement GAP during that period. It is a schedule benefit, not something every comprehensive policy includes."
      }
    ],
    blocks: [
      { type: "h2", text: "Return to invoice" },
      { type: "p", html: "Return to invoice, often called RTI, pays the difference between the motor insurer's settlement and the price on your purchase invoice. It is the version closest to the <a href='https://www.abi.org.uk/policy-and-guidance/general-insurance/personal-insurance/motor-insurance'>ABI's description of GAP</a>: the difference between the original purchase price and current market value. It suits someone who wants the money they paid for the car put back, whether or not they have finance." },
      { type: "p", html: "The invoice definition matters. Factory-fitted options are often included. Dealer extras, paint protection and a warranty pack sometimes are not. A private sale receipt may not count as an invoice. If you financed the car, return to invoice can pay more than the finance balance, because the invoice is usually higher than the settlement figure once you have made payments and put down a deposit." },
      { type: "h2", text: "Vehicle replacement" },
      { type: "p", html: "Vehicle replacement GAP looks at the cost of a new equivalent at the time of the loss, not at the invoice you originally paid. If list prices have risen, the top-up is larger than return to invoice. If they have fallen, it can be smaller. Policies do not all use the same replacement price. Some say the manufacturer's list price. Some say the price of a comparable new vehicle. The definition is the cover." },
      { type: "p", html: "This is also the cover most likely to duplicate a new-car replacement benefit on a <a href='/gap-insurance-vs-comprehensive-insurance'>comprehensive motor policy</a> in the first year. Read that benefit before you pay for a second version of it." },
      { type: "h2", text: "Agreed value" },
      { type: "p", html: "Agreed value sits on the motor policy. You and the motor insurer agree a figure, often renewed each year, and that is what the motor policy aims to pay instead of arguing about market value after a total loss. It is more common on classic, imported and specialist cars, and on some motorbikes, than on an ordinary hatchback. If the agreed figure is kept up to date and the claim is accepted, the gap left for a GAP policy can be small or zero." },
      { type: "p", html: "It is not a promise to pay the purchase price, and it is not finance cover. If you owe more than the agreed figure, you can still have a finance shortfall. If the agreed value is out of date, the motor insurer will follow the policy conditions, which may let it move back towards market value." },
      { type: "h2", text: "One car, three calculations" },
      {
        type: "example",
        title: "A £22,000 car, a £15,400 market value, and a £24,200 new equivalent",
        paragraphs: [
          "Sam pays £22,000 for a car from a dealer in Leeds. Eighteen months later it is a total loss. The motor insurer's market value is £15,400. A new equivalent is listed at £24,200. Sam has no finance.",
          "If the motor policy pays the £15,400 market value, return to invoice tops up £6,600 to put Sam back to the £22,000 invoice. Vehicle replacement, if it pays up to the £24,200 list price, tops up £8,800.",
          "If instead the motor policy is agreed value at £21,000, the motor insurer pays £21,000. Return to invoice would then top up £1,000, not £6,600. Sam is not paid the market-value gap as well. The agreed value has already changed the starting point."
        ]
      },
      { type: "table", headers: ["Cover", "Who pays the main figure", "Top-up in this example"], rows: [
        ["Market value only", "Motor insurer", "£15,400, and no top-up"],
        ["Return to invoice GAP", "GAP insurer, after market value", "£6,600, up to the £22,000 invoice"],
        ["Vehicle replacement GAP", "GAP insurer, after market value", "£8,800, up to the £24,200 list price"],
        ["Agreed value at £21,000", "Motor insurer", "£21,000 from the motor policy. RTI would then add £1,000 if bought on top"]
      ]},
      { type: "p", html: "<a href='https://www.citizensadvice.org.uk/consumer/insurance/types-of-insurance/vehicle-insurance/vehicle-insurance-making-a-claim-if-you-re-in-an-accident/'>Citizens Advice</a> says that if you think a market-value offer is low, you can show prices of similar cars, or pay for a valuation from an independent engineer. Do that before you accept a figure your GAP policy will then use as its starting point. The claim itself is covered in <a href='/how-to-make-a-gap-insurance-claim'>how to make a GAP claim</a>." }
    ]
  },
  {
    slug: "gap-insurance-for-pcp",
    title: "GAP insurance for PCP | UK guide",
    h1: "GAP insurance for PCP",
    card: "On a PCP the settlement figure often still includes the balloon. That is the gap finance cover is aimed at.",
    description: "PCP GAP insurance covers the difference between a motor payout and the finance settlement, which usually includes the optional final balloon. Worked UK example included.",
    lede: "On a personal contract purchase, GAP insurance is there for the difference between the motor insurer's payout and the finance settlement figure. That figure is often higher than the monthly payments you have left, because the optional final balloon is still in the agreement. The guaranteed future value at the end of a healthy PCP is not the same thing as GAP.",
    related: ["gap-insurance-for-hp", "gap-insurance-for-leased-cars", "is-gap-insurance-worth-it", "return-to-invoice-vs-vehicle-replacement-vs-agreed-value"],
    sources: [S.moneyPcp, S.moneyEnd, S.abi, S.fcaPause],
    faqs: [
      {
        q: "Does GAP pay the balloon if I just want to hand the car back on time?",
        a: "No. GAP responds after the motor insurer has settled a total loss or theft. It does not pay the optional final payment on a PCP that runs to the end with the car still in your hands."
      },
      {
        q: "Is the guaranteed minimum future value the same as GAP?",
        a: "No. The GMFV, or balloon, is the optional amount you can pay if you want to own the car at the end. If you hand the car back in the agreed condition and mileage, you are not billed just because the car is worth less than that balloon. That end-of-contract protection does not pay a write-off shortfall in year two."
      },
      {
        q: "Who receives the GAP payment?",
        a: "The finance company is commonly paid first, up to the settlement figure. Any amount the policy pays above what you owe is dealt with in the wording. Ask the insurer who the cheque or transfer goes to before you spend a payout you have only been told about by phone."
      },
      {
        q: "Do I need it if I put down a large deposit?",
        a: "A large deposit gives you equity, so the shortfall is smaller. It does not remove the balloon from an early settlement. Put a cautious market value next to a written settlement illustration before you decide the cover is unnecessary."
      }
    ],
    blocks: [
      { type: "h2", text: "What you owe is not the same as the monthly payments left" },
      { type: "p", html: "<a href='https://www.moneyhelper.org.uk/en/everyday-money/buying-and-running-a-car/financing-buying-car-personal-contract-purchase-pcp'>MoneyHelper's PCP guide</a> sets out the three parts: a deposit, monthly payments, and an optional balloon if you want to own the car. You do not own the car during the agreement. You are responsible for insuring it. If it is written off or stolen, the agreement does not disappear. The lender is paid from the insurance money, and you remain liable for any shortfall." },
      { type: "p", html: "MoneyHelper also notes that dealers may offer GAP with a PCP, and that you should check you are getting a fair deal. The FCA's <a href='https://www.fca.org.uk/news/press-releases/gap-insurers-agree-suspend-sales-following-fca-concerns-over-fair-value'>2024 fair value concerns</a> are the regulatory version of that warning. They are not a reason to ignore a real shortfall if your own numbers are uncomfortable." },
      { type: "h2", text: "Finance GAP and return to invoice are different sizes" },
      { type: "p", html: "Finance GAP aims at the settlement figure. Return to invoice aims at the price you paid. On a PCP those numbers diverge as soon as you have paid a deposit and some instalments, and they diverge again because the balloon may be inside the settlement but is not an extra on top of the invoice. If you only need the debt cleared so you can start another PCP, finance cover matches that debt. If you want the original purchase price back, return to invoice is the closer product. The <a href='/return-to-invoice-vs-vehicle-replacement-vs-agreed-value'>comparison of those bases</a> uses one set of figures so you can see the difference." },
      { type: "h2", text: "A worked PCP example" },
      {
        type: "example",
        title: "A £31,250 car and a £4,800 finance shortfall after theft",
        paragraphs: [
          "Priya takes a PCP on a car with a cash price of £31,250. Her deposit is £3,125. The optional final payment is £13,400. After 20 months the car is stolen in Manchester and not recovered. The motor insurer agrees a market value of £18,900 and pays it to the finance company.",
          "The settlement figure that week is £23,700. Most of the balloon is still outstanding. An interest rebate reduces the figure, but it does not remove the balloon. The shortfall is £4,800.",
          "Finance GAP written to the settlement figure is aimed at that £4,800, up to the claim limit. Return to invoice, aimed at the £31,250 price, would look at £31,250 minus £18,900, which is £12,350. That is a different, larger top-up. Priya does not get both. If £2,200 of the settlement is negative equity brought over from her previous car, and the policy excludes that, the eligible finance shortfall falls by £2,200."
        ]
      },
      { type: "h2", text: "Handing the car back is a different right" },
      { type: "p", html: "Ending a PCP early, or handing the car back where the agreement allows it, is explained by <a href='https://www.moneyhelper.org.uk/en/everyday-money/cut-your-car-finance-hire-purchase-and-other-finance-costs'>MoneyHelper's guide to ending car finance early</a>. Those rights assume there is a car to return or a balance you choose to settle. A write-off means the insurer and the lender are already dealing with a total loss. Voluntary termination does not pay the gap. Neither does the option to hand the car back at the scheduled end." },
      { type: "p", html: "If you are comparing PCP with a lease, where you never have an option to own the car, use the <a href='/gap-insurance-for-leased-cars'>contract hire guide</a>. The bill there is an early termination charge, not a balloon." }
    ]
  },
  {
    slug: "gap-insurance-for-hp",
    title: "GAP insurance for hire purchase | UK guide",
    h1: "GAP insurance for hire purchase",
    card: "HP has no balloon. The shortfall is usually smaller than PCP, and largest early in the agreement.",
    description: "Hire purchase GAP covers the gap between a motor payout and the HP settlement figure. See a worked example, and how the half rule differs from a write-off.",
    lede: "Hire purchase GAP covers the difference between the motor insurer's payout and what you still owe the HP lender. A standard HP agreement has no balloon, so the shortfall is often smaller than on a PCP for the same car. It is usually largest in the first year or two, while the balance is still high and the car has already fallen in value.",
    related: ["gap-insurance-for-pcp", "gap-insurance-for-used-cars", "gap-insurance-for-cash-buyers", "how-to-make-a-gap-insurance-claim"],
    sources: [S.moneyPcp, S.moneyEnd, S.cab, S.abi],
    faqs: [
      {
        q: "I will own the car at the end. Do I still need GAP?",
        a: "Only while you could owe more than the insured value. Later in the agreement the balance often drops below market value. At that point there is no finance shortfall for a policy to pay."
      },
      {
        q: "Does GAP clear the agreement if I miss payments?",
        a: "No. Arrears, missed instalments and late fees are commonly excluded. GAP is not a payment holiday and it is not a settlement of a healthy agreement."
      },
      {
        q: "Is HP GAP different from finance GAP?",
        a: "Finance GAP is the usual name for a policy that pays up to the outstanding finance. Hire purchase is one of the agreements it is used for. The label on the brochure matters less than a wording that names hire purchase and pays the settlement figure."
      },
      {
        q: "What if the motor payout is higher than the settlement figure?",
        a: "There is no gap. Any surplus after the lender is paid belongs to you, subject to the motor excess and the motor policy. A GAP policy does not pay a further sum just because you have the policy."
      }
    ],
    blocks: [
      { type: "h2", text: "How HP builds the balance" },
      { type: "p", html: "<a href='https://www.moneyhelper.org.uk/en/everyday-money/buying-and-running-a-car/financing-buying-car-personal-contract-purchase-pcp'>MoneyHelper</a> describes hire purchase as a deposit plus monthly payments that cover the rest of the car. You normally own it once you have made the final payment. There is no optional balloon. Monthly payments are usually higher than a PCP on the same car because you are paying the whole balance off, not stopping short of a large final sum." },
      { type: "p", html: "If the car is written off, the lender still wants the early settlement figure. That figure is not 'monthly payment times months left'. Interest that has not yet been earned is rebated. <a href='https://www.moneyhelper.org.uk/en/everyday-money/cut-your-car-finance-hire-purchase-and-other-finance-costs'>MoneyHelper's guide to ending car finance early</a> explains that early settlement charges on hire purchase are capped by the Consumer Credit Act, and sets out how the cap is worked out. The number you use for a GAP claim is the settlement figure the lender issues, not a guess." },
      { type: "h2", text: "A worked HP example" },
      {
        type: "example",
        title: "A £1,450 shortfall on a three-year-old estate",
        paragraphs: [
          "Tom buys a three-year-old estate in Bristol on hire purchase. The cash price is £16,800. He puts down £1,500, so the amount of credit is £15,300 over 48 months. Eleven months later the car is written off. The motor insurer pays a market value of £12,600 to the lender.",
          "The settlement figure, after the interest rebate, is £14,050. The shortfall is £1,450. In this illustration the gap is real but modest. It is a stronger reason to insure if Tom has no savings than if he has a few thousand pounds set aside.",
          "The same car on a PCP with a £6,000 balloon could show a much higher settlement in month 11. That is why a PCP example and an HP example should not be swapped. See <a href='/gap-insurance-for-pcp'>GAP for PCP</a> for the balloon version."
        ]
      },
      { type: "h2", text: "The half rule does not replace a write-off claim" },
      { type: "p", html: "MoneyHelper explains that you can return an HP car early once you have paid at least half of the total cost, or pay the difference up to that half. If you have already paid more than half, you do not get the extra back. That right is about handing the car back while you still have it. A total loss means the car is going to the insurer, not back to the dealer under a voluntary termination. Do not treat the half rule as a substitute for GAP, and do not cancel a claim because you remember the half rule from the showroom." },
      { type: "h2", text: "Used cars on HP" },
      { type: "p", html: "HP is common on used cars, where depreciation is often slower than on a new car but the balance can still sit above market value early on. Age and mileage limits on the GAP policy matter more here than they do on a new car. The <a href='/gap-insurance-for-used-cars'>used car guide</a> splits a case where the gap is worth measuring from a case where it is a few hundred pounds." },
      { type: "p", html: "When you claim, the order is motor settlement, then the lender's figure, then the GAP insurer. That sequence is set out in <a href='/how-to-make-a-gap-insurance-claim'>how to make a GAP claim</a>." }
    ]
  },
  {
    slug: "gap-insurance-for-leased-cars",
    title: "GAP insurance for leased cars | UK guide",
    h1: "GAP insurance for leased cars",
    card: "On contract hire you never own the car. The gap is the early termination charge minus the insurance money.",
    description: "Contract hire GAP covers the shortfall between a motor payout paid to the leasing company and the early termination charge. Worked UK example included.",
    lede: "On contract hire, also called personal contract hire, you never own the car. If it is written off or stolen, the leasing company is the owner who receives the motor insurance money, and the contract will usually still charge you to end the hire early. Lease GAP is aimed at the difference between that insurance money and the early termination charge.",
    related: ["gap-insurance-for-pcp", "gap-insurance-for-vans", "gap-insurance-when-your-car-is-stolen-or-written-off", "what-gap-insurance-does-not-cover"],
    sources: [S.moneyPch, S.moneyEnd, S.abi, S.cab],
    faqs: [
      {
        q: "I do not own the car. Can I insure the gap?",
        a: "Yes, if the policy is written for contract hire or lease. You are insuring your liability to the owner under the hire contract, not a car you own. A return-to-invoice policy aimed at a purchase you never made is the wrong product."
      },
      {
        q: "Does the leasing company's insurance replace GAP?",
        a: "You are usually required to insure the car on a comprehensive policy yourself. That policy pays market value to the owner. It does not automatically pay the early termination charge in the hire contract. Read both documents."
      },
      {
        q: "What if the insurance payout is higher than the termination charge?",
        a: "There may be no shortfall for you to pay. Any extra is dealt with under the lease and the motor policy. GAP does not pay a windfall on top of a lease that has already been cleared."
      },
      {
        q: "Are wear and tear or excess mileage covered?",
        a: "Usually not. Those are charges under the hire contract for condition and miles, not a depreciation gap. A policy that says it covers the early termination shortfall still needs to be read for exclusions on mileage, damage and arrears."
      }
    ],
    blocks: [
      { type: "h2", text: "What contract hire leaves you owing" },
      { type: "p", html: "<a href='https://www.moneyhelper.org.uk/en/everyday-money/buying-and-running-a-car/leasing-a-car-with-personal-contract-hire-pch'>MoneyHelper's personal contract hire guide</a> is plain about the shape of the deal. You agree a term and a mileage limit, you pay an upfront fee and monthly rentals, and you normally have no option to buy the car. You insure it, fuel it and service it. You cannot simply give it back early without a large fee. MoneyHelper's <a href='https://www.moneyhelper.org.uk/en/everyday-money/cut-your-car-finance-hire-purchase-and-other-finance-costs'>page on ending car finance early</a> makes the same point for personal contract hire: getting out early is expensive because the contract says so." },
      { type: "p", html: "A total loss is an early end you did not choose. The motor insurer, under a comprehensive or fire-and-theft settlement, pays the owner the market value. The <a href='https://www.abi.org.uk/policy-and-guidance/general-insurance/personal-insurance/motor-insurance'>ABI describes that market-value payout</a>. The leasing company then applies its early termination clause. Your exposure is whatever is left after the insurance money is credited. That remainder is what contract hire GAP is written to cover." },
      { type: "h2", text: "A worked contract hire example" },
      {
        type: "example",
        title: "A £4,690 bill after a total loss in month 9",
        paragraphs: [
          "Helen hires a car on a 36-month personal contract hire. The monthly rental is £329 and she paid an initial rental of £1,974. In month 9 the car is a total loss after a collision in Glasgow. The leasing company's early termination charge is £16,840. The motor insurer pays the leasing company the market value, £12,150.",
          "Helen is billed for £4,690. A contract hire GAP policy that covers the early termination shortfall is claimed for £4,690, if that is inside the claim limit and the policy names her as the person liable under the hire agreement.",
          "The policy in this illustration does not give her a deposit for the next car. It does not pay the £180 a month she is later billed for a scuffed alloy that the leasing company treats as beyond fair wear, and it does not pay an excess-mileage charge. Those are hire-contract charges. They are listed among the things <a href='/what-gap-insurance-does-not-cover'>GAP usually does not cover</a>."
        ]
      },
      { type: "h2", text: "Names, VAT and vans" },
      { type: "p", html: "The person or business that signed the hire contract should match the person the GAP policy will pay on behalf of. A policy in a driver's name does not automatically cover a limited company's lease. If the business is VAT registered, ask whether the termination figure in a claim is the net amount or includes VAT, and use that same figure on the proposal." },
      { type: "p", html: "Van contract hire is the same structure with a few extra eligibility questions. Those sit in the <a href='/gap-insurance-for-vans'>van guide</a>. A PCP, where there is an option to own and a balloon, is a different agreement and a different shortfall. Use the <a href='/gap-insurance-for-pcp'>PCP guide</a> if the paperwork says personal contract purchase rather than contract hire." },
      { type: "h2", text: "What to ask before you buy lease GAP" },
      { type: "ul", items: [
        "Does the wording pay the early termination shortfall, or does it pay a return to invoice on a car you do not own?",
        "Are excess mileage, damage charges and arrears excluded?",
        "Is the claim limit at least as large as a pessimistic termination shortfall in the first year?",
        "Does the motor policy have to be comprehensive, and is business use correct if this is a company car?",
        "Who is paid: you, or the leasing company direct?"
      ]}
    ]
  }
];
