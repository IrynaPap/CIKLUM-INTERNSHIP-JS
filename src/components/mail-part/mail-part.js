import React from 'react';
import classnames from 'classnames';
import styles from './assets/mail-part-styles.purified.scss'

console.log(styles);

export default class MailPart extends React.Component {
    render() {
        return (
            <div className={styles.mailWrapper}>
				<div className={ classnames(styles.ru, styles['home default'], styles['alt'], styles['div-mail-part'])}>
					<div className={ classnames(styles.ru, styles['container'], styles['dark-blue'], styles['footer-signup'], styles['signup-form-wrapper'], styles['div-mail-part'])}>
						<div className={ classnames(styles.ru, styles['inside'], styles['div-mail-part'])}>

							<h2>Join over 2 million designers already using InVision. Get InVision <strong>free</strong> forever!</h2>

							<form method="POST" className={ classnames(styles.ru, styles['signup_form'])} action="https://projects.invisionapp.com/d/signup/process">
								<input type="hidden" name="uploadDemoID" value="" />
								<input type="hidden" name="source" value="" />
								<input type="hidden" name="referer" value="https://www.google.com.ua/" />
								<input type="hidden" name="keywords" value="" />
								<input type="hidden" name="submissionForm" value="Marketing Site" />
								<input type="hidden" name="xsrfFormToken" value="5c995153d67cec48279b0cd4beb0b73e" />

								<p>
									<label htmlFor="signup_name">Your Name</label>
									<i className={ classnames(styles.ru, styles['ico-user']) }></i>
									<input type="text" name="name" id="signup_name" value="" autoComplete="off" spellCheck="false" />
								</p>
								<p>
									<label htmlFor="signup_email">Email Address</label>
									<i className={ classnames(styles.ru, styles['ico-email'])}></i>
									<input type="text" name="email" id="signup_email" value="" autoComplete="off" spellCheck="false" />
								</p>
								<p>
									<label htmlFor="signup_password">Create a Password</label>
									<i className={ classnames(styles.ru, styles['ico-lock'])}></i>
									<input type="password" name="password" id="signup_password" value="" autoComplete="off" spellCheck="false" />
								</p>

								<p className={ classnames(styles.ru, styles['button'])}><button type="submit">Get Started &mdash; Free Forever!</button></p>

							</form>

							<p className={ classnames(styles.ru, styles['terms'])}>By clicking "Get Started &mdash; Free Forever!" I agree to InVision's <a href="/terms">Terms of Service.</a></p>

						</div>
					</div>
				</div>
			</div>
		);
    }
}