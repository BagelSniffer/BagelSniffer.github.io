const express = require("express")
const {google} = require("googleapis")

const app = express()
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));

app.get("/VRDS", (req, res) => {
    res.render("VRDS_EJS");
});

app.post("/VRDS", async (req, res) => {
    const Vscore = req.body.request;
    const Vname = req.body.name;

    const auth = new google.auth.GoogleAuth({
        keyFile: "Credentials.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets",
    });

    const client = await auth.getClient();

    const googleSheets = google.sheets({version: "v4", auth: client})

    const spreadsheetId = "17rYKKJxcLBdq7OMYba_jD1znaGEKKQtOK8dXzfNdlgM";

    const metaData = await googleSheets.spreadsheets.get({
        auth,
        spreadsheetId,
    });

    const getRows = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: "Sheet1",
    });

    googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: "Sheet1!A:B",
        valueInputOption: "USER_ENTERED",
        resource: {
            values: [
                [Vname, Vscore]
            ],
        },
    });
});

app.get("/ARDS", (req, res) => {
    const audioFiles = [
        '/Audio/audio1.mp3',
        '/Audio/audio2.mp3',
        '/Audio/audio3.mp3',
        '/Audio/audio4.mp3',
        '/Audio/audio5.mp3',
        '/Audio/audio6.mp3',
        '/Audio/audio7.mp3',
        '/Audio/audio8.mp3',
        '/Audio/audio9.mp3'
    ];
    res.render("ARDS_EJS", { audioFiles });
});

app.post("/ARDS", async (req, res) => {
    const Ascore = req.body.request;
    const Aname = req.body.name;

    const auth = new google.auth.GoogleAuth({
        keyFile: "Credentials.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets",
    });

    const client = await auth.getClient();

    const googleSheets = google.sheets({version: "v4", auth: client})

    const spreadsheetId = "17rYKKJxcLBdq7OMYba_jD1znaGEKKQtOK8dXzfNdlgM";

    const metaData = await googleSheets.spreadsheets.get({
        auth,
        spreadsheetId,
    });

    const getRows = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: "Sheet1",
    });

    googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: "Sheet1!D:E",
        valueInputOption: "USER_ENTERED",
        resource: {
            values: [
                [Aname, Ascore]
            ],
        },
    });
});

app.get("/CB", (req, res) => {
    res.render("CB_EJS");
});

app.post("/CB", async (req, res) => {
    const Cscore = req.body.request;
    const Cname = req.body.name;

    const auth = new google.auth.GoogleAuth({
        keyFile: "Credentials.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets",
    });

    const client = await auth.getClient();

    const googleSheets = google.sheets({version: "v4", auth: client})

    const spreadsheetId = "17rYKKJxcLBdq7OMYba_jD1znaGEKKQtOK8dXzfNdlgM";

    const metaData = await googleSheets.spreadsheets.get({
        auth,
        spreadsheetId,
    });

    const getRows = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: "Sheet1",
    });

    googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: "Sheet1!G:H",
        valueInputOption: "USER_ENTERED",
        resource: {
            values: [
                [Cname, Cscore]
            ],
        },
    });
});

app.listen(1337, (req, res) => console.log("running on 1337"));