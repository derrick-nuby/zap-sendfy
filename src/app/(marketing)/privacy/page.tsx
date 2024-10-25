import { AnimationContainer, MaxWidthWrapper } from "@/components";
import React from 'react';

const Privacy = () => {
    return (
        <MaxWidthWrapper className="max-w-3xl mx-auto px-8 mb-40">
            <AnimationContainer delay={0.1} className="w-full">
                <h1 className="text-4xl md:text-6xl font-heading font-bold my-12 text-center w-full">
                    Privacy Policy
                </h1>
                <p className="text-sm mb-2 italic mt-20">
                    Last updated: 25th October 2024
                </p>
                <p className="mt-4">
                    At <strong>Zap-Sendify</strong>, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines the types of data we collect, how we use it, how we protect it, and the choices available to our users regarding their data. Please read it carefully to understand our policies and practices.
                </p>

                <h2 className="text-xl font-medium mt-8">
                    Information We Collect
                </h2>

                <h3 className="text-lg mt-4">
                    Personal Information
                </h3>
                <p className="mt-8 text-muted-foreground">
                    When you register for an account, use our services, or engage with our support team, we may collect information that identifies you personally, including your name, email address, phone number, and payment information.
                </p>

                <h3 className="text-lg font-medium mt-12">
                    Campaign Data and Content
                </h3>
                <p className="mt-8 text-muted-foreground">
                    Zap-Sendify collects data on email campaign details, including recipient email addresses, content, subject lines, and attachments. This data is essential to delivering and tracking your campaigns. All content within campaigns is securely stored and only accessible to authorized users within your account.
                </p>

                <h3 className="text-lg mt-8">
                    Non-Personal Information
                </h3>
                <p className="mt-8 text-muted-foreground">
                    We collect non-personal information, such as IP addresses, browser types, operating system, device types, and other technical data that helps us improve our service. This data is aggregated and used solely for statistical analysis.
                </p>

                <h3 className="text-lg mt-8">
                    Cookies and Tracking Technologies
                </h3>
                <p className="mt-8">
                    We use cookies and similar technologies to track user activity on our platform, collect and store information about your interactions, and personalize your experience. You can control cookie preferences through your browser settings, but disabling cookies may limit functionality.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    How We Use Your Information
                </h2>

                <h3 className="text-lg mt-8">
                    Provide and Improve Services
                </h3>
                <div className="mt-8">
                    We use the information we collect to:
                    <ul className="list-disc ml-8 text-muted-foreground">
                        <li>Deliver, operate, and maintain our email marketing services.</li>
                        <li>Analyze user activity to improve and personalize our services.</li>
                        <li>Manage payments, process transactions, and handle billing.</li>
                    </ul>
                </div>

                <h3 className="text-lg mt-8">
                    Campaign Analysis and Reporting
                </h3>
                <p className="mt-8 text-muted-foreground">
                    We analyze campaign data, including open rates, click rates, and bounce rates, to provide you with detailed reporting and insights on the performance of your email campaigns.
                </p>

                <h3 className="text-lg mt-8">
                    Compliance and Anti-Spam Measures
                </h3>
                <p className="mt-8 text-muted-foreground">
                    Zap-Sendify complies with anti-spam regulations, such as the CAN-SPAM Act and GDPR. We monitor usage patterns to prevent spam, fraud, and abuse and ensure compliance with relevant laws. Users who violate our anti-spam policies may have their accounts suspended or terminated.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    How We Share Your Information
                </h2>

                <h3 className="text-lg mt-8">
                    Service Providers
                </h3>
                <p className="mt-8 text-muted-foreground">
                    We may share your information with third-party service providers who assist with payment processing, email delivery, analytics, customer support, and hosting. These providers are obligated to protect your data and may not use it for other purposes.
                </p>

                <h3 className="text-lg mt-8">
                    Legal Requirements and Regulatory Compliance
                </h3>
                <p className="mt-8 text-muted-foreground">
                    We may disclose your information if required by law or in response to valid requests from public authorities, such as a court order or government inquiry, to ensure compliance with applicable laws and regulations.
                </p>

                <h3 className="text-lg mt-8">
                    Business Transfers
                </h3>
                <p className="mt-8 text-muted-foreground">
                    If Zap-Sendify is involved in a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity. We will notify you of any such transfer and provide choices about your information.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Data Security
                </h2>
                <p className="mt-8 text-muted-foreground">
                    We implement technical and organizational measures to protect your personal data against unauthorized access, alteration, and loss. While no method of data transmission over the internet or electronic storage is 100% secure, we continuously update our security practices to safeguard your data.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Data Retention
                </h2>
                <p className="mt-8 text-muted-foreground">
                    We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce agreements. You may request data deletion at any time by contacting us.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Your Rights and Choices
                </h2>

                <h3 className="text-lg mt-8">
                    Access, Update, and Delete Data
                </h3>
                <p className="mt-8 text-muted-foreground">
                    You have the right to access, update, or request deletion of your data at any time. Access your account settings to make changes or contact us for assistance with data deletion.
                </p>

                <h3 className="text-lg mt-8">
                    Marketing Communications
                </h3>
                <p className="mt-8 text-muted-foreground">
                    You may opt out of receiving marketing emails by following the unsubscribe instructions in each email or by contacting us directly. Transactional emails related to account activity cannot be opted out of.
                </p>

                <h3 className="text-lg mt-8">
                    Data Portability
                </h3>
                <p className="mt-8 text-muted-foreground">
                    You have the right to request a copy of your data in a structured, commonly used format. Please contact us to initiate this process.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Children&apos;s Privacy
                </h2>
                <p className="mt-8 text-muted-foreground">
                    Zap-Sendify services are not intended for children under 18. We do not knowingly collect personal data from children under 18. If we become aware of such data collection, we will take steps to delete it immediately.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    International Data Transfers
                </h2>
                <p className="mt-8 text-muted-foreground">
                    Your information may be transferred to and processed in countries outside your country of residence. We take steps to ensure that any cross-border data transfer is protected under applicable laws.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Changes to This Privacy Policy
                </h2>
                <p className="mt-8 text-muted-foreground">
                    We may update this Privacy Policy periodically. Changes will be posted here with an updated “Last updated” date, and you may be notified via email if significant changes are made.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Contact Us
                </h2>
                <p className="mt-8 text-muted-foreground">
                    If you have any questions about this Privacy Policy or your data rights, please contact us at support@zap-sendify.com.
                </p>

                <p className="mt-8 font-medium">
                    By using Zap-Sendify, you agree to the terms of this Privacy Policy and acknowledge that you have read and understood it.
                </p>
            </AnimationContainer>
        </MaxWidthWrapper>
    );
};

export default Privacy;
