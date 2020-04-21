const  url = "https://afternoon-journey-05524.herokuapp.com/"




let App = document.querySelector(".body")
let allProData = []

let legalDocs = `
<img src="./assets/WhatsApp Image 2020-04-17 at 17.30.14.jpeg" alt="" style="margin-left: 10%;" width="80%">

`

let termsAndCondition = `

<div class="termsConds">
<h1>Terms and Conditions</h1>

<hr>

<h4>index</h4>

<span class="email">Part A - Introduction
</span>
<br>

<span class="email">
    Part B - Account Terms and Conditions of Use
</span>
<br>

<span class="email">
    Part C - Bidding
</span>
<br>

<div class="intro" id="intro">
<h2>Part A - Introduction</h2>

<p>Welcome to Fortune Auction. We offer you a digital platform where you can bid as a bet on products and
services within your region or Country. Here, we believe the fastest bidder is crowned winner. <span class="email2"> Note: We are
    in the gambling industry . So we use the word “BIDDING OR BID” instead of Bidding or gambling.</span></p>


    <h3>Account</h3>

    <p>If you wish to bid, you will need to open an account with us. By opening an account with us, you agree to be
        bound by our Account Terms and Conditions of Use in Part B.
        </p>

        <h3>Bidding</h3>
        <p>
            Before beginning to bid, you should read through our Bidding - General Conditions as well as the "Specific
Conditions" which apply to you and to each of your bidding transactions as set out below.
<br>
By entering into any bidding transactions on our site, you agree to be bound by both the Bidding -
General Conditions and the specific conditions applicable to that particular Bidding transaction:
<br>

<p class="email">
● Section 1: Bidding - General Conditions [these are applicable to all bids placed on our sites]
<br>
● Section 2: Specific Conditions for customers Bidding in places other than location where we a
legally present
<br>
● Section 3: Specific Conditions for Rwandan Customers
<br>
● Section 4: Specific Conditions for Multiples
<br>
</p>



</div>

<div id="terms">


<h3>Part B - Account Terms and Conditions of use</h3>

Welcome to Fortune Auction. Before you can use our services, you need to open an account.
<br>
<strong>Please read these Terms and Conditions carefully before opening an account with us.
</strong>
<br>

Please also read our <span class="email"> Privacy Policy, Cookie Policy, Dispute Resolution Policy, Trust Deed, Regulatory
Information</span> and the provisions regarding the Fortune Auction bidding fee and Charges. If there is any
inconsistency between these Terms and Conditions and any of the documents listed above, these Terms
and Conditions will prevail.

<br>
<strong>By clicking the "I Confirm" button on the account opening screen, you agree to be bound by these
Terms and Conditions.
</strong>



        </p>
<h3>1. Your Account    </h3>

In consideration of our accepting your application to open an account, you represent to us (and
acknowledge that we rely on these representations) as follows:

<ul class="dotz">
<li>You are 18 years of age or over. It is an offence for anyone under the age of 18 to
open an account or to Bid on Fortune Auction;
</li>

<li>
    You are of sound mind and capable of taking responsibility for your own actions
and that you can enter into a legally binding agreement with us;
</li>

<li>
    You agree to provide accurate registration information, including without limitation
your correct date of birth and your country of residence. You agree to inform us of
any changes in such details when requested of you;
</li>

<li>
    You are the person whose details are provided in connection with your registration
    or, in the case of legal entities, you are a duly authorised representative of the
    relevant legal entity;
</li>

<li>
    You are acting as a principal and not as an agent on behalf of a third party;
</li>

<li>
    You are not an undischarged bankrupt or in a voluntary arrangement with your
creditors;
</li>

<li>
    You are not located in a country where the use of our services is prohibited. You
are entirely responsible for complying with your own local, national, federal, state or
other laws concerning Bidding, Betting and gaming prior to opening an account,
placing any bidsor using our services;

</li>

<li>
    You are not currently subject to a self-exclusion from a Fortune Auction or Paddy
Power account and you have not signed up to a national self-exclusion register
which excludes you from gambling; and

</li>

<li>You will, following a request from us (which may be made at any time before or
    after you open an account with us), promptly provide any documentation or
    information which we request in order to evidence your identity, age, address,
    country of birth or authorisation to use a particular credit or debit card (and you
    agree that we may perform checks in order to verify any such documentation or
    information).
    
</li>

</ul>

<p>
2. It is your responsibility to keep your contact details up-to-date on your account. Failure to do so
may result in you failing to receive important account related notifications and information from
Fortune Auction.
You are solely responsible for the security and confidentiality of your account. In particular, you
agree to keep your username, password strictly confidential and you are responsible for any
misuse of your password. Please note that when you create an account you have the option to
use your email address or a username to log in to/identify your account. This can reduce the
security levels of your account as your email address may be more accessible and this makes it
easier for third parties to gain access to your account.
Provided that we have been correctly supplied with the account information requested, we are
entitled to assume that offers and payments are made by you. You should change your
password on a regular basis and never disclose it to any third party. You undertake to protect
your username and password in the same way that you would in respect of your bank cards
and any failure to do so shall be at your sole risk and expense. If another person accesses your
account, you are solely responsible for all their actions whether or not their access was
authorised by you and you hereby indemnify us and hold us harmless against all costs, claims,
expenses and damages howsoever arising in connection with the use of or access to your
account by any third party.
You will not attempt to sell or otherwise transfer the benefit of your account to any third party
and nor will you acquire or attempt to acquire an account which has been opened in the name
of a third party.
For information on inactive accounts, including any applicable administrative fees and the
procedure will be informed that such a fee will be charged.

</p>

<h3>3. Multiple accounts</h3>

<p>
Customers with an existing Fortune Auction account are not permitted to open a new account
with Fortune Auction.
Any customer that already has more than one Fortune Auction account is required to nominate
a single Fortune Auction account to use across Fortune Auction's products by contacting the
Fortune Auction CustomerCare. Customers that operate multiple Fortune Auction accounts will
have their accounts "linked" and managed accordingly. This may affect the extent to which bids
can be placed on the Fortune Auction by such customers.
Should Fortune Auction believe, using its absolute and sole discretion, that you have:

<ul>
<li>registered and/or used more than one account; and/or
</li>

<li>acted in collusion with one or more other individuals through a number of different
Fortune Auction accounts to back the same combination of selections (regardless
of whether or not such bids are struck separately, at a range of different prices or
on different days or IP addresses)</li>
</ul>
</p>

<p>
4. in an attempt to exceed the maximum pay-out for an individual account holder across linked
accounts, it reserves the right to withhold any winnings arising from such behaviour.

</p>

<h3>Privacy</h3>

<p>
The information that you send to us will be processed in accordance with our Privacy Policy.
You authorise us, at any time, to use any means that we consider necessary to verify your
identity and creditworthiness with any third party providers of information.
You agree that, from time to time, we may contact you to ask if you would like to take part in
promotional activity. We would only do this if you won in any of our products, or if you placed an
unusual bid which was successful. If you agree to take part in such promotional activity, we may
use your name and/or your image as reasonably required.


<p>
<ul>
<li><strong>Indemnity</strong>
    You acknowledge that Fortune Auction and its affiliates will hold information with
    respect to your identity, including but not Limited to your name, address and
    payment details, phone number. You agree that we rely on this information in
    entering into our agreement with you and you agree to hold us harmless against
    any falsehood or inaccuracy contained in the information you provide us.
    </li>

    <li>
        <strong>Errors and Omissions</strong>
You will inform us as soon as you become aware of any errors with respect to your
account that result from human error or technical fault.

    </li>

    <li>
        <strong>Suspension or termination</strong>
Either we or you may suspend or terminate your account at any time, either with or
without cause, upon notice (we will use our reasonable endeavours to give such
notice to you either before or after suspending or terminating your account). Please
contact the Fortune Auction CustomerCare if you would like to close your account.
We may take steps to block you from Bidding on or using our site (or any part of it)
Following termination or suspension of your account, the data saved about you will,
in the normal course of events, be destroyed from our database.
However, we reserve the right to notify the Trustee to withhold the data in your
account from you pending the determination of any investigation (including any
relevant external investigation) where:

<ol>
<li>
 we suspect you have acted in breach of these Terms and Conditions
or any other agreement relevant to your activities on our site, including
where we suspect the account has been linked with fraudulent or
dishonest activity; and/or</li>

<li>
    we have to notify the Trustee to withhold the funds in your account by
    law or to comply with any advice, request or instruction from any
    governmental, regulatory or enforcement authority.
    
</li>

</ol>
    </li>


    <li>
        <h3> Responsible Bidding/Gambling
        </h3>
        Fortune Auction is committed to ensuring its customers gamble/bid responsibly. Its
responsible bidding policies include:

        <ol>
            <li>
                a monitoring programme to review customer transactions, identify
changes in behaviour and contact customers;
            </li>
            <li>
                reality check session timers and awareness pop-ups which allow
                customers to control their activity for games or events that have no
                natural end;
            </li>

            <ul>
                <li>
                    <strong>Assignment</strong>
You may not assign these Terms and Conditions to any third
party. Fortune Auction may assign, transfer or novate any or all
of its rights and obligations under these Terms and Conditions
to any third party at any time. In the event of an assignment by
Fortune Auction, we will notify of this change and, if you do not
agree to this, then you will not be able to continue to use our
services, but you shall always be able to withdraw your funds
subject to these Terms and Conditions.

                </li>

                <li>
                    <strong>Severability</strong>

                    In the event that any provision of these Terms and Conditions is
deemed by any competent authority to be unenforceable or
invalid, the relevant provision shall be modified to allow it to be
enforced in line with the intention of the original text to the fullest
extent permitted by applicable law. The validity and
enforceability of the remaining provisions of these Terms and
Conditions shall not be affected.
Any provision of these Terms and Conditions that is invalid,
illegal or unenforceable in any jurisdiction will be ineffective in
that particular jurisdiction, without affecting the validity, legality
or enforceability of that provision in other jurisdictions.
                </li>


                <li>
                    <strong>Dispute resolution</strong>

                    In the event of a dispute arising between us and you, we each
agree to follow the procedure set out in our Dispute Resolution
policy as amended from time to time.

                </li>

                <li>
                    <strong>Amendments</strong>

                    We reserve the right to make immaterial changes to these
Terms and Conditions at any time.
If we make any material changes to these Terms and
Conditions, we will give you as much prior notice of such
changes as is reasonably practicable but, in any event,
customers will be notified of material changes before they come
into effect. Material changes will be communicated to you via a
pop-up message on web and/or mobile when you log into your
account. After being informed of the changes, you will be asked
to ‘Agree’ to the changes to continue to use our services. Your
continued use of the services after being notified of the material
changes, and after indicating your acceptance of them, will be
deemed to be your acceptance of the changes. If you do not
agree to the material changes, then you will not be able to
continue to use the services, but you shall always be able to
withdraw your funds subject to these Terms and Conditions.

                </li>

                <li>
                    <strong>Communications and notices</strong>
                    Communications and notices to be given by you to us under
these Terms and Conditions should be provided to us as set out
in the Contact us section.

                </li>

                <li>
                    <strong>Governing Law and Jurisdiction</strong>

                    <br>
                    If you reside in the Rwanda:


                    <ol>
                        <li> these Terms and Conditions will be governed by
                            the laws of Rwanda;
                            </li>

                            <li>
                                and the courts of Rwanda have non-exclusive
jurisdiction in relation to all disputes under these
Terms and Conditions
                            </li>

                            <li>
                                by accepting these Terms and Conditions, you
agree to submit to the exclusive jurisdiction of the
location that Fortune Auction determines in its sole
discretion, in respect of any disputes arising out of,
or connected with, these Terms and Conditions;
                            </li>

                            <li>
                                nothing in this paragraph shall prevent Fortune
Auction from applying to the courts of any
jurisdiction for such provisional or protective
measures as are available under the laws of that
jurisdiction; and
                            </li>

                            <li>
                                the rights and obligations under these Terms and
Conditions shall not be governed by the United
Nations Convention on Contracts for the
International Sale of Goods and/or any local
implementing legislation, the application of which is
expressly excluded.
                            </li>
                    </ol>
                </li>
            </ul>
        </ol>
    </li>
</ul>
</p>
</p>

</div>


<div id="bidding">
<h3>
Part C - Betting
</h3>

<p class="email">
● Section 1: Betting - General Conditions [These are applicable to all bids placed on our sites]
<br>
● Section 2: Specific Conditions for Multiples

</p>

<h3>Section 1: Betting - General Conditions</h3>

<p>
Fortune Auction provides a platform upon which you can enter into various bidding
transactions in relation to the products auctioned available on our site.
<br>
Where customers bid on a product(s) with each other and the fastest bidder wins,
Fortune Auction acts as a facilitator and does not act as a counterparty.
<br>
<strong>Please read these General Conditions, and the Specific Conditions applicable to
you and your bidding transaction carefully before entering into any bidding
transactions.
</strong>


Please also read our <strong>Privacy Policy, Cookie Policy, Dispute Resolution Policy,
Regulatory Information, Trust Deed </strong> and the provisions regarding the Fortune Auction
Charges. All of these documents are incorporated by reference and form part of these
General Conditions.

<br>

If there is any inconsistency between the documents listed above, this document and the
relevant Specific Conditions, the Specific Conditions will prevail over this document
which will prevail over the documents listed above.


<strong>By entering into any betting transactions, you agree to be bound by these General
Conditions and the Specific Conditions relevant to your betting transaction
(together "the Agreement").
</strong>

<br>

When you place a bet on the Fortune Auction. By placing a bet on the Fortune Auction,
you will be deemed to have registered with us.


</p>

<h3>Conditions relating to your use of the services</h3>

<ol>
<li> <strong>Licence to use our site</strong>
Fortune Auction grants you a limited licence to access our site provided that
you comply with this Agreement.
The availability of our site does not constitute an offer or invitation by
Fortune Auctionto use the site in any jurisdiction in which such use is illegal.
Your use of our site or any data feeds we may provide to you confers no
rights whatsoever to the content and related intellectual property rights
contained on our site or on any such data feeds. You agree not to monitor,
use or copy our web pages or any of our web content, including without
limitation any price data. You will not attempt to hack, make unauthorised
alterations or introduce any kind of malicious code to the site by any means.
You will not (a) reverse engineer or decompile (whether in whole or in part)
any software available through the site; or (b) make copies, modify,
reproduce, transmit, alter or distribute all or any part of the site or any
material or information contained on it. Any unauthorised use or reproduction
may be prosecuted.
</li>

<li>
    <strong>Use of our Services
    </strong>

    You understand that you may lose money on bids placed and accept that
you are fully responsible for any such loss. You accept that under no
circumstances will any amounts lost by you under any bet be recoverable
from us.
It is your responsibility to verify that you are permitted to bet with us
according to the jurisdiction of your domicile or habitual residence and/or in
which you are located and you agree that you will not bet with us while you
are located in a jurisdiction which prohibits you from betting with us. These
locations will be determined by Fortune Auction from time to time.
You undertake to use our services for legitimate betting purposes only. In
particular you undertake not to

<ol>
<li>engage in any activity which has the purpose or effect of
causing damage to or in any way hindering our business
operations or generating or increasing a liability on us, including
without limitation any tax, levy or duty collecting authority;
</li>

<li>
    bet on, or manipulate any individual Market in a manner which
we believe has the purpose or effect of adversely affecting the
integrity of the Exchange or any Market;
</li>

<li>
    transmit information that assists in the placing of bids or wagers
    on any sporting event or contest from any territory where it is
    illegal to do so; and/ or
    
</li>

<li>
    procure or otherwise arrange, whether directly or indirectly, for a
third party to transmit information that assists in the placing of
bidsor wagers on any sporting event or contest from any
territory where it is illegal to do so.

</li>

</ol>


</li>

<li>
    <strong>Your Conduct</strong>
You will not attempt to use the malicious way to deliberately transfer money
from one Fortune Auction account to another by attempting to match bids on
a Market with another account through collusion.
You will inform us as soon as you become aware of any errors in
calculations with respect to any bidding transaction. We reserve the right to
declare null and void any bids which are the subject of such an error.
You will not disguise or interfere in any way with the IP address of the
computer you are using to access the site or otherwise take steps to prevent
us from correctly identifying the actual IP address of the computer you are
using whilst accessing the site.
You agree it is your responsibility to account for any tax or duty imposed on
you as a result of any of your bidding transactions.
You will not make offensive comments, use offensive or pornographic
material or make potentially defamatory or inflammatory remarks in
connection with the forums or any other part of our site including within your
own username or other information contributed to our site.

</li>

<li>
    <strong>Privacy</strong>
Any information you send to us will be processed in accordance with our
Privacy Policy.
You authorise us, at any time, to use any means that we consider necessary
to verify your identity and creditworthiness with any third party providers of
information. If you are a Rwandan Customer, you consent to have your
identity verified using credit data information sourced on behalf of us by any
third party (or such other third party that we may use from time to time).
We reserve the right to record ALL telephone calls to and from Fortune
Auction and to monitor all information relating to betting activities for which
purposes you consent in accordance with the requirements of the Regulation
Rwanda data privacy and such other legislation as may be applicable.
You agree to indemnify us and hold us harmless in respect of the release of
any personal (or other) data pursuant to this Agreement.

</li>

<h5>Conditions relating to bidding</h5>

<li>
    <strong>Operation of our Services</strong>
You are responsible for understanding the contents of our site and the
operation of the Services and we reserve the right to change the format of
the Services in order to enhance such Services.
We may determine when the site is open for bidding and may close the site
at any time at our absolute discretion.
You are entirely responsible for the information that you provide to us
concerning the offer that you wish to place. We will not enquire into the
reasonableness of any offer that you may make. We will not be liable for
incorrect entries made by you, including data input errors with respect to the
odds, price or stake on offer, or incorrect bid requests communicated by you
to a Fortune Auction Telephone Operator or via website. If a Fortune
AuctionTelephone Operator repeats back your bid request incorrectly, it is
your responsibility to correct the bid request and inform the Fortune
AuctionTelephone Operator of the error. Once you have confirmed the bid
request to the Fortune Auction Telephone Operator (whether or not that was
the original bid that you requested) and your bid is matched, you will be
liable for that bid if it loses.
Fortune Auction may, in its sole and absolute discretion, decide to suspend
bidding on a product at any time.. In the interests of maintaining integrity and
fairness in the products auctioned, Fortune Auction may also void certain
bids in a product in its entirety.
You should be aware that some customers make use of programs designed
to automatically place bids within certain parameters set by them (e.g. to
back or lay at a certain price) ("bots"). Additionally bot users should be
aware that bots might be prone to exploitation by other customers and it is
<strong>not allowed.</strong>

</li>

<li>
    <strong>Cancellation, Termination, Suspension and Breach
    </strong>

    We may restrict your access to Fortune Auction, suspend or terminate your
account, withdraw your offers for bids, void any bids outstanding to your
account, cancel any unmatched bids or cancel and void any outstanding or
matched bids in our absolute discretion without cause at any time including
if:
<ol>
<li>there is a technological failure;</li>
<li> we suspect that you are engaging in illegal or fraudulent activity;
</li>

<li>
we suspect that you have (or may have) breached any part of
this Agreement;
</li>

<li>
we suspect that you have breached the terms of a Fortune
Auction promotion, for instance, you have opened more than
one Fortune Auction account to take advantage of a promotion
which was limited to one per customer;
</li>

<li>
we suspect that you are acting in collusion with other bidders to
take unfair advantage of a promotion and/or in the course of
participating in a promotion or offer, you have become able to
guarantee wins and/or profits with no or only minimal risk;
</li>

<li>
we suspect that your account's "public market data" usage
('public market data' includes market prices, traded Volumes
and market depth) could represent business usage (˜'business
usage' includes any use by a betting operator or any use by an
individual or organisation supplying data or services to a betting
operator);

</li>

<li>
you are prohibited from entering into a bid by any term of your
contract of employment or any rule of a sport governing body or
other professional body which applies to you; or
</li>

<li>
In relation to any cancelled or void bets, we reserve the right to
notify the Trustee that any money in your account relating to
these bids be paid to us in accordance with the Trust Deed or, if
there are insufficient funds in your account, demand that you
pay us the relevant outstanding amount relating to these bids.
</li>







</ol>

</li>

<li>
   <strong> Bidding by those under age</strong>
    It is an offence for anyone under the age of 18 to open an account or to
    bidding on Fortune Auction. If we identify that you are under 18 or were
    under 18 when you entered into any bidding transactions on our site ("under
    age"):

    <ol>
        <li>we will immediately prevent you from entering into any bidding
            transactions or making any withdrawals from or use of your
            account;</li>

            <li>we will investigate the claim that you are or were under age,
                including whether in fact you have been bidding as an agent for
                or at the behest or on behalf of another person;</li>

                <li>
                    if we find that you are or were under age, we will notify the
                    Trustee that all winnings which have accrued and remain in
                    your account or which are otherwise due to be credited to your
                    account should be paid to us in accordance with the Trust
                    Deed;
                    
                </li>

                <li>
                    we will return to you all stakes which were placed by you while
you were under age.

                </li>

                <li>
                    Any prize or product won by you will be declared invalid and the
runner up next to you and of age will be considered winner.
                </li>

    </ol>
    
</li>

<li> <strong>Cancellation of an offer for a bid</strong>
    You may cancel uninterested bids at any time either by:

    <ol>
        <li>requesting a cancellation of the relevant offer in the relevant
            section of the relevant Market on our site; or
            </li>

            <li>
                by instructing a Fortune Auction Telephone Operator to request
a cancellation of the relevant offer.

            </li>
    </ol>
</li>

<li>
    Your cancellation of an uninterested bid becomes effective once we send
you confirmation of the cancellation. In the event that your cancellation
request is not received and processed in good time, you acknowledge that
your offer may remain outstanding and available for acceptance.
You may not be able to cancel your offer if your bid has been partially or
wholly accepted during the interval between submitting your cancellation
request and confirming your cancellation. In this case, your original offer, or
part thereof, will be validly accepted and the bid will be concluded.
When you amend an unmatched bet you are effectively cancelling that bet
and submitting a new bet at the amended stake or odds.
We will cancel any offers for bids that remain outstanding at the time that we
close an auction.

</li>

<li>
   <strong> Bid Settlement</strong>
Subject to these General Conditions and any applicable Specific Conditions
we will settle Markets in accordance with our bids <strong> Rules and Regulations.</strong> We
reserve the right to reverse or amend settlement in the event of an auction
being settled incorrectly. This may lead to amendments being made to your
account to reflect changes in auction settlement and if there are insufficient
funds in your account we may demand that you put funds into your account
to address the outstanding balance. We will notify you if your account goes
into a negative balance and, if following the notification, you either:

<ol>
<li>
do not put funds in your account within the reasonable time
specified in our notice to you, or
</li>
<li>
you fail to make the relevant payments into your account in
accordance with any repayment plan as agreed between you
and Fortune Auction; or
</li>

<li>
- you indicate to Fortune Auction that you have no intention of
putting funds in your account to address the outstanding
balance, then we reserve the right to suspend your account
and/or take appropriate legal action to seek to recover the debt,
in full, from you.
<br>
Any amount of winnings or losses relating to your bids on an
auction will be rounded to the nearest two decimal places. If the
amount ends in 0.5 it will be rounded up.

</li>
</ol>




</li>
<h5>Conditions relating to us
</h5>


<li>
<strong>Matters beyond our reasonable control</strong>
Without prejudice to our obligations contained within the various laws and
regulations of the jurisdictions where we are licensed, we are not liable for
any loss or damage that you may suffer because of any: act of God; power
cut; trade or labour dispute; act, failure or omission of any government or
authority; obstruction or failure of telecommunication services; or any other
delay or failure caused by a third party or otherwise outside of our control. In
such an event, we reserve the right to cancel or suspend our services
without incurring any liability.
We are not liable for the failure of any equipment or software howsoever
caused, wherever located or administered, or whether under our direct
control or not, that may prevent the operation of the Services, impede the
placing of offers for bids, or prevent you from being able to contact us.
We will not be liable for any failure to perform by a third party to our
Agreement.

</li>

<li>
<strong>Indemnity</strong>
You agree to indemnify and hold us and our associated companies,
affiliates, officers, directors, agents and employees harmless from any
liabilities, claims, losses or demands made by any third party arising out of
your breach of this Agreement (including documents incorporated by
reference) or out of your violation of any law or the rights of any third party.
You acknowledge that Fortune Auction and its affiliates will hold information
with respect to your identity, including but not limited to your name, address
and payment details. You agree that we rely on this information in entering
into this Agreement and you agree to hold us harmless against any
falsehood or inaccuracy contained in the information you provide us.
</li>

<li>
<strong>Limitation of liability</strong>
We exclude all representations and warranties as to the satisfactory quality
and/or fitness for its intended purpose and/or accuracy and completeness of
the Services.
We will not be liable to you for any loss that you may incur as a result of
misuse of your password, or in the case of the Telephone Service, of your
telephone access number, and we accept no liability resulting from its
unauthorised use, whether fraudulent or otherwise.
In no event will we, or any of our suppliers, accept any liability however
arising for any losses you may incur as a result of using the Services. Under
no circumstances will our liability under this Agreement or for breach of
contract, tort, equity or otherwise exceed your exposure limit as specified in
your account. Under no circumstances will we be liable for any indirect,
special or consequential damages, loss of profits (direct or indirect) or the
benefit of any bid arising from breach of contract, negligence, equitable duty
(including for the avoidance of doubt in relation to any bid(s) or auction(s)
voided by us) or other liability even if we had been advised of or known (or
should have known) of the possibility of such damages or loss.
Nothing in this Agreement excludes our liability with respect to death and
personal injury resulting from our negligence, or that of our employees,
agents or subcontractors.

</li>

<li>
<strong>Right of set off</strong>
We may at any time, without notice to you, notify the Trustee to set off any
liability owed to us or to our customers by you, including (without limitation)
in relation to any Fortune Auction account in your name or which we believe
to be under your control:

<ol>
<li>
    against any funds held in another Fortune Auction account in
your name or which we believe to be under your control in
accordance with the terms of the Trust Deed; and/ or
</li>

<li>
    against any liability that we determine that you have to us in
    pursuant to these Terms and Conditions, including (without
    limitation) pursuant to the Fortune Auction.
</li>


</ol>

</li>
<li>
<strong>Intellectual property</strong>
The Fortune Auction Ltd, is the owner of:

<ol>
<li>all copyright and related rights in and to our site, including,
without limitation, rights in databases and all rights in any price
data and related content on our site except for certain third party
rights (referred to below);</li>

<li>
    all trade mark rights, whether registered or unregistered, in and
to Fortune Auctionand the Fortune Auction logo; and
</li>

<li>
    the domain name www.fortuneauction360.com which is our
uniform resource locator ("URL")
</li>
</ol>


</li>

<li>
. The following use of price data or any other data or content from our site or
via the API or any other Fortune Auction data from any other source
(together, Fortune Auction Data) is strictly prohibited without our specific
prior written consent:

<ol>
<li>commercial use by any person; and/or</li>
<li>any use for any purpose by a competitor of the Fortune Auction
Ltd, or an employee, contractor or agent of any such competitor
("Restricted Person"), provided always that Restricted Persons
may place bets.</li>


</ol>


</li>

<li>
Screen scraping, web scraping or any other automated or manual collection
of Fortune Auction Data, for commercial or personal use, by any person is
expressly prohibited.
Any unauthorised use of any of the above rights may result in prosecution or
other action being taken against you.
You hereby assign to Fortune Auction absolutely, any and all copyright and
other intellectual property rights throughout the world in all media whether
now known or hereafter developed, for the full period of copyright, including
by way of present assignment of future copyright and all other rights
whatsoever, in any offers for bids or bids placed by you on our site.
Any data licensed to Fortune Auction from third parties is provided for use on
our site only and may not be used for any commercial purposes without the
consent of such third parties.

</li>

<h3>Conditions relating to other services
</h3>

<li>
. Information Services
From time to time Fortune Auction may provide you with access to various
information and content. This may include form data, results, video
streaming, upcoming events, the times and dates of events, current winners,
time elapsed, and other information relating to an auction. Such information
may be supplied:

<ol>
<li> via our site (including micro-sites and as part of any runner data
and/or results service), the Telephone Bidding Service, emails
or any other means of communication; and/or</li>

<li>via links to third party websites.
</li>

</ol>


</li>

<li>
Such information is described in these Terms and Conditions collectively as
the "Information".
The Information is provided by Fortune Auction or is sourced from a third
party. Although some Information may be described as "live", or it may be
implied that such Information is "live", you should be aware that this data
may be subject to a time delay. The Information may also be inaccurate. You
should also be aware that other Fortune Auction customers may have
access to pictures and/or data that is faster and/or more accurate than the
Information. The Information is supplied "as is" and is provided for guidance
only. To the fullest extent permitted by law, Fortune Auction makes no
representations or warranties of any kind, including but not limited to, the
accuracy, quality, completeness or timeliness of the Information.
If you rely on the Information to place a bid contact us. If not, you do so
entirely at your own risk. Fortune Auction shall not be liable for any action
taken or not taken by you as a result of your reliance on the Information or
for any loss or damage (direct or indirect) suffered by you as a result of your
use of the Information.
Any links to third party websites do not constitute an endorsement by
Fortune Auction of any products or services available on such websites. You
use such websites at your own risk and Fortune Auction takes no
responsibility for the content on, or use of, such websites.

</li>

<h3>General Conditions
</h3>

<li>
<strong>Assignment</strong>
You may not assign any part of this Agreement without Fortune Auction's
written consent but Fortune Auction may assign any or all of this Agreement
to any third party at any time. In the event of an assignment by Fortune
Auction, we will notify of this change and, if you do not agree to this, then
you will not be able to continue to use our services, but you shall always be
able to withdraw your funds subject to these Terms and Conditions.

</li>

<li>
<strong>Severability</strong>
In the event that any provision of this Agreement is deemed by any
competent authority to be unenforceable or invalid, the relevant provision
shall be modified to allow it to be enforced in line with the intention of the
original text to the fullest extent permitted by applicable law. The validity and
enforceability of the remaining provisions of this Agreement shall not be
affected.

</li>

<li> <strong>Dispute resolution</strong>
In the event of a dispute arising between us and you, we each agree to
follow the procedure set out in our Dispute Resolution policy as amended
from time to time.
</li>

<li>
<strong>Amendments</strong>
We reserve the right to make immaterial changes to our site and all guides
and policies included on our site, including this Agreement at any time.
If we make any material changes to these Terms and Conditions, we will
give you as much prior notice of such changes as is reasonably practicable
but, in any event, customers will be notified of material changes before they
come into effect. Material changes will be communicated to you via pop-up
web and/or mobile messages when you log into your account. After being
informed of the changes, you will be asked to ‘Agree’ to the changes to
continue to use our services. Your continued use of the services after being
notified of the material changes, and after indicating your acceptance of
them, will be deemed to be your acceptance of the changes. If you do not
agree to the material changes, then you will not be able to continue to use
the services, but you shall always be able to withdraw your funds subject to
these Terms and Conditions
</li>

<li>
<strong>Communications and notices</strong>
Communications and notices to be given by you to us under this Agreement
(other than those exchanges of information occurring in the normal operation
of the site) should be provided to us as set out in the Contact us section
</li>

<li>
<strong>English language version</strong>
This Agreement has been prepared in various languages other than English
for reference only. In the event of any differences between the English
version of this Agreement and any non-English versions, the English version
shall prevail.

</li>

<li><strong> Entire Agreement</strong>
This Agreement and the terms expressly incorporated into them constitute
the entire and only agreement between the parties with regards to its subject
matter and each party confirms that it has not been induced to accept this
Agreement in reliance upon, nor has it been given, any warranty (including in
particular any warranty as to merchantability, fitness for purpose or
uninterrupted functionality), representation, statement, assurance, covenant,
agreement, undertaking, indemnity or commitment of any nature whatsoever
other than as are expressly set out in this Agreement and, to the extent that
it has been, it unconditionally and irrevocably waives any claims, rights or
remedies which it might otherwise have had in relation thereto.
</li>

<li>
    <strong>No waiver</strong>
    No failure or delay by a party to exercise any of its rights under this
    Agreement shall operate as a waiver thereof and no single or partial
    exercise of any such right shall prevent any other or further exercise of that
    or any other right.
    
</li>

<li>
    <strong>Governing Law and Jurisdiction</strong>
    This Agreement is governed by the laws of and subject to the jurisdiction of
    the courts of the country set out in the "Governing Law and Jurisdiction"
    clause of the relevant Specific Conditions applicable to your particular
    bidding transaction.
</li>
</ol>
</div>


</div>

`

let privacyPolicy = `
<div class="condition">
<div>
       
 <h1>The Privacy Policy</h1>

 <h2>Introduction</h2>


 <p> 
     This Policy applies to our websites, applications, products or services that link to this policy or do
not have a separate privacy policy (collectively our “Services”).
<br>
This purpose of this privacy policy is to give you a better understanding of
 </p>

 <p>
     ● Information we collect
     <br>
● How do we use this information
<br>

● How is the information shared
<br>

● Your rights
<br>

● Other useful privacy & data security related matters
<br>

● How to contact us

 </p>
 <p>
     We hope you take the time to read this policy. It is important to check back often for updates to
this policy. If we make changes we consider to be important, we will let you know by placing a
notice on the relevant Service and/or contact you using other methods such as email.
 </p>

 <h3>Who is the Data Controller?
 </h3>

 <p>The Fortune Auction data is completely managed by us. We have a safe database that collects
     this data.
     </p>

     <h3>And, what about the Data Protection Officer, or is it DPO?
     </h3>

     <p>
         Yes, Fortune Auction has appointed a Data Protection Officer ('DPO'). While our DPO can be
reached at <span class="email"> techsupport@fortuneauction360.com</span> our Customer Service team will be your initial
point of contact if you wish to exercise your rights. Please see the 'Your Rights' section below.

     </p>

     <h3>Information we collect</h3>

     <h5>When you use our Services, we collect the following types of
         information:</h5>

         <h6>Information you provide us:
         </h6>

         <p>We collect information about you during the account registration process for any of our Services.
             This information may include, but is not limited to your name, postal address, e-mail address,
             phone number, credit/debit card details and any other details as might be requested from you for
             the purpose of registration and/or continued use of our Services.
             <br>
             We may also collect information from you if you request information or customer support.
             </p>

             <h5>Additional Information collected:
             </h5>

             <p>We may also collect the following information:</p>
             <br>

             <p>
                 1. name, contact information and message if you contact us or participate in a survey,
contest or promotion;
<br>
2. details such as traffic information, location data and other communication data (including
IP address and browser type) collected by your availing of the Services;
<br>

3. device information including unique device identifier;
<br>

4. pages visited and content viewed, links and buttons clicked, URLs visited before and
after you use our Service. For more information about cookies and how to manage them
please see our Cookie Policy;
<br>

5. information and communications on forums on the websites, including chat rooms and
message boards, profile comments, in-game challenges and chat messaging with game
operators or other users;
<br>

6. your bidding, deposits, payments, payment method and other account transactions -
these are routinely analysed to assist us in improving the Services we provide to you;
<br>

7. your telephone or Live Chat conversations – either to place a bet or a customer service
call;
<br>

8. your response to marketing campaigns from us or through our third parties i.e. open/click
on such emails;
<br>

9. your social media profile details (name, profile photo and other information you make
available to us) when you connect with or contact us through a social media account;
<br>

10. information derived based on profiling activity (see below); and
<br>

11. information from third party databases to comply with our legal and regulatory
obligations.
<br>


             </p>


             <h5>Third Party and Publicly Available Sources
             </h5>

             <p>Not all the personal information we hold about you will always come directly from you. We may
                 also collect information from third parties such as our partners, service providers and publicly
                 available websites (i.e. social media platforms), to comply with our legal and regulatory
                 obligations, offer Services we think may be of interest, to help us maintain data accuracy and
                 provide and enhance the Services.
                 <br>
                 If you log into one of our products through Facebook or Google, Facebook or Google provides us
                 with some of your Facebook user details. We may use these details for the purposes of our
                 registration process and to market our products and Services to you on Facebook.</p>

 
<h5>Cookie Collection</h5>

<p>We collect browser and cookie information when you first navigate to our websites. We use
 cookies to give you a better customer experience and for use of access. Certain cookies will
 allow you to leave and re-enter our Websites without re-entering your password. This will be
 monitored by a web server. For more information on the use of cookies, how you can control
 their use, and information relating to our internet-based and mobile advertising, see our cookies
 policy here.
 </p>

 <h5>How do we use this information
 </h5>



 <p>
 We process personal information for these Services- and business-related purposes:
 <br>
● Account setup, verification and management: We use personal information such as
your name, email address, phone number, and information about your device to set up
and administer your account, provide technical and customer support and training, verify
your identity, process payment information and send important account and Service
information. To allow quicker account registration should you open a bidding account with
another company, we use the verification documents submitted to Fortune Auction to
comply with our legal and regulatory requirements.
As a condition to using our Services, we will ask you to share your precise geolocation so
we can ensure that we are authorised to provide the Services to you in your location. The
above processing is required in order for us to provide the Services to you pursuant to
our terms and conditions.
To verify your age and accuracy of your registration details, including disclosure of such
information to third parties e.g. financial institutions and third party reference agencies.
This is required for the purpose of our complying with our legal obligations
We may also use personal information to enforce our terms and conditions.
<br>

● Personalisation:We use personal information to deliver and suggest tailored content to
personalise your experience with our Services. This is processing which is necessary for
the purpose of our legitimate interests in delivering or presenting relevant content to our
customers.
<br>

● Marketing and events: Subject to any preferences you have expressed (where
applicable), we use personal information to deliver marketing and event communications
to you across various platforms, such as email, telephone, text messaging, direct mail,
online, push notification or otherwise. We will do this during the period of your
relationship with us and, unless specifically instructed otherwise by you, for a reasonable
period of time after the relationship has ended in order to inform you about products,
services, promotions and special offers which we think may be of interest to you.
<br>
If we send you a marketing email or SMS, it will include instructions on how to opt out of
receiving these marketing communications in the future. You can also manage your
information and update your marketing preferences through the “My Account” tab when
you login to your account. Please allow up to 48 hours for any changes you make to your
marketing preferences to be fully processed. Please remember that even if you opt out of
receiving marketing emails, we may still send you important Service information related
to your accounts and subscriptions.
<br>

Most browsers and applications also allow you to control notifications settings. For
example, when you first download our bidding application on IOS, you will be asked to
allow or block notifications from our application. Please refer to your browser/app settings
for full details.
<br>

We will, from time to time, send you marketing material which may be of particular
interest to you based upon your behaviours i.e. your bidding and gameplay activity,
trends and interests. These marketing messages will provide you with information about
the products, services, active promotions or offers available to you by any company
within the Group and information about products and services provided by our selected
partners and third parties.
<br>


Except where we use your personal data for marketing purposes on the basis of your
prior written consent and subject to any opt out preferences you notify us in respect of
electronic direct marketing communications, we process personal data for marketing
purposes as necessary for the purpose of our legitimate interests in promoting our
products and services.
<br>
We may publish players’ aliases and/or chat names, along with any winnings and prizes
received, on our websites in accordance with our legitimate interests.
<br>
● Risk Management: In order to provide the Services to you and for our legitimate
purposes, we process personal data to evaluate and manage risks to our business.
<br>
● Show and measure ads and Services: We use a combination of information including
but not limited to, advertising cookies, your email address, your device identifier, phone
number, DOB, address and your onsite activity to show you targeted and relevant
advertisements on a selection of whitelisted websites across the world wide web and
social media websites. This information can also be used to measure and analyse the
effectiveness and reach of these ads, to help us improve and refine our marketing
strategy in accordance with our legitimate interests.
<br>

● Surveys and polls: If you choose to participate in a survey or poll, any personal
information you provide may be used for marketing or market research purposes in
accordance with our legitimate interests.
<br>
● Diagnostics, research and development: We use personal information for internal
research and development purposes, to help diagnose system problems, to administer
our websites, to improve and test the features and functions of our Services, to develop
new content, products and services. To carry out testing and analysis. This processing is
necessary for the purpose of our legitimate interests.
<br>
● Chat rooms, messaging, and community forums: A number of our Services provide
features including chat rooms, messaging services, and community forums for
collaboration, peer connection, games, and information exchange purposes. Depending
upon the Service, the personal information you choose to post, share, upload, or make
available is public and visible to others who use those Services. You should never post or
share any information that is confidential or about others unless you have permission to
do so. We may use information you provide in community and event profiles and forums
to personalise your experience and to make content and peer connection
recommendations. These services may have their own Terms of Use and, where
appropriate, their own privacy statements.
<br>

● Legal and regulatory obligations: We may be required to use and retain personal
information for legal and compliance reasons, such as the prevention, detection, or
investigation of a crime; or fraud. We may also use personal information to meet our
internal and external audit requirements, information security purposes, and as we
otherwise believe to be necessary or appropriate: (a) under applicable law, which may
include laws outside your country of residence; and (b) to respond to requests from
courts, law enforcement agencies, regulatory agencies, and other public and government
authorities, which may include such authorities outside your country of residence.
<br>

● Profiling: In accordance with our legitimate interests detailed below or to comply with our
legal obligations, we carry out profiling and analysis based upon your location data, age,
bidding and gameplay activity, interests and behaviours for the following purposes:
<br>

<ol>
 <li> Customer segmentation to offer you tailored products and services, and more
     relevant marketing. For example, if the majority of your bids are placed on
     home appliances or electronics, we will aim to primarily send you marketing
     material related to home appliances or electronics;</li>
<li>Risk and trading analysis; and</li>
<li>Licensing and legal obligations i.e. Responsible Gambling, Anti Money
 Laundering, Age Verification, prevention of fraud and to ensure the integrity of
 auctioning events.</li>

</ol>

<br>
● Other purposes: We may be required to use and retain personal information for; loss
prevention; and to protect our rights, privacy, safety, or property, or those of other
persons in accordance with our legitimate interests.

</p>

<h3>How is the information shared</h3>

<p>Your personal information may be transferred or disclosed to any company within the Group or,
 subject to appropriate agreement, to third parties, for the processing of that personal information
 based on our instructions and in compliance with this policy and any other appropriate
 confidentiality and security measures.
 </p>

 <h5>Within the Group:
 </h5>

 <p>Any reference to the "Group" within this Policy and all or any of its direct or indirect subsidiary
     undertakings, joint venture partners, and their related companies wherever located in the world
     may exist from time to time including, but not limited to, MTN, Fortune Auction, Airtel, Payment
     Gateways. Any member of our partners may use and share, within the group and with its
     advisors, the information you provide and other information it holds about you for the following
     purposes:

     <br>
     ● Account set up, verification and management;
     <br>
● Marketing and events
<br>

● Risk management; and
<br>

● Legal and regulatory obligations.
<br>

     </p>

     <h5>Our third-party service providers & partners:</h5>

     <p>The Group may, from time to time, retain trusted third parties to process your information to
         provide us with services globally, including for customer support, information technology,
         payments, sales, marketing, data analysis, research and surveys. As part of our agreements with
         our partners, we may be required to share your information for the purposes of calculating fees
         and benefits owed.
         </p>


         <h5>Third parties for legal reasons:
         </h5>

         <p>
             We will share personal information when we believe it is required, such as:
             <br>
● To comply with legal obligations and respond to requests from government agencies,
including law enforcement and other public authorities, which may include such
authorities outside your country of residence;
<br>

● In the event of a merger, sale, restructure, acquisition, joint venture, assignment, transfer,
or other disposition of all or any portion of our business, assets, or stock (including in
connection with any bankruptcy or similar proceedings); and
<br>

● To protect our rights, users, systems, and Services.
<br>


         </p>



         <h5>Regulatory or Bidding body</h5>

         <p>Your personal information including, but not limited to, your registration details, bidding records,
             records of payments, device information etc., may also be disclosed to any regulatory or bidding
             body (with whom the Group has agreements (Memoranda of Understanding or "MOUs") for the
             sharing of such data) in connection with policing the integrity or enforcing the rules of a sport or
             game and/or prevention and detection of crime and where the Group considers that there are
             reasonable grounds to suspect that you may be involved in a breach of such rules or the law,
             have knowledge of a breach of such rules or the law or otherwise pose a threat to the integrity of
             the relevant sport or game based upon our assessment of your bidding behaviours or it may be
             based on information provided to us by a regulatory body. Those bodies may then use your
             personal information to investigate and act on any such breaches in accordance with their
             procedures.
             </p>

             <h5>International Transfers</h5>

             <p>
                 Our Partners operate businesses in multiple jurisdictions some of which are not located in the
African Economic Area (“AEA”). Countries outside the AEA do sometimes have strong data
protection laws. Where we transfer personal information from the AEA to other countries in which
applicable laws do not offer the same level of data privacy protection as in your home country,
we take measures to provide an appropriate level of data privacy protection. For example, we
use approved contractual clauses, intragroup agreements and other measures designed to
ensure that the recipients of your personal information protect it. We take steps to ensure that the
information we collect is processed according to this privacy policy and the requirements of the
applicable law wherever the data is located. Please contact us below if you require further
information.

             </p>


<h3>Your rights</h3>

<p>
 Under the General Data Protection Regulation, you, as a data subject, have a number of rights
which are detailed below. Some of these only apply in specific circumstances and are qualified in
several respects by exemptions in data protection legislation. We will advise you in our response
to your request if we are relying on any such exemptions.
<br>

● Access to personal data: You have a right to request a copy of the personal
information that we hold about you. Should you wish to make such a request, please see
the Contact Us section for information on how to contact us.
You should include adequate information to identify yourself and such other relevant
information that will reasonably assist us in fulfilling your request. Your request will be
dealt with as soon as possible.
<br>
● Correction of personal data: You can request us to rectify and correct any personal
data that we are processing about you which is incorrect. We provide you with account
settings and tools to access the information associated with your account.
<br>

● Right to withdraw consent: Where we have relied upon your consent to process your
personal data, you have the right to withdraw that consent.
To opt out of marketing, you can use the unsubscribe link found in the marketing
communication you receive from us. For other marketing preferences, you can "Contact
Us" option within the relevant Service to opt out.
<br>

● Right of erasure: You can request us to erase your personal data where there is no
compelling reason to continue processing. This right only applies in certain
circumstances, it is not a guaranteed or absolute right.

<br>

● Right to data portability: This right allows you to obtain your personal data that you
have provided to us with your consent or which was necessary for us to provide you with
our products and services in a format which enables you to transfer that personal data to
another organisation. You may have the right to have your personal data transferred by
us directly to the other organisation, if this is technically feasible.
<br>
● Right to restrict processing of personal data: You have the right in certain
circumstances to request that we suspend our processing of your personal data. Where
we suspend our processing of your personal data we will still be permitted to store your
personal data, but any other processing of this information will require your consent,
subject to certain exemptions.
<br>

● Right to object to processing of personal data: You have the right to object to our use
of your personal data which is processed on the basis of our legitimate interests.
However, we may continue to process your personal data, despite your objection, where
there are compelling legitimate grounds to do so or we need to process your personal
data in connection with any legal claims. You can exercise your right to object to any
profiling that takes place in the course of our use of cookies by managing your settings
preferences, as outlined in our Cookie Policy. You also have the right to object to any
profiling that is carried out for the purpose of direct marketing. You can exercise this right
by using the unsubscribe link found in the marketing communication that you receive
from us
<br>

● Rights relating to automated decision making and profiling: You have the right not to
be subject to a decision which is based solely on automated processing (without human
involvement) where that decision produces a legal effect or otherwise significantly affects
you. This right means you can request that we involve one of our employees or
representatives in the decision-making process. We are satisfied that we do not make
automated decisions of this nature.

<br>


</p>

<h5>How to contact us</h5>

<p>
 For any requests related to your personal information or any of your rights referenced above,
please feel free to contact us in one of the following ways.
You can Use the phone or email information at the footer of the website. We also have a
live platform to communicate with us.
</p>

<h5>Filing a complaint</h5>

<p>
 If you are not satisfied with how we manage your personal data, you have a right to make a
complaint to your local Data Protection Authority.

</p>

<h3>Other useful privacy & data security
 related matters</h3>

 <h5>Retention</h5>

 <p>
     We retain personal information for as long as we reasonably require it for legal or business
purposes. For the unregulated jurisdictions in which operate, and subject to us not having a legal
or regulatory requirement or a risk management reason for retaining your information for a longer
period, your information will not be kept for longer than 7 years post account closure. Please note
that we may be required in certain circumstances to retain your information indefinitely (for
example under our procedures on responsible gambling and self-exclusion). We will take all
necessary steps to ensure that the privacy of information is maintained for the period of retention.

 </p>

 <h5>Security</h5>

 <p>
     We recognise that online security and data protection is an area of vital importance for all our
customers, so it is important to us that you have confidence in the security of your personal
details before you register an account. We are committed to employing security measures to
protect your information from access by unauthorised persons and to prevent accidental or
unlawful processing, disclosure, destruction, loss, alteration and damage. Our technological
security solutions are very advanced and are governed by a mature framework. Our approach is
focused on preventing risks. In order to help us in this regard, we employ pseudonymization and
encryption whenever possible to reduce the impact of any potential incidents. As the security of
some communications via the internet is not completely secure, we cannot guarantee the
security of any information that you disclose using your internet connection. You accept the
inherent security implications of using the internet and the Group will accept no liability for any
direct, consequential, incidental, indirect, or punitive losses or damages arising out of such an
occurrence.
Version 01/20 Published on 28/03/2020

 </p>


 <h1>The Cookie Policy</h1>

 <h3>Cookie Notice</h3>

 <p>
     You should be aware that when you access or use our content, products and services, we may
collect information from your devices through the use of 'cookies'. Cookies perform various
different functions, and the purpose of this policy is to give you a clearer understanding of:

<br>
● What are cookies?
<br>
● Why do we use cookies?
<br>
● How we use cookies?
<br>
● How can you control the use of cookies?
<br>
● Contact Us
<br>
 </p>

 <h3>What are cookies?</h3>
 <p>
     Cookies are text files containing a small amount of information that are downloaded to your
device when you visit a website. Your browser makes cookies available each time you visit our
websites. below here to see how you can control the use of cookies.
 </p>


<h3>Why do we use cookies?
</h3>
<p>Cookies are used by our websites to improve your online experience and to ensure that relevant
 content and functions are delivered and used more effectively.
 We use both session cookies and persistent cookies to perform various functions across our
 sites.
 Session cookies are downloaded to your device temporarily for the period that you browse a
 particular website; these cookies might allow you to navigate between pages more efficiently or
 enable websites to remember the preferences you select. Persistent cookies can be used to help
 websites remember you as a returning visitor or ensure the online adverts you receive are more
 relevant to your interests.
 </p>

<h3>How we use cookies?
</h3>
<p>
 
When you visit our websites, Cookies will be placed on your device in two ways. Cookies placed
by Fortune Auction, as the site operator, are called "first party" Cookies. Cookies may also be
placed on your device by a party other than Fortune Auction. Such cookies are known as "third
party” cookies. Examples of the uses of third party cookies include collecting information about
browser habits and providing tailored content to you.
While there are many different uses for first and third party cookies, the cookies used by us all
fall into one of the following four main categories of cookies:
<br>
● Strictly Necessary Cookies
<br>

● Functionality Cookies
<br>

● Performance Cookies
<br>

● Third Party Marketing / Targeting Cookies
<br>

Set out below is more information on these categories of cookies, including their purpose and
whether these cookies collect personal data:
<br>


<p>
 <h6>Cookie Type</h6>
 <h6>Strictly Necessary Cookies
 </h6>

 <h6>Purpose</h6>

 <p>
     These cookies are strictly necessary to enable you to navigate our websites and to use the
features you have requested during the course of your bidding experience (such as using your
bid slip). They are used to provide content to you, as a user, and to provide products and
services that you have requested.
Such cookies are essential to help your device download or stream information so that you can
navigate around our websites, use its features and allow you to return to pages you have
previously visited.
 </p>


 <h6>More information
 </h6>


 Here are some examples of strictly necessary cookies:
 <br>
● To position information on your device or screen so that you can see and use our
websites;
<br>
● To keep you logged in when you use our website so you are not required to log in every
time you visit; and
<br>
● Remember and update your selections in your bid slip during a live session up to the time
of its placement.
<br>

These cookies do not remember your preferences or username beyond your current visit.

<h6>Data Collection
</h6>
Yes some of these cookies do collect your personal data in order to function. They may collect
the following types of personal data:
<br>
● IP address
<br>
● Location data
<br>
● Identify you as being logged in our websites

<br>

<h6>Cookie Validity
</h6>

These cookies are deleted when you close your web browser (browser session). below here to
see how you can control the use of cookies.

<h6>Cookie Type</h6>
<h6>Functionality Cookies
</h6>

<h6>Purpose</h6>
These cookies are used to recognise you when you return to our websites and allow us to
remember the choices you make and to enable us to provide improved features. They also
enhance the functionality of our websites by storing your preferences. Functional cookies record
information about choices you've made (such as language preference) and allow us to provide
more personal features.


<h6>More information
</h6>
Here are some examples of the uses of functionality cookies:
<br>
● To remember your preferences and settings such as language, location and marketing
preferences, since your last visit;
<br>
● To remember selections in your bid slip;
<br>

● To remember if you have used a specific product on the website; and
<br>

● To show you relevant 'related article' links.
<br>

<h6>Data Collection</h6>

Some of these cookies do collect your personal data, to enable us to provide the services as
outlined above.

<br>
<h6>Cookie Validity</h6>

Functional cookies expire after a maximum of 2 years. Functionality cookies can be deleted from
your browser history at any point before their expiry time. below here to see how you can control
the use of cookies
<br>


<h6>Cookie Type</h6>
<h6>Performance Cookies
</h6>

<h6>Purpose</h6>



These cookies are used to collect information on website usage. Such cookies are used to
provide aggregated statistics on visitors to our websites. These statistics are used for internal
purposes to help us to test and improve the performance of our websites, providing a bidter user
experience.

<br>
<h6>More information
</h6>
Here are some examples of the uses of performance cookies:
<br>
● To provide statistics on how our websites are used;
<br>
● To see how effective our adverts are; and
<br>
● To assess errors within the user experience.

<br>

Additionally, we use a number of tools to assess cookie information at an aggregate level to carry
out analytical functions on our site including, Google Analytics and Maximizer.

<h6>Data Collection</h6>

While these cookies do not identify you personally while you are not logged in, they will collect
your browser information and anonymised data, for the purposes outlined above.
In certain cases, some of these cookies are managed by third parties such as Google Analytics.
These third parties are not capable of using these cookies for any purpose other than those
outlined above and they are unable to identify with these cookies.

<br>

<h6>Cookie Validity
</h6>

Performance cookies are valid for varying periods. Some performance cookies are deleted once
you close your browser, while others have an indefinite validity period. Such cookies can be
deleted at any stage using your browser settings. below here to see how you can control the use
of cookies.
<br>


<h6>Cookie Type</h6>
<h6>Third Party Marketing / Targeting Cookies
</h6>

<h6>Purpose</h6>

These cookies are used to deliver partners advertisements relevant to you, based upon your
interests.
They are also used to limit the number of times you see an advertisement as well as help
measure the effectiveness of an advertising campaign.

<br>

<h6>More information
</h6>

These cookies record your visit to our website, the pages you have visited and the products you
have selected. We will use this information to make our website and the advertising displayed
more relevant to your interests. We may also share this information with third parties for this
purpose and to measure the effectiveness of an advertising campaign.


<br>


Targeting cookies are also used to:
<br>
● Collect information about browser habits to target website content and to target
advertising;
<br>

● Link to social media networks who may use this information about your visit to target
advertising to you;
<br>

● To provide advertisers with information on your visit so that they can present you with
adverts that you may be interested in;
<br>

● Deliver content and marketing communications tailored to your interests based on
information from your visit;
<br>

● • To perform geotargeting, which allows our adverts to be displayed on third party
webpages, based upon your location;
<br>

● To perform site retargeting. A retargeting pixel (a tiny unit of code) on our webpage
leaves a cookie in the user’s browser, which causes our adverts to be displayed or to not
be displayed to you when you visit certain websites within the retargeting network (e.g.
Google Display Network); and
<br>

● To perform search retargeting, which allows our adverts to be displayed on third party
webpages, based upon your previous web search activities.
<br>

<h6>Data Collection
</h6>


Third parties (including, for example, advertising networks and providers of external services like
web traffic analysis services) may also use cookies on our websites. These cookies are likely to
be analytical/performance cookies, or targeting cookies. Please note that no personal data is
collected, an advertiser is unable to associate the cookie with a particular individual's name,
address or other personal information.
These cookies are placed by third party advertising networks with our permission.

<br>
<h6>Cookie Validity
</h6>



Third party cookies are valid for varying periods. Some cookies expire up to 13 months after they
are last updated. below here to see how you can change your consent settings to the use of
these cookies.

<br>





</p>

<h3>
 How can you control the use of cookies?
</h3>
<br>

You can amend your browser settings to block some or all cookies. To do this, follow the
instructions provided by your preferred web browser. For your ease of reference we have
provided the links below which provide instructions on how to remove and delete cookies for
some of the more common web browsers. Please be aware that if you block cookies from the
websites, some or all the website's functions may not perform as intended:
<br>

● Firefox
<br>

● Internet Explorer
<br>
● Google Chrome
<br>
● Safari
<br>
Mobile phone users may have to refer to their handset manual for details on how to block
cookies using their mobile browser. For more information about online behavioural advertising
cookies and opt-out controls, please go to <span class="email">http://www.youronlinechoices.eu/ </span> More information
regarding opting out of platform based advertising can be found at
<span class="email">https://www.appnexus.com/platform-privacy-policy</span>


</p>



<h3>Contact Us
</h3>

If you have any questions about how we use Cookies, you can contact us by emailing
<span class="email">techsupport@fortuneauction360.com</span>
<br>
Version 19/20 Published on 28/03/2020

</div>
`
let refundPolicy =    `
<div class="terms">
<div>
       
 <h1>Non-Refund Policy</h1>

 <hr>
 <h3>Non-Refund Policy for "Fortuneauction360.com"
     <br>
     <br>
     Dated of March 27, 2020

 </h3>
</div>

 <span class="spLeft">Last updated on March 28, 2020</span>

 <p>

     This Non-Refund Policy (hereinafter - the "Non-Refund Policy") is the annexe to the Agreement
(hereinafter - the "Agreement") and an official document of the operator (hereinafter - the
"Operator") of the website "FORTUNEAUCTION360.COM", which contains and defines the
procedure for refunds on request of individuals and entities (hereinafter - the "Customer") who
are interested in purchasing or using the Electronic Services provided by the Operator on the
website "FORTUNEAUCTION360.COM" (hereinafter - the "Website").
<ol>
 <li> All Customers of "FORTUNEAUCTION360.COM" does not have the advantage of the
     money-back guarantee; even if our services do not satisfy their needs. However, you can
     file your complaint to the customercare@fortuneauction360.com. This is because we are
     in the gambling business and every information needed for you to win is provided to you.
 </li>

 <li>Refunds will be made to the Customer who:

     <ol>
         <li>Whom we have violated the terms and conditions; such as not displaying on the
website to them of the closure of an auction and they bid by paying for it; </li>

<li>
 We mistakenly deducted fund beyond the money charged for a bid price.
</li> 
<li> Who experienced a breach into their momo account as a result of our technical
fault. After the investigation provides us liable. </li>
     </ol>
 </li>

 <li>Refunds will take up to 14 days to be completed.</li>

 <li>The Operator of the Website has the right to make changes to this Non-Refund Policy.
     When changes are made the Operator notifies the Customers by posting a new edition of
     the Non-Refund Policy. The previous edition of the Non-Refund Policy become no longer
     valid.
     
     </li>
</ol>

 </p>

</div>

`


let shareWolrd =() => {
    let share = `
    
<div class="notSigned">
        
<div class="hold">
    <div class="Close" id="closePay" onclick="displayProducts()">+</div>
</div>
<div class="sign-in">
    <h5 class="pay">Share The Product </h5>
    
  
    <a href="https://www.facebook.com/sharer/sharer.php?u=horix7.github.io/auction/server/frontend/" class="fa fa-facebook"></a>
    <a href="https://twitter.com/intent/horix7.github.io/auction/server/frontend/" class="fa fa-twitter"></a>
    <a  href="whatsapp://send?text=horix7.github.io/auction/server/frontend/" data-action="share/whatsapp/share" class="fa fa-whatsapp" style="font-size:48px;color:green"></a>
    

   </div>
</div>
`




App.innerHTML = share
}

let displayCounter = (id, date, hour) => {

    let dateToDo = [date, hour].join(' ')

  let countDownDate = new Date(dateToDo).getTime();
  
  let x = setInterval(function() {
  
    // Get today's date and time
    let now = new Date().getTime();
  
    // Find the distance between now and the count down date
    let distance = countDownDate - now;
  
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    let millSec =  Math.floor(distance % 1000) ;

  
    // Display the result in the element with id="demo"
    document.getElementById(id).innerHTML = days  + " "  +" : " + hours  + " " + " : "
    + minutes  + " " + " :  " + seconds  + " " + " : " + millSec + 'ms';
    
    if (distance <= 0) {
      clearInterval(x);
      document.getElementById(id).innerHTML = "EXPIRED";
      updateStatus(id)
      displayProducts()
    }
  }, 10);
  }

  let frontFaster = (id, date, hour) => {

    let dateToDo = [date, hour].join(' ')

  let countDownDate = new Date(dateToDo).getTime();
  
  let x = setInterval(function() {
  
    // Get today's date and time
    let now = new Date().getTime();
  
    // Find the distance between now and the count down date
    let distance = countDownDate - now;
  
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    let millSec =  Math.floor(distance % 1000) ;

  
    // Display the result in the element with id="demo"
    document.getElementById(id).innerHTML = days  + " "  +" : " + hours  + " " + " : "
    + minutes  + " " + " :  " + seconds  + " " + " : " + millSec + 'ms';
    
    if (distance <= 0) {
        clearInterval(x);

      document.getElementById(id).innerHTML = "expire"
      updateStatus(id)
      landing()
    }

  }, 10);

  }



let updateStatus = (id) => {
    let address=`api/v1/status/${id}`

    fetch(url+address, {
        method: 'POST',
        credentials: 'same-origin',
        cache: 'no-cache',
        headers: {
            'Content-Type':'application/json',
            'Authorization': localStorage.tokenAuth
        }
    })
    .then(results => results.json())
    .then(done => {
        console.log("done")
    })
}

let updateOff  = (id) => {
    let address=`api/v1/offside/${id}`

    fetch(url+address, {
        method: 'POST',
        credentials: 'same-origin',
        cache: 'no-cache',
        headers: {
            'Content-Type':'application/json',
            'Authorization': localStorage.tokenAuth
        }
    })
    .then(results => results.json())
    .then(done => {
        console.log(done)
    })
}





let adminCount = (id,date, hour) => {

    let dateToDo = [date, hour].join(' ')
  
    let countDownDate = new Date(dateToDo).getTime();
    let xy = 10
    
    let x = setInterval(function() {
    
      let now = new Date().getTime();
    
      let distance = countDownDate - now;
    
      // Time calculations for days, hours, minutes and seconds
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    
    
      document.getElementById(id).innerHTML ="Deadline: " +  hours + "h" + ":00"
      let manageMin = (min) => {
          if(min > 55) {
              return 59
          } else 
          if(min > 50) {
            return 55
        } else
        if(min > 45) {
            return 50
        }
        else
        if(min > 40) {
            return 45
        }
        else
        if(min > 35) {
            return 40
        }

        else
        if(min > 30) {
            return 35
        } else
        if(min > 25) {
            return 30
        }
        else
        if(min > 20) {
            return 25
        }

        else
        if(min > 15) {
            return 20
        }

        
        else
        if(min > 10) {
            return 15
        }
        else {
            return min
        }
      }
      if(hours == 0 ) {
        document.getElementById(id).innerHTML ="Deadline: " +  manageMin(minutes)  + "minutes"
      }
      if (distance <= 0) {
        clearInterval(x);

      document.getElementById(id).innerHTML = "expired"
      updateOff(id)
      displayProducts()
      }
    }, xy);
    }
    
    
let adminCountfro = (id,date, hour) => {

    let dateToDo = [date, hour].join(' ')
  
    let countDownDate = new Date(dateToDo).getTime();
    let xy = 10
    
    let x = setInterval(function() {
    
      let now = new Date().getTime();
    
      let distance = countDownDate - now;
    
      // Time calculations for days, hours, minutes and seconds
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    
    
      document.getElementById(id).innerHTML ="Deadline: " +  hours + "h" + ":00"
      let manageMin = (min) => {
          if(min > 55) {
              return 59
          } else 
          if(min > 50) {
            return 55
        } else
        if(min > 45) {
            return 50
        }
        else
        if(min > 40) {
            return 45
        }
        else
        if(min > 35) {
            return 40
        }

        else
        if(min > 30) {
            return 35
        } else
        if(min > 25) {
            return 30
        }
        else
        if(min > 20) {
            return 25
        }

        else
        if(min > 15) {
            return 20
        }

        
        else
        if(min > 10) {
            return 15
        }
        else {
            return min
        }
      }
      if(hours == 0 ) {
        document.getElementById(id).innerHTML ="Deadline: " +  manageMin(minutes)  + "minutes"
      }
      if (distance <= 0) {
        clearInterval(x);

      document.getElementById(id).innerHTML = "expired"
      updateOff(id)
      landing()
      }
    }, xy);
    }
    
  





let produiBack = () => {
let address = 'api/v1/userpro'
let  displayElement;


App.innerHTML += `<div class="midz">
<div>
 
 <div class="loader"></div>
</div>
</div>
</div>`

fetch( url+address ,{
    method: 'GET', 
    credentials: 'same-origin',
    cache: 'no-cache',
    headers: {
        'Authorization': localStorage.tokenAuth
    }
  } )
.then(res =>{ return res.json()})
.then(response =>  {
    console.log(response)

    let active = []
    let inactive = []


     responseData = response.data

      if(responseData !== undefined) {
        responseData.forEach(x => {
            if(x.status == 'true') {
                active.push(x)
            } else if (x.status == 'false'){
                inactive.push(x)
            }
        })
      }

        let inactivePro = []
     let deadlineCalc = '23 hours'

     let dataCounter = 20 
     setInterval(() => {
         return dataCounter++
     }, 1000);
     inactive.forEach(element => {
         
let intrestedBef = `
        <div>
        
        
<h2 class="alive2" id=${element.id}>${displayCounter(element.id, element.starts, element.hour)}</h2>

<div class="product">
<h2 class="dead2">Upcoming Soon</h2>
 <img src=${element.picture} class="imagi" alt="" width="100%">
    <h2 class="alive"> ${element.name}</h2>

    <div class="action">
        <div><button class="unclick interest">Interested</button></div>
                    <h4 class="need"><span class="num">${element.target}</span> <span class="reds">People Needed</span> For sponsoship</h4>
       <button class="share"  onclick="shareWolrd()"   >Share   Now </button>

                    <h5>Bidding  Price <span class="blues"> ${element.price} Rwf</span></h3>
    <p class="mess">Fastest Bidder Winns</p>
    </div>
    
</div>
        </div>

`
console.log(typeof element.picture)

inactivePro.push(intrestedBef)
allProData.push(element)
         
     });

     activeElement = []

     active.forEach(each => {
         console.log(each)
        let bidNow = `
        <div>
        <h2 class="alive2" id=${each.id}>${adminCount(each.id,each.ends, each.description)}</h2>

        <div class="product">
        <h2 class="dead">Current Auction</h2>
        <img   src=${each.picture}  class="imagi"   width="100%">
        <h5 class="alive"> ${each.name}</h5>
        <div class="action"><h4 class="need">For <span class="num">${each.winner}</span> <span class="reds">Top</span>Winners</h4>
        </div>
        <div class="action">
        <button class="bidBtn" onclick="bidPro(${each.id})">Bid Now</button>
            <h5>Bidding  Price <span class="blues"> ${each.price} Rwf</span></h3>
        <p class="mess">Fastest Bidder Winns</p>
        </div>
        </div>
        </div>

        `

        activeElement.push(bidNow)
allProData.push(each)

     })


  

     

let products = `
<button class="out" onclick="landing2()">Log Out </button>
<button class="out" onclick="displayProducts()">Refresh</button>

<h1 class="auction-head"> Auction </h1>
<div class="products" id="products">


  </div>

<h1 class="auction-head"> More </h1>
<div class="products" id="products2">


  </div>
</div>

`
displayElement = [...inactivePro, ...activeElement].sort( () => Math.random() - 0.5)

let displayProducts = () => {
    App.innerHTML = products
}

displayProducts()
let productsDiv = document.querySelector('#products')

displayElement.forEach(n => {
    productsDiv.innerHTML += n
})

})
  .catch ( error =>  console.log('Request failed', error) );

  
}


let moreItems = () => {
    let address = 'api/v1/uninterested'
    let  displayMore = [];
    
    console.log(App)
    App.innerHTML += `<div class="midz">
<div>
 
 <div class="loader"></div>
</div>
</div>
</div>`

    fetch( url+address ,{
        method: 'GET', 
        credentials: 'same-origin',
        cache: 'no-cache',
        // body: JSON.stringify(post),
        headers: {
            // 'Content-Type':'application/json',
            'Authorization': localStorage.tokenAuth
        }
      } )
      .then( results => results.json())
      .then(resopnse => {
        console.log(resopnse)

        let active = []
        let inactive = []
    
    
         responseData = resopnse.data
            responseData.forEach(x => {
                    if(x.status == 'true') {
                        active.push(x)
                    } else if (x.status == 'false'){
                        inactive.push(x)
                    }

            })

            
    let inactivePro = []
    
    inactive.forEach(element => {
        
let intrestedBef = `
<div>
<h2 class="alive2" id=${element.id}>${displayCounter(element.id, element.starts, element.hour)}</h2>

<div class="product">
<h2 class="dead2">Upcoming Soon</h2>
<img src=${element.picture} class="imagi" width="100%">
   <h2 class="alive"> ${element.name}</h2>

   <div class="action">
       <div><button class="interest" onclick="claimIntreset(${element.id})">Am interested</button></div>
                   <h4 class="need"><span class="num">${element.target}</span> <span class="reds">People Needed</span> For sponsoship</h4>
       <button class="share"  onclick="shareWolrd()"   >Share   Now </button>
        
                   <h5>Bidding  Price <span class="blues"> ${element.price} Rwf</span></h3>
   <p class="mess">Fastest Bidder Winns</p>
   </div>
   
</div>
</div>



`




allProData.push(element)

inactivePro.push(intrestedBef)
        
    });

    activeElement = []

    active.forEach(each => {
       let bidNow = `
       <div>
       <h2 class="alive2" id=${each.id}>${adminCount(each.id,each.ends, each.description)}</h2>

       <div class="product">
       <h2 class="dead">Current Auction</h2>
       <img  src=${each.picture}  class="imagi"  width="100%">
       <h5 class="alive"> ${each.name}</h5>
       <div class="action"><h4 class="need">For <span class="num">${each.winner}</span> <span class="reds">Top</span>Winners</h4>
       </div>
       <div class="action">
       <button class="bidBtn" onclick="bidPro(${each.id})">Bid Now</button>
           <h5>Bidding  Price <span class="blues"> ${each.price} Rwf</span></h3>
       <p class="mess">Fastest Bidder Winns</p>
       </div>
       </div>
       </div>

       `

       activeElement.push(bidNow)
allProData.push(each)

    })

    displayMore = [...inactivePro, ...activeElement].sort( () => Math.random() - 0.5)

            
            let productsDiv = document.querySelector('#products2')

            displayMore.forEach(n => {
               if(n !== null) {
                productsDiv.innerHTML += n
               }
            })
                    

      }).catch(err => console.log(err))
}



// App.innerHTML = `<div class="midz">
// <div>
 
//  <div class="loader"></div>
// </div>
// </div>
// </div>`

let bidPro = (id) => {
    let address = 'api/v1/bid'
    console.log(id)


    let infoPro = allProData.filter(n => n.id == id)
    let address12 = 'https://api.havanao.com/api/sale/purchase?api_token=NJoyXg1on9rG4RDUDfNN0nBUR1JJp8E4FRuGR6h767ApnuQ1cJmiqgNZW7wZ'


    
    
    let pay = `
    <div class="form">
    <div class="hold">
        <div class="Close" id="closePay" onclick="displayProducts()">+</div>
    </div>
    <div class="sign-in">
        <h1 class="pay">Pay To Finish The Bid</h1>
        <h3 class="pay">Bidding For: <span> ${infoPro[0].name} </span></h3>
        <h4 class="pay">Paying For: <span>${infoPro[0].price} rwf</span></h4>
        <div class="payOp">
    <div class="mmtn" id="mmtn">
      MTN
    </div>
    <div class="airtel" id="hava11">
      Airtel
    </div>
    <div class="tigo" id="hava22">
      Tigo
    </div>
  </div>
        <div class="mtn">Choose Your  Mobile Money Account </div> 
        <select name="payments" id="payz">
        <option value=""></option>
        <option value="mtn">MTN</option>
        <option value="airtel">Airtel</option>
        <option value="tigo">Tigo</option>


    </select>
     
<div>

  <div class="leave">  
    <div> 250 </div>
    <input type="number" placeholder="Mobile Number" class="realTalk" id="payer"/>
  </div>
   </div> 
    <button class="submit" id="payeNow">Pay</button> 
    </div>
    </div>
    `
    App.innerHTML = pay

    let mTn = document.querySelector('#mmtn')
    let payOption = document.querySelector('#payz')

    let hava = document.querySelector('#hava11')
    let hava2 = document.querySelector('#hava22')
    let submitPay = document.querySelector('#payeNow')    
    let formm = document.querySelector('.leave')
    let userNumber = document.querySelector('#payer')


        
    let postForPayment = {
        amount: infoPro[0].price,
        customer: userNumber.value,
        transactionid: new Date().getTime() + "-id-" + infoPro[0].id,
        comment: "new customer"
    }

    payOption.addEventListener("change", () => {
        if(payOption.value == "mtn") {
            formm.style.visibility = "visible"
            formm.style.backgroundColor = "black"
            formm.style.border = "black 6px solid"
            userNumber.style.borderColor = "black"
            payOption.value = "mtn"
    
            userNumber.placeholder = "Mtn-number"
            address12 = "http://qa.mvendpay.com/api/requestpayment/"
            hhava = false
        } else if(payOption.value == "airtel")  {
            formm.style.visibility = "visible"
            formm.style.backgroundColor = "black"
            formm.style.border = "black 6px solid"
            userNumber.placeholder = "Airtel-number"
            userNumber.style.borderColor = "black"
    
            payOption.value = "airtel"
    
            address12 = 'https://api.havanao.com/api/sale/purchase?api_token=NJoyXg1on9rG4RDUDfNN0nBUR1JJp8E4FRuGR6h767ApnuQ1cJmiqgNZW7wZ'
            hhava = true
    
        }else if(payOption.value == "tigo") {
            formm.style.visibility = "visible"
            formm.style.backgroundColor = "black"
            formm.style.border = "black 6px solid"
            userNumber.placeholder = "Tigo-number"
            userNumber.style.borderColor = "black"
    
            payOption.value = "tigo"
            
            address12 = 'https://api.havanao.com/api/sale/purchase?api_token=NJoyXg1on9rG4RDUDfNN0nBUR1JJp8E4FRuGR6h767ApnuQ1cJmiqgNZW7wZ'
    
            hhava = true
        }
    })

    let hhava = true
    mTn.onclick = () => {
        formm.style.visibility = "visible"
        formm.style.backgroundColor = "rgb(192, 141, 0)"
        formm.style.border = "rgb(192, 141, 0) 6px solid"
        userNumber.style.borderColor = "rgb(192, 141, 0)"
        payOption.value = "mtn"

        userNumber.placeholder = "Mtn-number"
        address12 = "http://qa.mvendpay.com/api/requestpayment/"
        hhava = false

      

    }


        
    hava.onclick = () => {
        formm.style.visibility = "visible"
        formm.style.backgroundColor = "red"
        formm.style.border = "red 6px solid"
        userNumber.placeholder = "Airtel-number"
        userNumber.style.borderColor = "red"

        payOption.value = "airtel"

        address12 = 'https://api.havanao.com/api/sale/purchase?api_token=NJoyXg1on9rG4RDUDfNN0nBUR1JJp8E4FRuGR6h767ApnuQ1cJmiqgNZW7wZ'
        hhava = true

        postForPayment = {
            amount: infoPro[0].price,
            customer: userNumber.value,
            transactionid: new Date().getTime() + "-id-" + infoPro[0].id,
            comment: "new customer"
        }

        
    
    }

    
    hava2.onclick = () => {
        formm.style.visibility = "visible"
        formm.style.backgroundColor = "blue"
        formm.style.border = "blue 6px solid"
        userNumber.placeholder = "Tigo-number"
        userNumber.style.borderColor = "blue"

        payOption.value = "tigo"
        
        address12 = 'https://api.havanao.com/api/sale/purchase?api_token=NJoyXg1on9rG4RDUDfNN0nBUR1JJp8E4FRuGR6h767ApnuQ1cJmiqgNZW7wZ'

        hhava = true
      

    }

    submitPay.addEventListener( "click", async() =>  {

        submitPay.innerHTML = `<i class="fa fa-spinner fa-spin"></i>`

        if(hhava == true) {
            postForPayment = {
                amount: infoPro[0].price,
                customer: "250" + userNumber.value,
                transactionid: new Date().getTime() + "-id-" + infoPro[0].id,
                comment: "new Payment"
            }

            
        fetch(address12 , {
            method: 'POST', 
            credentials: 'same-origin',
            cache: 'no-cache',
            body: JSON.stringify(postForPayment),
            headers: {
                'Content-Type':'application/json',
            }
            })
            .then(resul => resul.json())
            .then(resul => {
        let firstLink = `https://api.havanao.com/api/sale/status?transactionId=${postForPayment.transactionid}&api_token=NJoyXg1on9rG4RDUDfNN0nBUR1JJp8E4FRuGR6h767ApnuQ1cJmiqgNZW7wZ`

            if(resul.code == 200) {
                alert("Payment Request Sent To Your Mobile ")
                alert("Press Ok If You Have Confirmed on Your Mobile")
                
                fetch(firstLink, {
                    method: 'GET', 
                    credentials: 'same-origin',
                    cache: 'no-cache',
                })
                .then(resul => resul.json())
                .then(done => {
                    if(done.transactionStatus == "APPROVED") {
               
                        fetch( url + address , {
                            method: 'POST', 
                            credentials: 'same-origin',
                            cache: 'no-cache',
                            body: JSON.stringify( {
                                productid: id,
                                time: new Date().getTime(),
                                momopay: userNumber.value
                            }),
                            headers: {
                                'Content-Type':'application/json',
                                'Authorization': localStorage.tokenAuth
                            }
                        })
                            .then(results =>results.json())
                            .then(done => {
                            alert(`Your bid for ${infoPro[0].name} was successfull`)
    
                                displayProducts()
                            })
                        
                       }
    
                       else if (done.transactionStatus == "REQUESTED") {
            alert("did not Approve the request on Your Mobile")
            displayProducts()
    
                       }  else if  (done.transactionStatus == "DECLINED") {
                        alert("Payment Was Declined")
                        displayProducts()
                       }
                 
                })
         
        } else {
    
            alert("Payment Failed ")
    
            displayProducts()
        }
    })



        } else {   
            
                let adss = "hash"
                let data = {
                    "requesttype":"PaymentRequest",
                    "amount": infoPro[0].price,
                    "appid":"10100004",
                    "timestamp": new Date().getTime(),
                    "appkey": "FORTUNEPAY", 
                    "payment_account": "250" + userNumber.value,
                    "txref": new Date().getTime() + Math.floor(Math.random()),
                    "currency":"RWF", 
                    "integrity_hash": "nothing"
                }

              fetch(url + adss, {
                    method: 'POST', 
                    credentials: 'same-origin',
                    cache: 'no-cache',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type':'application/json',
                    }
                })
                .then(rez => rez.json())
                .then(newData => {
                    let arryz = data
                    arryz.integrity_hash = newData.data
                    postForPayment =  arryz

                        payWithMomo(postForPayment)
                   
                })
               


              
            
        }    
    
    })
  
}


let payWithMomo = (postForPayment) => {
    fetch("http://qa.mvendpay.com/api/requestpayment/" , {
        method: 'POST', 
        body: JSON.stringify(postForPayment),
        headers: {
            'Content-Type':'text/plain',
        }
        })
    .then(reso => reso.json())
    .then(resol => {
        if(resol.status_code == "100") {
            alert("Payment Request Sent To Your Mobile ")
            alert("Press Ok If You Have Confirmed on Your Mobile")
            fetch("http://qa.mvendpay.com/api/requestpayment/", {
                method: 'POST', 
                body: JSON.stringify({
                    "requesttype": "gettransactionstatus",
                    "appid": "10100004",
                    "appkey":"FORTUNEPAY",
                    "timestamp": postForPayment.timestamp,
                    "txref": postForPayment.txref,
                    "integrity_hash": "97c17679854b1dcf53448fceb1f12a83ec384cf8dab2213616ae999927d4e208"
               }),
                headers: {
                    'Content-Type':'text/plain',
                }
                })
                .then(reso => reso.json())
                .then(results => {

                    let address = "api/v1/bid"

                    if(results.status == "Completed") {
                        
                        fetch( url + address , {
                            method: 'POST', 
                            credentials: 'same-origin',
                            cache: 'no-cache',
                            body: JSON.stringify( {
                                productid: id,
                                time: new Date().getTime(),
                                momopay: userNumber.value
                            }),
                            headers: {
                                'Content-Type':'application/json',
                                'Authorization': localStorage.tokenAuth
                            }
                        })
                            .then(results =>results.json())
                            .then(done => {
                            alert(`Your bid for ${infoPro[0].name} was successfull`)
    
                                displayProducts()
                            })
                        
                    } else  {
                        alert("did not Approve the request on Your Mobile")
                        displayProducts()
    
                    }
                })
            
        } else  {
            alert("Payment Failed")
            displayProducts()
        }
    })
}


let claimIntreset = (elementId) => {
let address = 'api/v1/interest'


    App.innerHTML = `<div class="midz">
    <div>
     
     <div class="loader"></div>
    </div>
    </div>
    </div>`

let productId = {
    productid: elementId
}


fetch( url + address , {
    method: 'POST', 
    credentials: 'same-origin',
    cache: 'no-cache',
    body: JSON.stringify(productId),
    headers: {
        'Content-Type':'application/json',
        'Authorization': localStorage.tokenAuth
    }
})
.then(results =>results.json())
.then(done => {

    produiBack()
    moreItems()

    
})

}




let loginBack = () => {
let address = 'api/v1/auth/signin'

    let login = `
    <div class="form">
    <div class="hold">
        <div class="Close" onclick="landing()">+</div>
    </div>
    <div class="sign-in">
        <h1>Login</h1>
            <input type="text" required placeholder="User Name" class="login"  id="loginName"> 
        <input type="password" required placeholder="Your Password" class="login" id="loginPass"> 
        <button class="submit" id="loginSub"> Login</button>
       </div>      
  </div>
  <div id="err"  class="error"> 
    
  </div>
 
`
// let loginPage = () => {postLogin
    App.innerHTML = login
    
let loginName = document.querySelector('#loginName')
let loginPass = document.querySelector('#loginPass')
let subLog = document.querySelector('#loginSub')
let erroMessage = document.querySelector('#err')




subLog.onclick = async () => {
    subLog.innerHTML = `<i class="fa fa-spinner fa-spin"></i>`
    let loginInfo = {
        "email": loginName.value,
        "password": loginPass.value
    }


    console.log(loginInfo)

let results = await fetch(url+address, {
    method: 'POST',
    credentials: 'same-origin',
    cache: 'no-cache',
    body: JSON.stringify(loginInfo),
    headers: {
        'Content-Type':'application/json'
    }
  })

  let done = await results.json()
  subLog.innerHTML = `Login`

  console.log(done)
      if(done.status >= 400 ) {
          console.log(done)
          erroMessage.style.visibility =  'visible'
          erroMessage.innerHTML = done.error
          erroMessage.style.animationName =  'erroror';
            location.href = "#err"
          setTimeout(() => {
          erroMessage.style.visibility =  'hidden'
          erroMessage.style.animationName =  'none';
          }, 15000)

      } else {
          localStorage.setItem("tokenAuth", done.data[0].token)

          console.log( done.data[0].token)
          console.log(done)
          produiBack()
          moreItems()

      }

}

}

let loginConnected = () => loginBack()

let landing2 = () => {
    localStorage.tokenAuth = undefined
    landing()
}






let signUpBack = () => {
    let address = 'api/v1/auth/signup'
    
    let signUp = ` 
    <div class="form">
   <div class="hold">
       <div class="Close" onclick="landing()">+</div>
   </div>
   <div class="sign-in">
       <h1>Join Now </h1>
       <input type="text" required placeholder="Your Names" class="login" id="names"> 
       <input type="text" required placeholder="User Name" class="login" id="userName">
       <div class="mtn2">Your Current age </div>
       <input type="number" required placeholder="Your Age" class="login" id="date">
       <input type="number" required placeholder="Your Phone" class="login" id="phoneNumber"> 
       <input type="text" required placeholder="Your Email" class="login" id="email"> 
       <input type="password" required placeholder="Your Password" class="login" id="pass"> 
       <button class="submit" id="signSub" >Sign Up</button>
      </div>
   </div>

   <div id="err"  class="error"> 
    
   </div>

   `

    App.innerHTML = signUp
   
    
    let email = document.querySelector('#email')
    let names = document.querySelector('#names')
    let userName = document.querySelector('#userName')
    let date = document.querySelector('#date')
    let phoneNumber = document.querySelector('#phoneNumber')
    let pass = document.querySelector('#pass')



   
        
    let subLog = document.querySelector('#signSub')
    let erroMessage = document.querySelector('#err')
    
    
    
    
    subLog.onclick = async () => {
    subLog.innerHTML = ` <i class="fa fa-spinner fa-spin"></i>`

        let postData = {
            "firstname": names.value,
            "secondname": userName.value,
            "email": email.value,
            "password": pass.value,
            "address": address.value,
            "phone": phoneNumber.value,
            "age": 	date.value,
    }

    
    
        console.log(postData)
    
    let results = await fetch(url+address, {
        method: 'POST',
        credentials: 'same-origin',
        cache: 'no-cache',
        body: JSON.stringify(postData),
        headers: {
            'Content-Type':'application/json',
        }
      })
    
      let done = await results.json()
      subLog.innerHTML = `Sign Up`
    
      console.log(done)
          if(done.status == 400 ) {
              console.log(done)
              alert("Validation Error")
              let errorMess = done.message || done.error
              let respnses = errorMess.split(/\"/)
              let errorz = []
              if(respnses.some(n => n == "email")) {
                errorz.push("email")
              }  if (respnses.some(n => n == "phone")){
                errorz.push("phoneNumber")
              }  if (respnses.some(n => n == "password")){
                errorz.push("pass")
              }
              if (respnses.some(n => n == "secondname")){
                errorz.push("userName")
              }

              if (respnses.some(n => n == "firstname")){
                errorz.push("names")
              }

              errorz.forEach(n => {
                  document.querySelector(`#${n}`).style.border = "1px red solid"
              })
    
          }else if(done.status == 409) {
            erroMessage.style.visibility =  'visible'
            erroMessage.innerHTML = done.message || done.error
            erroMessage.style.animationName =  'erroror';
            location.href = "#err"
            setTimeout(() => {
            erroMessage.style.visibility =  'hidden'
            erroMessage.style.animationName =  'none';
            }, 10000)
          } else {
              console.log(done.data, 'hear now')
              localStorage.setItem('tokenAuth', done.data[0].token)
            produiBack()
            moreItems()
        }
    
    }
    
    }


    let siginUpConnect = () => signUpBack()




let displayProducts = () => {
    produiBack()
    moreItems()
}




let landingPage = `
<div class="bg">
<nav>
<img class="hide iimg" src="./assets/WhatsApp Image 2020-03-24 at 19.55.29 (1).jpeg" width="70px">
<div></div>
<button class="headbtn blue join hide" id="register" onclick="signUpBack()">Join Now</button>
<button class="headbtn blue hide left full" id="login" onclick="loginBack()"> Log In</button>

<img class="nnew" src="./assets/WhatsApp Image 2020-03-24 at 19.55.29 (1).jpeg" width="100px">
    <button class="headbtn blue nnew" id="login" onclick="loginBack()"> Log In</button>
    <button class="headbtn blue nnew" id="register" onclick="signUpBack()">Join Now</button>
    
</nav>
<div class="header">
    
<div class="description">
    <h1>WELCOME TO YOUR ALU RWANDA DIGITAL AUCTION MARKETPLACE</h1>
    <p>Where The Fastest Bidder Wins, Not The Highest, Richest or Smartest </p>
    <div class="note2">Every Milliseconds Counts
    </div>
    <button class="btn" onclick="signUpBack()">Join Now</button>
</div>
<div class="secondHead">
<img class="img" src="./assets/auction.png" width="80%">


</div>
</div>
</div>

<div class="mid">

<div class="note">“No one knows exactly what and where the treasure is hiding. Only the constant fortune seeker finds it. keep believing and
    searching until you get it.” – Benedict Okolie
    </div>
<div class="notice">
    <img src="./assets/sad person.jpg" width="100%">
    <p>Are you in need of something but cannot afford it? Now is your chance!   </p>
</div>
<p class="warn">
Note: Fortune Auction is <span>legally registered </span> at the Rwanda Development Board. See legal Document below.
</p>

<div class="people">
   
    <img src="./assets/Smartphone users.jpeg" width="80%">
    <p>Here, you could get what you want at the most ridiculously
        insane bidding price. If you’re the fastest bidder to pay for it.
        We Auction Products at a crazy bidding price for the fastest
        bidder who pays first to claim it.</p>
</div>


<p class="cont">
    We Only Exist To Serve And Connect You The Fortune Seeker To Treasure;
Regardless Of Your Income, Background Or Status <br></p>

<div class="cont white">  <button onclick="signUpBack()"> Join Now</button> <span>It’s Free to be a Member</span>
</div>
<div class="descr">
   <img src="./assets/1200px-Icon-not-under18.svg.png" width="50px">
    <h2>UNDER AGE 18 IS NOT ALLOWED TO BID</h2>
</div>
<div>
    <h1 class="play">How To Win </h1>
    <div class="game">
        <div class="box">
            <i></i>
            <img src="./assets/Registration Icon.png" srcset="" width="50px">
            <h4 class="one">Step 1</h4>
            <p>Register for
                Free to be a
                Member. And
                click “I’m
                Interested” On
                1 or all the
                product of your
                choice.
                </p>
        </div>

        <div class="box">
            <i></i>
   <img src="./assets/user-login-icon-png-4.png" srcset="" width="50px">

            <h4 class="two">Step 2</h4>
            <p>During Auction
                Day, login to your
                account & wait for
                the final
                countdown to start
                bidding. Ensure to
                have money in your
                Mobile Money
                Account
                
                </p>
        </div>

        <div class="box">
            <i></i>
    <img src="./assets/Bidding with Mobile Money.PNG" srcset="" width="50px">

            <h4 class="three">Step 3</h4>
            <p>To Complete Your
                bid, pay for the
                product(s) at the
                giving bidding price
                using MTN Airtel and Tigon Mobile
                Money Account.
                REMEMBER TO BE
                THE FASTEST!
                </p>
        </div>

        <div class="box">
            <i></i>
    <img src="./assets/Winner Icon.png" srcset="" width="50px">

            <h4 class="four">Step 4</h4>
            <p>After the auction
                deadline, we
                announce the
                winner(s) in 20
                minutes via our
                website. Make
                sure to check.
                
                </p>
        </div>

         <div class="box">
            <i></i>
    <img src="./assets/Phone Call Icon.png" srcset="" width="50px">

            <h4 class="five">Step 5</h4>
            <p>We call the winner(s)
                to confirm their
                identity and they
                come and pick their
                item or we ship it to
                their location; which
                includes a shipping
                fee.
                
                </p>
        </div>
    </div>
</div>

<div class="warn"> NOTE: IF YOU DON'T HAVE MOMO ACCOUNT, FIND SOMEONE WHO HAS AN ACCOUNT AND MONEY IN IT. DON'T MISS OUT! </div>
<h1 class="play">TEAM</h1>
<div class="prof">
    
    <div class="bx">
        <img class="profile" src="./assets/my picture.jpg" width="200px">
        <h4>Benedict OKOLIE</h4>
    </div>
    <div class="bx">
        <img class="profile" src="./assets/WhatsApp Image 2020-04-12 at 09.27.00.jpeg" width="200px">
        <h4>Morris MWITI</h4>
    </div>
    <div class="bx">
    <img class="profile"  src="../frontend/assets/WhatsApp Image 2020-03-30 at 13.12.03.jpg" width="200px" alt="">
        <h4>Paul Mahoro</h4>
    </div>

</div>
</div>
 
<h1 class="play"> Auction </h1>

<div class="products"  id="frontpro" onload="frontDisplayPros()"> 

  </div>
</div>

<p class="warn2">
Note: When you bid for a product by paying for it, we DO NOT REFUND. Be the fastest bidder to win at our bidding price; because YOUR REWARD is more than the BIDDING PRICE. Also, we use the paid bid to provide the <span> cost of transportation, communication, charge fees etc. </span> of running this platform and to reach Sponsor who will provide your need.
 
</p>

<h1 class="play"> Current Winners </h1>
<div class="prof"  id="wiin">

</div>

<footer>
<div class="fot">
    <h4>Conditions</h4>
    <a href="#" onclick="displayInfo()">Terms And Conditions</a>
    <a href="#" onclick="displayref()">Non-Refund Policy</a>
    <a href="#"onclick="displaypri()">Privacy & Cookie Policy</a>
   
</div>
<div class="fot">
    <h4>Contact Us</h4>
    <a href="#" onclick="" target="blank">Email: fortuneaction360@gmail.com</a>
    <a href="#" onclick="">Call Us: +250780178459</a>

</div>
<div class="fot">
    <h4>Documentation</h4>
    <a href="#" onclick="">FAQ</a>
    <a href="#" onclick="displayLegals()">Legal Document</a>

</div>
</footer>

<div class="foot">
Copyright © 2020
<span> Address: 4th Floor Kigali Height West Wing</span>

</div>


<div id="myModal" class="modal" onload="popup()">

  <div class="modal-content" >
    <span class="close" onclick="closeBan()">&times;</span>
    <h1 class="attention"> ATTENTION! ATTENTION!! ATTENTION! ! !</h1>

    <p class="attention2">Fortune Auction is establish to auction sponsored valuable
    products to our esteem users. However, due to the coronavirus
    pandemic & country lockdown. We will temporally auction
    sponsored funds to support students welfare.
    </p>

    <p class="attention3"> Note: After the lockdown, we will resume auctioning sponsored products </p>

    <div class="attention4"> 
    <img src="./assets/410b2019-7501-483a-a461-b50de6a78ca6-img_9273-2.jpg" alt="" width="100px">
    <button class="midBtn" onclick="shareSec()">SHARE NOW TO HELP OTHERS IN NEED.</button>
  <div> <img src="./assets/brown-leather-wallet-with-lots-money_68708-304.jpg" alt=""  width="100px"> <p class="money"> make money from home </p> </div>
    </div>
  </div>

</div>

<script>
    


</script>
`

setTimeout( () => {
    document.getElementById("myModal").style.display = 'block'
    }, 4000)

let closeBan = () => {
    document.getElementById("myModal").style.display = 'none'
}



let slideIndex = 1;

let plusDivs = (n) =>{
  showDivs(slideIndex += n);
}

let  showDivs = (n) => {
  let i;
  let x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}


let notAuthed = `
    
<div class="notSigned">
        
<div class="hold">
    <div class="Close" id="closePay" onclick="landing()">+</div>
</div>
<div class="sign-in">
    <h1 class="pay">Your Not Signed In </h1>
    <button class="submit" onclick="loginBack()">Login</button>
    <button class="submit" onclick="signUpBack()">SignUp</button>

   </div>
</div>
`
// App.innerHTML = landingPage



// let Interested = (e) => {
//     console.log(e)
//     let interest = document.querySelector(`.interest`)
    
//     interest.innerHTML = "intrested"
//     interest.style.backgroundColor = 'orange'
// }



let frontDisplayPros = () => {
    let address = 'api/v1/frontpro'
    let diplayIn = document.getElementById('frontpro')

    diplayIn.innerHTML = `<div class="midz">
    <div>
     
     <div class="loader"></div>
    </div>
    </div>
    </div>`

    fetch(url + address , {
        method: 'GET', 
        credentials: 'same-origin',
        cache: 'no-cache',
    })
    .then(results => results.json())
    .then(resopnse => {
       
        console.log(resopnse)

        let active = []
        let inactive = []
    
    
         responseData = resopnse.data
            responseData.forEach(x => {
                    if(x.status == 'true') {
                        active.push(x)
                    } else if (x.status == 'false'){
                        inactive.push(x)
                    }

            })

            
    let inactivePro = []
    
    inactive.forEach(element => {
        
let intrestedBef = `
<div>
<h2 class="alive2" id=${element.id}>${frontFaster(element.id, element.starts, element.hour)}</h2>

<div class="product">
<h2 class="dead2">Upcoming Soon</h2>
<img src=${element.picture} class="imagi" width="100%">
   <h2 class="alive"> ${element.name}</h2>

   <div class="action">
       <div><button class="interest" onclick="notAuth()">Am interested</button></div>
                   <h4 class="need"><span class="num">${element.target}</span> <span class="reds">People Needed</span> For sponsoship</h4>
       <button class="share"  onclick="shareSec()"   >Share</button>
        
                   <h5>Bidding  Price <span class="blues"> ${element.price} Rwf</span></h3>
   <p class="mess">Fastest Bidder Winns</p>
   </div>
   
</div>
</div>



`




allProData.push(element)

inactivePro.push(intrestedBef)
        
    });

    activeElement = []

    active.forEach(each => {
       let bidNow = `
       <div>
       <h2 class="alive2" id=${each.id}>${adminCountfro(each.id,each.ends, each.description)}</h2>

       <div class="product">
       <h2 class="dead">Current Auction</h2>
       <img  src=${each.picture}  class="imagi"  width="100%">
       <h5 class="alive"> ${each.name}</h5>
       <div class="action"><h4 class="need">For <span class="num">${each.winner}</span> <span class="reds">Top</span>Winners</h4>
       </div>
       <div class="action">
       <button class="bidBtn" onclick="notAuth()">Bid Now</button>
           <h5>Bidding  Price <span class="blues"> ${each.price} Rwf</span></h3>
       <p class="mess">Fastest Bidder Winns</p>
       </div>
       </div>
       </div>

       `

       activeElement.push(bidNow)
allProData.push(each)

    })

    let displayMore = [...inactivePro, ...activeElement].sort( () => Math.random() - 0.5)
     diplayIn.innerHTML = null

    displayMore.forEach( n => {
        diplayIn.innerHTML += n
    })        
        
    })
}



let displayFrontWinners = () =>  {
    let address = 'api/v1/frontwin'
    let diplayIn = document.querySelector('#wiin')
    diplayIn.innerHTML = `<div class="midz">
    <div>
     
     <div class="loader"></div>
    </div>
    </div>
    </div>`
    fetch(url + address , {
        method: 'GET', 
        credentials: 'same-origin',
        cache: 'no-cache',
    })
    .then(results => results.json())
    .then(response => {

        console.log(response)
        diplayIn.innerHTML = null

        response.data.forEach( data => {
    let oneBox = `         
    <div class="bx1">
    <img class="profile" src=${data.picture} width="200px" alt="">
    <h4>${data.name}</h4>
    <h5>${data.bidtime}</h5>
    <p>${data.product}</p>
    </div>
`

diplayIn.innerHTML +=  oneBox

        })
    })
}








let landing = () => {

    App.innerHTML = landingPage

frontDisplayPros()
displayFrontWinners()

}

if(localStorage.tokenAuth == undefined || localStorage.tokenAuth.toString() == "undefined") {
    landing()
} else {
    displayProducts()
}

// let loginToproducts= () => {
//     App.innerHTML = products
// }

let notAuth = () => {
    App.innerHTML = notAuthed
}



let shareSec =() => {
    let share = `
    
<div class="notSigned">
        
<div class="hold">
    <div class="Close" id="closePay" onclick="landing()">+</div>
</div>
<div class="sign-in">
    <h5 class="pay">Share The Product </h5>
    
<a href="https://www.facebook.com/sharer/sharer.php?u=horix7.github.io/auction/server/frontend/" class="fa fa-facebook"></a>
<a href="https://twitter.com/intent/horix7.github.io/auction/server/frontend/" class="fa fa-twitter"></a>
<a  href="whatsapp://send?text=horix7.github.io/auction/server/frontend/" data-action="share/whatsapp/share" class="fa fa-whatsapp" style="font-size:48px;color:green"></a>

   </div>
</div>
`

App.innerHTML = share
}




let displayInfo = () => {
    
    let insertData = `

  <div class="mido">
  
  <img src="./assets/WhatsApp Image 2020-03-24 at 19.55.29 (1).jpeg" alt="" width="150px" onclick="landing()">
  ${termsAndCondition}
  
  </div>

   
    `

    App.innerHTML = insertData
}




let displayLegals = () => {
    
    let insertData = `

  <div class="mido">
  
  <img src="./assets/WhatsApp Image 2020-03-24 at 19.55.29 (1).jpeg" alt="" width="150px" onclick="landing()">
  ${legalDocs}
  
  </div>

   
    `

    App.innerHTML = insertData
}


let displayref = () => {
    
    let insertData = `

  <div class="mido">
  
  <img src="./assets/WhatsApp Image 2020-03-24 at 19.55.29 (1).jpeg" alt="" width="150px" onclick="landing()">
  ${refundPolicy}
  
  </div>

   
    `

    App.innerHTML = insertData
}


let displaypri = () => {
    
    let insertData = `

  <div class="mido">
  
  <img src="./assets/WhatsApp Image 2020-03-24 at 19.55.29 (1).jpeg" alt="" width="150px" onclick="landing()">
  ${privacyPolicy}
  </div>

   
    `

    App.innerHTML = insertData
}











