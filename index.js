const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const ExcelJS = require('exceljs');
const cron = require('node-cron');
const fs = require('fs');

// Inicializa o cliente WhatsApp
const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');

    // Agenda a execução a cada hora
    cron.schedule('0 * * * *', () => {
        console.log('Running scheduled task');
        processExcel();
    });
});

client.initialize();

// Função para processar a planilha Excel
async function processExcel() {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile('messages.xlsx');
    const worksheet = workbook.getWorksheet(1);

    // Ler a planilha e enviar mensagens
    let lastRowIndex = getLastProcessedRow();

    worksheet.eachRow({ includeEmpty: false }, (row, rowNumber) => {
        if(rowNumber > lastRowIndex) {
            const number = row.getCell(1).value;  // Número do destinatário
            const message = row.getCell(2).value; // Mensagem a ser enviada

            client.sendMessage(`${number}@c.us`, message)
                .then(response => {
                    console.log('Message sent to', number);
                    setLastProcessedRow(rowNumber);
                })
                .catch(err => {
                    console.error('Error sending message to', number, err);
                });
        }
    });
}

// Funções para salvar e carregar o índice da última linha processada
const LAST_ROW_FILE = 'lastRow.txt';

function getLastProcessedRow() {
    if (fs.existsSync(LAST_ROW_FILE)) {
        return parseInt(fs.readFileSync(LAST_ROW_FILE, 'utf8'), 10);
    }
    return 0;
}

function setLastProcessedRow(row) {
    fs.writeFileSync(LAST_ROW_FILE, row.toString(), 'utf8');
}
