import EmailTemplate from '../../Types/Email/EmailTemplate';
import EmailTemplateType from '../../Types/Email/EmailTemplateType';
export default class DefaultEmailTemplate {
    public static getDefaultTemplates(): Array<EmailTemplate> {
        return [
            {
                allowedVariables: [
                    '{{userName}} : User display name.',
                    '{{monitorName}} : Name of the monitor on which incident has occurred.',
                    '{{componentName}} : Name of the component the monitor belongs to',
                    '{{projectName}} : Name of the project on which the incident has occurred.',
                    '{{incidentTime}} : Time at which this incident occurred.',
                    '{{incidentDescription}} : Description of the incident.',
                    '{{incidentType}} : Type of incident.',
                    '{{userId}} : Unique identifier for user account.',
                    '{{projectId}} : Unique identifier for the current project.',
                    "{{trackEmailAsViewedUrl}} : Include this in your email to track emails and know when they're opened.",
                    '{{statusPageUrl}} : URL of the Status Page your subscriber can go to. ',
                    '{{incident.customFields.*}} : The value of any incident custom field',
                    '{{monitor.customFields.*}} : The value of any monitor custom field',
                    '{{unsubscribeUrl}} : URL to unsubscribe from the monitor',
                ],
                emailType: EmailTemplateType.SUBSCRIBER_INCIDENT_CREATED,
                emailBody: {
                    subject:
                        '{{projectName}} - {{monitorName}}: Incident Created',
                    body: `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=3Dutf-8">
    <meta name="viewport" content="width=3Ddevice-width">
    <title>Welcome to OneUptime.</title>
    <style>
      /**
  * IMPORTANT:
  * Please read before changing anything, CSS involved in our HTML emails is
  * extremely specific and written a certain way for a reason. It might not make
  * sense in a normal setting but Outlook loves it this way.
  *
  * !!! [override] prevents Yahoo Mail breaking media queries. It must be used
  * !!! at the beginning of every line of CSS inside a media query.
  * !!! Do not remove.
  *
  * !!! div[style*="margin: 16px 0"] allows us to target a weird margin
  * !!! bug in Android's email client.
  * !!! Do not remove.
  *
  * Also, the img files are hosted on S3. Please don't break these URLs!
  * The images are also versioned by date, so please update the URLs accordingly
  * if you create new versions
  *
***/


/**
  * # Root
  * - CSS resets and general styles go here.
**/

html, body,
a, span, div[style*="margin: 16px 0"] {
  border: 0 !important;
  margin: 0 !important;
  outline: 0 !important;
  padding: 0 !important;
  text-decoration: none !important;
}

a, span,
td, th {
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;
}

/**
  * # Delink
  * - Classes for overriding clients which creates links out of things like
  *   emails, addresses, phone numbers, etc.
**/

span.st-Delink a {
  color: #000000 !important;
  text-decoration: none !important;
}

/** Modifier: preheader */
span.st-Delink.st-Delink--preheader a {
  color: white !important;
  text-decoration: none !important;
}
/** */

/** Modifier: title */
span.st-Delink.st-Delink--title a {
  color: #000000 !important;
  text-decoration: none !important;
}
/** */

/** Modifier: footer */
span.st-Delink.st-Delink--footer a {
  color: #8898aa !important;
  text-decoration: none !important;
}
/** */

.ii a[href] {
    color: #000000;
}

/**
  * # Mobile
  * - This affects emails views in clients less than 600px wide.
**/

@media all and (max-width: 600px) {

  /**
    * # Wrapper
  **/

  body[override] table.st-Wrapper,
  body[override] table.st-Width.st-Width--mobile {
    min-width: 100% !important;
    width: 100% !important;
  }

  /**
    * # Spacer
  **/

  /** Modifier: gutter */
  body[override] td.st-Spacer.st-Spacer--gutter {
    width: 32px !important;
  } 
  /** */

  /** Modifier: kill */
  body[override] td.st-Spacer.st-Spacer--kill {
    width: 0 !important;
  }
  /** */

  /** Modifier: emailEnd */
  body[override] td.st-Spacer.st-Spacer--emailEnd {
    height: 32px !important;
  }
  /** */

  /**
    * # Font
  **/





  /** Modifier: simplified */
  body[override] table.st-Header.st-Header--simplified td.st-Header-logo {
    width: auto !important;
  }

  body[override] table.st-Header.st-Header--simplified td.st-Header-spacing{
    width: 0 !important;
  }



  /**
    * # Blocks
  **/

  body[override] table.st-Blocks table.st-Blocks-inner {
      border-radius: 0 !important;
  }

  body[override] table.st-Blocks table.st-Blocks-inner table.st-Blocks-item td.st-Blocks-item-cell {
      display: block !important;
  }

  /**
    * # Button
  **/

  body[override] table.st-Button {
      margin: 0 auto !important;
      width: 100% !important;
  }

  body[override] table.st-Button td.st-Button-area,
  body[override] table.st-Button td.st-Button-area a.st-Button-link,
  body[override] table.st-Button td.st-Button-area span.st-Button-internal{
    height: 44px !important;
    line-height: 44px !important;
    font-size: 18px !important;
    vertical-align: middle !important;
  }
}

    </style>
  </head>
  <body class="st-Email" bgcolor="f7f7f7" style="border: 0; margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; min-width: 100%; width: 100%;" override="fix">

    <!-- Background -->
    <table class="st-Background" bgcolor="f7f7f7" border="0" cellpadding="0" cellspacing="0" width="100%" style="border: 0; margin: 0; padding: 0;">
      <tbody>
        <tr>
          <td style="border: 0; margin: 0; padding: 0;">

            <!-- Wrapper -->
            <table class="st-Wrapper" align="center" bgcolor="ffffff" border="0" cellpadding="0" cellspacing="0" width="600" style="border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; margin: 0 auto; min-width: 600px;">
              <tbody>
                <tr>
                  <td style="border: 0; margin: 0; padding: 0;">



  <table class="st-Header st-Header--simplified st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
  <tbody>
    <tr>
      <td class="st-Spacer st-Spacer--divider" colspan="4" height="19" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
    </tr>
    <tr>
      <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
      <td align="left" style="height:80px; border: 0; margin: 0; padding: 0;">
        <div>
          <a style="border: 0; margin: 0; padding: 0; text-decoration: none;" href={{homeURL}}>

            <img alt="OneUptime" border="0" style="height:70px; width:70px; border: 0; margin: 0; padding: 0; color: #000000; display: block; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 12px; font-weight: normal;" src="https://res.cloudinary.com/deityhub/image/upload/v1637736803/1png.png">
          </a>
        </div>
      </td>
      <td class="st-Header-spacing" width="423" style="border: 0; margin: 0; padding: 0;">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
      <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
    </tr>
    <tr>
      <td class="st-Spacer st-Spacer--divider" colspan="4" height="19" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
    </tr>
    <tr class="st-Divider">
      <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;" width="64">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
      <td bgcolor="#fdfdfd" colspan="2" height="1" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
      <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;" width="64">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
    </tr>
  </tbody>
</table>
  <table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
  <tbody>
    <tr>
      <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
      <td class="st-Font st-Font--body" style="color: #000000 !important; border:0;margin:0;padding:0; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Ubuntu,sans-serif;font-size:16px;line-height:24px">

      <h3>{{projectName}} - {{monitorName}}: Incident Created!</h3>

      </td>
      <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
    </tr>
    <tr>
      <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
    </tr>
  </tbody>
  </table>

<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
<tr>
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
<td class="st-Font st-Font--body" style="border: 0; margin: 0; padding: 0; color: #000000 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 16px; line-height: 24px;">
  Hi.
</td>
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
</tr>
<tr>
<td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
</tr>
<tr>
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
<td class="st-Font st-Font--body" style="border: 0; margin: 0; padding: 0; color: #000000 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 16px; line-height: 24px;">
    An incident has been created for {{projectName}}:
  </td>
</tr>
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
</tbody>
</table>


<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0"
width="500" style="min-width: 500px;margin: 40px 50px;">
<tbody>
<tr style="border-collapse:collapse">
<td width="720" align="center" valign="top" style="padding:0;Margin:0"></td>
</tr>
<tr style="border-collapse:collapse">
<td align="left"
  style="padding:0;Margin:0;padding-top:0px;padding-left:40px;padding-right:40px;padding-bottom:30px;background-color:#f7f8fa;border-radius: 5px">
  <table cellpadding="0" cellspacing="0" width="100%"
    style="border-collapse:collapse;border-spacing:0px">
    <tbody>
      <tr style="border-collapse:collapse">
        <td width="720" align="center" valign="top" style="padding:0;Margin:0">
          <table cellpadding="0" cellspacing="0" width="100%" role="presentation"
            style="border-collapse:collapse;border-spacing:0px">
            <tbody>
              <tr style="border-collapse:collapse">
                <td align="left" style="padding:0;Margin:0;padding-top:30px">                
                <p
                  style="Margin:0;font-size:16px;font-family:'inter','helvetica neue',helvetica,arial,sans-serif;line-height:30px;color:#424761">
                  <strong>Monitor Name: </strong>
                  <span>{{monitorName}}</span><br>
                </p> 
                              
                <p
                  style="Margin:0;font-size:16px;font-family:'inter','helvetica neue',helvetica,arial,sans-serif;line-height:30px;color:#424761">
                  <strong>Incident Type: </strong>
                  <span>{{incidentType}}</span><br>
                </p>
                <p
                  style="Margin:0;font-size:16px;font-family:'inter','helvetica neue',helvetica,arial,sans-serif;line-height:30px;color:#424761">
                  <strong>Incident Description: </strong>
                  <span>{{incidentDescription}}</span><br>
                </p>
                <p
                  style="Margin:0;font-size:16px;font-family:'inter','helvetica neue',helvetica,arial,sans-serif;line-height:30px;color:#424761">
                  <strong>Incident Time: </strong>
                  <span>{{incidentTime}}</span><br>
                </p>
                 
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
</td>
</tr>
</tbody>
</table>

<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
  <tr>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td class="st-Font st-Font--body" style="border: 0; margin: 0; padding: 0; color: #000000 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 16px; line-height: 24px;">

    {{#if statusPageUrl}}
      You can view the status of the incident 
      <a href={{statusPageUrl}}
        style="color:#222b35;font-family:sans-serif;font-size:16px;font-weight:bold;line-height:30px;text-align:center;text-decoration:none;-webkit-text-size-adjust:none;mso-hide:all;">
        here
      </a>{{/if}}

    </td>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
</tbody>
</table>

<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
  <tr>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td class="st-Font st-Font--body" style="border: 0; margin: 0; padding: 0; color: #000000 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 16px; line-height: 24px;">

  
    You are receiving this mail because you are subscribed to this monitor.


    </td>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
</tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
  <tr>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
</tbody>
</table>
  <table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
  <tbody>
    <tr>
      <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>

      <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
    </tr>
    <tr>
      <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
    </tr>
  </tbody>
</table>
  <table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
  <tbody>
    <tr>
      <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
      <td class="st-Font st-Font--body" style="border: 0; margin: 0; padding: 0; color: #000000 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 16px; line-height: 24px;">

   
       OneUptime Team.


      </td>
      <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
    </tr>
    <tr>
      <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
    </tr>
  </tbody>
</table>

  <table class="st-Footer st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
  <tbody>
    <tr>
      <td class="st-Spacer st-Spacer--divider" colspan="3" height="20" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
    </tr>
    <tr class="st-Divider">
      <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;" width="64">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
      <td bgcolor="#fdfdfd" colspan="2" height="1" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
      <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;" width="64">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
    </tr>
    <tr>
      <td class="st-Spacer st-Spacer--divider" colspan="3" height="31" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
    </tr>
    <tr>
      <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
      <td class="st-Font st-Font--caption" style="border: 0; margin: 0;padding: 0; color: #8898aa; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 12px; line-height: 16px;">
        <span class="st-Delink st-Delink--footer" style="border: 0; margin: 0; padding: 0; color: #8898aa; text-decoration: none;">
          © {{year}} HackerBay Inc. | <span><a href={{unsubscribeUrl}}>Unsubscribe</a></span>
        </span>
      </td>
      <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
    </tr>
    <tr>
      <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
      <td class="st-Spacer st-Spacer--emailEnd" height="64" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
        <img border="0" style="height:1px; width:1px; border: 0; margin: 0; padding: 0; color: #000000; display: block; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 12px; font-weight: normal;" src="{{trackEmailAsViewedUrl}}">
      </td>
    </tr>
    <tr>
      <td class="st-Spacer st-Spacer--emailEnd" colspan="3" height="64" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
    </tr>
  </tbody>
</table>


                  </td>
                </tr>
              </tbody>
            </table>
            <!-- /Wrapper -->

          </td>
        </tr>
        <tr>
          <td class="st-Spacer st-Spacer--emailEnd" height="64" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
            <div class="st-Spacer st-Spacer--filler">&nbsp;</div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- /Background -->
</body></html>
`,
                },
            },
            {
                allowedVariables: [
                    '{{userName}} : User display name.',
                    '{{monitorName}} : Name of the monitor on which incident has occurred.',
                    '{{componentName}} : Name of the component the monitor belongs to',
                    '{{projectName}} : Name of the project on which the incident has occurred.',
                    '{{incidentTime}} : Time at which this incident occurred.',
                    '{{incidentType}} : Type of incident.',
                    '{{userId}} : Unique identifier for user account.',
                    '{{projectId}} : Unique identifier for the current project.',
                    "{{trackEmailAsViewedUrl}} : Include this in your email to track emails and know when they're opened.",
                    '{{statusPageUrl}} : URL of the Status Page your subscriber can go to. ',
                    '{{incident.customFields.*}} : The value of any incident custom field',
                    '{{monitor.customFields.*}} : The value of any monitor custom field',
                    '{{length}} : Length of the incident',
                    '{{unsubscribeUrl}} : URL to unsubscribe from the monitor',
                ],
                emailType: EmailTemplateType.SUBSCRIBER_INCIDENT_ACKNOWLEDGED,
                emailBody: {
                    subject:
                        '{{projectName}} - {{monitorName}}: Incident Acknowledged',
                    body: `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=3Dutf-8">
  <meta name="viewport" content="width=3Ddevice-width">
  <title>Welcome to OneUptime.</title>
  <style>
    /**
* IMPORTANT:
* Please read before changing anything, CSS involved in our HTML emails is
* extremely specific and written a certain way for a reason. It might not make
* sense in a normal setting but Outlook loves it this way.
*
* !!! [override] prevents Yahoo Mail breaking media queries. It must be used
* !!! at the beginning of every line of CSS inside a media query.
* !!! Do not remove.
*
* !!! div[style*="margin: 16px 0"] allows us to target a weird margin
* !!! bug in Android's email client.
* !!! Do not remove.
*
* Also, the img files are hosted on S3. Please don't break these URLs!
* The images are also versioned by date, so please update the URLs accordingly
* if you create new versions
*
***/


/**
* # Root
* - CSS resets and general styles go here.
**/

html, body,
a, span, div[style*="margin: 16px 0"] {
border: 0 !important;
margin: 0 !important;
outline: 0 !important;
padding: 0 !important;
text-decoration: none !important;
}

a, span,
td, th {
-webkit-font-smoothing: antialiased !important;
-moz-osx-font-smoothing: grayscale !important;
}

/**
* # Delink
* - Classes for overriding clients which creates links out of things like
*   emails, addresses, phone numbers, etc.
**/

span.st-Delink a {
color: #000000 !important;
text-decoration: none !important;
}

/** Modifier: preheader */
span.st-Delink.st-Delink--preheader a {
color: white !important;
text-decoration: none !important;
}
/** */

/** Modifier: title */
span.st-Delink.st-Delink--title a {
color: #000000 !important;
text-decoration: none !important;
}
/** */

/** Modifier: footer */
span.st-Delink.st-Delink--footer a {
color: #8898aa !important;
text-decoration: none !important;
}
/** */

.ii a[href] {
  color: #000000;
}

/**
* # Mobile
* - This affects emails views in clients less than 600px wide.
**/

@media all and (max-width: 600px) {

/**
  * # Wrapper
**/

body[override] table.st-Wrapper,
body[override] table.st-Width.st-Width--mobile {
  min-width: 100% !important;
  width: 100% !important;
}

/**
  * # Spacer
**/

/** Modifier: gutter */
body[override] td.st-Spacer.st-Spacer--gutter {
  width: 32px !important;
}
/** */

/** Modifier: kill */
body[override] td.st-Spacer.st-Spacer--kill {
  width: 0 !important;
}
/** */

/** Modifier: emailEnd */
body[override] td.st-Spacer.st-Spacer--emailEnd {
  height: 32px !important;
}
/** */

/**
  * # Font
**/





/** Modifier: simplified */
body[override] table.st-Header.st-Header--simplified td.st-Header-logo {
  width: auto !important;
}

body[override] table.st-Header.st-Header--simplified td.st-Header-spacing{
  width: 0 !important;
}



/**
  * # Blocks
**/

body[override] table.st-Blocks table.st-Blocks-inner {
    border-radius: 0 !important;
}

body[override] table.st-Blocks table.st-Blocks-inner table.st-Blocks-item td.st-Blocks-item-cell {
    display: block !important;
}

/**
  * # Button
**/

body[override] table.st-Button {
    margin: 0 auto !important;
    width: 100% !important;
}

body[override] table.st-Button td.st-Button-area,
body[override] table.st-Button td.st-Button-area a.st-Button-link,
body[override] table.st-Button td.st-Button-area span.st-Button-internal{
  height: 44px !important;
  line-height: 44px !important;
  font-size: 18px !important;
  vertical-align: middle !important;
}
}

  </style>
</head>
<body class="st-Email" bgcolor="f7f7f7" style="border: 0; margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; min-width: 100%; width: 100%;" override="fix">

  <!-- Background -->
  <table class="st-Background" bgcolor="f7f7f7" border="0" cellpadding="0" cellspacing="0" width="100%" style="border: 0; margin: 0; padding: 0;">
    <tbody>
      <tr>
        <td style="border: 0; margin: 0; padding: 0;">

          <!-- Wrapper -->
          <table class="st-Wrapper" align="center" bgcolor="ffffff" border="0" cellpadding="0" cellspacing="0" width="600" style="border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; margin: 0 auto; min-width: 600px;">
            <tbody>
              <tr>
                <td style="border: 0; margin: 0; padding: 0;">



<table class="st-Header st-Header--simplified st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
  <tr>
    <td class="st-Spacer st-Spacer--divider" colspan="4" height="19" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td align="left" style="height:80px; border: 0; margin: 0; padding: 0;">
      <div>
        <a style="border: 0; margin: 0; padding: 0; text-decoration: none;" href="https://oneuptime.com">
          <img alt="OneUptime" border="0" style="height:70px; width:70px; border: 0; margin: 0; padding: 0; color: #000000; display: block; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 12px; font-weight: normal;" src="https://res.cloudinary.com/deityhub/image/upload/v1637736803/1png.png">
        </a>
      </div>
    </td>
    <td class="st-Header-spacing" width="423" style="border: 0; margin: 0; padding: 0;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--divider" colspan="4" height="19" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr class="st-Divider">
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td bgcolor="#fdfdfd" colspan="2" height="1" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
</tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
  <tr>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td class="st-Font st-Font--body" style="color: #000000 !important; border:0;margin:0;padding:0; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Ubuntu,sans-serif;font-size:16px;line-height:24px">

    <h3>{{projectName}} - {{monitorName}}: Incident Acknowledged!</h3>

    </td>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
</tbody>
</table>

<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
<tr>
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
<td class="st-Font st-Font--body" style="border: 0; margin: 0; padding: 0; color: #000000 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 16px; line-height: 24px;">
  Hi.
</td>
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
</tr>
<tr>
<td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
</tr>
<tr>
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
<td class="st-Font st-Font--body" style="border: 0; margin: 0; padding: 0; color: #000000 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 16px; line-height: 24px;">
    An incident has been acknowledged for:
  </td>
</tr>
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
</tbody>
</table>


<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0"
width="500" style="min-width: 500px;margin: 40px 50px;">
<tbody>
<tr style="border-collapse:collapse">
<td width="720" align="center" valign="top" style="padding:0;Margin:0"></td>
</tr>
<tr style="border-collapse:collapse">
<td align="left"
  style="padding:0;Margin:0;padding-top:0px;padding-left:40px;padding-right:40px;padding-bottom:30px;background-color:#f7f8fa;border-radius: 5px">
  <table cellpadding="0" cellspacing="0" width="100%"
    style="border-collapse:collapse;border-spacing:0px">
    <tbody>
      <tr style="border-collapse:collapse">
        <td width="720" align="center" valign="top" style="padding:0;Margin:0">
          <table cellpadding="0" cellspacing="0" width="100%" role="presentation"
            style="border-collapse:collapse;border-spacing:0px">
            <tbody>
              <tr style="border-collapse:collapse">
                <td align="left" style="padding:0;Margin:0;padding-top:30px">
                <p
                  style="Margin:0;font-size:16px;font-family:'inter','helvetica neue',helvetica,arial,sans-serif;line-height:30px;color:#424761">
                  <strong>Monitor Name: </strong>
                  <span>{{monitorName}}</span><br>
                </p>
                                <p
                  style="Margin:0;font-size:16px;font-family:'inter','helvetica neue',helvetica,arial,sans-serif;line-height:30px;color:#424761">
                  <strong>Acknowledged at: </strong>
                  <span>{{incidentTime}}</span><br>
                </p>                   
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
</td>
</tr>
</tbody>
</table>

<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
  <tr>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td class="st-Font st-Font--body" style="border: 0; margin: 0; padding: 0; color: #000000 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 16px; line-height: 24px;">

    {{#if statusPageUrl}}
      You can view the status of the incident 
      <a href={{statusPageUrl}}
        style="color:#222b35;font-family:sans-serif;font-size:16px;font-weight:bold;line-height:30px;text-align:center;text-decoration:none;-webkit-text-size-adjust:none;mso-hide:all;">
        here
      </a>{{/if}}

    </td>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
</tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
<tr>
  <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
  <td class="st-Font st-Font--body" style="border: 0; margin: 0; padding: 0; color: #000000 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 16px; line-height: 24px;">


  You are receiving this mail because you are subscribed to this monitor.


  </td>
  <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
</tr>
<tr>
  <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
</tr>
</tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
<tr>
  <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>

  <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
</tr>
<tr>
  <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
</tr>
</tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
  <tr>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
</tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
  <tr>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td class="st-Font st-Font--body" style="border: 0; margin: 0; padding: 0; color: #000000 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 16px; line-height: 24px;">

  
    OneUptime Team.


    </td>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
</tbody>
</table>

<table class="st-Footer st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
  <tr>
    <td class="st-Spacer st-Spacer--divider" colspan="3" height="20" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr class="st-Divider">
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td bgcolor="#fdfdfd" colspan="2" height="1" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--divider" colspan="3" height="31" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td class="st-Font st-Font--caption" style="border: 0; margin: 0;padding: 0; color: #8898aa; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 12px; line-height: 16px;">
      <span class="st-Delink st-Delink--footer" style="border: 0; margin: 0; padding: 0; color: #8898aa; text-decoration: none;">
        © {{year}} HackerBay Inc. | <span><a href={{unsubscribeUrl}}>Unsubscribe</a></span>
      </span>
    </td>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td class="st-Spacer st-Spacer--emailEnd" height="64" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <img border="0" style="height:1px; width:1px; border: 0; margin: 0; padding: 0; color: #000000; display: block; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 12px; font-weight: normal;" src="{{trackEmailAsViewedUrl}}">
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--emailEnd" colspan="3" height="64" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
</tbody>
</table>


                </td>
              </tr>
            </tbody>
          </table>
          <!-- /Wrapper -->

        </td>
      </tr>
      <tr>
        <td class="st-Spacer st-Spacer--emailEnd" height="64" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
          <div class="st-Spacer st-Spacer--filler">&nbsp;</div>
        </td>
      </tr>
    </tbody>
  </table>
  <!-- /Background -->
</body></html>
`,
                },
            },
            {
                allowedVariables: [
                    '{{userName}} : User display name.',
                    '{{monitorName}} : Name of the monitor on which incident has occured.',
                    '{{componentName}} : Name of the component the monitor belongs to',
                    '{{projectName}} : Name of the project on which the incident has occured.',
                    '{{incidentTime}} : Time at which this incident occured.',
                    '{{incidentType}} : Type of incident.',
                    '{{userId}} : Unique identifier for user account.',
                    '{{projectId}} : Unique identifier for the current project.',
                    "{{trackEmailAsViewedUrl}} : Include this in your email to track emails and know when they're opened.",
                    '{{statusPageUrl}} : URL of the Status Page your subscriber can go to. ',
                    '{{incident.customFields.*}} : The value of any incident custom field',
                    '{{monitor.customFields.*}} : The value of any monitor custom field',
                    '{{length}} : Length of the incident',
                    '{{unsubscribeUrl}} : URL to unsubscribe from the monitor',
                ],
                emailType: EmailTemplateType.SUBSCRIBER_INCIDENT_RESOLVED,
                emailBody: {
                    subject:
                        '{{projectName}} - {{monitorName}}: Incident Resolved',
                    body: `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=3Dutf-8">
  <meta name="viewport" content="width=3Ddevice-width">
  <title>Welcome to OneUptime.</title>
  <style>
    /**
* IMPORTANT:
* Please read before changing anything, CSS involved in our HTML emails is
* extremely specific and written a certain way for a reason. It might not make
* sense in a normal setting but Outlook loves it this way.
*
* !!! [override] prevents Yahoo Mail breaking media queries. It must be used
* !!! at the beginning of every line of CSS inside a media query.
* !!! Do not remove.
*
* !!! div[style*="margin: 16px 0"] allows us to target a weird margin
* !!! bug in Android's email client.
* !!! Do not remove.
*
* Also, the img files are hosted on S3. Please don't break these URLs!
* The images are also versioned by date, so please update the URLs accordingly
* if you create new versions
*
***/


/**
* # Root
* - CSS resets and general styles go here.
**/

html, body,
a, span, div[style*="margin: 16px 0"] {
border: 0 !important;
margin: 0 !important;
outline: 0 !important;
padding: 0 !important;
text-decoration: none !important;
}

a, span,
td, th {
-webkit-font-smoothing: antialiased !important;
-moz-osx-font-smoothing: grayscale !important;
}

/**
* # Delink
* - Classes for overriding clients which creates links out of things like
*   emails, addresses, phone numbers, etc.
**/

span.st-Delink a {
color: #000000 !important;
text-decoration: none !important;
}

/** Modifier: preheader */
span.st-Delink.st-Delink--preheader a {
color: white !important;
text-decoration: none !important;
}
/** */

/** Modifier: title */
span.st-Delink.st-Delink--title a {
color: #000000 !important;
text-decoration: none !important;
}
/** */

/** Modifier: footer */
span.st-Delink.st-Delink--footer a {
color: #8898aa !important;
text-decoration: none !important;
}
/** */

.ii a[href] {
  color: #000000;
}

/**
* # Mobile
* - This affects emails views in clients less than 600px wide.
**/

@media all and (max-width: 600px) {

/**
  * # Wrapper
**/

body[override] table.st-Wrapper,
body[override] table.st-Width.st-Width--mobile {
  min-width: 100% !important;
  width: 100% !important;
}

/**
  * # Spacer
**/

/** Modifier: gutter */
body[override] td.st-Spacer.st-Spacer--gutter {
  width: 32px !important;
}
/** */

/** Modifier: kill */
body[override] td.st-Spacer.st-Spacer--kill {
  width: 0 !important;
}
/** */

/** Modifier: emailEnd */
body[override] td.st-Spacer.st-Spacer--emailEnd {
  height: 32px !important;
}
/** */

/**
  * # Font
**/





/** Modifier: simplified */
body[override] table.st-Header.st-Header--simplified td.st-Header-logo {
  width: auto !important;
}

body[override] table.st-Header.st-Header--simplified td.st-Header-spacing{
  width: 0 !important;
}



/**
  * # Blocks
**/

body[override] table.st-Blocks table.st-Blocks-inner {
    border-radius: 0 !important;
}

body[override] table.st-Blocks table.st-Blocks-inner table.st-Blocks-item td.st-Blocks-item-cell {
    display: block !important;
}

/**
  * # Button
**/

body[override] table.st-Button {
    margin: 0 auto !important;
    width: 100% !important;
}

body[override] table.st-Button td.st-Button-area,
body[override] table.st-Button td.st-Button-area a.st-Button-link,
body[override] table.st-Button td.st-Button-area span.st-Button-internal{
  height: 44px !important;
  line-height: 44px !important;
  font-size: 18px !important;
  vertical-align: middle !important;
}
}

  </style>
</head>
<body class="st-Email" bgcolor="f7f7f7" style="border: 0; margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; min-width: 100%; width: 100%;" override="fix">

  <!-- Background -->
  <table class="st-Background" bgcolor="f7f7f7" border="0" cellpadding="0" cellspacing="0" width="100%" style="border: 0; margin: 0; padding: 0;">
    <tbody>
      <tr>
        <td style="border: 0; margin: 0; padding: 0;">

          <!-- Wrapper -->
          <table class="st-Wrapper" align="center" bgcolor="ffffff" border="0" cellpadding="0" cellspacing="0" width="600" style="border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; margin: 0 auto; min-width: 600px;">
            <tbody>
              <tr>
                <td style="border: 0; margin: 0; padding: 0;">



<table class="st-Header st-Header--simplified st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
  <tr>
    <td class="st-Spacer st-Spacer--divider" colspan="4" height="19" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td align="left" style="height:80px; border: 0; margin: 0; padding: 0;">
      <div>
        <a style="border: 0; margin: 0; padding: 0; text-decoration: none;" href="https://oneuptime.com">
          <img alt="OneUptime" border="0" style="height:70px; width:70px; border: 0; margin: 0; padding: 0; color: #000000; display: block; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 12px; font-weight: normal;" src="https://res.cloudinary.com/deityhub/image/upload/v1637736803/1png.png">
        </a>
      </div>
    </td>
    <td class="st-Header-spacing" width="423" style="border: 0; margin: 0; padding: 0;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--divider" colspan="4" height="19" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr class="st-Divider">
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td bgcolor="#fdfdfd" colspan="2" height="1" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
</tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
  <tr>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td class="st-Font st-Font--body" style="color: #000000 !important; border:0;margin:0;padding:0; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Ubuntu,sans-serif;font-size:16px;line-height:24px">

     <h3>{{projectName}} - {{monitorName}}: Incident Resolved!</h3>

    </td>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
</tbody>
</table>



<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
<tr>
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
<td class="st-Font st-Font--body" style="border: 0; margin: 0; padding: 0; color: #000000 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 16px; line-height: 24px;">
  Hi.
</td>
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
</tr>
<tr>
<td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
</tr>
<tr>
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
<td class="st-Font st-Font--body" style="border: 0; margin: 0; padding: 0; color: #000000 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 16px; line-height: 24px;">
    An incident has been resolved for {{projectName}}:
  </td>
</tr>
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
</tbody>
</table>


<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0"
width="500" style="min-width: 500px;margin: 40px 50px;">
<tbody>
<tr style="border-collapse:collapse">
<td width="720" align="center" valign="top" style="padding:0;Margin:0"></td>
</tr>
<tr style="border-collapse:collapse">
<td align="left"
  style="padding:0;Margin:0;padding-top:0px;padding-left:40px;padding-right:40px;padding-bottom:30px;background-color:#f7f8fa;border-radius: 5px">
  <table cellpadding="0" cellspacing="0" width="100%"
    style="border-collapse:collapse;border-spacing:0px">
    <tbody>
      <tr style="border-collapse:collapse">
        <td width="720" align="center" valign="top" style="padding:0;Margin:0">
          <table cellpadding="0" cellspacing="0" width="100%" role="presentation"
            style="border-collapse:collapse;border-spacing:0px">
            <tbody>
              <tr style="border-collapse:collapse">
                <td align="left" style="padding:0;Margin:0;padding-top:30px">
                <p
                  style="Margin:0;font-size:16px;font-family:'inter','helvetica neue',helvetica,arial,sans-serif;line-height:30px;color:#424761">
                  <strong>Monitor Name: </strong>
                  <span>{{monitorName}}</span><br>
                </p>
                                <p
                  style="Margin:0;font-size:16px;font-family:'inter','helvetica neue',helvetica,arial,sans-serif;line-height:30px;color:#424761">
                  <strong>Resolved At: </strong>
                  <span>{{incidentTime}}</span><br>
                </p>                   
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
</td>
</tr>
</tbody>
</table>

<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
  <tr>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td class="st-Font st-Font--body" style="border: 0; margin: 0; padding: 0; color: #000000 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 16px; line-height: 24px;">

    {{#if statusPageUrl}}
      You can view the status of the incident 
      <a href={{statusPageUrl}}
        style="color:#222b35;font-family:sans-serif;font-size:16px;font-weight:bold;line-height:30px;text-align:center;text-decoration:none;-webkit-text-size-adjust:none;mso-hide:all;">
        here
      </a>{{/if}}

    </td>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
</tbody>
</table>

<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
<tr>
  <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
  <td class="st-Font st-Font--body" style="border: 0; margin: 0; padding: 0; color: #000000 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 16px; line-height: 24px;">

  You are receiving this mail because you are subscribed to this monitor.

  </td>
  <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
</tr>
<tr>
  <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
</tr>
</tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>

<tr>
  <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
</tr>
</tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
  <tr>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
</tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
  <tr>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td class="st-Font st-Font--body" style="border: 0; margin: 0; padding: 0; color: #000000 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 16px; line-height: 24px;">

   
    OneUptime Team.


    </td>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
</tbody>
</table>

<table class="st-Footer st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
  <tr>
    <td class="st-Spacer st-Spacer--divider" colspan="3" height="20" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr class="st-Divider">
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td bgcolor="#fdfdfd" colspan="2" height="1" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--divider" colspan="3" height="31" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td class="st-Font st-Font--caption" style="border: 0; margin: 0;padding: 0; color: #8898aa; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 12px; line-height: 16px;">
      <span class="st-Delink st-Delink--footer" style="border: 0; margin: 0; padding: 0; color: #8898aa; text-decoration: none;">
        © {{year}} HackerBay Inc. | <span><a href={{unsubscribeUrl}}>Unsubscribe</a></span>
      </span>
    </td>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td class="st-Spacer st-Spacer--emailEnd" height="64" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <img border="0" style="height:1px; width:1px; border: 0; margin: 0; padding: 0; color: #000000; display: block; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 12px; font-weight: normal;" src="{{trackEmailAsViewedUrl}}">
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--emailEnd" colspan="3" height="64" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
</tbody>
</table>


                </td>
              </tr>
            </tbody>
          </table>
          <!-- /Wrapper -->

        </td>
      </tr>
      <tr>
        <td class="st-Spacer st-Spacer--emailEnd" height="64" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
          <div class="st-Spacer st-Spacer--filler">&nbsp;</div>
        </td>
      </tr>
    </tbody>
  </table>
  <!-- /Background -->
</body></html>
`,
                },
            },
            {
                allowedVariables: [
                    '{{userName}} : User display name.',
                    '{{monitorName}} : Name of the monitor on which incident has occured.',
                    '{{componentName}} : Name of the component the monitor belongs to',
                    '{{projectName}} : Name of the project on which the incident has occured.',
                    '{{incidentTime}} : Time at which this incident occured.',
                    '{{incidentType}} : Type of incident.',
                    '{{noteType}} : Type of note created.',
                    '{{userId}} : Unique identifier for user account.',
                    '{{projectId}} : Unique identifier for the current project.',
                    "{{trackEmailAsViewedUrl}} : Include this in your email to track emails and know when they're opened.",
                    '{{statusPageUrl}} : URL of the Status Page your subscriber can go to. ',
                    '{{incidentNoteStatus}} : Status of the incident note',
                    '{{incident.customFields.*}} : The value of any incident custom field',
                    '{{monitor.customFields.*}} : The value of any monitor custom field',
                    '{{incidentNote}} : The content of the investigation note',
                    '{{unsubscribeUrl}} : URL to unsubscribe from the monitor',
                ],
                emailType: EmailTemplateType.INVESTIGATION_NOTE_CREATED,
                emailBody: {
                    subject:
                        'An update on an active incident {{#if monitorName}} for {{monitorName}} {{/if}}',
                    body: `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=3Dutf-8">
      <meta name="viewport" content="width=3Ddevice-width">
      <title>Welcome to OneUptime.</title>
      <style>
        /**
    * IMPORTANT:
    * Please read before changing anything, CSS involved in our HTML emails is
    * extremely specific and written a certain way for a reason. It might not make
    * sense in a normal setting but Outlook loves it this way.
    *
    * !!! [override] prevents Yahoo Mail breaking media queries. It must be used
    * !!! at the beginning of every line of CSS inside a media query.
    * !!! Do not remove.
    *
    * !!! div[style*="margin: 16px 0"] allows us to target a weird margin
    * !!! bug in Android's email client.
    * !!! Do not remove.
    *
    * Also, the img files are hosted on S3. Please don't break these URLs!
    * The images are also versioned by date, so please update the URLs accordingly
    * if you create new versions
    *
    ***/
    
    
    /**
    * # Root
    * - CSS resets and general styles go here.
    **/
    
    html, body,
    a, span, div[style*="margin: 16px 0"] {
    border: 0 !important;
    margin: 0 !important;
    outline: 0 !important;
    padding: 0 !important;
    text-decoration: none !important;
    }
    
    a, span,
    td, th {
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;
    }
    
    /**
    * # Delink
    * - Classes for overriding clients which creates links out of things like
    *   emails, addresses, phone numbers, etc.
    **/
    
    span.st-Delink a {
    color: #000000 !important;
    text-decoration: none !important;
    }
    
    /** Modifier: preheader */
    span.st-Delink.st-Delink--preheader a {
    color: white !important;
    text-decoration: none !important;
    }
    /** */
    
    /** Modifier: title */
    span.st-Delink.st-Delink--title a {
    color: #000000 !important;
    text-decoration: none !important;
    }
    /** */
    
    /** Modifier: footer */
    span.st-Delink.st-Delink--footer a {
    color: #8898aa !important;
    text-decoration: none !important;
    }
    /** */
    
    .ii a[href] {
      color: #000000;
    }
    
    /**
    * # Mobile
    * - This affects emails views in clients less than 600px wide.
    **/
    
    @media all and (max-width: 600px) {
    
    /**
      * # Wrapper
    **/
    
    body[override] table.st-Wrapper,
    body[override] table.st-Width.st-Width--mobile {
      min-width: 100% !important;
      width: 100% !important;
    }
    
    /**
      * # Spacer
    **/
    
    /** Modifier: gutter */
    body[override] td.st-Spacer.st-Spacer--gutter {
      width: 32px !important;
    }
    /** */
    
    /** Modifier: kill */
    body[override] td.st-Spacer.st-Spacer--kill {
      width: 0 !important;
    }
    /** */
    
    /** Modifier: emailEnd */
    body[override] td.st-Spacer.st-Spacer--emailEnd {
      height: 32px !important;
    }
    /** */
    
    /**
      * # Font
    **/
    
    
    
    
    
    /** Modifier: simplified */
    body[override] table.st-Header.st-Header--simplified td.st-Header-logo {
      width: auto !important;
    }
    
    body[override] table.st-Header.st-Header--simplified td.st-Header-spacing{
      width: 0 !important;
    }
    
    
    /**
      * # Blocks
    **/
    
    body[override] table.st-Blocks table.st-Blocks-inner {
        border-radius: 0 !important;
    }
    
    body[override] table.st-Blocks table.st-Blocks-inner table.st-Blocks-item td.st-Blocks-item-cell {
        display: block !important;
    }
    
    /**
      * # Button
    **/
    
    body[override] table.st-Button {
        margin: 0 auto !important;
        width: 100% !important;
    }
    
    body[override] table.st-Button td.st-Button-area,
    body[override] table.st-Button td.st-Button-area a.st-Button-link,
    body[override] table.st-Button td.st-Button-area span.st-Button-internal{
      height: 44px !important;
      line-height: 44px !important;
      font-size: 18px !important;
      vertical-align: middle !important;
    }
    }
    
      </style>
    </head>
    <body class="st-Email" bgcolor="f7f7f7" style="border: 0; margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; min-width: 100%; width: 100%;" override="fix">
    
      <!-- Background -->
      <table class="st-Background" bgcolor="f7f7f7" border="0" cellpadding="0" cellspacing="0" width="100%" style="border: 0; margin: 0; padding: 0;">
        <tbody>
          <tr>
            <td style="border: 0; margin: 0; padding: 0;">
    
              <!-- Wrapper -->
              <table class="st-Wrapper" align="center" bgcolor="ffffff" border="0" cellpadding="0" cellspacing="0" width="600" style="border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; margin: 0 auto; min-width: 600px;">
                <tbody>
                  <tr>
                    <td style="border: 0; margin: 0; padding: 0;">
    
    
    
    <table class="st-Header st-Header--simplified st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
    <tbody>
      <tr>
        <td class="st-Spacer st-Spacer--divider" colspan="4" height="19" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
          <div class="st-Spacer st-Spacer--filler"></div>
        </td>
      </tr>
      <tr>
        <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
          <div class="st-Spacer st-Spacer--filler"></div>
        </td>
        <td align="left" style="height:80px; border: 0; margin: 0; padding: 0;">
          <div>
            <a style="border: 0; margin: 0; padding: 0; text-decoration: none;" href="https://oneuptime.com">
              <img alt="OneUptime" border="0" style="height:70px; width:70px; border: 0; margin: 0; padding: 0; color: #000000; display: block; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 12px; font-weight: normal;" src="https://res.cloudinary.com/deityhub/image/upload/v1637736803/1png.png">
            </a>
          </div>
        </td>
        <td class="st-Header-spacing" width="423" style="border: 0; margin: 0; padding: 0;">
          <div class="st-Spacer st-Spacer--filler"></div>
        </td>
        <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
          <div class="st-Spacer st-Spacer--filler"></div>
        </td>
      </tr>
      <tr>
        <td class="st-Spacer st-Spacer--divider" colspan="4" height="19" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
          <div class="st-Spacer st-Spacer--filler"></div>
        </td>
      </tr>
      <tr class="st-Divider">
        <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;" width="64">
          <div class="st-Spacer st-Spacer--filler"></div>
        </td>
        <td bgcolor="#fdfdfd" colspan="2" height="1" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;">
          <div class="st-Spacer st-Spacer--filler"></div>
        </td>
        <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;" width="64">
          <div class="st-Spacer st-Spacer--filler"></div>
        </td>
      </tr>
    </tbody>
    </table>
    <table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
    <tbody>
      <tr>
        <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
          <div class="st-Spacer st-Spacer--filler"></div>
        </td>
        <td class="st-Font st-Font--body" style="color: #000000 !important; border:0;margin:0;padding:0; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Ubuntu,sans-serif;font-size:16px;line-height:24px">
    
         <h3>Here’s an update on an incident</h3>
    
        </td>
        <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
          <div class="st-Spacer st-Spacer--filler"></div>
        </td>
      </tr>
      <tr>
        <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
          <div class="st-Spacer st-Spacer--filler"></div>
        </td>
      </tr>
    </tbody>
    </table>

    <table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
<tr>
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
<td class="st-Font st-Font--body" style="border: 0; margin: 0; padding: 0; color: #000000 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 16px; line-height: 24px;">
  Hi.
</td>
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
</tr>
<tr>
<td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
</tr>
<tr>
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
<td class="st-Font st-Font--body" style="border: 0; margin: 0; padding: 0; color: #000000 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 16px; line-height: 24px;">
  An investigation note has been created for {{projectName}}:
</td>
</tr>
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
</tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0"
width="500" style="min-width: 500px;margin: 40px 50px;">
<tbody>
  <tr style="border-collapse:collapse">
    <td width="720" align="center" valign="top" style="padding:0;Margin:0"></td>
  </tr>
<tr style="border-collapse:collapse">
<td align="left"
  style="padding:0;Margin:0;padding-top:0px;padding-left:40px;padding-right:40px;padding-bottom:30px;background-color:#f7f8fa;border-radius: 5px">
  <table cellpadding="0" cellspacing="0" width="100%"
    style="border-collapse:collapse;border-spacing:0px">
    <tbody>
      <tr style="border-collapse:collapse">
        <td width="720" align="center" valign="top" style="padding:0;Margin:0">
          <table cellpadding="0" cellspacing="0" width="100%" role="presentation"
            style="border-collapse:collapse;border-spacing:0px">
            <tbody>
              <tr style="border-collapse:collapse">
                <td align="left" style="padding:0;Margin:0;padding-top:30px">   
                {{#if monitorName}}
                  <p
                    style="Margin:0;font-size:16px;font-family:'inter','helvetica neue',helvetica,arial,sans-serif;line-height:30px;color:#424761">
                    <strong>Monitor Name: </strong>
                    <span>{{monitorName}}</span><br>
                  </p>
                  {{/if}}
                  <p
                    style="Margin:0;font-size:16px;font-family:'inter','helvetica neue',helvetica,arial,sans-serif;line-height:30px;color:#424761">
                    <strong>Incident Id: </strong>
                    <span>#{{incidentId}}</span><br>
                  </p>  
                  <p
                  style="Margin:0;font-size:16px;font-family:'inter','helvetica neue',helvetica,arial,sans-serif;line-height:30px;color:#424761">
                  <strong>Note Type: </strong>
                  <span>{{noteType}}</span><br>
                </p>                          
                  <p
                    style="Margin:0;font-size:16px;font-family:'inter','helvetica neue',helvetica,arial,sans-serif;line-height:30px;color:#424761">
                    <strong>Note: </strong>
                    <span>"{{incidentNote}}"</span><br>
                  </p>      
                </td>  
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
  
</td>
</tr>
</tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
    <tbody>
      <tr>
        <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
          <div class="st-Spacer st-Spacer--filler"></div>
        </td>
        <td align="left" class="st-Font st-Font--body" style="border: 0; margin: 0; padding: 0; color: #000000 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 16px; line-height: 24px;">

        {{#if statusPageUrl}}
            You can view the status of the incident 
            <a href={{statusPageUrl}}
              style="color:#222b35;font-family:sans-serif;font-size:16px;font-weight:bold;line-height:30px;text-align:center;text-decoration:none;-webkit-text-size-adjust:none;mso-hide:all;">
              here
            </a>
        {{/if}}
        </td>
        <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
          <div class="st-Spacer st-Spacer--filler"></div>
        </td>
      </tr>
      <tr>
        <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
          <div class="st-Spacer st-Spacer--filler"></div>
        </td>
      </tr>
    </tbody>
  </table>
  <table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
    <tbody>
    <tr>
      <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
      <td class="st-Font st-Font--body" style="border: 0; margin: 0; padding: 0; color: #000000 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 16px; line-height: 24px;">
        You are receiving this mail because you are subscribed to this monitor.
      </td>
      <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
    </tr>
    <tr>
      <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
    </tr>
    </tbody>
    </table>
    <table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
    <tbody>
    <tr>
      <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
    
      <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
    </tr>
    <tr>
      <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
    </tr>
    </tbody>
    </table>
    <table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
    <tbody>
      <tr>
        <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
          <div class="st-Spacer st-Spacer--filler"></div>
        </td>
        
        <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
          <div class="st-Spacer st-Spacer--filler"></div>
        </td>
      </tr>
      <tr>
        <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
          <div class="st-Spacer st-Spacer--filler"></div>
        </td>
      </tr>
    </tbody>
    </table>
    <table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
    <tbody>
      <tr>
        <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
          <div class="st-Spacer st-Spacer--filler"></div>
        </td>
        <td class="st-Font st-Font--body" style="border: 0; margin: 0; padding: 0; color: #000000 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 16px; line-height: 24px;">
    
       
        OneUptime Team.
    
    
        </td>
        <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
          <div class="st-Spacer st-Spacer--filler"></div>
        </td>
      </tr>
      <tr>
        <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
          <div class="st-Spacer st-Spacer--filler"></div>
        </td>
      </tr>
    </tbody>
    </table>
    
    <table class="st-Footer st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
    <tbody>
      <tr>
        <td class="st-Spacer st-Spacer--divider" colspan="3" height="20" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;">
          <div class="st-Spacer st-Spacer--filler"></div>
        </td>
      </tr>
      <tr class="st-Divider">
        <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;" width="64">
          <div class="st-Spacer st-Spacer--filler"></div>
        </td>
        <td bgcolor="#fdfdfd" colspan="2" height="1" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;">
          <div class="st-Spacer st-Spacer--filler"></div>
        </td>
        <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;" width="64">
          <div class="st-Spacer st-Spacer--filler"></div>
        </td>
      </tr>
      <tr>
        <td class="st-Spacer st-Spacer--divider" colspan="3" height="31" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
          <div class="st-Spacer st-Spacer--filler"></div>
        </td>
      </tr>
      <tr>
        <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
          <div class="st-Spacer st-Spacer--filler"></div>
        </td>
        <td class="st-Font st-Font--caption" style="border: 0; margin: 0;padding: 0; color: #8898aa; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 12px; line-height: 16px;">
          <span class="st-Delink st-Delink--footer" style="border: 0; margin: 0; padding: 0; color: #8898aa; text-decoration: none;">
            © 2019 HackerBay Inc. | <span><a href={{unsubscribeUrl}}>Unsubscribe</a></span>
          </span>
        </td>
        <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
          <div class="st-Spacer st-Spacer--filler"></div>
        </td>
      </tr>
      <tr>
        <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
          <div class="st-Spacer st-Spacer--filler"></div>
        </td>
        <td class="st-Spacer st-Spacer--emailEnd" height="64" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
          <img border="0" style="height:1px; width:1px; border: 0; margin: 0; padding: 0; color: #000000; display: block; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 12px; font-weight: normal;" src="{{trackEmailAsViewedUrl}}">
        </td>
      </tr>
      <tr>
        <td class="st-Spacer st-Spacer--emailEnd" colspan="3" height="64" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
          <div class="st-Spacer st-Spacer--filler"></div>
        </td>
      </tr>
    </tbody>
    </table>
    
    
                    </td>
                  </tr>
                </tbody>
              </table>
              <!-- /Wrapper -->
    
            </td>
          </tr>
          <tr>
            <td class="st-Spacer st-Spacer--emailEnd" height="64" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
              <div class="st-Spacer st-Spacer--filler">&nbsp;</div>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- /Background -->
    </body>
  </html>
`,
                },
            },
            {
                allowedVariables: [
                    '{{userName}} : User display name.',
                    '{{eventName}} : Name of the maintenance event.',
                    '{{eventDescription}} :Description of the scheduled event.',
                    '{{eventCreateTime}} : Time at which scheduled event is created.',
                    '{{eventStartTime}} : Time at which scheduled event is starts.',
                    '{{eventEndTime}} : Time at which scheduled event ends.',
                    '{{projectName}} : Name of the project on which the event was created.',
                    '{{monitorName}} : Name of the monitor on which the event was created.',
                    '{{userId}} : Unique identifier for user account.',
                    '{{projectId}} : Unique identifier for the current project.',
                    '{{unsubscribeUrl}} : URL to unsubscribe from the monitor',
                    '{{resourcesAffected}} : List of monitors affected by scheduled maintenance event',
                ],

                emailType:
                    EmailTemplateType.SUBSCRIBER_SCHEDULED_MAINTENANCE_CREATED,
                emailBody: {
                    subject: `New Scheduled Maintenance Event for {{projectName}} - {{eventName}}`,
                    body: `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=3Dutf-8">
  <meta name="viewport" content="width=3Ddevice-width">
  <title>Welcome to OneUptime.</title>
  <style>
    /**
* IMPORTANT:
* Please read before changing anything, CSS involved in our HTML emails is
* extremely specific and written a certain way for a reason. It might not make
* sense in a normal setting but Outlook loves it this way.
*
* !!! [override] prevents Yahoo Mail breaking media queries. It must be used
* !!! at the beginning of every line of CSS inside a media query.
* !!! Do not remove.
*
* !!! div[style*="margin: 16px 0"] allows us to target a weird margin
* !!! bug in Android's email client.
* !!! Do not remove.
*
* Also, the img files are hosted on S3. Please don't break these URLs!
* The images are also versioned by date, so please update the URLs accordingly
* if you create new versions
*
***/


/**
* # Root
* - CSS resets and general styles go here.
**/

html, body,
a, span, div[style*="margin: 16px 0"] {
border: 0 !important;
margin: 0 !important;
outline: 0 !important;
padding: 0 !important;
text-decoration: none !important;
}

a, span,
td, th {
-webkit-font-smoothing: antialiased !important;
-moz-osx-font-smoothing: grayscale !important;
}

/**
* # Delink
* - Classes for overriding clients which creates links out of things like
*   emails, addresses, phone numbers, etc.
**/

span.st-Delink a {
color: #000000 !important;
text-decoration: none !important;
}

/** Modifier: preheader */
span.st-Delink.st-Delink--preheader a {
color: white !important;
text-decoration: none !important;
}
/** */

/** Modifier: title */
span.st-Delink.st-Delink--title a {
color: #000000 !important;
text-decoration: none !important;
}
/** */

/** Modifier: footer */
span.st-Delink.st-Delink--footer a {
color: #8898aa !important;
text-decoration: none !important;
}
/** */

.ii a[href] {
  color: #000000;
}

/**
* # Mobile
* - This affects emails views in clients less than 600px wide.
**/

@media all and (max-width: 600px) {

/**
  * # Wrapper
**/

body[override] table.st-Wrapper,
body[override] table.st-Width.st-Width--mobile {
  min-width: 100% !important;
  width: 100% !important;
}

/**
  * # Spacer
**/

/** Modifier: gutter */
body[override] td.st-Spacer.st-Spacer--gutter {
  width: 32px !important;
}
/** */

/** Modifier: kill */
body[override] td.st-Spacer.st-Spacer--kill {
  width: 0 !important;
}
/** */

/** Modifier: emailEnd */
body[override] td.st-Spacer.st-Spacer--emailEnd {
  height: 32px !important;
}
/** */

/**
  * # Font
**/





/** Modifier: simplified */
body[override] table.st-Header.st-Header--simplified td.st-Header-logo {
  width: auto !important;
}

body[override] table.st-Header.st-Header--simplified td.st-Header-spacing{
  width: 0 !important;
}



/**
  * # Blocks
**/

body[override] table.st-Blocks table.st-Blocks-inner {
    border-radius: 0 !important;
}

body[override] table.st-Blocks table.st-Blocks-inner table.st-Blocks-item td.st-Blocks-item-cell {
    display: block !important;
}

/**
  * # Button
**/

body[override] table.st-Button {
    margin: 0 auto !important;
    width: 100% !important;
}

body[override] table.st-Button td.st-Button-area,
body[override] table.st-Button td.st-Button-area a.st-Button-link,
body[override] table.st-Button td.st-Button-area span.st-Button-internal{
  height: 44px !important;
  line-height: 44px !important;
  font-size: 18px !important;
  vertical-align: middle !important;
}
}

  </style>
</head>
<body class="st-Email" bgcolor="f7f7f7" style="border: 0; margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; min-width: 100%; width: 100%;" override="fix">

  <!-- Background -->
  <table class="st-Background" bgcolor="f7f7f7" border="0" cellpadding="0" cellspacing="0" width="100%" style="border: 0; margin: 0; padding: 0;">
    <tbody>
      <tr>
        <td style="border: 0; margin: 0; padding: 0;">

          <!-- Wrapper -->
          <table class="st-Wrapper" align="center" bgcolor="ffffff" border="0" cellpadding="0" cellspacing="0" width="600" style="border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; margin: 0 auto; min-width: 600px;">
            <tbody>
              <tr>
                <td style="border: 0; margin: 0; padding: 0;">



<table class="st-Header st-Header--simplified st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
  <tr>
    <td class="st-Spacer st-Spacer--divider" colspan="4" height="19" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td align="left" style="height:80px; border: 0; margin: 0; padding: 0;">
      <div>
        <a style="border: 0; margin: 0; padding: 0; text-decoration: none;" href="https://oneuptime.com">
          <img alt="OneUptime" border="0" style="height:70px; width:70px; border: 0; margin: 0; padding: 0; color: #000000; display: block; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 12px; font-weight: normal;" src="https://res.cloudinary.com/deityhub/image/upload/v1637736803/1png.png">
        </a>
      </div>
    </td>
    <td class="st-Header-spacing" width="423" style="border: 0; margin: 0; padding: 0;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--divider" colspan="4" height="19" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr class="st-Divider">
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td bgcolor="#fdfdfd" colspan="2" height="1" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
</tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
  <tr>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td class="st-Font st-Font--body" style="color: #000000 !important; border:0;margin:0;padding:0; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Ubuntu,sans-serif;font-size:16px;line-height:24px">
      <h3> New Scheduled Maintenance Event for {{projectName}} - {{eventName}}</h3>
    </td>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12"
      style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
</tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
  <tr>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td class="st-Font st-Font--body" style="border: 0; margin: 0; padding: 0; color: #000000 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 16px; line-height: 24px;">
      Hi.
    </td>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
  <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
</tr>
<tr>
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
<div class="st-Spacer st-Spacer--filler"></div>
</td>
<td class="st-Font st-Font--body" style="border: 0; margin: 0; padding: 0; color: #000000 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 16px; line-height: 24px;">
  A new scheduled event was created for {{projectName}} with the following details:
  </td>
</tr>
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
</tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0"
width="500" style="min-width: 500px;margin: 40px 50px;">
<tbody>
  <tr style="border-collapse:collapse">
    <td width="720" align="center" valign="top" style="padding:0;Margin:0"></td>
  </tr>
  <tr style="border-collapse:collapse">
    <td align="left"
      style="padding:0;Margin:0;padding-top:0px;padding-left:40px;padding-right:40px;padding-bottom:30px;background-color:#f7f8fa;border-radius: 5px">
      <table cellpadding="0" cellspacing="0" width="100%"
        style="border-collapse:collapse;border-spacing:0px">
        <tbody>
          <tr style="border-collapse:collapse">
            <td width="720" align="center" valign="top" style="padding:0;Margin:0">
              <table cellpadding="0" cellspacing="0" width="100%" role="presentation"
                style="border-collapse:collapse;border-spacing:0px">
                <tbody>
                  <tr style="border-collapse:collapse">
                    <td align="left" style="padding:0;Margin:0;padding-top:30px">
                      <p
                        style="Margin:0;font-size:16px;font-family:'inter','helvetica neue',helvetica,arial,sans-serif;line-height:30px;color:#424761">
                        <strong>Event Name: </strong>
                        <span>{{eventName}}</span><br></p>

                      {{#if eventDescription}}
                        <p style="Margin:0;font-size:16px;font-family:'inter','helvetica neue',helvetica,arial,sans-serif;line-height:30px;color:#424761">
                          <strong>Resource Affected: </strong>
                          <span>{{resourcesAffected}}</span><br></p> 
                      {{/if}}  
                        
                    {{#if eventDescription}}
                      <p
                        style="Margin:0;font-size:16px;font-family:'inter','helvetica neue',helvetica,arial,sans-serif;line-height:30px;color:#424761">
                        <strong>Description:</strong> <span>{{eventDescription}}</span><br></p>
                    {{/if}}  
                      <p
                      style="Margin:0;font-size:16px;font-family:'inter','helvetica neue',helvetica,arial,sans-serif;line-height:30px;color:#424761">
                      <strong>Start time: </strong> <span>{{eventStartTime}}</span><br></p>
                    
                      <p
                        style="Margin:0;font-size:16px;font-family:'inter','helvetica neue',helvetica,arial,sans-serif;line-height:30px;color:#424761">
                        <strong>End time: </strong> <span>{{eventEndTime}}</span><br></p>                        

                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </td>
  </tr>
</tbody>
</table>

<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
  <tbody>
    <tr>
      <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
      <td class="st-Font st-Font--body" style="border: 0; margin: 0; padding: 0; color: #000000 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 16px; line-height: 24px;">

      {{#if statusPageUrl}}
        You can view the status of the incident here {{statusPageUrl}}
      {{/if}}

      </td>
      <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
    </tr>
    <tr>
      <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
    </tr>
  </tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
<tr>
  <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
  <td class="st-Font st-Font--body" style="border: 0; margin: 0; padding: 0; color: #000000 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 16px; line-height: 24px;">

  You are receiving this mail because you are subscribed to this monitor.

  </td>
  <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
</tr>
<tr>
  <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
</tr>
</tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>

<tr>
  <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
</tr>
</tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
  <tr>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
</tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
  <tr>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td class="st-Font st-Font--body" style="border: 0; margin: 0; padding: 0; color: #000000 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 16px; line-height: 24px;">

   
    OneUptime Team.


    </td>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
</tbody>
</table>

<table class="st-Footer st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
  <tr>
    <td class="st-Spacer st-Spacer--divider" colspan="3" height="20" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr class="st-Divider">
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td bgcolor="#fdfdfd" colspan="2" height="1" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--divider" colspan="3" height="31" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td class="st-Font st-Font--caption" style="border: 0; margin: 0;padding: 0; color: #8898aa; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 12px; line-height: 16px;">
      <span class="st-Delink st-Delink--footer" style="border: 0; margin: 0; padding: 0; color: #8898aa; text-decoration: none;">
        © {{year}} HackerBay Inc. | <span><a href={{unsubscribeUrl}}>Unsubscribe</a></span>
      </span>
    </td>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td class="st-Spacer st-Spacer--emailEnd" height="64" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <img border="0" style="height:1px; width:1px; border: 0; margin: 0; padding: 0; color: #000000; display: block; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 12px; font-weight: normal;" src="{{trackEmailAsViewedUrl}}">
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--emailEnd" colspan="3" height="64" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
</tbody>
</table>


                </td>
              </tr>
            </tbody>
          </table>
          <!-- /Wrapper -->

        </td>
      </tr>
      <tr>
        <td class="st-Spacer st-Spacer--emailEnd" height="64" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
          <div class="st-Spacer st-Spacer--filler">&nbsp;</div>
        </td>
      </tr>
    </tbody>
  </table>
  <!-- /Background -->
</body></html>
`,
                },
            },
            {
                allowedVariables: [
                    '{{userName}} : User display name.',
                    '{{eventName}} : Name of the maintenance event.',
                    '{{status}} : Status of the created note.',
                    '{{createdBy}} : Time at which scheduled event is starts.',
                    '{{content}} : Content of created note.',
                    '{{projectName}} : Name of the project on which the event was created.',
                    '{{monitorName}} : Name of the monitor on which the event was created.',
                    '{{unsubscribeUrl}} : URL to unsubscribe from the monitor',
                    '{{resourcesAffected}} : List of monitors affected by scheduled maintenance event',
                ],
                emailType:
                    EmailTemplateType.SUBSCRIBER_SCHEDULED_MAINTENANCE_NOTE_CREATED,
                emailBody: {
                    subject: `New Scheduled Maintenance Event Note for {{projectName}} - {{eventName}} `,
                    body: `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=3Dutf-8">
  <meta name="viewport" content="width=3Ddevice-width">
  <title>Welcome to OneUptime.</title>
  <style>
    /**
* IMPORTANT:
* Please read before changing anything, CSS involved in our HTML emails is
* extremely specific and written a certain way for a reason. It might not make
* sense in a normal setting but Outlook loves it this way.
*
* !!! [override] prevents Yahoo Mail breaking media queries. It must be used
* !!! at the beginning of every line of CSS inside a media query.
* !!! Do not remove.
*
* !!! div[style*="margin: 16px 0"] allows us to target a weird margin
* !!! bug in Android's email client.
* !!! Do not remove.
*
* Also, the img files are hosted on S3. Please don't break these URLs!
* The images are also versioned by date, so please update the URLs accordingly
* if you create new versions
*
***/


/**
* # Root
* - CSS resets and general styles go here.
**/

html, body,
a, span, div[style*="margin: 16px 0"] {
border: 0 !important;
margin: 0 !important;
outline: 0 !important;
padding: 0 !important;
text-decoration: none !important;
}

a, span,
td, th {
-webkit-font-smoothing: antialiased !important;
-moz-osx-font-smoothing: grayscale !important;
}

/**
* # Delink
* - Classes for overriding clients which creates links out of things like
*   emails, addresses, phone numbers, etc.
**/

span.st-Delink a {
color: #000000 !important;
text-decoration: none !important;
}

/** Modifier: preheader */
span.st-Delink.st-Delink--preheader a {
color: white !important;
text-decoration: none !important;
}
/** */

/** Modifier: title */
span.st-Delink.st-Delink--title a {
color: #000000 !important;
text-decoration: none !important;
}
/** */

/** Modifier: footer */
span.st-Delink.st-Delink--footer a {
color: #8898aa !important;
text-decoration: none !important;
}
/** */

.ii a[href] {
  color: #000000;
}

/**
* # Mobile
* - This affects emails views in clients less than 600px wide.
**/

@media all and (max-width: 600px) {

/**
  * # Wrapper
**/

body[override] table.st-Wrapper,
body[override] table.st-Width.st-Width--mobile {
  min-width: 100% !important;
  width: 100% !important;
}

/**
  * # Spacer
**/

/** Modifier: gutter */
body[override] td.st-Spacer.st-Spacer--gutter {
  width: 32px !important;
}
/** */

/** Modifier: kill */
body[override] td.st-Spacer.st-Spacer--kill {
  width: 0 !important;
}
/** */

/** Modifier: emailEnd */
body[override] td.st-Spacer.st-Spacer--emailEnd {
  height: 32px !important;
}
/** */

/**
  * # Font
**/





/** Modifier: simplified */
body[override] table.st-Header.st-Header--simplified td.st-Header-logo {
  width: auto !important;
}

body[override] table.st-Header.st-Header--simplified td.st-Header-spacing{
  width: 0 !important;
}



/**
  * # Blocks
**/

body[override] table.st-Blocks table.st-Blocks-inner {
    border-radius: 0 !important;
}

body[override] table.st-Blocks table.st-Blocks-inner table.st-Blocks-item td.st-Blocks-item-cell {
    display: block !important;
}

/**
  * # Button
**/

body[override] table.st-Button {
    margin: 0 auto !important;
    width: 100% !important;
}

body[override] table.st-Button td.st-Button-area,
body[override] table.st-Button td.st-Button-area a.st-Button-link,
body[override] table.st-Button td.st-Button-area span.st-Button-internal{
  height: 44px !important;
  line-height: 44px !important;
  font-size: 18px !important;
  vertical-align: middle !important;
}
}

  </style>
</head>
<body class="st-Email" bgcolor="f7f7f7" style="border: 0; margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; min-width: 100%; width: 100%;" override="fix">

  <!-- Background -->
  <table class="st-Background" bgcolor="f7f7f7" border="0" cellpadding="0" cellspacing="0" width="100%" style="border: 0; margin: 0; padding: 0;">
    <tbody>
      <tr>
        <td style="border: 0; margin: 0; padding: 0;">

          <!-- Wrapper -->
          <table class="st-Wrapper" align="center" bgcolor="ffffff" border="0" cellpadding="0" cellspacing="0" width="600" style="border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; margin: 0 auto; min-width: 600px;">
            <tbody>
              <tr>
                <td style="border: 0; margin: 0; padding: 0;">



<table class="st-Header st-Header--simplified st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
  <tr>
    <td class="st-Spacer st-Spacer--divider" colspan="4" height="19" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td align="left" style="height:80px; border: 0; margin: 0; padding: 0;">
      <div>
        <a style="border: 0; margin: 0; padding: 0; text-decoration: none;" href="https://oneuptime.com">
          <img alt="OneUptime" border="0" style="height:70px; width:70px; border: 0; margin: 0; padding: 0; color: #000000; display: block; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 12px; font-weight: normal;" src="https://res.cloudinary.com/deityhub/image/upload/v1637736803/1png.png">
        </a>
      </div>
    </td>
    <td class="st-Header-spacing" width="423" style="border: 0; margin: 0; padding: 0;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--divider" colspan="4" height="19" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr class="st-Divider">
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td bgcolor="#fdfdfd" colspan="2" height="1" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
</tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
  <tr>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td class="st-Font st-Font--body" style="color: #000000 !important; border:0;margin:0;padding:0; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Ubuntu,sans-serif;font-size:16px;line-height:24px">
      <h3>New Scheduled Maintenance Event Note for {{projectName}} - {{eventName}} </h3>
    </td>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
</tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
  <tr>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td class="st-Font st-Font--body" style="border: 0; margin: 0; padding: 0; color: #000000 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 16px; line-height: 24px;">
      Hi.
    </td>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td class="st-Font st-Font--body" style="border: 0; margin: 0; padding: 0; color: #000000 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 16px; line-height: 24px;">
      A new note was added to a scheduled maintenance event with the following details:
      </td>
    </tr>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  
</tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0"
width="500" style="min-width: 500px;margin: 40px 50px;">
<tbody>
  <tr style="border-collapse:collapse">
    <td width="720" align="center" valign="top" style="padding:0;Margin:0"></td>
  </tr>
  <tr style="border-collapse:collapse">
    <td align="left"
      style="padding:0;Margin:0;padding-top:0px;padding-left:40px;padding-right:40px;padding-bottom:30px;background-color:#f7f8fa;border-radius: 5px">
      <table cellpadding="0" cellspacing="0" width="100%"
        style="border-collapse:collapse;border-spacing:0px">
        <tbody>
          <tr style="border-collapse:collapse">
            <td width="720" align="center" valign="top" style="padding:0;Margin:0">
              <table cellpadding="0" cellspacing="0" width="100%" role="presentation"
                style="border-collapse:collapse;border-spacing:0px">
                <tbody>
                  <tr style="border-collapse:collapse">
                    <td align="left" style="padding:0;Margin:0;padding-top:30px">
                      <p
                        style="Margin:0;font-size:16px;font-family:'inter','helvetica neue',helvetica,arial,sans-serif;line-height:30px;color:#424761">
                        <strong>Event Name: </strong>
                        <span>{{eventName}}</span><br></p>                      
                      <p
                        style="Margin:0;font-size:16px;font-family:'inter','helvetica neue',helvetica,arial,sans-serif;line-height:30px;color:#424761">
                        <strong>Status: </strong> <span>{{status}}</span><br></p>
                         
                      <p
                        style="Margin:0;font-size:16px;font-family:'inter','helvetica neue',helvetica,arial,sans-serif;line-height:30px;color:#424761">
                        <strong>Note: </strong> "<span>{{content}}</span>"<br></p> 

                      {{#if resourcesAffected}}
                        <p style="Margin:0;font-size:16px;font-family:'inter','helvetica neue',helvetica,arial,sans-serif;line-height:30px;color:#424761">
                        <strong>Resource Affected: </strong>
                        <span>{{resourcesAffected}}</span><br></p> 
                      {{/if}}   
                                                       
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </td>
  </tr>
</tbody>
</table>

<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
  <tbody>
    <tr>
      <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
      <td class="st-Font st-Font--body" style="border: 0; margin: 0; padding: 0; color: #000000 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 16px; line-height: 24px;">

      {{#if statusPageUrl}}
        You can view the status of the incident here {{statusPageUrl}}
      {{/if}}

      </td>
      <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
    </tr>
    <tr>
      <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
        <div class="st-Spacer st-Spacer--filler"></div>
      </td>
    </tr>
  </tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
<tr>
  <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
  <td class="st-Font st-Font--body" style="border: 0; margin: 0; padding: 0; color: #000000 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 16px; line-height: 24px;">

  You are receiving this mail because you are subscribed to this monitor.

  </td>
  <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
</tr>
<tr>
  <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
</tr>
</tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>

<tr>
  <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
</tr>
</tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
  <tr>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
</tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
  <tr>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td class="st-Font st-Font--body" style="border: 0; margin: 0; padding: 0; color: #000000 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 16px; line-height: 24px;">

   
    OneUptime Team.


    </td>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
</tbody>
</table>

<table class="st-Footer st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
  <tr>
    <td class="st-Spacer st-Spacer--divider" colspan="3" height="20" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr class="st-Divider">
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td bgcolor="#fdfdfd" colspan="2" height="1" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--divider" colspan="3" height="31" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td class="st-Font st-Font--caption" style="border: 0; margin: 0;padding: 0; color: #8898aa; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 12px; line-height: 16px;">
      <span class="st-Delink st-Delink--footer" style="border: 0; margin: 0; padding: 0; color: #8898aa; text-decoration: none;">
        © {{year}} HackerBay Inc. | <span><a href={{unsubscribeUrl}}>Unsubscribe</a></span>
      </span>
    </td>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td class="st-Spacer st-Spacer--emailEnd" height="64" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <img border="0" style="height:1px; width:1px; border: 0; margin: 0; padding: 0; color: #000000; display: block; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 12px; font-weight: normal;" src="{{trackEmailAsViewedUrl}}">
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--emailEnd" colspan="3" height="64" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
</tbody>
</table>


                </td>
              </tr>
            </tbody>
          </table>
          <!-- /Wrapper -->

        </td>
      </tr>
      <tr>
        <td class="st-Spacer st-Spacer--emailEnd" height="64" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
          <div class="st-Spacer st-Spacer--filler">&nbsp;</div>
        </td>
      </tr>
    </tbody>
  </table>
  <!-- /Background -->
</body></html>
`,
                },
            },

            {
                allowedVariables: [
                    '{{userName}} : User display name.',
                    '{{eventName}} : Name of the maintenance event.',
                    '{{eventDescription}} :Description of the scheduled event.',
                    '{{eventResolveTime}} : Time at which scheduled event is created.',
                    '{{projectName}} : Name of the project on which the event was created.',
                    '{{monitorName}} : Name of the monitor on which the event was created.',
                    '{{unsubscribeUrl}} : URL to unsubscribe from the monitor',
                    '{{resourcesAffected}} : List of monitors affected by scheduled maintenance event',
                ],
                emailType:
                    EmailTemplateType.SUBSCRIBER_SCHEDULED_MAINTENANCE_RESOLVED,
                emailBody: {
                    subject: `Resolved Scheduled Maintenance Event for {{projectName}} - {{eventName}}`,
                    body: `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=3Dutf-8">
<meta name="viewport" content="width=3Ddevice-width">
<title>Welcome to OneUptime.</title>
<style>
  /**
* IMPORTANT:
* Please read before changing anything, CSS involved in our HTML emails is
* extremely specific and written a certain way for a reason. It might not make
* sense in a normal setting but Outlook loves it this way.
*
* !!! [override] prevents Yahoo Mail breaking media queries. It must be used
* !!! at the beginning of every line of CSS inside a media query.
* !!! Do not remove.
*
* !!! div[style*="margin: 16px 0"] allows us to target a weird margin
* !!! bug in Android's email client.
* !!! Do not remove.
*
* Also, the img files are hosted on S3. Please don't break these URLs!
* The images are also versioned by date, so please update the URLs accordingly
* if you create new versions
*
***/


/**
* # Root
* - CSS resets and general styles go here.
**/

html, body,
a, span, div[style*="margin: 16px 0"] {
border: 0 !important;
margin: 0 !important;
outline: 0 !important;
padding: 0 !important;
text-decoration: none !important;
}

a, span,
td, th {
-webkit-font-smoothing: antialiased !important;
-moz-osx-font-smoothing: grayscale !important;
}

/**
* # Delink
* - Classes for overriding clients which creates links out of things like
*   emails, addresses, phone numbers, etc.
**/

span.st-Delink a {
color: #000000 !important;
text-decoration: none !important;
}

/** Modifier: preheader */
span.st-Delink.st-Delink--preheader a {
color: white !important;
text-decoration: none !important;
}
/** */

/** Modifier: title */
span.st-Delink.st-Delink--title a {
color: #000000 !important;
text-decoration: none !important;
}
/** */

/** Modifier: footer */
span.st-Delink.st-Delink--footer a {
color: #8898aa !important;
text-decoration: none !important;
}
/** */

.ii a[href] {
color: #000000;
}

/**
* # Mobile
* - This affects emails views in clients less than 600px wide.
**/

@media all and (max-width: 600px) {

/**
* # Wrapper
**/

body[override] table.st-Wrapper,
body[override] table.st-Width.st-Width--mobile {
min-width: 100% !important;
width: 100% !important;
}

/**
* # Spacer
**/

/** Modifier: gutter */
body[override] td.st-Spacer.st-Spacer--gutter {
width: 32px !important;
}
/** */

/** Modifier: kill */
body[override] td.st-Spacer.st-Spacer--kill {
width: 0 !important;
}
/** */

/** Modifier: emailEnd */
body[override] td.st-Spacer.st-Spacer--emailEnd {
height: 32px !important;
}
/** */

/**
* # Font
**/





/** Modifier: simplified */
body[override] table.st-Header.st-Header--simplified td.st-Header-logo {
width: auto !important;
}

body[override] table.st-Header.st-Header--simplified td.st-Header-spacing{
width: 0 !important;
}



/**
* # Blocks
**/

body[override] table.st-Blocks table.st-Blocks-inner {
  border-radius: 0 !important;
}

body[override] table.st-Blocks table.st-Blocks-inner table.st-Blocks-item td.st-Blocks-item-cell {
  display: block !important;
}

/**
* # Button
**/

body[override] table.st-Button {
  margin: 0 auto !important;
  width: 100% !important;
}

body[override] table.st-Button td.st-Button-area,
body[override] table.st-Button td.st-Button-area a.st-Button-link,
body[override] table.st-Button td.st-Button-area span.st-Button-internal{
height: 44px !important;
line-height: 44px !important;
font-size: 18px !important;
vertical-align: middle !important;
}
}

</style>
</head>
<body class="st-Email" bgcolor="f7f7f7" style="border: 0; margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; min-width: 100%; width: 100%;" override="fix">

<!-- Background -->
<table class="st-Background" bgcolor="f7f7f7" border="0" cellpadding="0" cellspacing="0" width="100%" style="border: 0; margin: 0; padding: 0;">
  <tbody>
    <tr>
      <td style="border: 0; margin: 0; padding: 0;">

        <!-- Wrapper -->
        <table class="st-Wrapper" align="center" bgcolor="ffffff" border="0" cellpadding="0" cellspacing="0" width="600" style="border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; margin: 0 auto; min-width: 600px;">
          <tbody>
            <tr>
              <td style="border: 0; margin: 0; padding: 0;">



<table class="st-Header st-Header--simplified st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
<tr>
  <td class="st-Spacer st-Spacer--divider" colspan="4" height="19" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
</tr>
<tr>
  <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
  <td align="left" style="height:80px; border: 0; margin: 0; padding: 0;">
    <div>
      <a style="border: 0; margin: 0; padding: 0; text-decoration: none;" href="https://oneuptime.com">
        <img alt="OneUptime" border="0" style="height:70px; width:70px; border: 0; margin: 0; padding: 0; color: #000000; display: block; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 12px; font-weight: normal;" src="https://res.cloudinary.com/deityhub/image/upload/v1637736803/1png.png">
      </a>
    </div>
  </td>
  <td class="st-Header-spacing" width="423" style="border: 0; margin: 0; padding: 0;">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
  <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
</tr>
<tr>
  <td class="st-Spacer st-Spacer--divider" colspan="4" height="19" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
</tr>
<tr class="st-Divider">
  <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;" width="64">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
  <td bgcolor="#fdfdfd" colspan="2" height="1" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
  <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;" width="64">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
</tr>
</tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
<tr>
  <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
  <td class="st-Font st-Font--body" style="color: #000000 !important; border:0;margin:0;padding:0; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Ubuntu,sans-serif;font-size:16px;line-height:24px">
    <h3><span style="display:inline-block;width:16px;height:16px;background:#24b47e;border-radius:16px"></span>Resolved Scheduled Maintenance Event for {{projectName}} - {{eventName}}</h3>
  </td>
  <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td> 
</tr>
<tr>
  <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
</tr>
</tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
<tr>
  <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
  <td class="st-Font st-Font--body" style="border: 0; margin: 0; padding: 0; color: #000000 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 16px; line-height: 24px;">
    Hi.
  </td>
  <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
</tr>
<tr>
  <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
</tr>
<tr>
  <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
  <td class="st-Font st-Font--body" style="border: 0; margin: 0; padding: 0; color: #000000 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 16px; line-height: 24px;">
      The following scheduled maintenance event has just been resolved:
    </td>
  </tr>
  <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
</tbody>
</table>

<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0"
width="500" style="min-width: 500px;margin: 40px 50px;">
<tbody>
  <tr style="border-collapse:collapse">
    <td width="720" align="center" valign="top" style="padding:0;Margin:0"></td>
  </tr>
  <tr style="border-collapse:collapse">
    <td align="left"
      style="padding:0;Margin:0;padding-top:0px;padding-left:40px;padding-right:40px;padding-bottom:30px;background-color:#f7f8fa;border-radius: 5px">
      <table cellpadding="0" cellspacing="0" width="100%"
        style="border-collapse:collapse;border-spacing:0px">
        <tbody>
          <tr style="border-collapse:collapse">
            <td width="720" align="center" valign="top" style="padding:0;Margin:0">
              <table cellpadding="0" cellspacing="0" width="100%" role="presentation"
                style="border-collapse:collapse;border-spacing:0px">
                <tbody>
                  <tr style="border-collapse:collapse">
                    <td align="left" style="padding:0;Margin:0;padding-top:30px">
                      <p
                        style="Margin:0;font-size:16px;font-family:'inter','helvetica neue',helvetica,arial,sans-serif;line-height:30px;color:#424761">
                        <strong>Event Name: </strong>
                        <span>{{eventName}}</span><br></p>
                      {{#if resourcesAffected}}
                        <p style="Margin:0;font-size:16px;font-family:'inter','helvetica neue',helvetica,arial,sans-serif;line-height:30px;color:#424761">
                        <strong>Resource Affected: </strong>
                        <span>{{resourcesAffected}}</span><br></p> 
                      {{/if}}
                      <p
                        style="Margin:0;font-size:16px;font-family:'inter','helvetica neue',helvetica,arial,sans-serif;line-height:30px;color:#424761">
                        <strong>Resolved at:</strong> <span>{{eventResolveTime}}</span><br></p>                                    
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </td>
  </tr>
</tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
  <tr>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
    <td class="st-Font st-Font--body" style="border: 0; margin: 0; padding: 0; color: #000000 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 16px; line-height: 24px;">

    {{#if statusPageUrl}}
      You can view the status of the incident here {{statusPageUrl}}
    {{/if}}

    </td>
    <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler"></div>
    </td>
  </tr>
</tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
<tr>
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
<td class="st-Font st-Font--body" style="border: 0; margin: 0; padding: 0; color: #000000 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 16px; line-height: 24px;">

You are receiving this mail because you are subscribed to this monitor.

</td>
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
</tr>
<tr>
<td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
</tr>
</tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>

<tr>
<td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
</tr>
</tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
<tr>
  <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
  <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
</tr>
<tr>
  <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
</tr>
</tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
<tr>
  <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
  <td class="st-Font st-Font--body" style="border: 0; margin: 0; padding: 0; color: #000000 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 16px; line-height: 24px;">
 
  OneUptime Team.

  </td>
  <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
</tr>
<tr>
  <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
</tr>
</tbody>
</table>

<table class="st-Footer st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
<tr>
  <td class="st-Spacer st-Spacer--divider" colspan="3" height="20" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
</tr>
<tr class="st-Divider">
  <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;" width="64">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
  <td bgcolor="#fdfdfd" colspan="2" height="1" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
  <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;" width="64">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
</tr>
<tr>
  <td class="st-Spacer st-Spacer--divider" colspan="3" height="31" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
</tr>
<tr>
  <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
  <td class="st-Font st-Font--caption" style="border: 0; margin: 0;padding: 0; color: #8898aa; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 12px; line-height: 16px;">
    <span class="st-Delink st-Delink--footer" style="border: 0; margin: 0; padding: 0; color: #8898aa; text-decoration: none;">
      © {{year}} HackerBay Inc. | <span><a href={{unsubscribeUrl}}>Unsubscribe</a></span>
    </span>
  </td>
  <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
</tr>
<tr>
  <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
  <td class="st-Spacer st-Spacer--emailEnd" height="64" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
    <img border="0" style="height:1px; width:1px; border: 0; margin: 0; padding: 0; color: #000000; display: block; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 12px; font-weight: normal;" src="{{trackEmailAsViewedUrl}}">
  </td>
</tr>
<tr>
  <td class="st-Spacer st-Spacer--emailEnd" colspan="3" height="64" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
</tr>
</tbody>
</table>


              </td>
            </tr>
          </tbody>
        </table>
        <!-- /Wrapper -->

      </td>
    </tr>
    <tr>
      <td class="st-Spacer st-Spacer--emailEnd" height="64" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
        <div class="st-Spacer st-Spacer--filler">&nbsp;</div>
      </td>
    </tr>
  </tbody>
</table>
<!-- /Background -->
</body></html>
`,
                },
            },
            {
                allowedVariables: [
                    '{{userName}} : User display name.',
                    '{{eventName}} : Name of the maintenance event.',
                    '{{eventDescription}} :Description of the scheduled event.',
                    '{{eventCancelTime}} : Time at which scheduled event is cancelled.',
                    '{{projectName}} : Name of the project on which the event was created.',
                    '{{monitorName}} : Name of the monitor on which the event was created.',
                    '{{unsubscribeUrl}} : URL to unsubscribe from the monitor',
                    '{{resourcesAffected}} : List of monitors affected by scheduled maintenance event',
                ],
                emailType:
                    EmailTemplateType.SUBSCRIBER_SCHEDULED_MAINTENANCE_CANCELLED,
                emailBody: {
                    subject: `Cancelled Scheduled Maintenance Event for {{projectName}} - {{eventName}}`,
                    body: `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=3Dutf-8">
<meta name="viewport" content="width=3Ddevice-width">
<title>Welcome to OneUptime.</title>
<style>
/**
* IMPORTANT:
* Please read before changing anything, CSS involved in our HTML emails is
* extremely specific and written a certain way for a reason. It might not make
* sense in a normal setting but Outlook loves it this way.
*
* !!! [override] prevents Yahoo Mail breaking media queries. It must be used
* !!! at the beginning of every line of CSS inside a media query.
* !!! Do not remove.
*
* !!! div[style*="margin: 16px 0"] allows us to target a weird margin
* !!! bug in Android's email client.
* !!! Do not remove.
*
* Also, the img files are hosted on S3. Please don't break these URLs!
* The images are also versioned by date, so please update the URLs accordingly
* if you create new versions
*
***/


/**
* # Root
* - CSS resets and general styles go here.
**/

html, body,
a, span, div[style*="margin: 16px 0"] {
border: 0 !important;
margin: 0 !important;
outline: 0 !important;
padding: 0 !important;
text-decoration: none !important;
}

a, span,
td, th {
-webkit-font-smoothing: antialiased !important;
-moz-osx-font-smoothing: grayscale !important;
}

/**
* # Delink
* - Classes for overriding clients which creates links out of things like
*   emails, addresses, phone numbers, etc.
**/

span.st-Delink a {
color: #000000 !important;
text-decoration: none !important;
}

/** Modifier: preheader */
span.st-Delink.st-Delink--preheader a {
color: white !important;
text-decoration: none !important;
}
/** */

/** Modifier: title */
span.st-Delink.st-Delink--title a {
color: #000000 !important;
text-decoration: none !important;
}
/** */

/** Modifier: footer */
span.st-Delink.st-Delink--footer a {
color: #8898aa !important;
text-decoration: none !important;
}
/** */

.ii a[href] {
color: #000000;
}

/**
* # Mobile
* - This affects emails views in clients less than 600px wide.
**/

@media all and (max-width: 600px) {

/**
* # Wrapper
**/

body[override] table.st-Wrapper,
body[override] table.st-Width.st-Width--mobile {
min-width: 100% !important;
width: 100% !important;
}

/**
* # Spacer
**/

/** Modifier: gutter */
body[override] td.st-Spacer.st-Spacer--gutter {
width: 32px !important;
}
/** */

/** Modifier: kill */
body[override] td.st-Spacer.st-Spacer--kill {
width: 0 !important;
}
/** */

/** Modifier: emailEnd */
body[override] td.st-Spacer.st-Spacer--emailEnd {
height: 32px !important;
}
/** */

/**
* # Font
**/





/** Modifier: simplified */
body[override] table.st-Header.st-Header--simplified td.st-Header-logo {
width: auto !important;
}

body[override] table.st-Header.st-Header--simplified td.st-Header-spacing{
width: 0 !important;
}



/**
* # Blocks
**/

body[override] table.st-Blocks table.st-Blocks-inner {
border-radius: 0 !important;
}

body[override] table.st-Blocks table.st-Blocks-inner table.st-Blocks-item td.st-Blocks-item-cell {
display: block !important;
}

/**
* # Button
**/

body[override] table.st-Button {
margin: 0 auto !important;
width: 100% !important;
}

body[override] table.st-Button td.st-Button-area,
body[override] table.st-Button td.st-Button-area a.st-Button-link,
body[override] table.st-Button td.st-Button-area span.st-Button-internal{
height: 44px !important;
line-height: 44px !important;
font-size: 18px !important;
vertical-align: middle !important;
}
}

</style>
</head>
<body class="st-Email" bgcolor="f7f7f7" style="border: 0; margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; min-width: 100%; width: 100%;" override="fix">

<!-- Background -->
<table class="st-Background" bgcolor="f7f7f7" border="0" cellpadding="0" cellspacing="0" width="100%" style="border: 0; margin: 0; padding: 0;">
<tbody>
  <tr>
    <td style="border: 0; margin: 0; padding: 0;">

      <!-- Wrapper -->
      <table class="st-Wrapper" align="center" bgcolor="ffffff" border="0" cellpadding="0" cellspacing="0" width="600" style="border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; margin: 0 auto; min-width: 600px;">
        <tbody>
          <tr>
            <td style="border: 0; margin: 0; padding: 0;">



<table class="st-Header st-Header--simplified st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
<tr>
<td class="st-Spacer st-Spacer--divider" colspan="4" height="19" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
</tr>
<tr>
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
<td align="left" style="height:80px; border: 0; margin: 0; padding: 0;">
  <div>
    <a style="border: 0; margin: 0; padding: 0; text-decoration: none;" href="https://oneuptime.com">
      <img alt="OneUptime" border="0" style="height:70px; width:70px; border: 0; margin: 0; padding: 0; color: #000000; display: block; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 12px; font-weight: normal;" src="https://res.cloudinary.com/deityhub/image/upload/v1637736803/1png.png">
    </a>
  </div>
</td>
<td class="st-Header-spacing" width="423" style="border: 0; margin: 0; padding: 0;">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
</tr>
<tr>
<td class="st-Spacer st-Spacer--divider" colspan="4" height="19" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
</tr>
<tr class="st-Divider">
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;" width="64">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
<td bgcolor="#fdfdfd" colspan="2" height="1" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;" width="64">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
</tr>
</tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
<tr>
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
<td class="st-Font st-Font--body" style="color: #000000 !important; border:0;margin:0;padding:0; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Ubuntu,sans-serif;font-size:16px;line-height:24px">
  <h3><span style="display:inline-block;width:16px;height:16px;background:#C23D4B;border-radius:16px"></span>  Cancelled Scheduled Maintenance Event for {{projectName}} - {{eventName}}</h3>
</td>
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
  <div class="st-Spacer st-Spacer--filler"></div>
</td> 
</tr>
<tr>
<td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
</tr>
</tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
<tr>
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
<td class="st-Font st-Font--body" style="border: 0; margin: 0; padding: 0; color: #000000 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 16px; line-height: 24px;">
  Hi.
</td>
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
</tr>
<tr>
<td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
</tr>
<tr>
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
<td class="st-Font st-Font--body" style="border: 0; margin: 0; padding: 0; color: #000000 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 16px; line-height: 24px;">
    The following scheduled maintenance event has just been cancelled:
  </td>
</tr>
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
</tbody>
</table>

<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0"
width="500" style="min-width: 500px;margin: 40px 50px;">
<tbody>
<tr style="border-collapse:collapse">
  <td width="720" align="center" valign="top" style="padding:0;Margin:0"></td>
</tr>
<tr style="border-collapse:collapse">
  <td align="left"
    style="padding:0;Margin:0;padding-top:0px;padding-left:40px;padding-right:40px;padding-bottom:30px;background-color:#f7f8fa;border-radius: 5px">
    <table cellpadding="0" cellspacing="0" width="100%"
      style="border-collapse:collapse;border-spacing:0px">
      <tbody>
        <tr style="border-collapse:collapse">
          <td width="720" align="center" valign="top" style="padding:0;Margin:0">
            <table cellpadding="0" cellspacing="0" width="100%" role="presentation"
              style="border-collapse:collapse;border-spacing:0px">
              <tbody>
                <tr style="border-collapse:collapse">
                  <td align="left" style="padding:0;Margin:0;padding-top:30px">
                    <p
                      style="Margin:0;font-size:16px;font-family:'inter','helvetica neue',helvetica,arial,sans-serif;line-height:30px;color:#424761">
                      <strong>Event Name: </strong>
                      <span>{{eventName}}</span><br></p>
                    {{#if resourcesAffected}}
                      <p style="Margin:0;font-size:16px;font-family:'inter','helvetica neue',helvetica,arial,sans-serif;line-height:30px;color:#424761">
                      <strong>Resource Affected: </strong>
                      <span>{{resourcesAffected}}</span><br></p> 
                    {{/if}}
                    <p
                      style="Margin:0;font-size:16px;font-family:'inter','helvetica neue',helvetica,arial,sans-serif;line-height:30px;color:#424761">
                      <strong>Cancelled at:</strong> <span>{{eventCancelTime}}</span><br></p>                                    
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </td>
</tr>
</tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
<tr>
  <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
  <td class="st-Font st-Font--body" style="border: 0; margin: 0; padding: 0; color: #000000 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 16px; line-height: 24px;">

  {{#if statusPageUrl}}
    You can view the status of the incident here {{statusPageUrl}}
  {{/if}}

  </td>
  <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
</tr>
<tr>
  <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
</tr>
</tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
<tr>
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
<div class="st-Spacer st-Spacer--filler"></div>
</td>
<td class="st-Font st-Font--body" style="border: 0; margin: 0; padding: 0; color: #000000 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 16px; line-height: 24px;">

You are receiving this mail because you are subscribed to this monitor.

</td>
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
<div class="st-Spacer st-Spacer--filler"></div>
</td>
</tr>
<tr>
<td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
<div class="st-Spacer st-Spacer--filler"></div>
</td>
</tr>
</tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>

<tr>
<td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
<div class="st-Spacer st-Spacer--filler"></div>
</td>
</tr>
</tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
<tr>
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
</tr>
<tr>
<td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
</tr>
</tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
<tr>
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
<td class="st-Font st-Font--body" style="border: 0; margin: 0; padding: 0; color: #000000 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 16px; line-height: 24px;">

OneUptime Team.

</td>
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
</tr>
<tr>
<td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
</tr>
</tbody>
</table>

<table class="st-Footer st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
<tr>
<td class="st-Spacer st-Spacer--divider" colspan="3" height="20" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
</tr>
<tr class="st-Divider">
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;" width="64">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
<td bgcolor="#fdfdfd" colspan="2" height="1" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;" width="64">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
</tr>
<tr>
<td class="st-Spacer st-Spacer--divider" colspan="3" height="31" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
</tr>
<tr>
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
<td class="st-Font st-Font--caption" style="border: 0; margin: 0;padding: 0; color: #8898aa; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 12px; line-height: 16px;">
  <span class="st-Delink st-Delink--footer" style="border: 0; margin: 0; padding: 0; color: #8898aa; text-decoration: none;">
    © {{year}} HackerBay Inc. | <span><a href={{unsubscribeUrl}}>Unsubscribe</a></span>
  </span>
</td>
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
</tr>
<tr>
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
<td class="st-Spacer st-Spacer--emailEnd" height="64" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
  <img border="0" style="height:1px; width:1px; border: 0; margin: 0; padding: 0; color: #000000; display: block; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 12px; font-weight: normal;" src="{{trackEmailAsViewedUrl}}">
</td>
</tr>
<tr>
<td class="st-Spacer st-Spacer--emailEnd" colspan="3" height="64" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
</tr>
</tbody>
</table>


            </td>
          </tr>
        </tbody>
      </table>
      <!-- /Wrapper -->

    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--emailEnd" height="64" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler">&nbsp;</div>
    </td>
  </tr>
</tbody>
</table>
<!-- /Background -->
</body></html>
`,
                },
            },
            {
                allowedVariables: [
                    '{{announcementTitle}} : Name of the maintenance event.',
                    '{{announcementDescription}} : Description of the scheduled event.',
                    '{{unsubscribeUrl}} : URL to unsubscribe from the monitor',
                    '{{projectName}} : Name of project on which announcement is created',
                    '{{monitorName}} : List of monitors affected by scheduled maintenance event',
                ],
                emailType:
                    EmailTemplateType.SUBSCRIBER_ANNOUNCEMENT_NOTIFICATION_CREATED,
                emailBody: {
                    subject: `Announcement Notification for {{projectName}}`,
                    body: `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=3Dutf-8">
<meta name="viewport" content="width=3Ddevice-width">
<title>Welcome to OneUptime.</title>
<style>
/**
* IMPORTANT:
* Please read before changing anything, CSS involved in our HTML emails is
* extremely specific and written a certain way for a reason. It might not make
* sense in a normal setting but Outlook loves it this way.
*
* !!! [override] prevents Yahoo Mail breaking media queries. It must be used
* !!! at the beginning of every line of CSS inside a media query.
* !!! Do not remove.
*
* !!! div[style*="margin: 16px 0"] allows us to target a weird margin
* !!! bug in Android's email client.
* !!! Do not remove.
*
* Also, the img files are hosted on S3. Please don't break these URLs!
* The images are also versioned by date, so please update the URLs accordingly
* if you create new versions
*
***/


/**
* # Root
* - CSS resets and general styles go here.
**/

html, body,
a, span, div[style*="margin: 16px 0"] {
border: 0 !important;
margin: 0 !important;
outline: 0 !important;
padding: 0 !important;
text-decoration: none !important;
}

a, span,
td, th {
-webkit-font-smoothing: antialiased !important;
-moz-osx-font-smoothing: grayscale !important;
}

/**
* # Delink
* - Classes for overriding clients which creates links out of things like
*   emails, addresses, phone numbers, etc.
**/

span.st-Delink a {
color: #000000 !important;
text-decoration: none !important;
}

/** Modifier: preheader */
span.st-Delink.st-Delink--preheader a {
color: white !important;
text-decoration: none !important;
}
/** */

/** Modifier: title */
span.st-Delink.st-Delink--title a {
color: #000000 !important;
text-decoration: none !important;
}
/** */

/** Modifier: footer */
span.st-Delink.st-Delink--footer a {
color: #8898aa !important;
text-decoration: none !important;
}
/** */

.ii a[href] {
color: #000000;
}

/**
* # Mobile
* - This affects emails views in clients less than 600px wide.
**/

@media all and (max-width: 600px) {

/**
* # Wrapper
**/

body[override] table.st-Wrapper,
body[override] table.st-Width.st-Width--mobile {
min-width: 100% !important;
width: 100% !important;
}

/**
* # Spacer
**/

/** Modifier: gutter */
body[override] td.st-Spacer.st-Spacer--gutter {
width: 32px !important;
}
/** */

/** Modifier: kill */
body[override] td.st-Spacer.st-Spacer--kill {
width: 0 !important;
}
/** */

/** Modifier: emailEnd */
body[override] td.st-Spacer.st-Spacer--emailEnd {
height: 32px !important;
}
/** */

/**
* # Font
**/





/** Modifier: simplified */
body[override] table.st-Header.st-Header--simplified td.st-Header-logo {
width: auto !important;
}

body[override] table.st-Header.st-Header--simplified td.st-Header-spacing{
width: 0 !important;
}



/**
* # Blocks
**/

body[override] table.st-Blocks table.st-Blocks-inner {
border-radius: 0 !important;
}

body[override] table.st-Blocks table.st-Blocks-inner table.st-Blocks-item td.st-Blocks-item-cell {
display: block !important;
}

/**
* # Button
**/

body[override] table.st-Button {
margin: 0 auto !important;
width: 100% !important;
}

body[override] table.st-Button td.st-Button-area,
body[override] table.st-Button td.st-Button-area a.st-Button-link,
body[override] table.st-Button td.st-Button-area span.st-Button-internal{
height: 44px !important;
line-height: 44px !important;
font-size: 18px !important;
vertical-align: middle !important;
}
}

</style>
</head>
<body class="st-Email" bgcolor="f7f7f7" style="border: 0; margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; min-width: 100%; width: 100%;" override="fix">

<!-- Background -->
<table class="st-Background" bgcolor="f7f7f7" border="0" cellpadding="0" cellspacing="0" width="100%" style="border: 0; margin: 0; padding: 0;">
<tbody>
  <tr>
    <td style="border: 0; margin: 0; padding: 0;">

      <!-- Wrapper -->
      <table class="st-Wrapper" align="center" bgcolor="ffffff" border="0" cellpadding="0" cellspacing="0" width="600" style="border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; margin: 0 auto; min-width: 600px;">
        <tbody>
          <tr>
            <td style="border: 0; margin: 0; padding: 0;">



<table class="st-Header st-Header--simplified st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
<tr>
<td class="st-Spacer st-Spacer--divider" colspan="4" height="19" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
</tr>
<tr>
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
<td align="left" style="height:80px; border: 0; margin: 0; padding: 0;">
  <div>
    <a style="border: 0; margin: 0; padding: 0; text-decoration: none;" href="https://oneuptime.com">
      <img alt="OneUptime" border="0" style="height:70px; width:70px; border: 0; margin: 0; padding: 0; color: #000000; display: block; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 12px; font-weight: normal;" src="https://res.cloudinary.com/deityhub/image/upload/v1637736803/1png.png">
    </a>
  </div>
</td>
<td class="st-Header-spacing" width="423" style="border: 0; margin: 0; padding: 0;">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
</tr>
<tr>
<td class="st-Spacer st-Spacer--divider" colspan="4" height="19" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
</tr>
<tr class="st-Divider">
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;" width="64">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
<td bgcolor="#fdfdfd" colspan="2" height="1" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;" width="64">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
</tr>
</tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
<tr>
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
<td class="st-Font st-Font--body" style="color: #000000 !important; border:0;margin:0;padding:0; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Ubuntu,sans-serif;font-size:16px;line-height:24px">
  <h3>Announcement notification for {{projectName}}</h3>
</td>
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
  <div class="st-Spacer st-Spacer--filler"></div>
</td> 
</tr>
<tr>
<td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
</tr>
</tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
<tr>
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
<td class="st-Font st-Font--body" style="border: 0; margin: 0; padding: 0; color: #000000 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 16px; line-height: 24px;">
  Hi.
</td>
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
</tr>
<tr>
<td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
</tr>
<tr>
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
<td class="st-Font st-Font--body" style="border: 0; margin: 0; padding: 0; color: #000000 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 16px; line-height: 24px;">
    The following announcement has just been made:
  </td>
</tr>
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
</tbody>
</table>

<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0"
width="500" style="min-width: 500px;margin: 40px 50px;">
<tbody>
<tr style="border-collapse:collapse">
  <td width="720" align="center" valign="top" style="padding:0;Margin:0"></td>
</tr>
<tr style="border-collapse:collapse">
  <td align="left"
    style="padding:0;Margin:0;padding-top:0px;padding-left:40px;padding-right:40px;padding-bottom:30px;background-color:#f7f8fa;border-radius: 5px">
    <table cellpadding="0" cellspacing="0" width="100%"
      style="border-collapse:collapse;border-spacing:0px">
      <tbody>
        <tr style="border-collapse:collapse">
          <td width="720" align="center" valign="top" style="padding:0;Margin:0">
            <table cellpadding="0" cellspacing="0" width="100%" role="presentation"
              style="border-collapse:collapse;border-spacing:0px">
              <tbody>
                <tr style="border-collapse:collapse">
                  <td align="left" style="padding:0;Margin:0;padding-top:30px">
                    <p
                      style="Margin:0;font-size:16px;font-family:'inter','helvetica neue',helvetica,arial,sans-serif;line-height:30px;color:#424761">
                      <strong>Title: </strong>
                      <span>{{announcementTitle}}</span><br></p>
                      <p
                      style="Margin:0;font-size:16px;font-family:'inter','helvetica neue',helvetica,arial,sans-serif;line-height:30px;color:#424761">
                      <strong>Content: </strong>
                      <span>"{{announcementDescription}}"</span><br></p>
                      
                    {{#if monitorName}}
                      <p style="Margin:0;font-size:16px;font-family:'inter','helvetica neue',helvetica,arial,sans-serif;line-height:30px;color:#424761">
                      <strong>Resource Affected: </strong>
                      <span>{{monitorName}}</span><br></p> 
                    {{/if}}                                   
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </td>
</tr>
</tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
<tr>
  <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
  <td class="st-Font st-Font--body" style="border: 0; margin: 0; padding: 0; color: #000000 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 16px; line-height: 24px;">

  {{#if statusPageUrl}}
    You can view the status of the incident here {{statusPageUrl}}
  {{/if}}

  </td>
  <td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
</tr>
<tr>
  <td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
    <div class="st-Spacer st-Spacer--filler"></div>
  </td>
</tr>
</tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
<tr>
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
<div class="st-Spacer st-Spacer--filler"></div>
</td>
<td class="st-Font st-Font--body" style="border: 0; margin: 0; padding: 0; color: #000000 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 16px; line-height: 24px;">

You are receiving this mail because you are subscribed to this monitor.

</td>
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
<div class="st-Spacer st-Spacer--filler"></div>
</td>
</tr>
<tr>
<td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
<div class="st-Spacer st-Spacer--filler"></div>
</td>
</tr>
</tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>

<tr>
<td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
<div class="st-Spacer st-Spacer--filler"></div>
</td>
</tr>
</tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
<tr>
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
</tr>
<tr>
<td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
</tr>
</tbody>
</table>
<table class="st-Copy st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
<tr>
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
<td class="st-Font st-Font--body" style="border: 0; margin: 0; padding: 0; color: #000000 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 16px; line-height: 24px;">

OneUptime Team.

</td>
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
</tr>
<tr>
<td class="st-Spacer st-Spacer--stacked" colspan="3" height="12" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
</tr>
</tbody>
</table>

<table class="st-Footer st-Width st-Width--mobile" border="0" cellpadding="0" cellspacing="0" width="600" style="min-width: 600px;">
<tbody>
<tr>
<td class="st-Spacer st-Spacer--divider" colspan="3" height="20" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
</tr>
<tr class="st-Divider">
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;" width="64">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
<td bgcolor="#fdfdfd" colspan="2" height="1" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; max-height: 1px; mso-line-height-rule: exactly;" width="64">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
</tr>
<tr>
<td class="st-Spacer st-Spacer--divider" colspan="3" height="31" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
</tr>
<tr>
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
<td class="st-Font st-Font--caption" style="border: 0; margin: 0;padding: 0; color: #8898aa; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 12px; line-height: 16px;">
  <span class="st-Delink st-Delink--footer" style="border: 0; margin: 0; padding: 0; color: #8898aa; text-decoration: none;">
    © {{year}} HackerBay Inc. | <span><a href={{unsubscribeUrl}}>Unsubscribe</a></span>
  </span>
</td>
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
</tr>
<tr>
<td class="st-Spacer st-Spacer--gutter" style="border: 0; margin:0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;" width="64">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
<td class="st-Spacer st-Spacer--emailEnd" height="64" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
  <img border="0" style="height:1px; width:1px; border: 0; margin: 0; padding: 0; color: #000000; display: block; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; font-size: 12px; font-weight: normal;" src="{{trackEmailAsViewedUrl}}">
</td>
</tr>
<tr>
<td class="st-Spacer st-Spacer--emailEnd" colspan="3" height="64" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
  <div class="st-Spacer st-Spacer--filler"></div>
</td>
</tr>
</tbody>
</table>


            </td>
          </tr>
        </tbody>
      </table>
      <!-- /Wrapper -->

    </td>
  </tr>
  <tr>
    <td class="st-Spacer st-Spacer--emailEnd" height="64" style="border: 0; margin: 0; padding: 0; font-size: 1px; line-height: 1px; mso-line-height-rule: exactly;">
      <div class="st-Spacer st-Spacer--filler">&nbsp;</div>
    </td>
  </tr>
</tbody>
</table>
<!-- /Background -->
</body></html>
`,
                },
            },
        ];
    }
}
