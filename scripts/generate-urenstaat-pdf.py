"""Build the public, printable A4 timesheet. Requires reportlab."""
from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4

root = Path(__file__).resolve().parents[1]
destination = root / 'public/downloads/urenstaat-sjabloon.pdf'
destination.parent.mkdir(parents=True, exist_ok=True)
c = canvas.Canvas(str(destination), pagesize=A4)
c.setTitle('Urenstaat - gratis printbaar sjabloon')
c.setAuthor('Uurwerk')
w, h = A4
c.setFillColor(HexColor('#1c2b21'))
c.rect(0, h - 104, w, 104, fill=1, stroke=0)
c.setFillColor(HexColor('#ffffff'))
c.setFont('Helvetica-Bold', 26)
c.drawString(38, h - 52, 'Urenstaat')
c.setFont('Helvetica', 11)
c.drawString(38, h - 76, 'Naam, werkzaamheden en gewerkte uren per periode')
c.setFillColor(HexColor('#1e2921'))
for y, label in [(h-138, 'Opdrachtnemer'), (h-174, 'Opdrachtgever'), (h-210, 'Project'), (h-246, 'Periode van / t/m')]:
    c.setFont('Helvetica-Bold', 10)
    c.drawString(38, y, label)
    c.setStrokeColor(HexColor('#aab7ad'))
    c.line(145, y-2, w-38, y-2)
xs = [38, 104, 333, 382, 453, w-38]
top = h-280
c.setFillColor(HexColor('#e2ebe5'))
c.rect(38, top-30, w-76, 30, fill=1, stroke=0)
c.setFillColor(HexColor('#1e2921'))
c.setFont('Helvetica-Bold', 9)
for x, title in zip(xs, ['Datum', 'Werkzaamheden', 'Uren', 'Tarief EUR', 'Bedrag EUR']):
    c.drawString(x+6, top-19, title)
c.setStrokeColor(HexColor('#d2dbd4'))
for row in range(11):
    y = top-30-row*30
    c.line(38, y, w-38, y)
for x in xs: c.line(x, top-30, x, top-330)
c.setFont('Helvetica-Bold', 10)
c.drawString(38, top-354, 'Totaal uren: __________________')
c.drawString(300, top-354, 'Totaal EUR: __________________')
c.setFont('Helvetica', 9)
c.drawString(38, 128, 'Noteer gewerkte uren na aftrek van pauzes. 1 uur 30 minuten = 1,50 uur.')
c.drawString(38, 112, 'Bedragen exclusief btw. Dit overzicht specificeert je uren en is geen factuur.')
c.drawString(38, 96, 'Gebruik een extra exemplaar als je meer regels nodig hebt.')
c.setStrokeColor(HexColor('#d2dbd4'))
c.line(38, 68, w-38, 68)
c.setFillColor(HexColor('#537565'))
c.drawString(38, 49, 'Uurwerk | urenregistreren.com/urenstaat-maken/')
c.linkURL('https://urenregistreren.com/urenstaat-maken/', (38, 40, 360, 62))
c.save()
print(destination)
