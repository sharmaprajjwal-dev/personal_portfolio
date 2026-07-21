const SPREADSHEET_ID = 'REPLACE_WITH_YOUR_GOOGLE_SHEET_ID';
const SHEET_NAME = 'Inquiries';

function doPost(e) {
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME)
    || SpreadsheetApp.openById(SPREADSHEET_ID).insertSheet(SHEET_NAME);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Received at', 'Name', 'Email', 'Message']);
  }

  const input = e.parameter || {};
  if (!input._gotcha) {
    sheet.appendRow([new Date(), input.name || '', input.email || '', input.message || '']);
  }

  return ContentService.createTextOutput('ok');
}
