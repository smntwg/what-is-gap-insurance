import { S } from "./sources.mjs";

export const pages2 = [
  {
    slug: "gap-insurance-for-used-cars",
    title: "GAP insurance for used cars | UK guide",
    h1: "GAP insurance for used cars",
    card: "A used car can still leave a gap if you overpaid or you owe more than the insurer will pay.",
    description: "GAP insurance on a used car is worth measuring when finance or the price you paid sits above market value. Two worked UK examples show both sides.",
    lede: "GAP insurance on a used car is worth buying when you paid more than the car will be worth at a total loss, or you still owe more on finance than the insurer will pay. It is much less useful when you bought close to the going price and you own the car outright. Used cars usually fall in value more slowly than a brand new one, but a financed used car can still leave a shortfall in the first year or two.",
    related: ["gap-insurance-for-cash-buyers", "can-i-buy-gap-insurance-after-buying-the-car", "is-gap-insurance-worth-it", "return-to-invoice-vs-vehicle-replacement-vs-agreed-value", "gap-insurance-for-vans", "gap-insurance-for-motorbikes"],
    sources: [S.abi, S.govWriteoff, S.moneyEnd, S.cab],
    faqs: [
      {
        q: "Is return to invoice available on a used car?",
        a: "Often yes, if you have a dealer invoice and the car's age and mileage are inside that provider's limits. A private sale receipt may not meet the policy definition of an invoice. Check before you assume the price you paid a neighbour will be the insured figure."
      },
      {
        q: "Do used cars depreciate enough to matter?",
        a: "They can, if you paid over the odds or financed most of the price. They often do not, if you bought at the market price for cash. There is no single percentage that applies to every used car, so use your own invoice and a cautious value."
      },
      {
        q: "Will GAP pay if I bought from a private seller?",
        a: "Only if that policy accepts private sales. Many are written for purchases from VAT-registered dealers. If private sales are excluded, the policy will not pay just because you have a bank transfer as proof of the price."
      },
      {
        q: "Does a warranty replace GAP?",
        a: "No. A warranty contributes to mechanical repairs. GAP pays a shortfall after a total loss or theft settlement. A car that is repaired under a warranty is not a GAP claim."
      }
    ],
    blocks: [
      { type: "h2", text: "Two used cars, two different answers" },
      { type: "p", html: "The <a href='https://www.abi.org.uk/policy-and-guidance/general-insurance/personal-insurance/motor-insurance'>ABI</a> makes the general point that any vehicle depreciates, and that a motor insurer pays market value rather than the price you paid. On a used car the gap between those figures is often narrower than on a new one, because the steepest fall has already happened. Finance changes the picture, because the settlement figure can still sit above market value. <a href='https://www.moneyhelper.org.uk/en/everyday-money/cut-your-car-finance-hire-purchase-and-other-finance-costs'>MoneyHelper</a> explains how an early HP settlement is calculated if you need the lender's number." },
      {
        type: "example",
        title: "£1,700 on finance, and a £500 gap that may not be worth insuring",
        paragraphs: [
          "Adeel buys a four-year-old SUV from a dealer in Leicester for £18,450. He pays a £500 deposit and finances the rest on hire purchase. Ten months later it is written off. The market value is £15,200. The settlement figure is £16,900. The finance shortfall is £1,700. Against the invoice, the market value is £3,250 below the price he paid. A finance policy looks at the £1,700. A return-to-invoice policy looks at the £3,250. He does not get both.",
          "The same model, bought privately for £14,900 because that matched similar adverts, is assessed at £14,400 eight months later. There is no finance. The gap to the price paid is £500. A policy that cost more than a few hundred pounds would be an expensive way to move a £500 risk. Adeel in the first case has a clearer reason to look at cover than this cash buyer does."
        ]
      },
      { type: "h2", text: "Age, mileage and where you bought it" },
      { type: "p", html: "Providers set their own maximum age and mileage at the start of the policy. There is no single UK cutoff in FCA rules. A car that one provider refuses may be eligible with another, and a car outside every provider's limits is simply not a GAP candidate. Ask before you pay a deposit to a dealer on the assumption that cover will be available next week." },
      { type: "p", html: "A previous insurance write-off can also be excluded. <a href='https://www.gov.uk/government/publications/buying-repaired-written-off-vehicles-a-consumer-guide/buying-repaired-written-off-vehicles-a-consumer-guide'>GOV.UK's guide to repaired written-off vehicles</a> explains categories A, B, S and N, and says a previously written-off vehicle can cost more to insure. Tell the motor insurer. A GAP provider may refuse category S or N cars entirely. That history is covered again in the <a href='/gap-insurance-when-your-car-is-stolen-or-written-off'>stolen and written-off guide</a>." },
      { type: "h2", text: "Invoice, finance, or neither" },
      { type: "p", html: "If you own the car outright and the price you paid is close to market value, <a href='/gap-insurance-for-cash-buyers'>cash buyers</a> often decline GAP for good reason. If the finance balance is the only figure above market value, finance cover matches the debt and return to invoice may be paying for a larger number than you need. If you bought well above the going rate because the car was rare or you were in a hurry, return to invoice is the product that looks at that overpayment, provided the policy accepts the invoice." },
      { type: "h2", text: "Buying cover after you have the car" },
      { type: "p", html: "Used-car buyers often want a few days to think, which is exactly what the dealer deferral is for. Providers then set their own window for a later purchase. There is no law that says 180 days, or any other single number. The conditions are in <a href='/can-i-buy-gap-insurance-after-buying-the-car'>can I buy GAP insurance after buying the car</a>." }
    ]
  },
  {
    slug: "can-i-buy-gap-insurance-after-buying-the-car",
    title: "Can I buy GAP insurance after buying the car?",
    h1: "Can I buy GAP insurance after buying the car?",
    card: "Usually yes, inside that provider's time limit, and only before a loss. There is no single legal deadline.",
    description: "You can often buy GAP insurance after you take the car, inside the provider's own time limit. The FCA deferral slows a dealer sale. It is not a deadline to buy elsewhere.",
    lede: "Yes. You can usually buy GAP insurance after you have taken the car, but only inside the time limit set by that provider, and only before a loss. There is no UK law that says you must buy it on the day, and there is no single number of days that every provider uses. The FCA deferral slows a dealer sale down. It is not a deadline to buy from someone else.",
    related: ["dealer-vs-online-gap-insurance", "fca-rules-on-dealer-gap-insurance", "how-to-make-a-gap-insurance-claim", "cancelling-gap-insurance-and-refunds"],
    sources: [S.icobsGap, S.cp1429, S.eval2018, S.register],
    faqs: [
      {
        q: "Will my finance be cancelled if I do not buy the dealer's GAP?",
        a: "It should not. GAP sold with a car has to be described as optional or compulsory. If it is a condition of the finance, that should be in the credit agreement, not only in a sentence at the desk. Ask for the premium as its own figure either way."
      },
      {
        q: "Can I add GAP after a write-off has already been declared?",
        a: "No. Policies are written on the basis that the vehicle has not already been written off, stolen or damaged in the incident you want covered. Buying after a loss is not a claim."
      },
      {
        q: "Does the cooling-off period let me buy, claim and cancel?",
        a: "No. A cancellation right and a claim for a known loss are different things. Insurers will refuse a claim for an incident that happened before the policy started, and a cancellation does not create cover for that incident."
      },
      {
        q: "What documents will a later purchase need?",
        a: "Expect the purchase invoice or hire agreement, proof of the vehicle such as the V5C, the date you took delivery, and details of a comprehensive motor policy. A provider can also ask about mileage and any existing damage."
      }
    ],
    blocks: [
      { type: "h2", text: "The dealer wait is not your deadline" },
      { type: "p", html: "If a firm sells GAP in connection with the vehicle, <a href='https://www.handbook.fca.org.uk/handbook/ICOBS/6A/1.html'>ICOBS 6A.1</a> says it cannot conclude that contract until at least two clear days after it gave you the prescribed information, unless you yourself ask to go ahead from the next day and confirm you understand the usual restriction. The FCA introduced that pause, from 1 September 2015, so you could decide whether you needed the product and shop elsewhere. Its <a href='https://www.fca.org.uk/publication/corporate/gap-insurance-intervention-evaluation-paper.pdf'>2018 evaluation</a> found that some people, given the time, decided not to buy at all." },
      { type: "p", html: "A standalone insurer you contact the following week is a different sale. The two-clear-day rule is not a ban on that insurer offering you a policy, and it is not a promise that they will. Their own acceptance rules apply. The detail of the dealer rule is in the <a href='/fca-rules-on-dealer-gap-insurance'>FCA rules guide</a>, and the price reason for using the pause is in <a href='/dealer-vs-online-gap-insurance'>dealer vs online</a>." },
      { type: "h2", text: "Each provider sets its own window" },
      { type: "p", html: "Some providers will quote only if you bought the car within the last few weeks. Others will still quote a few months after delivery. You will see numbers such as 30, 90 or 180 days in individual policy conditions. None of those is a legal limit, and this site is not going to pretend there is a standard window. Read the assumption on the quote. If the car is already outside it, another provider may still quote, or nobody will." },
      { type: "p", html: "You will also be asked to confirm that the car has not already been in an incident you might claim for. Cover is not backdated. That is ordinary insurance practice, not a special GAP penalty." },
      { type: "h2", text: "Two timings" },
      {
        type: "example",
        title: "A purchase nine days later, and a request 14 months later",
        paragraphs: [
          "James collects a car in Cardiff on 2 March. The dealer gives him the GAP information that day and offers to add £540 to the invoice. He says no. On 11 March he buys a standalone policy with a £20,000 claim limit for £250. Both prices are an illustration, not a price survey. The sequence is a normal use of the deferral: he heard the offer, he waited, he bought elsewhere.",
          "Ruth bought her car 14 months ago. After a car-park scrape she asks for GAP, hoping to cover a future write-off and, quietly, the scratch. The scratch is already outside any new policy. Many providers will also decline because their purchase window closed months ago. She can ask. She cannot assume either that the window is still open or that the scrape becomes a claim."
        ]
      },
      { type: "h2", text: "What to have ready" },
      { type: "ul", items: [
        "The date you took delivery, which may differ from the date you ordered the car.",
        "The invoice or hire agreement, and whether any extras were included in the price you want insured.",
        "A comprehensive motor policy in force. GAP providers commonly refuse to start cover if you only have third party.",
        "The finance or lease settlement basis, so you buy the right type rather than the first name you recognise.",
        "Honesty about modifications, a previous write-off category, and existing damage. A wrong answer here is a claims problem later, not a shortcut."
      ]},
      { type: "p", html: "If you buy and then change your mind, the cancellation rules are separate. They are covered in <a href='/cancelling-gap-insurance-and-refunds'>cancelling GAP insurance and refunds</a>." }
    ]
  },
  {
    slug: "how-to-make-a-gap-insurance-claim",
    title: "How to make a GAP insurance claim | UK guide",
    h1: "How to make a GAP insurance claim",
    card: "The motor insurer settles first. Then you claim the shortfall the GAP wording actually describes.",
    description: "A GAP claim starts after the motor insurer agrees a total loss or unrecovered theft. See the document order and a worked UK calculation, including excess.",
    lede: "A GAP claim starts only after your motor insurer has agreed a total loss, or agreed a value for an unrecovered theft. You then get the finance or lease figure in writing, and you ask the GAP insurer to pay the difference described in your policy, up to the claim limit. There is no separate emergency payout that arrives before the motor settlement.",
    related: ["gap-insurance-when-your-car-is-stolen-or-written-off", "what-gap-insurance-does-not-cover", "cancelling-gap-insurance-and-refunds", "gap-insurance-vs-comprehensive-insurance"],
    sources: [S.cab, S.abi, S.fos, S.moneyEnd],
    faqs: [
      {
        q: "Can I claim on GAP if the motor insurer refuses the claim?",
        a: "Almost never. GAP tops up a motor settlement. If the motor claim is declined, there is no market-value payout to top up. Fixing the motor dispute, or complaining about it, comes before a GAP payment."
      },
      {
        q: "How long does a GAP claim take?",
        a: "The GAP insurer usually waits for the motor settlement letter and the finance figure. There is no FCA rule that a GAP claim must be paid within a set number of days. Keep the finance company informed so arrears do not build while the two insurers write to each other."
      },
      {
        q: "Who is paid?",
        a: "The finance or lease company is commonly paid first. Anything above what you owe is paid as the policy sets out, often to you. Get the split in writing so you do not spend money that was never coming to your account."
      },
      {
        q: "What if I disagree with the GAP offer?",
        a: "Complain to the GAP insurer first and ask for the calculation. If you are still unhappy after a final response, or after eight weeks, you can go to the Financial Ombudsman Service. The same path is set out on the mis-selling page, and it applies to claim disputes as well as sales disputes."
      }
    ],
    blocks: [
      { type: "h2", text: "Do these things in this order" },
      { type: "ol", items: [
        "Deal with safety first. If the car was stolen, report it to the police and keep the crime reference number.",
        "Claim on the comprehensive motor policy, and tell them about any finance or lease. The insurer's offer on a write-off should be market value. <a href='https://www.citizensadvice.org.uk/consumer/insurance/types-of-insurance/vehicle-insurance/vehicle-insurance-making-a-claim-if-you-re-in-an-accident/'>Citizens Advice</a> says you can challenge a low offer with prices of similar cars, or with a valuation from an independent engineer if you choose to pay for one.",
        "Read the GAP conditions before you accept a motor offer you think is too low. Some policies let the GAP insurer negotiate the motor value. Some calculate your shortfall from the offer you accept. Accepting a low figure can shrink the GAP claim, or it can be what the wording tells you to do. Know which.",
        "Ask the lender or leasing company for a settlement figure or early termination figure in writing, close to the date of the motor offer. <a href='https://www.moneyhelper.org.uk/en/everyday-money/cut-your-car-finance-hire-purchase-and-other-finance-costs'>MoneyHelper</a> explains that an HP settlement is not simply the payments you have left.",
        "Tell the GAP insurer inside the time limit printed in the policy. There is no single statutory number of days. Missing the policy limit is a common reason for a dispute, so diary it.",
        "Send what they ask for: the motor settlement letter, the motor schedule, the purchase invoice or hire agreement, the finance agreement, the V5C, the crime reference if it was stolen, and photographs if they want them.",
        "Check the payment goes to the right place, and keep paying the finance until the lender confirms the account is clear."
      ]},
      { type: "h2", text: "A worked calculation, including the excess" },
      {
        type: "example",
        title: "£3,750 shortfall, and a policy that contributes £250 towards the excess",
        paragraphs: [
          "A motor insurer offers £19,400 for a written-off family car in Sheffield. That offer is after a £450 policy excess, so the market value they assessed was £19,850 and the customer is treated as standing £450 of it. The hire purchase settlement figure is £23,150.",
          "Settlement £23,150 minus the £19,400 actually paid to the lender is £3,750. The GAP policy in this illustration contributes up to £250 towards the motor excess. The claim is £4,000, if the claim limit allows and the excess clause works on these facts. If the policy does not mention the excess, the claim is £3,750 and the £450 stays with the customer.",
          "If £900 of the settlement is arrears, and arrears are excluded, the eligible claim falls by £900. Exclusions of that sort are listed in <a href='/what-gap-insurance-does-not-cover'>what GAP insurance does not cover</a>."
        ]
      },
      { type: "h2", text: "Write-off and unrecovered theft are not the same paperwork" },
      { type: "p", html: "The <a href='https://www.abi.org.uk/policy-and-guidance/general-insurance/personal-insurance/motor-insurance'>ABI</a> says a stolen vehicle that is recovered beyond repair can be a write-off, but a vehicle that is not recovered is not declared a write-off. The insurer agrees a valuation instead. Your GAP claim can follow either settlement if theft and total loss are both insured events in the policy. The categories, and when a repair means there is no GAP claim at all, are in the <a href='/gap-insurance-when-your-car-is-stolen-or-written-off'>stolen or written-off guide</a>." },
      { type: "h2", text: "If the offer looks wrong" },
      { type: "p", html: "Ask both insurers for the arithmetic in writing: market value, excess, salvage deduction if you kept the car, finance figure, excluded negative equity, and claim limit. Then complain to the firm whose figure you dispute. The <a href='https://www.financial-ombudsman.org.uk/consumers/how-to-complain'>Financial Ombudsman Service</a> will want the firm's final response, or for eight weeks to have passed. You do not need a claims company to do that." }
    ]
  },
  {
    slug: "cancelling-gap-insurance-and-refunds",
    title: "Cancelling GAP insurance and refunds | UK guide",
    h1: "Cancelling GAP insurance and refunds",
    card: "Most policies can be cancelled. The 14-day right and a later pro-rata refund are not the same thing.",
    description: "You can cancel GAP insurance. FCA rules give 14 days to cancel most insurance without penalty. After that, the refund is whatever the policy told you.",
    lede: "You can cancel GAP insurance. For most insurance contracts the FCA gives you 14 days to cancel without penalty and without giving a reason. After that, any refund is whatever the policy says. A claim that has already been paid will usually stop a refund. Cancelling GAP does not cancel the car finance, the lease, or the motor policy.",
    related: ["gap-insurance-mis-selling", "fca-rules-on-dealer-gap-insurance", "can-i-buy-gap-insurance-after-buying-the-car", "is-gap-insurance-worth-it"],
    sources: [S.icobsCancel, S.fos, S.icobsGap],
    faqs: [
      {
        q: "Can the dealer refuse a cancellation I make within 14 days?",
        a: "If the statutory right applies, no. Put the cancellation in writing and keep proof of when you sent it. Under ICOBS 7.1, a notice on paper or another durable medium counts if it is dispatched before the deadline, even if the firm reads it afterwards."
      },
      {
        q: "I pay monthly. Do I get the months I have not used?",
        a: "That depends on whether you have one premium spread over the term, or a contract that renews. Ask for the cancellation sum in writing and compare it with the terms you were given at the start."
      },
      {
        q: "I have sold the car. Does GAP cancel itself?",
        a: "Not always. Tell the GAP insurer. If you no longer have an insurable interest in the shortfall, you may not need the policy, but the premium does not stop until the insurer confirms the cancellation and any refund."
      },
      {
        q: "I think the dealer was too expensive. Is that a refund?",
        a: "Inside the cancellation period, cancel if you do not want the policy. Outside it, regretting the price is not automatically a refund. A sale that broke the information or deferral rules is a complaint, which is a different route, set out in the mis-selling guide."
      }
    ],
    blocks: [
      { type: "h2", text: "The 14-day right" },
      { type: "p", html: "<a href='https://www.handbook.fca.org.uk/handbook/ICOBS/7/1.html'>ICOBS 7.1</a> gives a consumer the right to cancel, without penalty and without giving any reason, within 14 days for a general insurance contract or distance contract. The period starts on the day the contract is concluded, or on the day you receive the contractual terms and the required pre-contract information if that is later. There are exceptions. One of them is a general insurance contract that is not a distance contract and is sold by an intermediary who is an unauthorised person, other than an appointed representative. A showroom sale through an authorised firm or its appointed representative is not in that exception. A policy schedule should say how to cancel. Read that wording, because it has to reflect the right that applies to your sale." },
      { type: "p", html: "If you cancel inside the statutory period, ICOBS 7.2 says you can be required to pay for the service already provided, in proportion to the full cover, and the amount must not be a penalty. The firm can only charge an amount it told you about. Many GAP policies go further than the minimum and refund the whole premium if you cancel in the cooling-off period and you have not claimed. That full refund is a term of those policies, not a second FCA rule." },
      { type: "h2", text: "Two refund illustrations" },
      {
        type: "example",
        title: "A full cooling-off refund, then a later pro-rata refund",
        paragraphs: [
          "The premium is £312, paid in one go. You cancel on day 6. You have not claimed. The policy says the cooling-off refund is the full premium. The refund is £312.",
          "A different policy costs £360 for 36 months. You cancel after 12 months, with no claim. The terms say the refund is the unused premium on a pro-rata basis, minus a £20 administration fee that was printed in the terms you received at the start. The unused portion is £240. After the £20 fee the refund is £220.",
          "The £20 is an illustration of a fee the contract disclosed. It is not a standard charge across the market. Inside the 14-day statutory window, a fee that worked as a penalty would sit badly with ICOBS 7.2. After that window, the contract you agreed is what applies."
        ]
      },
      { type: "h2", text: "What does not cancel the policy for you" },
      { type: "ul", items: [
        "Paying off the PCP or HP early. Tell the GAP insurer. You may be due a refund, and you may no longer have a finance shortfall to insure.",
        "Handing a contract hire car back at the scheduled end. The policy does not always end on the hire end date unless the term was matched and the insurer is told.",
        "Cancelling the comprehensive motor policy. GAP is a separate contract. Without a motor settlement it may be useless, but the premium can continue until you cancel it.",
        "A claim that was paid. Expect the terms to say there is no premium refund after a claim. Ask if you are mid-claim and thinking of cancelling. Do not cancel first and hope."
      ]},
      { type: "h2", text: "When cancellation is the wrong tool" },
      { type: "p", html: "If the policy was added without a proper choice, the premium was not shown separately, or the dealer completed the sale without the deferral, you may be looking at a complaint rather than a routine cancellation. How to do that, including the eight weeks the firm generally has, is in <a href='/gap-insurance-mis-selling'>GAP insurance mis-selling</a>. The information the dealer should have given you is in the <a href='/fca-rules-on-dealer-gap-insurance'>FCA rules guide</a>. The <a href='https://www.financial-ombudsman.org.uk/consumers/how-to-complain'>Financial Ombudsman Service</a> is free if the firm's final response is not good enough." }
    ]
  },
  {
    slug: "what-gap-insurance-does-not-cover",
    title: "What GAP insurance does not cover | UK guide",
    h1: "What GAP insurance does not cover",
    card: "Repairs, refused motor claims, arrears and sums above the claim limit are the usual gaps in the cover.",
    description: "GAP insurance does not pay for repairs or a refused motor claim. See what else is commonly excluded, with a worked UK example of negative equity.",
    lede: "GAP insurance pays a defined shortfall after a motor insurer has settled a total loss or an unrecovered theft. It does not pay for repairs. It does not pay when the motor claim is turned down. It does not clear parts of a finance balance the policy has excluded, and it never pays more than its claim limit.",
    related: ["gap-insurance-vs-comprehensive-insurance", "how-to-make-a-gap-insurance-claim", "gap-insurance-when-your-car-is-stolen-or-written-off", "gap-insurance-mis-selling"],
    sources: [S.abi, S.cab, S.moneyPch, S.icobsGap],
    faqs: [
      {
        q: "Does GAP cover my motor excess?",
        a: "Only when the policy says so, and only up to the amount it states. A £450 excess is not automatically added to a GAP claim. If the wording contributes up to £250, the rest stays with you."
      },
      {
        q: "Are belongings in the car covered?",
        a: "No. Phones, tools, child seats and luggage are a motor policy question, often with a low inner limit, or they are not covered at all. GAP is about the vehicle shortfall, not the contents."
      },
      {
        q: "Does GAP replace a warranty or breakdown cover?",
        a: "No. Mechanical failure, servicing and a breakdown on the motorway are outside a GAP policy. If the car is repaired and handed back, there is no GAP payment."
      },
      {
        q: "If my claim limit is £10,000 and the gap is £12,000, do I receive £12,000?",
        a: "No. You receive up to the claim limit. You still owe the rest. A limit below your realistic shortfall is a reason to reject the quote, not a detail to discover at claim time."
      }
    ],
    blocks: [
      { type: "h2", text: "The motor claim has to succeed first" },
      { type: "p", html: "The <a href='https://www.abi.org.uk/policy-and-guidance/general-insurance/personal-insurance/motor-insurance'>ABI</a> is clear that a motor policy does not usually pay for an unauthorised driver, use the policy does not allow, an unroadworthy vehicle, wear and tear, or mechanical breakdown. If the motor insurer refuses the claim for one of those reasons, there is no settlement for GAP to top up. Drink or drug driving, undeclared modifications, and using a private car for hire and reward sit in the same place: they are motor policy problems first." },
      { type: "p", html: "Third party cover does not pay for your own car at all. A GAP policy that requires a comprehensive settlement will not fill that hole. The difference between the two products is set out in <a href='/gap-insurance-vs-comprehensive-insurance'>GAP vs comprehensive insurance</a>." },
      { type: "h2", text: "What a typical wording leaves out" },
      { type: "ul", items: [
        "Repairs. If the insurer fixes the car, GAP pays nothing, even if the repair is expensive.",
        "Any loss that happened before the GAP policy started.",
        "Amounts above the claim limit.",
        "Arrears, missed payments and late fees on the finance or lease.",
        "Negative equity rolled into the agreement from a previous car, where the wording excludes it.",
        "Extras fitted after you bought the policy, unless you declared them and the insurer accepted them.",
        "Excess mileage, fair wear charges and damage charges on a <a href='/gap-insurance-for-leased-cars'>contract hire</a> agreement.",
        "The motor excess, unless the GAP policy includes an excess contribution and your excess is inside that cap.",
        "Racing, track use, and carrying paying passengers, where the policy excludes them."
      ]},
      { type: "h2", text: "A repair, and a finance balance that is not all eligible" },
      {
        type: "example",
        title: "£0 after a repair, then a £3,000 claim rather than £5,400",
        paragraphs: [
          "The repair estimate on a Nottingham car is £4,800. The market value is £15,000. The motor insurer authorises the repair. GAP pays nothing, because there is no total-loss settlement. The driver still has a car, and still has the finance agreement running as before.",
          "A different car is a total loss. The motor insurer pays £14,200. The PCP settlement is £19,600, but £2,400 of that is negative equity brought across from the previous finance, and the GAP policy excludes carried-over negative equity. The claim limit is £10,000. The eligible shortfall is £19,600 minus £2,400 minus £14,200, which is £3,000. The claim is £3,000, not the headline £5,400. The limit would only have bitten if the eligible shortfall had been above £10,000."
        ]
      },
      { type: "h2", text: "Read the exclusions against your own agreement" },
      { type: "p", html: "The exclusions that hurt are the ones that match your paperwork. A cash buyer does not care about an arrears clause. A PCP customer who rolled £2,000 of negative equity into the new agreement should care a great deal. The prescribed information a dealer must give you, under <a href='https://www.handbook.fca.org.uk/handbook/ICOBS/6A/1.html'>ICOBS 6A.1</a>, includes the significant and unusual exclusions and a pointer to where they sit in the policy. If that page was missing, it is relevant both to whether you understood the cover and to a later complaint." },
      { type: "p", html: "When a loss does qualify, the claim order is in <a href='/how-to-make-a-gap-insurance-claim'>how to make a GAP claim</a>. When the car is repaired instead of written off, the categories are in the <a href='/gap-insurance-when-your-car-is-stolen-or-written-off'>stolen or written-off guide</a>." }
    ]
  },
  {
    slug: "gap-insurance-vs-comprehensive-insurance",
    title: "GAP insurance vs comprehensive insurance | UK guide",
    h1: "GAP insurance vs comprehensive insurance",
    card: "Comprehensive pays market value. GAP can top that up. It cannot replace the motor policy.",
    description: "Comprehensive motor insurance pays market value for your car. GAP insurance is an optional top-up after that settlement. See a worked UK split of the two payouts.",
    lede: "Comprehensive motor insurance pays for your own car if it is stolen or written off, usually at market value. GAP insurance does not replace that policy and you cannot drive on GAP alone. It can pay an extra amount after the motor insurer has paid, and only for the shortfall its wording describes. If your motor policy already replaces a new car, GAP may be duplicating a benefit you have for that period.",
    related: ["return-to-invoice-vs-vehicle-replacement-vs-agreed-value", "gap-insurance-when-your-car-is-stolen-or-written-off", "what-gap-insurance-does-not-cover", "is-gap-insurance-worth-it"],
    sources: [S.abi, S.cab, S.govWriteoff],
    faqs: [
      {
        q: "Can I drive with only GAP insurance?",
        a: "No. Motor insurance that covers liability to other people is compulsory. GAP is optional and sits on top of a motor policy. The police and the Motor Insurance Database are interested in the motor policy, not the GAP policy."
      },
      {
        q: "Does fully comprehensive mean new for old for the whole term?",
        a: "No. New-car replacement, where a policy has it, is a specific benefit with a time limit and conditions. It is often the first 12 months, for the first registered keeper, under a mileage cap. It is not a promise that every comprehensive policy replaces the car like for like for three years."
      },
      {
        q: "I have third party, fire and theft. Is that enough for GAP?",
        a: "The ABI says fire and theft cover can pay market value for those events. Many GAP policies still insist the vehicle is insured comprehensively. An at-fault accident is not covered for your own car on third party, fire and theft, so there is no accident payout for GAP to top up. Check the GAP eligibility line before you rely on it."
      },
      {
        q: "Will a GAP claim affect my no claims discount?",
        a: "The motor claim is what usually affects a no claims discount. GAP is a separate contract. Do not assume a GAP claim is invisible to the motor insurer, and do not assume it removes a discount the motor claim has already affected. Read both wordings."
      }
    ],
    blocks: [
      { type: "h2", text: "What comprehensive insurance actually pays" },
      { type: "p", html: "The <a href='https://www.abi.org.uk/policy-and-guidance/general-insurance/personal-insurance/motor-insurance'>ABI</a> describes comprehensive cover as the highest level of motor insurance: injury and property damage you cause, and your own vehicle if it is damaged, stolen or destroyed by fire. For a total loss it says the insurer should cover replacement at current market value if you have comprehensive cover, or third party fire and theft for the events that policy includes. It also says GAP cover, where you have it, pays the difference between the original purchase price and current market value. That sentence matches return to invoice. It does not describe every GAP wording. Finance GAP uses the amount you owe. Contract hire GAP uses the early termination charge." },
      { type: "p", html: "<a href='https://www.citizensadvice.org.uk/consumer/insurance/types-of-insurance/vehicle-insurance/vehicle-insurance-making-a-claim-if-you-re-in-an-accident/'>Citizens Advice</a> says a write-off offer should be the market value at the time, and that you can dispute it with evidence of similar cars for sale. The motor excess is still yours unless a benefit says otherwise. Comprehensive does not mean every loss is paid in full." },
      { type: "h2", text: "Where the two policies meet" },
      { type: "p", html: "The motor insurer decides the insured value and pays it. The GAP insurer looks at the gap between that payment and a second figure in its wording. Agreed value or a new-car replacement benefit changes the motor payment, which changes or removes the gap. Those three figures are compared on one car in the <a href='/return-to-invoice-vs-vehicle-replacement-vs-agreed-value'>return to invoice, replacement and agreed value guide</a>." },
      { type: "p", html: "New-car replacement on a comprehensive policy, where it exists, can make vehicle replacement GAP unnecessary for that limited period. It does nothing for a used car, and it ends when the benefit period ends. After that you are back to market value, which is when a GAP policy bought for three years may start doing work the motor policy no longer does." },
      { type: "h2", text: "One settlement, split between the two policies" },
      {
        type: "example",
        title: "Market value £16,500, invoice £23,000, HP settlement £18,200",
        paragraphs: [
          "A comprehensive insurer assesses a written-off car in Brighton at £16,500 and pays that sum, before thinking about the £400 excess, which the policy collects from the customer separately. The purchase invoice was £23,000. The hire purchase settlement is £18,200.",
          "Comprehensive pays the £16,500. It does not pay the £6,500 fall from the invoice. Finance GAP, topping up to the settlement, pays £1,700 if £16,500 has gone to the lender. Return to invoice pays £6,500 if it tops up to £23,000. The customer has one GAP policy, so they receive the motor payout plus one of those top-ups, not both.",
          "If a new-car replacement benefit had applied, the motor insurer would have been dealing with a new car rather than £16,500, and the GAP arithmetic would have been done again from that better motor outcome. It is not added on top of a market-value cheque as well."
        ]
      },
      { type: "h2", text: "What comprehensive will not hand to GAP" },
      { type: "p", html: "If the motor claim is refused, GAP has nothing to top up. If the car is repaired, GAP has nothing to top up. If you keep the salvage, the motor payout is reduced by the salvage value, and the GAP wording decides whether it uses the gross value or the net payment. <a href='https://www.gov.uk/government/publications/buying-repaired-written-off-vehicles-a-consumer-guide/buying-repaired-written-off-vehicles-a-consumer-guide'>GOV.UK</a> explains which written-off categories can go back on the road. The practical claim consequences are in <a href='/gap-insurance-when-your-car-is-stolen-or-written-off'>when your car is stolen or written off</a>, and the exclusion list is in <a href='/what-gap-insurance-does-not-cover'>what GAP does not cover</a>." }
    ]
  }
];
