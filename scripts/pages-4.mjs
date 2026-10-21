import { S, S2 } from "./sources.mjs";

const aeRows = [
  ["Moneymaxim", "£107.35", "£500", "5.0"],
  ["Total Loss GAP", "£118.98", "£250", "4.0"],
  ["Direct Gap", "£119.00", "£1,000", "4.5"],
  ["Tidy Alloys", "£135.00", "£350", "3.5"],
  ["MotorEasy", "£137.12", "£500", "4.0"],
  ["GAPinsurance.co.uk", "£161.40", "£750", "2.5"],
  ["ALA", "£193.11", "£250", "2.0"],
  ["GAPInsure", "£205.44", "£500", "2.0"]
];

export const pages4 = [
  {
    slug: "how-much-is-gap-insurance",
    date: "2026-10-21",
    title: "How much is GAP insurance? UK prices 2026",
    h1: "How much is GAP insurance?",
    card: "Published UK prices, the FCA's average premium, and a rough cost calculator.",
    description: "2026 UK online quotes put three years of GAP at about £107 to £205. RAC and MSE say £100 to £300; the FCA's 2022 average was £330. With a rough calculator.",
    lede: "Bought online, three years of GAP insurance on a mainstream car usually costs somewhere between about £100 and £300. In Auto Express's 2026 test, eight online quotes for the same three-year return-to-invoice cover on a nearly new Ford Puma ranged from £107.35 to £205.44. The FCA's figure for the whole market, including dealer sales, was higher: an average premium of £330 in 2022. Your price depends on the car, the claim limit, the length of cover and where you buy it.",
    related: ["best-gap-insurance-uk", "dealer-vs-online-gap-insurance", "is-gap-insurance-worth-it", "ala-gap-insurance"],
    scripts: ["/assets/cost-calc.js"],
    sources: [S2.autoExpress, S2.rac, S2.mse, S2.fcaLetter, S2.fcaFoiPremiums, S2.gapcoDealer, S2.motoreasyCost, S2.alaGap, S.cp1429, S2.ipt],
    faqs: [
      { q: "How much is GAP insurance per month?", a: "Spread over three years, Auto Express's 2026 online quotes of £107.35 to £205.44 work out at roughly £3 to £5.71 a month. The FCA's 2022 market average of £330, over its typical policy length of about 36 months, is about £9.17 a month. Paying by instalments can cost more than paying upfront." },
      { q: "Is GAP insurance cheaper online than at the dealer?", a: "Usually, according to the evidence published so far. The FCA's competition work found add-on GAP sold with a car could be twice as expensive as broadly equivalent standalone cover. One online provider, GAPinsurance.co.uk, says the 280 customers who reported a dealer quote between August 2025 and July 2026 had been quoted £416.90 on average, against its own average premium of £250.47, though the policies were not necessarily identical." },
      { q: "What makes GAP insurance more expensive?", a: "A more expensive car and a higher claim limit, a longer policy, wider cover such as vehicle replacement rather than return to invoice, more excess cover, and buying from the dealer. Insurance sold with some motor vehicles can also carry the higher 20% rate of Insurance Premium Tax rather than the standard 12%." },
      { q: "Is the FCA's £330 average a fair price to aim for?", a: "It is a market average for 2022, across standalone and add-on policies, before the FCA's 2024 intervention pushed firms to improve value. It is a useful upper reference point, not a target. Like-for-like online quotes published in 2026 were well below it." },
      { q: "Do I pay GAP insurance every year?", a: "Most policies are bought once for a fixed term, often two to four years, and paid upfront or in instalments. The FCA has said the average GAP policy lasts around 36 months." }
    ],
    blocks: [
      { type: "h2", text: "What published prices show" },
      { type: "p", html: "No single figure is a quote for your car, so the table below sets out every published price we could check, and what each one actually measured. All were read on 21 October 2026." },
      { type: "table", stack: true, headers: ["Source", "What was priced", "Price"], rows: [
        ["<a href='https://www.autoexpress.co.uk/product-group-tests/355158/best-gap-insurance'>Auto Express, Best GAP insurance 2026</a>", "Eight online providers, same return-to-invoice cover, nearly new Ford Puma on hire purchase, £15,000 maximum claim, three years", "£107.35 to £205.44"],
        ["<a href='https://www.rac.co.uk/drive/advice/insurance/what-is-gap-insurance/'>RAC Drive</a>", "Typical cost", "£100 to £300 for three years"],
        ["<a href='https://www.moneysavingexpert.com/insurance/car-insurance/gap-insurance/'>MoneySavingExpert</a> (updated 21 September 2026)", "Typical standalone price", "£100 to £300 for three years"],
        ["<a href='https://www.ala.co.uk/gap-insurance'>ALA</a> (a GAP broker)", "Its own guide to typical prices", "Around £100 to £300 for multi-year cover"],
        ["<a href='https://www.fca.org.uk/publication/fca/foi11746-annex-b.pdf'>FCA value measures data, 2022</a>", "Average premium paid across all GAP written, standalone and dealer add-on", "£330 average"],
        ["<a href='https://gapinsurance.co.uk/blog/2026/08/28/buying-a-76-plate-car-compare-dealer-gap-insurance/'>GAPinsurance.co.uk</a> (a GAP provider)", "Dealer quotes reported by 280 of its customers, August 2025 to July 2026", "£416.90 average dealer quote, against £250.47 for its own policies"]
      ]},
      { type: "p", html: "One source disagrees on the period. <a href='https://www.motoreasy.com/magazine/677/How-much-does-Gap-Insurance-cost'>MotorEasy's January 2024 guide</a> says prices usually fall between £100 and £300 annually. The RAC, MoneySavingExpert and ALA all give a similar range for three years or multi-year cover, and the 2026 Auto Express quotes are for three years, so the three-year reading is the better supported one." },
      { type: "h2", text: "Like-for-like online quotes from 2026" },
      { type: "p", html: "Auto Express asked eight online providers to price the same cover: return to invoice on a nearly new Ford Puma bought on hire purchase, with a £15,000 maximum claim for three years. These are its published figures. The dearest quote is about 91% more than the cheapest for cover that, on paper, does the same job." },
      { type: "table", stack: true, headers: ["Provider (as tested)", "Three-year premium", "Excess cover included"], rows: aeRows.map((row) => [row[0], row[1], row[2]]) },
      { type: "p", html: "Auto Express also noted what paying in instalments costs. Direct Gap's price of around £119 rose to £144.53 when paid over ten months, and ALA's £193.11 rose to £218.10 over ten months. For MotorEasy (£137.12), Auto Express said finance over 12 months costs just four pence more overall. Your own quote will differ with the car, the claim limit and the term." },
      { type: "h2", text: "Rough cost calculator" },
      { type: "raw", html: `<div class="calc" id="gap-cost-calc">
  <p class="calc-flag">Rough guide only. This is not a quote.</p>
  <form class="calc-form" novalidate>
    <div class="calc-field">
      <label for="gc-years">Length of cover</label>
      <select id="gc-years">
        <option value="1">1 year</option>
        <option value="2">2 years</option>
        <option value="3" selected>3 years</option>
        <option value="4">4 years</option>
        <option value="5">5 years</option>
      </select>
    </div>
    <div class="calc-field">
      <label for="gc-quote">A quote you have been given (optional)</label>
      <div class="calc-money"><span aria-hidden="true">£</span><input id="gc-quote" type="number" inputmode="decimal" min="0" step="0.01" placeholder="e.g. 250"></div>
      <p class="calc-hint">The total for the whole policy, not the monthly figure.</p>
    </div>
  </form>
  <div class="calc-out" id="gc-out" aria-live="polite"></div>
  <p class="note">How this works: the guide range scales the published three-year range of £100 to £300 (RAC and MoneySavingExpert) in a straight line to the length you pick. Real prices do not scale exactly like that, and they depend on the car, the claim limit, the cover type and the provider. The £330 reference is the FCA's 2022 average premium across all GAP sold, which was typically about 36 months of cover.</p>
</div>` },
      { type: "h2", text: "Why the same cover costs different amounts" },
      { type: "ul", items: [
        "<strong>The car and the claim limit.</strong> A dearer car can leave a bigger shortfall, so the maximum claim and the price go up.",
        "<strong>The type of cover.</strong> Return to invoice, finance GAP, contract hire GAP and vehicle replacement pay out on different figures. <a href='/return-to-invoice-vs-vehicle-replacement-vs-agreed-value'>The cover types are compared here</a>.",
        "<strong>The length of the policy.</strong> The FCA says the average GAP policy runs around 36 months. Two to four years is common.",
        "<strong>Extras.</strong> Excess cover varied from £250 to £1,000 in the Auto Express test, and some providers add hire car contributions.",
        "<strong>Where you buy.</strong> The FCA found add-on GAP sold with a car could be <a href='https://www.fca.org.uk/publication/consultation/cp14-29.pdf'>twice as expensive as broadly equivalent standalone cover</a>. In 2023 it told GAP insurers that commission could be in excess of 70p for every £1 of premium.",
        "<strong>Tax.</strong> <a href='https://www.gov.uk/guidance/insurance-premium-tax'>Insurance Premium Tax</a> is 12% at the standard rate, but a higher 20% rate applies to certain insurance sold with some motor vehicles.",
        "<strong>How you pay.</strong> Instalments can cost more than paying upfront."
      ]},
      { type: "h2", text: "What that works out at per month" },
      { type: "p", html: "These are our own divisions of the published figures, so you can compare a monthly instalment offer. The 2026 Auto Express quotes, spread over 36 months, come to about £2.98 to £5.71 a month. The RAC and MSE range of £100 to £300 over three years is about £2.78 to £8.33 a month. The FCA's 2022 average of £330 over about 36 months is about £9.17 a month. If a monthly figure you are offered is well above these, ask for the total price and compare it." },
      { type: "example", title: "A dealer quote against an online quote", paragraphs: [
        "Priya is buying a £19,000 car on finance. The dealer offers three years of GAP for £420, which would be added to the finance. She asks for the policy details in writing and, during the two-day wait the dealer has to allow, gets two online quotes for return to invoice with the same £19,000 claim limit: £165 and £190.",
        "The cheaper online policy saves her £255, before any interest she would have paid on the dealer premium. She checks that the cover type, claim limit, excess cover and claim time limit match before choosing, because a cheaper policy that pays out on a lower figure is not a saving."
      ]},
      { type: "h2", text: "How to get a fair price" },
      { type: "ol", items: [
        "Work out what you need covered: the invoice price, the finance settlement, the lease charges or a brand new replacement.",
        "Ask any dealer for the GAP price and documents in writing. The <a href='/fca-rules-on-dealer-gap-insurance'>FCA's deferral rules</a> mean it cannot complete the sale straight away.",
        "Get at least two standalone quotes for the same cover type, claim limit and term.",
        "Compare the excess cover, eligibility limits and claim time limit, not just the price.",
        "Check the provider on the <a href='https://register.fca.org.uk/'>FCA register</a> and read the policy before you pay. You normally have <a href='/cancelling-gap-insurance-and-refunds'>14 days to cancel</a>."
      ]}
    ]
  },
  {
    slug: "best-gap-insurance-uk",
    date: "2026-10-21",
    title: "Best GAP insurance UK: how to compare policies",
    h1: "Best GAP insurance in the UK",
    card: "What published tests found, and the checks that decide which policy is best for your car.",
    description: "There is no single best GAP policy. See the 2026 Auto Express test results as published and what to compare: cover type, claim limit, excess cover, eligibility.",
    lede: "The best GAP insurance is the cheapest policy that pays out on the figure you would actually be short, for a car the policy accepts. That depends on whether you need invoice, finance, lease or replacement cover, and on the claim limit. This page does not award its own ratings. It sets out what a published like-for-like test found, then the checks that decide which policy fits you.",
    related: ["how-much-is-gap-insurance", "return-to-invoice-vs-vehicle-replacement-vs-agreed-value", "ala-gap-insurance", "what-gap-insurance-does-not-cover"],
    sources: [S2.autoExpress, S2.mse, S2.rac, S2.alaGap, S.fcaRestart, S.register, S.icobsGap],
    faqs: [
      { q: "Which is the best GAP insurance provider?", a: "There is no single answer, because policies pay out on different figures and accept different cars. In Auto Express's 2026 test of eight online providers, Moneymaxim was named Best Buy for the lowest quote and an easy site, Direct Gap was suggested for higher excess cover, and MotorEasy for paying monthly or bundling. Those are Auto Express's verdicts on one car and one cover type." },
      { q: "Is dealer GAP insurance ever the best option?", a: "It can be if the price and cover match or beat standalone quotes, but the evidence is that dealer add-on GAP has often cost more. Ask for the details in writing and compare before you agree." },
      { q: "What should I check before buying GAP insurance?", a: "The cover type, the maximum claim, the policy length, how much of your motor excess it pays, the age, mileage and value limits, the time limit for buying and for claiming, who underwrites it, and the cancellation terms." },
      { q: "Does the cheapest GAP policy pay out less?", a: "Not necessarily, but it can if the claim limit is lower, the cover type is narrower or the excess cover is smaller. Compare like with like before treating the lowest price as the best deal." }
    ],
    blocks: [
      { type: "h2", text: "What the 2026 Auto Express test found" },
      { type: "p", html: "<a href='https://www.autoexpress.co.uk/product-group-tests/355158/best-gap-insurance'>Auto Express</a> priced the same return-to-invoice cover from eight online providers: a nearly new Ford Puma bought on hire purchase, a £15,000 maximum claim, three years. It also judged how easy each site was, how clear the information was, and what extras came with the policy. The ratings below are Auto Express's own, out of five, reproduced as published. They are not ours." },
      { type: "table", stack: true, headers: ["Provider", "Three-year premium", "Excess cover", "Auto Express rating"], rows: aeRows.map((row) => [row[0], row[1], row[2], `${row[3]} stars`]) },
      { type: "p", html: "Auto Express's verdict: Moneymaxim took its Best Buy, with the lowest quote and a simple site. For higher excess cover it suggested Direct Gap, and for drivers who want to pay monthly or bundle GAP with other products, MotorEasy. That is one test on one car. A different car, claim limit or cover type can change the order." },
      { type: "h2", text: "Start with the type of cover you need" },
      { type: "table", stack: true, headers: ["Your situation", "Cover that usually fits", "Why"], rows: [
        ["Bought outright, new or nearly new", "Return to invoice", "Pays the difference between the motor insurer's market value and what you paid. Finance GAP has nothing to clear."],
        ["PCP or hire purchase", "Finance GAP, or a combined invoice and finance policy", "The settlement figure on the agreement can be more than the car is worth. See <a href='/gap-insurance-for-pcp'>PCP</a> and <a href='/gap-insurance-for-hp'>HP</a>."],
        ["Contract hire or lease", "Contract hire GAP", "Covers what you would still owe the leasing company after a total loss. See <a href='/gap-insurance-for-leased-cars'>leased cars</a>."],
        ["Want the same new car again", "Vehicle replacement", "Pays towards a brand new equivalent at the price on the day of the claim. Usually the dearest type."]
      ]},
      { type: "h2", text: "The checks that decide the best policy" },
      { type: "ul", items: [
        "<strong>Maximum claim.</strong> The policy cannot pay more than its limit. Check it against the shortfall you could face, not an average.",
        "<strong>Excess cover.</strong> In the Auto Express test this ranged from £250 to £1,000.",
        "<strong>Eligibility.</strong> Providers set limits on vehicle age, mileage, value and how long ago you bought the car. ALA, for example, says its Back to Invoice Plus cover is for cars up to 10 years old bought within the last 180 days.",
        "<strong>How the payout is calculated.</strong> Some policies pay the higher of the invoice price or the finance settlement; others pay only one. Read the claim calculation, not just the policy name.",
        "<strong>Claim time limits.</strong> How long you have after the total loss to make a GAP claim.",
        "<strong>Who underwrites it.</strong> The provider should be on the <a href='https://register.fca.org.uk/'>FCA register</a>, and the documents should name the insurer.",
        "<strong>Cancelling and transferring.</strong> Your <a href='/cancelling-gap-insurance-and-refunds'>14-day right to cancel</a>, and what happens if you sell the car."
      ]},
      { type: "example", title: "Why the cheapest quote is not always the best", paragraphs: [
        "Tom has a car on PCP that cost £28,000, with a £24,000 settlement figure today. Policy A costs £140 and has a £15,000 maximum claim. Policy B costs £185 and has a £25,000 maximum claim.",
        "If the car were written off and the motor insurer paid £10,000, Tom would be £14,000 short on the finance and £18,000 short on the invoice price. Policy A could only ever pay £15,000. Policy B could cover the whole gap on an invoice-based claim. For Tom, the £45 difference buys real cover."
      ]},
      { type: "h2", text: "Comparing quotes" },
      { type: "p", html: "Once you know the cover type and claim limit you need, get at least two quotes for exactly that, then compare excess cover, eligibility and claim terms. The <a href='/how-much-is-gap-insurance'>GAP insurance cost guide</a> has the published price ranges and a rough calculator. If a dealer is offering GAP with the car, the <a href='/fca-rules-on-dealer-gap-insurance'>FCA rules</a> give you time to do this." }
    ]
  },
  {
    slug: "ala-gap-insurance",
    date: "2026-10-21",
    title: "ALA GAP insurance: policies, prices and test results",
    h1: "ALA GAP insurance",
    card: "Who ALA is, the GAP policies it sells, what it says about them, and what an independent price test found.",
    description: "ALA Insurance Brokers sells several types of GAP cover. What each covers, who is eligible, and how it priced in Auto Express's 2026 like-for-like test.",
    lede: "ALA is a UK insurance broker that sells GAP insurance online, alongside car warranties and other motor add-ons. It offers invoice, vehicle replacement, contract hire, agreed value and hire and reward GAP policies. In Auto Express's 2026 test of eight online providers, its quote for the test car was £193.11, the second highest of the eight. This page explains what ALA sells and what has been published about it. It is not an endorsement.",
    related: ["best-gap-insurance-uk", "how-much-is-gap-insurance", "return-to-invoice-vs-vehicle-replacement-vs-agreed-value", "gap-insurance-for-leased-cars"],
    sources: [S2.alaGap, S2.autoExpress, S.register, S.icobsCancel],
    faqs: [
      { q: "Who is ALA GAP insurance with?", a: "ALA is the broker. Its website says its GAP policies are underwritten by Financial & Legal and Hiscox. Your policy documents will name the insurer for your policy." },
      { q: "Is ALA regulated by the FCA?", a: "ALA's website says ALA IB Limited, trading as ALA Insurance Brokers, is authorised and regulated by the Financial Conduct Authority, firm reference 571109. You can check that number on the FCA register." },
      { q: "How much does ALA GAP insurance cost?", a: "It depends on the car and the cover. ALA's own guide gives a typical range of around £100 to £300 for multi-year cover. In Auto Express's 2026 like-for-like test, ALA quoted £193.11 for three years of return-to-invoice cover on a nearly new Ford Puma, or £218.10 over ten months." },
      { q: "Can I get ALA GAP for a car I bought months ago?", a: "Possibly. ALA says its Back to Invoice Plus policy is for cars bought within the last 180 days, or 365 days where new car replacement applies for the first year, and its contract hire cover is for vehicles delivered within the last 365 days. Check the current eligibility when you quote." }
    ],
    blocks: [
      { type: "h2", text: "Who ALA is" },
      { type: "p", html: "According to the footer of <a href='https://www.ala.co.uk/gap-insurance'>its website</a>, ALA is ALA IB Limited, trading as ALA Insurance Brokers, registered in England (company number 06833207) with a registered office in Malton, North Yorkshire. It states that it is authorised and regulated by the Financial Conduct Authority with firm reference number 571109. You can confirm a firm's details on the <a href='https://register.fca.org.uk/'>FCA register</a> before you buy." },
      { type: "p", html: "ALA is a broker: it arranges the policy, and an insurer carries the risk. ALA says its GAP policies are underwritten by Financial & Legal and Hiscox." },
      { type: "h2", text: "The GAP policies ALA sells" },
      { type: "p", html: "These descriptions and limits are as ALA states them on its GAP page, checked on 21 October 2026. Limits change, so check them on your own quote." },
      { type: "table", stack: true, headers: ["Policy", "What ALA says it pays", "Eligibility ALA states"], rows: [
        ["Back to Invoice Plus", "The difference between the market value settlement and the higher of the original invoice price or the outstanding finance", "New or used cars up to 10 years old, owned outright or on finance, bought within the last 180 days (365 where new car replacement applies in the first 12 months)"],
        ["Vehicle Replacement Plus", "The difference between the motor settlement and the higher of a new replacement of similar make, model and age, or the outstanding finance", "New and used vehicles up to 7 years old with fewer than 80,000 miles, delivered within 90 days of the policy start"],
        ["Contract Hire GAP", "The difference between the motor payout and the rentals still owed on the lease, plus up to £3,000 of the initial rental", "Vehicles on contract hire, delivered within the last 365 days"],
        ["Agreed Value GAP", "The difference between the market value settlement at claim and the retail value when you bought the GAP policy", "No age or mileage limit, as long as the vehicle's value is listed in Glass's Guide; includes cars bought privately"],
        ["Hire and Reward GAP", "The shortfall between what you paid and the motor insurer's total loss payout", "Taxis, private hire, standard delivery and driving instructor vehicles, up to £50,000"]
      ]},
      { type: "h2", text: "What ALA says about its cover" },
      { type: "p", html: "These are ALA's own claims, reported so you know what to check in the policy documents. We have not tested them." },
      { type: "ul", items: [
        "A 99% claims pay-out rate after a total loss.",
        "£250 to £500 of motor excess cover as standard, depending on the policy.",
        "No admin fees, and free transfers and cancellations.",
        "120 days to make a claim.",
        "No market value clauses, and help negotiating the motor insurer's settlement.",
        "A price match against comparable online GAP quotes.",
        "A typical price range of around £100 to £300 for multi-year cover."
      ]},
      { type: "h2", text: "What an independent test found" },
      { type: "p", html: "In <a href='https://www.autoexpress.co.uk/product-group-tests/355158/best-gap-insurance'>Auto Express's 2026 test</a>, eight providers priced the same three-year return-to-invoice cover with a £15,000 maximum claim on a nearly new Ford Puma. ALA's quote was £193.11, rising to £218.10 if paid over ten months, with £250 of excess cover listed. Auto Express liked the simplicity of its site and its clear explanation of two cover types, but said the price was too high to be competitive, and gave it 2.0 stars out of five. The cheapest quote in the same test was £107.35." },
      { type: "p", html: "That is one car and one cover type. ALA's wider product range, such as agreed value cover with no age or mileage limit, may suit a car other policies will not accept, which a single price test does not measure. See the <a href='/best-gap-insurance-uk'>full test results and comparison checks</a>." },
      { type: "example", title: "How a 'higher of invoice or finance' policy pays", paragraphs: [
        "Jas buys a car for £22,000 on hire purchase. A year later it is written off. The motor insurer pays the market value of £15,500. The finance settlement on that day is £17,200.",
        "A policy that tops up to the higher of the invoice price or the finance settlement works from £22,000, so the shortfall it would aim to cover is £6,500, subject to the claim limit. A finance-only policy would cover £1,700. ALA describes its Back to Invoice Plus policy with this 'higher of' calculation, so check which figure any policy you are offered works from."
      ]},
      { type: "h2", text: "Before you buy from ALA or anyone else" },
      { type: "ol", items: [
        "Pick the cover type that matches your finance or ownership: <a href='/return-to-invoice-vs-vehicle-replacement-vs-agreed-value'>the cover types are compared here</a>.",
        "Get at least one other quote for the same cover type, claim limit and term.",
        "Check the eligibility limits and the claim time limit in the policy wording.",
        "Confirm the firm on the FCA register and keep your documents. You normally have <a href='/cancelling-gap-insurance-and-refunds'>14 days to cancel</a>."
      ]}
    ]
  }
];
