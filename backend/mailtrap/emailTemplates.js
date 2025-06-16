export const VERIFICATION_EMAIL_TEMPLATE = (verificationCode) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Email Verification</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
    body {
      font-family: 'Poppins', sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 0;
      background-color: #f5f7ff;
    }
    .email-container {
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    }
    .header {
      background: linear-gradient(135deg, #6e8efb, #a777e3);
      padding: 40px 20px;
      text-align: center;
      color: white;
    }
    .logo {
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 10px;
    }
    .content {
      background-color: #ffffff;
      padding: 40px;
    }
    .code-box {
      background: #f8f9ff;
      border-radius: 10px;
      padding: 25px;
      margin: 30px 0;
      text-align: center;
      border: 1px solid #e0e5ff;
    }
    .verification-code {
      font-size: 36px;
      font-weight: 700;
      letter-spacing: 5px;
      color: #4a6cf7;
      margin: 15px 0;
      font-family: 'Courier New', monospace;
    }
    .footer {
      text-align: center;
      margin-top: 40px;
      color: #888;
      font-size: 13px;
    }
    .button {
      display: inline-block;
      background: linear-gradient(135deg, #6e8efb, #a777e3);
      color: white;
      padding: 14px 28px;
      text-decoration: none;
      border-radius: 8px;
      font-weight: 600;
      margin: 25px 0;
      box-shadow: 0 4px 15px rgba(110, 142, 251, 0.3);
    }
    .note {
      background-color: #fff9f9;
      border-left: 4px solid #ff6b6b;
      padding: 15px;
      border-radius: 6px;
      margin: 25px 0;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <div class="logo">YourApp</div>
      <h1 style="margin: 0; font-weight: 600;">Verify Your Email</h1>
    </div>
    
    <div class="content">
      <p style="font-size: 16px;">Hello there,</p>
      <p style="font-size: 16px;">Welcome to YourApp! Please verify your email address by entering the following code:</p>
      
      <div class="code-box">
        <div class="verification-code">${verificationCode}</div>
        <p style="margin: 10px 0 0 0; font-size: 14px; color: #666;">This code will expire in <strong style="color: #ff6b6b;">15 minutes</strong></p>
      </div>
      
      <p style="font-size: 16px;">If you didn't request this code, you can safely ignore this email.</p>
      
      <p style="font-size: 16px;">Best regards,<br>
      <strong>The YourApp Team</strong></p>
    </div>
    
    <div class="footer">
      <p>© ${new Date().getFullYear()} YourApp. All rights reserved.</p>
      <p>This is an automated message, please do not reply.</p>
    </div>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = (resetURL) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
    body {
      font-family: 'Poppins', sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 0;
      background-color: #f5f7ff;
    }
    .email-container {
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    }
    .header {
      background: linear-gradient(135deg, #ff7b7b, #ff5252);
      padding: 40px 20px;
      text-align: center;
      color: white;
    }
    .logo {
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 10px;
    }
    .content {
      background-color: #ffffff;
      padding: 40px;
    }
    .button-container {
      text-align: center;
      margin: 30px 0;
    }
    .button {
      display: inline-block;
      background: linear-gradient(135deg, #ff7b7b, #ff5252);
      color: white;
      padding: 14px 28px;
      text-decoration: none;
      border-radius: 8px;
      font-weight: 600;
      box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
    }
    .footer {
      text-align: center;
      margin-top: 40px;
      color: #888;
      font-size: 13px;
    }
    .note {
      background-color: #fff5f5;
      border-left: 4px solid #ff6b6b;
      padding: 15px;
      border-radius: 6px;
      margin: 25px 0;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <div class="logo">YourApp</div>
      <h1 style="margin: 0; font-weight: 600;">Reset Your Password</h1>
    </div>
    
    <div class="content">
      <p style="font-size: 16px;">Hello there,</p>
      <p style="font-size: 16px;">We received a request to reset your password. Click the button below to create a new password:</p>
      
      <div class="button-container">
        <a href="${resetURL}" class="button">Reset Password</a>
      </div>
      
      <div class="note">
        <p style="margin: 0;">This link will expire in <strong>1 hour</strong>. If you didn't request this, please ignore this email.</p>
      </div>
      
      <p style="font-size: 16px;">Best regards,<br>
      <strong>The YourApp Team</strong></p>
    </div>
    
    <div class="footer">
      <p>© ${new Date().getFullYear()} YourApp. All rights reserved.</p>
      <p>This is an automated message, please do not reply.</p>
    </div>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Updated Successfully</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
    body {
      font-family: 'Poppins', sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 0;
      background-color: #f5f7ff;
    }
    .email-container {
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    }
    .header {
      background: linear-gradient(135deg, #4facfe, #00f2fe);
      padding: 40px 20px;
      text-align: center;
      color: white;
    }
    .logo {
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 10px;
    }
    .content {
      background-color: #ffffff;
      padding: 40px;
      text-align: center;
    }
    .success-container {
      margin: 30px 0;
    }
    .success-icon {
      width: 100px;
      height: 100px;
      background: linear-gradient(135deg, #4facfe, #00f2fe);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 25px;
      box-shadow: 0 5px 15px rgba(79, 172, 254, 0.3);
    }
    .checkmark {
      color: white;
      font-size: 50px;
      font-weight: bold;
      line-height: 1;
    }
    .success-title {
      font-size: 22px;
      font-weight: 700;
      color: #2c3e50;
      margin-bottom: 15px;
    }
    .footer {
      text-align: center;
      margin-top: 40px;
      color: #888;
      font-size: 13px;
    }
    .security-tip {
      background-color: #f0f9ff;
      border-radius: 8px;
      padding: 20px;
      margin: 30px auto;
      max-width: 80%;
      text-align: left;
      border-left: 4px solid #4facfe;
    }
    .security-tip p {
      margin: 0;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <div class="logo">YourApp</div>
      <h1 style="margin: 0; font-weight: 600;">Password Updated</h1>
    </div>
    
    <div class="content">
      <div class="success-container">
        <div class="success-icon">
          <div class="checkmark">✓</div>
        </div>
        <div class="success-title">Password Changed Successfully!</div>
      </div>
      
      <p style="font-size: 16px;">Hello there,</p>
      <p style="font-size: 16px;">Your password has been successfully updated.</p>
      
      <div class="security-tip">
        <p><strong>Security Tip:</strong> For enhanced security, we recommend:</p>
        <ul style="margin: 10px 0 0 20px; padding-left: 5px;">
          <li>Enabling two-factor authentication</li>
          <li>Using a unique password for your account</li>
          <li>Regularly updating your password</li>
        </ul>
      </div>
      
      <p style="font-size: 16px;">If you didn't make this change, please contact our support team immediately.</p>
      
      <p style="font-size: 16px;">Best regards,<br>
      <strong>The YourApp Team</strong></p>
    </div>
    
    <div class="footer">
      <p>© ${new Date().getFullYear()} YourApp. All rights reserved.</p>
      <p>This is an automated message, please do not reply.</p>
    </div>
  </div>
</body>
</html>
`;