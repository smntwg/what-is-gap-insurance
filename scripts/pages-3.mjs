import { S } from "./sources.mjs";

export const pages3 = [
  {
    slug: "fca-rules-on-dealer-gap-insurance",
    title: "FCA rules on dealer GAP insurance | UK guide",
    h1: "FCA rules on dealer GAP insurance",
    card: "Dealers must give you set information and wait. Fair value rules are why sales were paused in 2024.",
    description: "Dealer GAP sales must follow the FCA deferral and prescribed information rules. Fair value concerns led to a 2024 pause. The published figures and the two-clear-day rule, explained.",
    lede: "If a firm sells you GAP insurance in connection with selling you the vehicle, FCA rules in ICOBS 6A.1 make it give you set information and then wait before the sale is completed. Separate fair value rules are why the FCA asked firms to pause GAP sales in 2024 until they could show customers were getting a fairer deal. The rules do not ban dealer GAP, and they do not set a maximum price in pounds.",
    related: ["dealer-vs-online-gap-insurance", "gap-insurance-mis-selling", "can-i-buy-gap-insurance-after-buying-the-car", "cancelling-gap-insurance-and-refunds"],
    sources: [S.icobsGap, S.cp1429, S.eval2018, S.fcaPause, S.fcaRestart, S.fcaFoi, S.register],
    faqs: [
      {
        q: "Does the two-clear-day wait apply if I buy from a website a week later?",
        a: "Not under ICOBS 6A.1, if that firm is not selling the GAP contract in connection with its own sale of the vehicle, or a connected person's sale. The deferral is a rule for the add-on sale. A later standalone purchase has the provider's own time limits instead."
      },
      {
        q: "Can a dealer hide the GAP premium inside the monthly payment?",
        a: "The rules say the total premium must be given separately from any other prices, on paper or another durable medium, and drawn to your attention as key information. A blended monthly figure with no separate premium does not do that."
      },
      {
        q: "Is the 6% claims figure my chance of claiming?",
        a: "No. It is a market-wide comparison, from the FCA's value measures data, of GAP claims paid against premiums paid. The FCA cited the 2022 data when it challenged firms in 2024. Your own chance depends on the car, how it is used, and whether it is stolen or written off."
      },
      {
        q: "Where do I check a firm is allowed to sell insurance?",
        a: "On the Financial Services Register. An appointed representative is listed against the authorised firm that is responsible for it. A firm that does not appear needs a better explanation before you pay it."
      }
    ],
    blocks: [
      { type: "h2", text: "Which sales the deferral covers" },
      { type: "p", html: "<a href='https://www.handbook.fca.org.uk/handbook/ICOBS/6A/1.html'>ICOBS 6A.1.1</a> applies to a firm that sells a GAP contract in connection with the sale of a vehicle by that firm, or by a person connected to the firm. A connection includes acting as an introducer or appointed representative, or another relevant business relationship. The FCA also says there is a sufficient connection if GAP is sold with other goods, for example a credit agreement. A standalone insurer you approach yourself, with no link to the vehicle sale, is outside that section." },
      { type: "p", html: "The rules have applied since 1 September 2015. They came out of a competition remedy. In <a href='https://www.fca.org.uk/publication/consultation/cp14-29.pdf'>CP14/29</a> the FCA said add-on prices could be twice as expensive as broadly equivalent standalone cover, and that 83% of add-on GAP buyers in its market study did not consider another policy, compared with 9% of standalone buyers." },
      { type: "h2", text: "The information you should be given" },
      { type: "p", html: "Before the contract is concluded, ICOBS 6A.1.4 says the firm must give you all of the following, clearly, on paper or another durable medium, and identifiable as key information:" },
      { type: "ul", items: [
        "The total premium of the GAP contract, separate from any other prices.",
        "The significant features and benefits, the significant and unusual exclusions or limitations, and where to find them in the policy.",
        "That GAP contracts are sold by other distributors, whether or not this sale is tied to vehicle finance.",
        "How long the policy lasts.",
        "Whether the GAP contract is optional or compulsory.",
        "When the firm is allowed to conclude the contract.",
        "The date that information was provided."
      ]},
      { type: "h2", text: "The deferral, with dates" },
      { type: "p", html: "ICOBS 6A.1.6 says the firm cannot conclude the contract until at least two clear days have passed since it gave you that information. ICOBS 6A.1.7 is the exception. The firm can conclude it the day after giving you the information if you initiate that conclusion, you consent to the shorter wait, and you confirm that you understand the usual restriction. The firm is not supposed to talk you into using the exception as if it were the normal path." },
      {
        type: "example",
        title: "Information on Monday 1 June",
        paragraphs: [
          "A dealer gives you the prescribed GAP information on Monday 1 June. The two clear days are Tuesday 2 June and Wednesday 3 June. The firm should not complete the sale before Thursday 4 June.",
          "If you contact the dealer yourself on Tuesday 2 June, agree to the shorter wait, and confirm you understand that the firm would normally have to wait those two clear days, ICOBS 6A.1.7 allows the firm to conclude the contract that Tuesday. A sale finished on the Monday afternoon, the same day as the information, does not fit either rule.",
          "This is an illustration of the calendar, not a story about a particular dealer. The same count applies whatever the premium is."
        ]
      },
      { type: "p", html: "The FCA's <a href='https://www.fca.org.uk/publication/corporate/gap-insurance-intervention-evaluation-paper.pdf'>July 2018 evaluation</a> looked at what the 2015 rules changed. Shopping around more than doubled. Add-on GAP sales were 16% to 23% lower than they would have been without the intervention. Standalone sales rose from 6% to 8% of all GAP sales. The FCA said the shift towards the standalone market was smaller than it had expected before the rules began." },
      { type: "h2", text: "Fair value, the 2024 pause, and the restart" },
      { type: "p", html: "Information rules and price are different problems. On 9 February 2024 the FCA said multiple insurers had <a href='https://www.fca.org.uk/news/press-releases/gap-insurers-agree-suspend-sales-following-fca-concerns-over-fair-value'>agreed to pause GAP sales</a> after it was not satisfied they were providing fair value. The press release said that only 6% of the amount customers pay in premiums for GAP insurance was paid out in claims, and that the FCA had seen examples of firms paying out 70% of the value of premiums in commission. It also pointed back to the 2014 market study, which found that only 10% of premiums were paid out in claims on average between 2008 and 2012. The FCA had written to manufacturers in September 2023 asking them to prove customers were getting a fair deal." },
      { type: "p", html: "On 24 May 2024 the FCA said <a href='https://www.fca.org.uk/news/press-releases/firms-recommence-gap-insurance-sales-following-fca-action'>several firms could start selling again</a>, with materially lower commission. The firms named at that date were Fortegra Europe Insurance Company Ltd, Motors Insurance Company Ltd, Amtrust Europe Ltd, and Financial &amp; Legal Insurance Company Limited. The FCA said that decision reflected its assessment at a point in time, and that firms still have to keep checking fair value. Naming them here is not a recommendation. A November 2024 FCA note on a freedom of information request repeats the same 6% and 70% picture and ties the fair value assessment to the Consumer Duty at PRIN 2A.4." },
      { type: "h2", text: "What these rules do not do" },
      { type: "ul", items: [
        "They do not make GAP compulsory, and they do not ban it.",
        "They do not cap the premium at a particular price.",
        "They do not force you to buy from a standalone website. They give you time and information so you can.",
        "They do not apply the dealer deferral to every insurer in the country.",
        "They do not mean a customer who paid a high price is automatically entitled to a refund. A sale that ignored the information or the wait is a complaint. How to raise one is in the <a href='/gap-insurance-mis-selling'>mis-selling guide</a>."
      ]},
      { type: "p", html: "Check the seller on the <a href='https://register.fca.org.uk/'>Financial Services Register</a> before you pay. If you are deciding whether to use the pause to buy elsewhere, the practical timing is in <a href='/can-i-buy-gap-insurance-after-buying-the-car'>can I buy GAP after buying the car</a>." }
    ]
  },
  {
    slug: "gap-insurance-for-cash-buyers",
    title: "GAP insurance for cash buyers | UK guide",
    h1: "GAP insurance for cash buyers",
    card: "No finance means finance GAP has nothing to pay. Invoice or replacement cover is a separate question.",
    description: "Cash buyers do not have a finance shortfall. Return to invoice or vehicle replacement can still matter if market value would leave you short of the price you paid.",
    lede: "If you paid cash, there is no finance company to settle, so finance GAP has nothing to pay. Return to invoice or vehicle replacement can still matter if the insurer's market value would leave you short of the price you paid, or short of another new car. Many cash buyers of older cars reasonably decide the gap is too small to insure.",
    related: ["is-gap-insurance-worth-it", "return-to-invoice-vs-vehicle-replacement-vs-agreed-value", "gap-insurance-for-used-cars", "gap-insurance-vs-comprehensive-insurance"],
    sources: [S.abi, S.cab, S.icobsGap, S.moneyPcp],
    faqs: [
      {
        q: "Is GAP pointless if I have no finance?",
        a: "Finance GAP is. Cover that puts you back to the invoice, or towards a new equivalent, is a separate decision. It is about depreciation, not about a lender."
      },
      {
        q: "I put the car on a credit card. Is that finance GAP?",
        a: "A credit card bill is not a secured hire purchase or PCP agreement. A finance GAP policy written for those agreements may not pay the card. If you want the purchase price back, look at return to invoice and check that the wording pays you, not a motor lender you do not have."
      },
      {
        q: "Do cash buyers get the dealer deferral as well?",
        a: "Yes, if the dealer is selling GAP in connection with the vehicle. The rule is about that sale. It does not depend on you having borrowed."
      },
      {
        q: "Should I rely on savings instead?",
        a: "If the savings are there for this, and replacing the car would not wipe out your emergency fund, many cash buyers decline GAP. That is a coherent choice, particularly when the car was bought close to market value."
      }
    ],
    blocks: [
      { type: "h2", text: "The shortfall is your own money, not a debt" },
      { type: "p", html: "A write-off does not leave a cash buyer owing a finance company. It leaves them with a market-value cheque that may be less than the price they paid, or less than the cost of a similar replacement. The <a href='https://www.abi.org.uk/policy-and-guidance/general-insurance/personal-insurance/motor-insurance'>ABI</a> describes the motor payout as current market value, and describes GAP as the difference between that and the original purchase price. <a href='https://www.citizensadvice.org.uk/consumer/insurance/types-of-insurance/vehicle-insurance/vehicle-insurance-making-a-claim-if-you-re-in-an-accident/'>Citizens Advice</a> says you can challenge a market value you think is low. Do that before you assume you need a second policy to fill a hole that a better motor settlement would shrink." },
      { type: "p", html: "<a href='https://www.moneyhelper.org.uk/en/everyday-money/buying-and-running-a-car/financing-buying-car-personal-contract-purchase-pcp'>MoneyHelper</a> mentions GAP in the context of owing more than an insurance payout. If you do not owe anyone, that version of the problem does not arise. The version that can remain is depreciation." },
      { type: "h2", text: "A new car bought for cash, then an older one" },
      {
        type: "example",
        title: "£7,750 in month 16, and an £800 gap on an older car",
        paragraphs: [
          "Nora pays £27,500 cash for a new car in York. She is the first keeper. Her comprehensive policy includes new-car replacement for the first 12 months only. In month 7 the car is written off and the motor policy replaces it. A GAP policy would not add a second car on top of that benefit.",
          "In month 16 the same kind of loss is a market-value claim. The insurer offers £19,750. Return to invoice tops up £7,750, back to the £27,500 she paid. She is not in debt. The question is whether she wants to self-fund £7,750. The figures are an illustration.",
          "Idris pays £8,400 cash for an eight-year-old car advertised in line with similar cars. A year later the market value is assessed at £7,600. The gap is £800. He does not buy GAP. For a cash purchase close to market value, that is a reasonable decision, and it is a different decision from Nora's."
        ]
      },
      { type: "h2", text: "Agreed value can do this job instead" },
      { type: "p", html: "If the car is specialist enough to be on an agreed value motor policy, and the agreed figure is the number you care about, the motor policy may already pay what return to invoice would have topped up. Agreed value is not GAP. The difference is worked through in <a href='/return-to-invoice-vs-vehicle-replacement-vs-agreed-value'>return to invoice vs vehicle replacement vs agreed value</a>. Keep the agreed figure current. An old agreed value that no longer matches the car is a motor dispute waiting to happen." },
      { type: "h2", text: "How cash buyers get sold the wrong product" },
      { type: "p", html: "Finance GAP sold to someone with nothing to finance is a poor match, even if the premium looks small. The dealer still has to say whether the contract is optional and still has to show the premium on its own, under <a href='https://www.handbook.fca.org.uk/handbook/ICOBS/6A/1.html'>ICOBS 6A.1</a>. Use the deferral to read which figure the policy actually pays. If you are comparing a used car bought for cash with a financed one, the <a href='/gap-insurance-for-used-cars'>used car guide</a> puts those two outcomes side by side. Whether the cover is worth the premium at all is the question in <a href='/is-gap-insurance-worth-it'>is GAP insurance worth it</a>." }
    ]
  },
  {
    slug: "gap-insurance-for-vans",
    title: "GAP insurance for vans | UK guide",
    h1: "GAP insurance for vans",
    card: "A financed or hired van can leave a gap. Check vans are eligible, the use is insured, and which VAT figure is used.",
    description: "Van GAP insurance follows the same shortfall as a car, with extra questions on eligibility, business use and VAT. Includes a worked UK example.",
    lede: "A van can leave the same sort of gap as a car if it is on finance or contract hire and the motor insurer pays market value. The extra questions are whether the GAP policy accepts vans, whether your motor insurance covers the way you use the van, and whether the insured figure is the price before VAT or the price after it.",
    related: ["gap-insurance-for-leased-cars", "gap-insurance-for-hp", "gap-insurance-for-used-cars", "what-gap-insurance-does-not-cover"],
    sources: [S.abi, S.moneyPch, S.moneyEnd, S.cab],
    faqs: [
      {
        q: "Do I have to tell the motor insurer the van is used for work?",
        a: "Yes, if you use it for work. The ABI says that using a vehicle as part of your employment needs business use on the motor policy, and that the wrong use can invalidate the policy. A refused motor claim means there is no GAP payout."
      },
      {
        q: "Can I buy a car GAP policy for a van?",
        a: "Only if that policy lists vans as eligible. A proposal that describes the vehicle as a car, when it is a van, is a claims problem. Do not assume the word vehicle on a car website includes a panel van."
      },
      {
        q: "Does GAP pay for a hire van while mine is off the road?",
        a: "No. A courtesy or hire van is a benefit on the motor or commercial policy, with its own daily limit. GAP pays a shortfall after a total loss or theft settlement, not a temporary replacement."
      },
      {
        q: "What if I am not VAT registered?",
        a: "You cannot reclaim the VAT, so the price you paid and the amount you financed may both be the gross figure. Use that gross figure on the proposal and in any claim, and do not mix it with a net price from a different document."
      }
    ],
    blocks: [
      { type: "h2", text: "Business use has to be right before GAP matters" },
      { type: "p", html: "The <a href='https://www.abi.org.uk/policy-and-guidance/general-insurance/personal-insurance/motor-insurance'>ABI</a> says that if you use a vehicle as part of your employment you need business use on the motor policy. Carrying your own tools to jobs is not the same as carrying paying passengers, which needs hire and reward cover. If the motor insurer refuses a claim because the use was wrong, <a href='/what-gap-insurance-does-not-cover'>GAP does not step in</a>. Get the motor policy right first. Citizens Advice's <a href='https://www.citizensadvice.org.uk/consumer/insurance/types-of-insurance/vehicle-insurance/vehicle-insurance-making-a-claim-if-you-re-in-an-accident/'>claim guidance</a> on market value applies to a van write-off in the same way as a car: you can challenge a low offer with evidence of similar vehicles." },
      { type: "h2", text: "A worked example with VAT" },
      {
        type: "example",
        title: "A £3,700 finance shortfall on the net price, not the VAT-inclusive one",
        paragraphs: [
          "A VAT-registered decorator in Coventry buys a panel van. The invoice is £28,000 plus VAT of £5,600, so £33,600 gross. The business reclaims the VAT and finances £28,000 on hire purchase. Two years later the van is written off. The motor insurer pays a market value of £19,400 to the lender. The HP settlement figure is £23,100.",
          "The finance shortfall is £3,700. A GAP policy that insures the net amount financed is concerned with that £3,700. Someone who subtracts £19,400 from the £33,600 gross invoice gets £14,200 and overstates the gap, because the £5,600 of VAT was reclaimed and was not part of the finance. These figures are an illustration. Ask the provider which invoice number they use, and keep the VAT invoice with the policy.",
          "Tools in the back, a roof rack and the signwriting are not automatically part of the van's insured value. GAP on the vehicle does not pay for stolen tools unless a separate possession cover says so. That cover, where it exists, is usually on the commercial motor policy and has its own limit."
        ]
      },
      { type: "h2", text: "Contract hire vans" },
      { type: "p", html: "A van on contract hire is the lease problem, not the invoice problem. The leasing company receives the market value, and the hire contract bills an early termination charge. Your exposure is the difference. <a href='https://www.moneyhelper.org.uk/en/everyday-money/buying-and-running-a-car/leasing-a-car-with-personal-contract-hire-pch'>MoneyHelper's contract hire guide</a> describes that early-exit cost, and the <a href='/gap-insurance-for-leased-cars'>leased cars guide</a> works a car example you can mirror. Mileage and damage charges are still usually outside GAP." },
      { type: "h2", text: "Eligibility is in the policy, not in a national rule" },
      { type: "p", html: "There is no FCA rule that says every GAP policy covers vans up to a set weight. Providers choose. A crew cab, a refrigerated body, a tipper or a gross weight above the policy limit can be declined even though the vehicle is still an ordinary working van. Conversions and modifications need to be on the proposal. If you are buying the van on hire purchase rather than hiring it, the settlement arithmetic is the one in the <a href='/gap-insurance-for-hp'>HP guide</a>, using the lender's figure rather than a guess from the monthly rental." },
      { type: "p", html: "Used vans raise the same age and mileage questions as <a href='/gap-insurance-for-used-cars'>used cars</a>. A van that has already done a high mileage may fail a provider's limit even if the finance balance is uncomfortable. Ask before you treat cover as a given." }
    ]
  },
  {
    slug: "gap-insurance-for-motorbikes",
    title: "GAP insurance for motorbikes | UK guide",
    h1: "GAP insurance for motorbikes",
    card: "The shortfall works like a car. Fewer policies cover bikes, and agreed value is more common.",
    description: "Motorcycle GAP insurance tops up a comprehensive settlement after theft or a write-off. A worked UK example shows finance GAP, and how agreed value can shrink it.",
    lede: "GAP insurance for a motorbike tops up a comprehensive insurer's payment after a total loss or theft, in the same way as for a car. Fewer providers offer it. Theft is a common reason bikes are total losses. An agreed value motor policy is also more common on specialist bikes than on ordinary cars, and it can shrink or remove the gap.",
    related: ["gap-insurance-when-your-car-is-stolen-or-written-off", "gap-insurance-for-hp", "gap-insurance-for-used-cars", "gap-insurance-vs-comprehensive-insurance"],
    sources: [S.abi, S.cab, S.icobsGap, S.govWriteoff],
    faqs: [
      {
        q: "Are scooters and mopeds included?",
        a: "Only if that policy's vehicle list includes them. Check the cubic capacity, the value limit and any age limit. A motorcycle policy does not automatically cover a 50cc moped, and a car policy does not cover either."
      },
      {
        q: "I changed the exhaust. Does that matter?",
        a: "Undeclared modifications can give a motor insurer a reason to refuse or reduce a claim. Tell the motor insurer, and make sure the GAP proposal matches. If the motor claim fails, the GAP claim fails with it."
      },
      {
        q: "Does GAP cover helmets and leathers?",
        a: "No. Riding gear and luggage are not part of the bike's shortfall. Some motor policies contribute a small amount towards kit. That is a motor benefit, with its own limit."
      },
      {
        q: "Can the dealer sell me bike GAP on the day I collect it?",
        a: "The ICOBS 6A.1 deferral applies if the firm is selling GAP in connection with the sale of the vehicle. A motorcycle is a vehicle for that purpose. The firm should give you the prescribed information and then wait, unless you yourself use the next-day exception."
      }
    ],
    blocks: [
      { type: "h2", text: "The motor policy still comes first" },
      { type: "p", html: "You cannot ride on GAP insurance alone. The compulsory motor policy is what covers your liability to other people. Third party cover does not pay for your own bike, so a GAP policy that needs a comprehensive settlement will not respond to an at-fault crash. The <a href='https://www.abi.org.uk/policy-and-guidance/general-insurance/personal-insurance/motor-insurance'>ABI's description of market value and of GAP</a> is written for vehicles generally, not only cars. <a href='https://www.citizensadvice.org.uk/consumer/insurance/types-of-insurance/vehicle-insurance/vehicle-insurance-making-a-claim-if-you-re-in-an-accident/'>Citizens Advice</a> likewise talks about your vehicle's market value on a write-off, and about challenging an offer with prices of similar vehicles." },
      { type: "h2", text: "A theft on hire purchase" },
      {
        type: "example",
        title: "A £2,250 shortfall on a £12,800 motorcycle",
        paragraphs: [
          "Chris buys a new motorcycle in Southampton for £12,800 on hire purchase, with an £800 deposit. Seven months later it is stolen from a station car park and not recovered. The ABI explains that an unrecovered theft is not given a salvage write-off category. The motor insurer agrees a market value of £9,150. The HP settlement figure is £11,400. The shortfall is £2,250.",
          "A motorcycle finance GAP policy is aimed at that £2,250 if bikes are eligible, theft is an insured event, and the claim limit is at least £2,250. The helmet and leathers that were also taken are not part of the £2,250.",
          "If the same bike was a limited-edition model on an agreed value motor policy at £12,500, the motor insurer pays £12,500 where that policy's conditions are met. The £11,400 settlement is cleared and the finance gap disappears. Agreed value has done the job finance GAP would have done. It has to be in force and up to date. It is not, itself, a GAP policy. The distinction is the one in the <a href='/return-to-invoice-vs-vehicle-replacement-vs-agreed-value'>agreed value comparison</a>."
        ]
      },
      { type: "h2", text: "Security conditions bite harder on bikes" },
      { type: "p", html: "Bike policies often require a particular lock, a garage overnight, or a tracker. If the motor policy makes that a condition and it was not met, the motor claim can fail. The GAP claim then fails because there is no settlement to top up. Read the schedule before you treat a ground anchor or a disc lock as optional. This is not a universal legal requirement. It is a condition of the policy you bought, and it varies." },
      { type: "h2", text: "Used bikes and the dealer wait" },
      { type: "p", html: "A used bike bought close to the going price, for cash, often has a small gap, in the same way as a <a href='/gap-insurance-for-used-cars'>used car</a>. A new bike on <a href='/gap-insurance-for-hp'>hire purchase</a> in the first year is the case where the settlement figure and the market value are most likely to part company. If the bike has previously been a category S or N write-off, <a href='https://www.gov.uk/government/publications/buying-repaired-written-off-vehicles-a-consumer-guide/buying-repaired-written-off-vehicles-a-consumer-guide'>GOV.UK</a> says insurance can cost more and that you must tell the insurer. A GAP provider may exclude those bikes." },
      { type: "p", html: "The dealer deferral in <a href='https://www.handbook.fca.org.uk/handbook/ICOBS/6A/1.html'>ICOBS 6A.1</a> applies to this sale in the same way as a car. Use it to check that the policy mentions motorcycles in the eligible vehicles, not only in the advert." }
    ]
  },
  {
    slug: "gap-insurance-when-your-car-is-stolen-or-written-off",
    title: "GAP insurance when your car is stolen or written off",
    h1: "GAP insurance when your car is stolen or written off",
    card: "GAP follows a total loss or an unrecovered theft settlement. A repair is not a claim.",
    description: "GAP insurance pays after a write-off or an unrecovered theft settlement, not after a repair. Salvage categories and two worked UK examples explained.",
    lede: "GAP insurance is built for two outcomes: the motor insurer writes the car off, or it pays an agreed value for a theft where the car is not recovered. It is not a repair fund. The amount it pays is the difference between that motor settlement and the invoice, the finance balance, the lease termination charge, or a replacement cost, depending on the policy you bought.",
    related: ["how-to-make-a-gap-insurance-claim", "gap-insurance-vs-comprehensive-insurance", "what-gap-insurance-does-not-cover", "gap-insurance-for-pcp"],
    sources: [S.abi, S.govWriteoff, S.cab, S.moneyEnd],
    faqs: [
      {
        q: "The insurer wants to repair my car. Can I insist on a write-off so GAP pays?",
        a: "No. GAP follows a total loss the motor insurer has decided. A repair, even an expensive one, is not a GAP claim. Asking for a write-off the repair cost does not support will not create a shortfall payment."
      },
      {
        q: "The other driver was at fault and their insurer is paying. Can I still claim GAP?",
        a: "Sometimes. It depends whether your GAP wording accepts a market-value settlement from a third party insurer, or whether it expects the claim to go through your own comprehensive policy. Check before you choose a route that skips your own insurer."
      },
      {
        q: "What if the car is found after I have been paid for the theft?",
        a: "Tell both insurers straight away. You cannot keep a full theft payout and the car. They will set out whether the car is returned and the payout is revised, or whether the insurer keeps the car."
      },
      {
        q: "Does a category S or N history matter next time?",
        a: "It can. GOV.UK says a vehicle that was previously a total loss can cost more to insure, and that you should tell the insurer before you buy. Failing to tell them can give them a reason to refuse a later claim. That is a motor insurance issue on the next car, not a second GAP payout."
      }
    ],
    blocks: [
      { type: "h2", text: "What counts as a write-off" },
      { type: "p", html: "The <a href='https://www.abi.org.uk/policy-and-guidance/general-insurance/personal-insurance/motor-insurance'>ABI</a> says a total loss, also called a write-off, is typically when the repair cost is higher than the vehicle's value. It can also be an economic total loss once other costs, such as a courtesy car, are counted. Insurers use a salvage code. <a href='https://www.gov.uk/government/publications/buying-repaired-written-off-vehicles-a-consumer-guide/buying-repaired-written-off-vehicles-a-consumer-guide'>GOV.UK</a> divides insurance total losses into two groups. An actual loss, category A or B, should not be repaired and put back on the road. A constructive loss, category S or N, could be repaired, but the cost of doing so would exceed the replacement value." },
      { type: "p", html: "If your insurer repairs the car, there is no GAP claim. If they write it off, the offer should be the market value. <a href='https://www.citizensadvice.org.uk/consumer/insurance/types-of-insurance/vehicle-insurance/vehicle-insurance-making-a-claim-if-you-re-in-an-accident/'>Citizens Advice</a> says you can dispute that value with prices of similar cars, and that if you keep a repairable salvage car the insurer deducts the salvage value from the payout. Read your GAP wording before you keep the salvage. Some policies use the market value before that deduction. Some use the net amount that was actually paid." },
      { type: "h2", text: "Unrecovered theft is not given a category" },
      { type: "p", html: "The ABI draws a line that matters for the paperwork. A stolen car that is recovered beyond repair can be declared a write-off. A stolen car that is not recovered cannot. The insurer contacts you to agree a valuation and the cost of a replacement. A GAP policy is generally written to follow that theft settlement as well as a write-off, but only the insured events in your schedule count. Do not assume the word write-off in a headline is the only trigger, and do not assume theft is included if the schedule does not say so." },
      { type: "h2", text: "The same shortfall, two sets of paperwork" },
      {
        type: "example",
        title: "£5,400 after a category N write-off, and £5,400 after an unrecovered theft",
        paragraphs: [
          "A car financed on PCP is assessed at a market value of £21,000. The repair estimate is £14,500, and once recovery and a courtesy car are included the insurer treats it as a total loss. It is recorded as category N. The finance settlement is £26,400. Finance GAP, if this total loss is covered and the claim limit allows, is claimed for £5,400. If the insurer had repaired the car, the GAP payment would have been zero and the PCP would have carried on.",
          "The same figures as an unrecovered theft: the insurer agrees £21,000, there is no salvage category, and the settlement figure is still £26,400. The shortfall is still £5,400. The GAP file holds a theft settlement letter and a crime reference instead of a category letter. How to assemble that file is in <a href='/how-to-make-a-gap-insurance-claim'>how to make a GAP claim</a>."
        ]
      },
      { type: "h2", text: "Finance and lease bills do not pause themselves" },
      { type: "p", html: "While the motor and GAP claims are open, the finance or lease agreement is still a contract. <a href='https://www.moneyhelper.org.uk/en/everyday-money/cut-your-car-finance-hire-purchase-and-other-finance-costs'>MoneyHelper</a> explains early settlement on hire purchase, and the cost of ending a lease early. Tell the lender you have a total loss and ask them not to treat a short delay as arrears if you are waiting for the insurer. Arrears that do build are often excluded from the GAP claim. On a PCP, remember the settlement is likely to include the balloon. That structure is in the <a href='/gap-insurance-for-pcp'>PCP guide</a>." },
      { type: "p", html: "Comprehensive insurance is what produces the £21,000 in the example. GAP only adds the £5,400. The split between those jobs is in <a href='/gap-insurance-vs-comprehensive-insurance'>GAP vs comprehensive insurance</a>." }
    ]
  },
  {
    slug: "gap-insurance-mis-selling",
    title: "GAP insurance mis-selling | UK guide",
    h1: "GAP insurance mis-selling",
    card: "A sale that skips the FCA information rules is a complaint. A price you later regret is not automatically the same thing.",
    description: "GAP mis-selling means the sale broke the rules or the policy was not described properly. How to complain to the firm, then the Financial Ombudsman Service, for free.",
    lede: "GAP insurance is mis-sold when the way it was sold breaks the rules, or leaves you with a policy that was not described properly. A price you later wish you had not paid is not, on its own, the same thing. The FCA has still been clear that parts of this market were poor value, and in 2024 it paused sales until firms improved that value. If you have a complaint, you go to the firm first, then the Financial Ombudsman Service. The Ombudsman is free.",
    related: ["fca-rules-on-dealer-gap-insurance", "dealer-vs-online-gap-insurance", "cancelling-gap-insurance-and-refunds", "is-gap-insurance-worth-it"],
    sources: [S.icobsGap, S.fcaPause, S.fcaRestart, S.fos, S.register, S.cp1429],
    faqs: [
      {
        q: "Can I complain after the policy has ended?",
        a: "Time limits apply, and the Financial Ombudsman Service publishes them. Complain to the firm as soon as you realise there is a problem. Do not wait for the policy to finish if you already know the sale was wrong."
      },
      {
        q: "Will a refund include interest?",
        a: "If a complaint is upheld, the firm or the Ombudsman can add interest. There is no single rate this site can quote as yours. The decision in your case sets it."
      },
      {
        q: "Should I pay a claims company?",
        a: "The Financial Ombudsman Service says its service is free and that you do not need to pay a lawyer or a claims management company to use it. A friend or family member can help you. A company that takes a cut of a refund is optional, not required."
      },
      {
        q: "The dealer has closed. Who do I complain to?",
        a: "Complain to the insurer named on the policy schedule, and to the finance firm if they introduced or sold the policy. The Financial Services Register lists authorised firms and is the FCA's source for their contact details."
      }
    ],
    blocks: [
      { type: "h2", text: "What a poor sale looks like" },
      { type: "p", html: "The rules a dealer sale has to follow are in <a href='https://www.handbook.fca.org.uk/handbook/ICOBS/6A/1.html'>ICOBS 6A.1</a>, and they are explained with a calendar example in the <a href='/fca-rules-on-dealer-gap-insurance'>FCA rules guide</a>. A sale is in trouble when those rules were skipped:" },
      { type: "ul", items: [
        "You were told the policy was compulsory, or it was added without a clear choice. The firm has to tell you whether it is optional or compulsory. A separate FCA rule, ICOBS 6A.2, says you must actively choose an optional product. Silence, or a box that was already ticked, is not a choice.",
        "The premium was not shown separately from the car or the finance.",
        "You were not told that other distributors sell GAP. The FCA's <a href='https://www.fca.org.uk/publication/consultation/cp14-29.pdf'>competition remedy</a> exists because so many add-on buyers never compared.",
        "The dealer concluded the sale before two clear days had passed, and you did not start an earlier sale yourself under the exception.",
        "You were sold finance GAP when you paid cash and had no finance to clear, and nobody explained that.",
        "You already had new-car replacement on your motor policy, and the sale was presented as the only way to replace the car. What you were told, and what you needed, is fact-specific. The Ombudsman looks at that evidence."
      ]},
      { type: "h2", text: "Poor value is not automatically a personal refund" },
      { type: "p", html: "In February 2024 the FCA said only <a href='https://www.fca.org.uk/news/press-releases/gap-insurers-agree-suspend-sales-following-fca-concerns-over-fair-value'>6% of GAP premiums were paid out in claims</a>, and that it had seen firms paying 70% of premium value in commission. Firms paused sales. In May 2024 some were <a href='https://www.fca.org.uk/news/press-releases/firms-recommence-gap-insurance-sales-following-fca-action'>allowed to restart</a> with lower commission. Those are market findings about fair value. They do not mean every customer who paid a high price is due their premium back. They do mean price and commission were serious enough for the regulator to stop sales until firms could justify them." },
      { type: "p", html: "A dealer policy that costs more than an online one, after you were told it was optional, given the information, and given the wait, is not mis-selling just because you later find a cheaper quote. The <a href='/dealer-vs-online-gap-insurance'>dealer vs online guide</a> is about that comparison. Use the cancellation right if you are still in time. The <a href='/cancelling-gap-insurance-and-refunds'>refund rules</a> and a mis-selling complaint are different tools." },
      { type: "h2", text: "An example of a complaint, and one that is weaker" },
      {
        type: "example",
        title: "£790 added on collection day, and a £400 policy that was properly offered",
        paragraphs: [
          "On collection day a salesperson says the finance will not go through unless GAP is taken. The £790 premium is folded into the monthly payment. Nothing in durable form says the cover is optional, names a separate premium, or says that other sellers exist. The contract is signed that afternoon. That pattern collides with the prescribed information, the deferral, and the need for an active choice. The customer asks for the £790 back. Whether the complaint is upheld depends on the documents and what was said. This is an illustration of a complaint, not a decision about a real firm.",
          "A different customer is given the information on a Monday, waits until Thursday, and chooses a £400 dealer policy over a £220 online policy because they want it handled in the showroom. They understood it was optional. The fact that a cheaper policy existed does not, by itself, make that sale a mis-sale. The £400 and £220 are example prices, not a survey."
        ]
      },
      { type: "h2", text: "How to complain" },
      { type: "p", html: "The <a href='https://www.financial-ombudsman.org.uk/consumers/how-to-complain'>Financial Ombudsman Service</a> sets the order out:" },
      { type: "ol", items: [
        "Complain to the firm that sold the policy, or to the insurer on the schedule. Say what happened and how you want it put right. Keep emails, letters and a note of calls.",
        "For most insurance complaints the firm has up to eight weeks to investigate. It should send a final response that tells you the outcome and how to go further.",
        "If you are unhappy with that response, or the eight weeks pass without one, you can bring the complaint to the Ombudsman. Do this within six months of the date on the final response. You do not need a claims company."
      ]},
      { type: "p", html: "Look the firm up on the <a href='https://register.fca.org.uk/'>Financial Services Register</a> if you are unsure who is responsible. If you are still deciding whether you want the policy at all, and you are inside 14 days, cancelling may be quicker than a complaint. If the problem is that you were never given a fair chance to say no, complain." }
    ]
  }
];
