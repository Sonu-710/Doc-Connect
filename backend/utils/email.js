const nodemailer = require("nodemailer");
const { convert } = require("html-to-text");

module.exports = class Email {
  // constructor(user, url) {
  //   this.to = user.email;
  //   this.firstName = user.name.split(" ")[0];
  //   this.url = url;
  //   this.from = `Sonu Acharya <$(process.env.EMAIL_FROM>)`;
  // }
  // newTransporter() {
  //   if (process.env.NODE_ENV === "production") {
  //     return 1;
  //   } else {
  //     return nodemailer.createTransport({
  //       host: process.env.EMAIL_HOST,
  //       port: process.env.EMAIL_PORT,
  //       auth: {
  //         user: process.env.EMAIL_USERNAME,
  //         pass: process.env.EMAIL_PASSWORD,
  //       },
  //     });
  //   }
  // }

  // async send(template, subject) {
  //   const html = pug.renderFile(`${__dirname}/../views/email/${template}.pug`, {
  //     firstName: this.firstName,
  //     url: this.url,
  //     subject,
  //   });

  //   const mailOptions = {
  //     from: this.from,
  //     to: this.to,
  //     subject,
  //     html,
  //     text: convert(html, {
  //       wordwrap: 130,
  //     }),
  //   };

  //   await this.newTransporter().sendMail(mailOptions);
  // }
  // async sendWelcome() {
  //   await this.send("welcome", "Welcome to the Adventure Gate Family");
  // }
  // async sendPasswordReset() {
  //   await this.send(
  //     "passwordReset",
  //     "Your password reset token (valid for only 10 minutes)"
  //   );
  // }
};
