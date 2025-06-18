import React from 'react'

const Privacy = () => {
    document.title = 'Privacy Policy - Gem Hunters'
  return (
    <div className='global-padding flex justify-center'>
      <div className='terms-section px-10 sm:px-20 md:px-30 lg:px-40 xl:px-60 py-7 flex justify-start flex-col gap-1'>
        <div className='title'>
          <h2 className='bold'>PRIVACY POLICY</h2>
        </div>
        <div className='text-section flex flex-col justify-start'>
          <p className='mb-10'>Effective Date: March 16th, 2024</p>
          <p className='bold'>1. INTRODUCTION</p>
          <p>
            Welcome to Gem Hunters, operated by DBH Digital LLC ("we", "us" or
            "our"). We are registered at 151 Calle de San Francisco, STE 200,
            San Juan, PR 00901. . We are committed to protecting your privacy
            and the security of your information. This Privacy Policy outlines
            how we collect, use, disclose, and protect your information when you
            use our Platform. Terms used but not defined in this Privacy Policy
            can be found in our Terms of Service. ‍
          </p>
          <br />
          <br />
          <p className='bold'>2. INFORMATION WE COLLECT</p>
          <p>
            The categories of information listed below will collectively be
            referred to as “Information”: ‍<br />
            <br />
            2.1 Personal Information: We may collect personal information,
            including but not limited to your name, email address, mailing
            address, phone number and location when you register for an account
            (collectively referred to as “Personal Information”). ‍<br />
            <br />
            2.2 Technical Information: We may collect technical information,
            including your IP address, browser type, operating system, and
            device information when you use our Platform. We use cookies and
            similar technologies to collect this information. Cookies are small
            pieces of text sent by your web browser by a website you visit. A
            cookie file is stored in your web browser and allows the website or
            a third-party to recognize you and make your next visit easier and
            the website more useful to you. Essentially, cookies are a user’s
            identification card for the Company’s servers. ‍
            <br />
            <br />
            2.3 Communication: We may collect information related to your
            communication with us, including emails and chat messages. ‍<br />
            <br />
            2.4 Purchases: When you make purchases on our Platform, we collect
            information related to your transactions, including details of the
            items purchased, their quantities, and any discounts applied. The
            Company exclusively accepts cryptocurrency as a form of payment for
            our Services.
            <br />
            <br />
            For some transactions, payments are directly received by us,
            ensuring a secure and private transfer of your cryptocurrency funds.
            In other cases, we may facilitate payments through a trusted
            third-party cryptocurrency payment provider. It is important to note
            that when a third-party provider is used, they are responsible for
            processing your payment information securely. The Company does not
            collect or store your financial information directly; all
            cryptocurrency transactions are conducted in accordance with the
            high privacy and security standards of the blockchain network used.
          </p>
          <br />
          <br />
          <p className='bold'>3. HOW WE USE YOUR INFORMATION</p>
          <p>
            {' '}
            <br />
            <br />
            3.1 PROVIDE SERVICES: We use your Information to provide you access
            to reports, live discussions, allow you and others users to network
            with each other, and process payments.
            <br />
            <br />
            <br />
            ‍ 3.2 COMMUNICATION: We may use your information to communicate with
            you about upcoming reports, discussions, events, and other important
            notices. ‍<br />
            <br />
            <br />
            3.3 ANALYTICS: We may use aggregated and anonymized data for
            analytics to improve our Services. We also reserve the right to
            share the anonymized data with third party analytics service
            providers.
            <br />
            <br />
            <br />
            3.4 MOBILE AND MESSAGING: We don't share, sell, or distribute your
            mobile number. Expect 1-4 texts/notifications weekly. This may
            change without prior notice. Message and data rates might apply.
          </p>
          <br />
          <br />
          <p className='bold'>4. DISCLOSURE OF YOUR INFORMATION</p>
          <p>
            4.1 SERVICE PROVIDERS: We may share your Information (but only to
            the extent necessary and relevant) with third-party service
            providers who assist us in delivering our Services, such as payment
            processors, hosting providers, and communication tools. ‍<br />
            <br />
            <br />
            4.2 LEGAL REQUIREMENTS: We may disclose your information as required
            by law, such as to comply with a subpoena, legal process, or
            government request. ‍<br />
            <br />
            <br />
            4.3 BUSINESS TRANSFERS: In the event of a merger, acquisition, or
            sale of all or part of our assets, your Information may be
            transferred as part of the transaction.
          </p>
          <br />
          <br />
          <p className='bold'>5. YOUR CHOICES</p>
          <p>
            You have the following rights regarding your Personal Information: ‍
            <br />
            <br />
            <br />
            5.1 ACCESS: You can request access to the Personal Information we
            hold about you at any time. ‍<br />
            <br />
            <br />
            5.2 CORRECTION: You can request corrections to inaccurate or
            incomplete Personal Information. ‍<br />
            <br />
            <br />
            5.3 DELETION: You can request the deletion of your Personal
            Information, subject to legal limitations. ‍
          </p>
        </div>
      </div>
    </div>
  )
}

export default Privacy
