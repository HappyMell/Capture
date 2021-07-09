import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Subscribe from "../subscribe/Subscribe";

export default function SubscribeForm() {
  const postUrl = `https://hotmail.us6.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&amp;id=${process.env.REACT_APP_MAILCHIMP_ID}`;
  return (
    <div className="mc">
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <Subscribe
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </div>
  );
}
