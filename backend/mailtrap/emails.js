import { PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";
import { mailtrapClient, sender } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
    const recipient = [{ email }];

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Verify your email",
            html: VERIFICATION_EMAIL_TEMPLATE(verificationToken), // ✅ Fixed here
            category: "Email Verification",
        });
        console.log("Email sent successfully", response);
    } catch (error) {
        console.log(`Error sending verification`, error);
        throw new Error(`Error sending verification email: ${error}`);
    }
};


export const sendWelcomeEmail = async (email, name) => {
    const recipient = [{ email }];

    try {
        const response = await mailtrapClient.send({
         from: sender,
         to: recipient,
         template_uuid: "09b13e8d-051b-4f8f-a769-d198667e9504" ,
         template_variables: {
            company_info_name: "TrustChain Ventures",
            name: name,
         },
        });
        console.log("Welcome email sent successfully" , response);
    } catch (error) {
        console.error(`Error sending welcome email`, error);
        throw new Error(`Error sending welcome email: ${error}`)       
    }
     
}

export const sendPasswordResetEmail = async (email, resetURL) => {
    const recipient = [{ email }];

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Reset Your Password",
            html: PASSWORD_RESET_REQUEST_TEMPLATE(resetURL), // ✅ function call with argument
            category: "Password Reset"
        });
        console.log("Password reset email sent", response);
    } catch (error) {
        console.error(`Error sending password reset email`, error);
        throw new Error(`Error sending password reset email: ${error}`);
    }
};

export const sendResetSuccessEmail = async (email) => {
    const recipient = [{email}];

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Password reset Successfull",
            html: PASSWORD_RESET_SUCCESS_TEMPLATE,
            category: "Password Reset",
        })
        console.log("password reset email sent successfully", response);
    } catch (error) {
        console.log(`Error sending password reset success email`, error);

        throw new Error(`Error sending password reset success email; ${error}`);
    }
}