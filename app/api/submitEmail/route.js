import { google } from "googleapis";

export async function POST(req) {
  try {
    const { email } = await req.json();
    if (!email) {
      return Response.json({ error: "Email is required" }, { status: 400 });
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"), // Fixes private key formatting
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    const range = "A:B"; // Adjust if needed

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "RAW",
      requestBody: {
        values: [[new Date().toISOString(), email]],
      },
    });

    return Response.json({ success: true, message: "Email saved!" }, { status: 200 });
  } catch (error) {
    console.error("Google Sheets API Error:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
