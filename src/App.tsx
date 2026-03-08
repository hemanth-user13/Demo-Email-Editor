import { EmailEditor } from "react-tailwind-email-editor";
import "react-tailwind-email-editor/dist/style.css";

function App() {
  const data = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Email Template</title>
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f4; font-family: Arial, sans-serif;">
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f4f4f4;">
    <tr>
      <td align="center" style="padding: 20px 0;">
        <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff; max-width: 600px;">
          <tr>
            <td>
<!-- [component:EmailHeader] --><div data-component="EmailHeader" data-props="eyJfdHlwZSI6IkVtYWlsSGVhZGVyIiwibG9nb1VybCI6IiIsImNvbXBhbnlOYW1lIjoiWW91ciBDb21wYW55IiwiYmFja2dyb3VuZENvbG9yIjoiIzFhMWEyZSIsInRleHRDb2xvciI6IiNmZmZmZmYiLCJwYWRkaW5nIjoyNH0=">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td style="background-color: #1a1a2e; padding: 24px; text-align: center;">
                    
                    <h1 style="color: #ffffff; font-size: 24px; font-weight: bold; margin: 0; font-family: Arial, sans-serif;">Your Company</h1>
                  </td>
                </tr>
              </table></div><!-- [/component:EmailHeader] --><!-- [component:RawHtml] --><div data-component="RawHtml" data-props="eyJfdHlwZSI6IlJhd0h0bWwiLCJodG1sIjoiXG48ZGl2IHN0eWxlPVwicGFkZGluZzogMjRweDsgYmFja2dyb3VuZC1jb2xvcjogI2YzZjRmNjtcIj5cbiAgPGgxIHN0eWxlPVwiZm9udC1zaXplOiAyNHB4OyBmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICMyNTYzZWI7IGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjsgbWFyZ2luOiAwO1wiPldlbGNvbWUhPC9oMT5cbiAgPHAgc3R5bGU9XCJjb2xvcjogIzM3NDE1MTsgbWFyZ2luLXRvcDogOHB4OyBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XCI+XG4gICAgVGhpcyBpcyBhIHNhbXBsZSBlbWFpbCB0ZW1wbGF0ZS5cbiAgPC9wPlxuPC9kaXY+XG4iLCJwYWRkaW5nIjowfQ==">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td style="padding: 0px;">
                    
<div style="padding: 24px; background-color: #f3f4f6;">
  <h1 style="font-size: 24px; font-weight: bold; color: #2563eb; font-family: Arial, sans-serif; margin: 0;">Welcome!</h1>
  <p style="color: #374151; margin-top: 8px; font-family: Arial, sans-serif;">
    This is a sample email template.
  </p>
</div>

                  </td>
                </tr>
              </table></div><!-- [/component:RawHtml] --><!-- [component:Container] --><div data-component="Container" data-props="eyJfdHlwZSI6IkNvbnRhaW5lciIsImJhY2tncm91bmQiOiIjZmZmZmZmIiwicGFkZGluZyI6MjB9">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td style="background-color: #ffffff; padding: 20px;">
<!-- [component:TextBlock] --><div data-component="TextBlock" data-props="eyJfdHlwZSI6IlRleHRCbG9jayIsInRleHQiOiJUaGFuayB5b3UgZm9yIHlvdXIgYnVzaW5lc3MhIFBsZWFzZSBmaW5kIHlvdXIgaW52b2ljZSBkZXRhaWxzIGJlbG93LiIsImZvbnRTaXplIjoxNiwiZm9udFdlaWdodCI6Im5vcm1hbCIsImNvbG9yIjoiIzMzMzMzMyIsImFsaWduIjoiY2VudGVyIiwicGFkZGluZyI6MTAsImxpbmVIZWlnaHQiOjEuNn0=">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td style="padding: 10px;">
                    <p style="font-size: 16px; font-weight: normal; color: #333333; text-align: center; line-height: 1.6; margin: 0; font-family: Arial, sans-serif;">Thank you for your business! Please find your invoice details below.</p>
                  </td>
                </tr>
              </table></div><!-- [/component:TextBlock] --><!-- [component:Spacer] --><div data-component="Spacer" data-props="eyJfdHlwZSI6IlNwYWNlciIsImhlaWdodCI6MTB9">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td style="height: 10px; line-height: 10px; font-size: 1px;">&nbsp;</td>
                </tr>
              </table></div><!-- [/component:Spacer] --><!-- [component:InvoiceTable] --><div data-component="InvoiceTable" data-props="eyJfdHlwZSI6Ikludm9pY2VUYWJsZSIsIml0ZW1zIjpbeyJkZXNjcmlwdGlvbiI6IlNlcnZpY2UgSXRlbSAxIiwicXVhbnRpdHkiOjEsInVuaXRQcmljZSI6MTAwfSx7ImRlc2NyaXB0aW9uIjoiU2VydmljZSBJdGVtIDIiLCJxdWFudGl0eSI6MiwidW5pdFByaWNlIjo1MH1dLCJoZWFkZXJCZyI6IiMxYTFhMmUiLCJoZWFkZXJDb2xvciI6IiNmZmZmZmYiLCJib3JkZXJDb2xvciI6IiNlMGUwZTAiLCJzaG93VG90YWwiOnRydWUsImN1cnJlbmN5IjoiJCJ9">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td style="padding: 10px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse; border: 1px solid #e0e0e0;">
                      <tr>
                        <th style="background-color: #1a1a2e; color: #ffffff; padding: 12px 16px; font-weight: bold; text-align: left; border-bottom: 1px solid #e0e0e0;">Description</th>
                        <th style="background-color: #1a1a2e; color: #ffffff; padding: 12px 16px; font-weight: bold; text-align: left; border-bottom: 1px solid #e0e0e0; text-align: center; width: 80px;">Qty</th>
                        <th style="background-color: #1a1a2e; color: #ffffff; padding: 12px 16px; font-weight: bold; text-align: left; border-bottom: 1px solid #e0e0e0; text-align: right; width: 100px;">Unit Price</th>
                        <th style="background-color: #1a1a2e; color: #ffffff; padding: 12px 16px; font-weight: bold; text-align: left; border-bottom: 1px solid #e0e0e0; text-align: right; width: 100px;">Amount</th>
                      </tr>
                      
                      <tr>
                        <td style="padding: 12px 16px; border-bottom: 1px solid #e0e0e0; font-family: Arial, sans-serif; font-size: 14px;">Service Item 1</td>
                        <td style="padding: 12px 16px; border-bottom: 1px solid #e0e0e0; font-family: Arial, sans-serif; font-size: 14px; text-align: center;">1</td>
                        <td style="padding: 12px 16px; border-bottom: 1px solid #e0e0e0; font-family: Arial, sans-serif; font-size: 14px; text-align: right;">$100.00</td>
                        <td style="padding: 12px 16px; border-bottom: 1px solid #e0e0e0; font-family: Arial, sans-serif; font-size: 14px; text-align: right;">$100.00</td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 16px; border-bottom: 1px solid #e0e0e0; font-family: Arial, sans-serif; font-size: 14px;">Service Item 2</td>
                        <td style="padding: 12px 16px; border-bottom: 1px solid #e0e0e0; font-family: Arial, sans-serif; font-size: 14px; text-align: center;">2</td>
                        <td style="padding: 12px 16px; border-bottom: 1px solid #e0e0e0; font-family: Arial, sans-serif; font-size: 14px; text-align: right;">$50.00</td>
                        <td style="padding: 12px 16px; border-bottom: 1px solid #e0e0e0; font-family: Arial, sans-serif; font-size: 14px; text-align: right;">$100.00</td>
                      </tr>
                      
                      <tr>
                        <td colspan="3" style="padding: 12px 16px; border-bottom: 1px solid #e0e0e0; font-family: Arial, sans-serif; font-size: 14px; text-align: right; font-weight: bold;">Total:</td>
                        <td style="padding: 12px 16px; border-bottom: 1px solid #e0e0e0; font-family: Arial, sans-serif; font-size: 14px; text-align: right; font-weight: bold; background-color: #f5f5f5;">$200.00</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table></div><!-- [/component:InvoiceTable] --><!-- [component:Spacer] --><div data-component="Spacer" data-props="eyJfdHlwZSI6IlNwYWNlciIsImhlaWdodCI6MjB9">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td style="height: 20px; line-height: 20px; font-size: 1px;">&nbsp;</td>
                </tr>
              </table></div><!-- [/component:Spacer] --><!-- [component:EmailButton] --><div data-component="EmailButton" data-props="eyJfdHlwZSI6IkVtYWlsQnV0dG9uIiwidGV4dCI6IlBheSBOb3ciLCJocmVmIjoiIyIsImJhY2tncm91bmRDb2xvciI6IiMwMDY2Y2MiLCJ0ZXh0Q29sb3IiOiIjZmZmZmZmIiwiYm9yZGVyUmFkaXVzIjo2LCJwYWRkaW5nWCI6MjQsInBhZGRpbmdZIjoxMiwiZm9udFNpemUiOjE2LCJhbGlnbiI6ImNlbnRlciJ9">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td style="text-align: center; padding: 10px 0;">
                    <a href="#" style="display: inline-block; background-color: #0066cc; color: #ffffff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-size: 16px; font-weight: bold; font-family: Arial, sans-serif;">Pay Now</a>
                  </td>
                </tr>
              </table></div><!-- [/component:EmailButton] -->
                  </td>
                </tr>
              </table></div><!-- [/component:Container] --><!-- [component:EmailFooter] --><div data-component="EmailFooter" data-props="eyJfdHlwZSI6IkVtYWlsRm9vdGVyIiwiY29tcGFueU5hbWUiOiJZb3VyIENvbXBhbnkiLCJhZGRyZXNzIjoiMTIzIEJ1c2luZXNzIFN0LCBDaXR5LCBDb3VudHJ5IiwiZW1haWwiOiJpbmZvQGNvbXBhbnkuY29tIiwicGhvbmUiOiIrMSAyMzQgNTY3IDg5MCIsImJhY2tncm91bmRDb2xvciI6IiNmNWY1ZjUiLCJ0ZXh0Q29sb3IiOiIjNjY2NjY2IiwicGFkZGluZyI6MjR9">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td style="background-color: #f5f5f5; padding: 24px; text-align: center; font-family: Arial, sans-serif;">
                    <p style="color: #666666; font-size: 14px; margin: 0 0 8px 0; font-weight: bold;">Your Company</p>
                    <p style="color: #666666; font-size: 12px; margin: 0 0 4px 0;">123 Business St, City, Country</p>
                    <p style="color: #666666; font-size: 12px; margin: 0 0 4px 0;">Email: info@company.com | Phone: +1 234 567 890</p>
                    <p style="color: #666666; font-size: 11px; margin: 12px 0 0 0; opacity: 0.7;">© 2026 Your Company. All rights reserved.</p>
                  </td>
                </tr>
              </table></div><!-- [/component:EmailFooter] -->
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
  return (
    <>
      <EmailEditor initialHtml={data} />
    </>
  );
}

export default App;
