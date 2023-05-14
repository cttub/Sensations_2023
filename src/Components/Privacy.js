import React, { Component } from 'react';
import Footer from './Footer';
class Privacy extends Component {
    state = {  } 
    render() { 
        return (
            <div id='policies'>

            <div className='information'>
                    <h1>Privacy Policy | Last Updated : 5.14.2023</h1>
                <p className='cb-paragraph'>
                At Sensationsgc.club, we value the privacy of our users and are committed to protecting their personal information. This Privacy Policy outlines the types of personal information we collect, how we use it, and the measures we take to protect it.
                <br></br><br></br>
                <h3><u><b>Information Collected:</b></u></h3>
                We may collect personal information from our users in the following ways:
            
                <span>
                    <ul>
                        <li>When users fill out forms on our website, such as when subscribing to our newsletter or submitting a contact form.</li>
                        <li>When users interact with our website, such as through cookies, IP addresses, and other similar technologies.</li>
                        <li>When users make purchases or transactions on our website, including their billing and payment information.</li>
                    </ul>
            
                </span>
                <h3><u><b>Information Use:</b></u></h3>
                We use personal information collected from our users for the following purposes:
                <span>
                    <ul>
                    <li>To provide and improve our website and its features.</li>
                    <li>To communicate with our users regarding their inquiries, requests, and purchases.</li>
                    <li>To send newsletters, promotional materials, and other marketing communications.</li>
                    <li>To comply with legal and regulatory requirements.</li>
                    </ul>
                </span>
                <h3><u><b>Information Protection:</b></u></h3>
                We take measures to ensure the security and confidentiality of our users' personal information. These measures include:
                <span>
                    <ul>
                    <li>Encryption of sensitive data such as payment information.</li>
                    <li>Regular security audits and updates to our website.</li>
                    <li>Restricting access to personal information to authorized personnel only.</li>
                    </ul>
                </span>
                <h3><u><b>Third-Party Sharing:</b></u></h3>
                We may share our users' personal information with third-party service providers to provide certain features and services on our website, such as payment processing and email marketing. We only share personal information that is necessary for the third-party to provide their services and require them to maintain the confidentiality and security of the information.

                <h3><u><b>Updates and Changes:</b></u></h3>
                We may update this Privacy Policy from time to time, and any changes will be reflected on this page. We encourage our users to review this policy regularly.
                </p>
            </div>
            <Footer/>
            </div>
        );
    }
}
 
export default Privacy;